"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordCore = void 0;
var constants_1 = require("../constants");
var json_path_1 = require("./json-path");
var emitter_1 = require("../util/emitter");
var utils = require("../util/utils");
var state_machine_1 = require("../util/state-machine");
var RecordCore = /** @class */ (function (_super) {
    __extends(RecordCore, _super);
    function RecordCore(name, services, options, recordServices, whenComplete) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.services = services;
        _this.options = options;
        _this.recordServices = recordServices;
        _this.whenComplete = whenComplete;
        _this.isReady = false;
        _this.hasProvider = false;
        _this.version = null;
        _this.references = new Set();
        _this.emitter = new emitter_1.Emitter();
        _this.data = Object.create(null);
        _this.responseTimeout = null;
        _this.discardTimeout = null;
        _this.deletedTimeout = null;
        _this.deleteResponse = null;
        _this.pendingWrites = [];
        _this.readyTimer = -1;
        _this.recordReadOnlyMode = _this.options.recordReadOnlyMode && _this.options.recordPrefixWriteWhitelist.every(function (prefix) { return !_this.name.startsWith(prefix); });
        _this.readyCallbacks = [];
        if (typeof name !== 'string' || name.length === 0) {
            throw new Error('invalid argument name');
        }
        _this.onConnectionLost = _this.onConnectionLost.bind(_this);
        _this.onConnectionReestablished = _this.onConnectionReestablished.bind(_this);
        _this.stateMachine = new state_machine_1.StateMachine(_this.services.logger, {
            init: "LOADING_OFFLINE" /* LOADING_OFFLINE */,
            context: _this,
            onStateChanged: _this.onStateChanged,
            transitions: recordStateTransitions
        });
        _this.recordServices.dirtyService.whenLoaded(_this, _this.onDirtyServiceLoaded);
        return _this;
    }
    Object.defineProperty(RecordCore.prototype, "recordState", {
        get: function () {
            return this.stateMachine.state;
        },
        enumerable: false,
        configurable: true
    });
    RecordCore.prototype.addReference = function (ref) {
        if (this.references.size === 0 && this.isReady) {
            this.services.timeoutRegistry.clear(this.discardTimeout);
            this.services.timerRegistry.remove(this.readyTimer);
            this.readyTimer = -1;
            this.stateMachine.transition(constants_1.RECORD_ACTION.SUBSCRIBE);
        }
        this.references.add(ref);
    };
    /**
    * Removes all change listeners and notifies the server that the client is
    * no longer interested in updates for this record
    */
    RecordCore.prototype.removeReference = function (ref) {
        var _this = this;
        if (this.checkDestroyed('discard')) {
            return;
        }
        this.whenReadyInternal(ref, function () {
            _this.references.delete(ref);
            if (_this.references.size === 0 && _this.readyTimer === -1) {
                _this.readyTimer = _this.services.timerRegistry.add({
                    duration: _this.options.recordDiscardTimeout,
                    callback: _this.stateMachine.transition,
                    context: _this.stateMachine,
                    data: "UNSUBSCRIBE_FOR_REAL" /* UNSUBSCRIBE_FOR_REAL */
                });
                _this.stateMachine.transition(constants_1.RECORD_ACTION.UNSUBSCRIBE);
            }
        });
    };
    RecordCore.prototype.onDirtyServiceLoaded = function () {
        var _this = this;
        this.services.storage.get(this.name, function (recordName, version, data) {
            _this.services.connection.onReestablished(_this.onConnectionReestablished);
            _this.services.connection.onLost(_this.onConnectionLost);
            if (!_this.services.connection.isConnected) {
                if (version === -1) {
                    if (_this.recordReadOnlyMode) {
                        return;
                    }
                    _this.version = _this.options.initialRecordVersion;
                    _this.data = Object.create(null);
                    // We do this sync in order to avoid the possibility of a race condition
                    // where connection is established while we are saving. We could introduce
                    // another transition but its probably overkill since we only set this
                    // in order to allow the possibility of this record being retrieved in the
                    // future to know its been created
                    _this.recordServices.dirtyService.setDirty(_this.name, true);
                    _this.services.storage.set(_this.name, _this.version, _this.data, function (error) { });
                }
                else {
                    _this.version = version;
                    _this.data = data;
                }
                _this.stateMachine.transition("LOADED" /* LOADED */);
                return;
            }
            if (version === -1 && !_this.recordServices.dirtyService.isDirty(_this.name)) {
                /**
                 * Record has never been created before
                 */
                _this.stateMachine.transition(constants_1.RECORD_ACTION.SUBSCRIBECREATEANDREAD);
            }
            else {
                _this.version = version;
                _this.data = data;
                _this.stateMachine.transition("RESUBSCRIBE" /* RESUBSCRIBE */);
            }
        });
    };
    RecordCore.prototype.onStateChanged = function (newState, oldState) {
        this.emitter.emit(constants_1.EVENT.RECORD_STATE_CHANGED, newState);
    };
    RecordCore.prototype.whenReady = function (context, callback) {
        var _this = this;
        if (callback) {
            this.whenReadyInternal(context, function (realContext) {
                callback(realContext);
            });
            return;
        }
        return new Promise(function (resolve) { return _this.whenReadyInternal(context, function () { return resolve(context); }); });
    };
    /**
   */
    RecordCore.prototype.whenReadyInternal = function (context, callback) {
        if (this.isReady === true) {
            callback(context);
            return;
        }
        this.readyCallbacks.push({ callback: callback, context: context });
    };
    /**
     * Sets the value of either the entire dataset
     * or of a specific path within the record
     * and submits the changes to the server
     *
     * If the new data is equal to the current data, nothing will happen
     *
     * @param {[String|Object]} pathOrData Either a JSON path when called with
     *                                     two arguments or the data itself
     * @param {Object} data     The data that should be stored in the record
     */
    RecordCore.prototype.set = function (_a) {
        var _this = this;
        var path = _a.path, data = _a.data, callback = _a.callback;
        if (!path && (data === null || typeof data !== 'object')) {
            throw new Error('invalid arguments, scalar values cannot be set without path');
        }
        if (this.checkDestroyed('set')) {
            return;
        }
        if (this.recordReadOnlyMode) {
            this.services.logger.error({ topic: constants_1.TOPIC.RECORD }, constants_1.EVENT.RECORD_READ_ONLY_MODE, 'Attempting to set data when in readonly mode, ignoring');
            return;
        }
        if (this.isReady === false) {
            this.pendingWrites.push({ path: path, data: data, callback: callback });
            return;
        }
        var oldValue = this.data;
        var newValue = (0, json_path_1.setValue)(oldValue, path || null, data);
        if (utils.deepEquals(oldValue, newValue)) {
            if (callback) {
                this.services.timerRegistry.requestIdleCallback(function () { return callback(null, _this.name); });
            }
            return;
        }
        this.applyChange(newValue);
        if (this.services.connection.isConnected) {
            this.sendUpdate(path, data, callback);
        }
        else {
            if (callback) {
                callback(constants_1.EVENT.CLIENT_OFFLINE, this.name);
            }
            this.saveUpdate();
        }
    };
    /**
     * Wrapper function around the record.set that returns a promise
     * if no callback is supplied.
     * @returns {Promise} if a callback is omitted a Promise is returned with the result of the write
     */
    RecordCore.prototype.setWithAck = function (args) {
        var _this = this;
        if (args.callback) {
            this.set(args);
            return;
        }
        return new Promise(function (resolve, reject) {
            args.callback = function (error) { return error === null ? resolve() : reject(error); };
            _this.set(args);
        });
    };
    /**
   * Returns a copy of either the entire dataset of the record
   * or - if called with a path - the value of that path within
   * the record's dataset.
   *
   * Returning a copy rather than the actual value helps to prevent
   * the record getting out of sync due to unintentional changes to
   * its data
   */
    RecordCore.prototype.get = function (path) {
        return (0, json_path_1.get)(this.data, path || null, this.options.recordDeepCopy);
    };
    /**
   * Subscribes to changes to the records dataset.
   *
   * Callback is the only mandatory argument.
   *
   * When called with a path, it will only subscribe to updates
   * to that path, rather than the entire record
   *
   * If called with true for triggerNow, the callback will
   * be called immediatly with the current value
   */
    RecordCore.prototype.subscribe = function (args, context) {
        var _this = this;
        if (args.path !== undefined && (typeof args.path !== 'string' || args.path.length === 0)) {
            throw new Error('invalid argument path');
        }
        if (typeof args.callback !== 'function') {
            throw new Error('invalid argument callback');
        }
        if (this.checkDestroyed('subscribe')) {
            return;
        }
        if (args.triggerNow) {
            this.whenReadyInternal(null, function () {
                _this.emitter.on(args.path || '', args.callback, context);
                args.callback(_this.get(args.path));
            });
        }
        else {
            this.emitter.on(args.path || '', args.callback, context);
        }
    };
    /**
     * Removes a subscription that was previously made using record.subscribe()
     *
     * Can be called with a path to remove the callback for this specific
     * path or only with a callback which removes it from the generic subscriptions
     *
     * Please Note: unsubscribe is a purely client side operation. If the app is no longer
     * interested in receiving updates for this record from the server it needs to call
     * discard instead
     *
     * @param   {String}           path  A JSON path
     * @param   {Function}         callback     The callback method. Please note, if a bound
     *                                          method was passed to subscribe, the same method
     *                                          must be passed to unsubscribe as well.
     */
    RecordCore.prototype.unsubscribe = function (args, context) {
        if (args.path !== undefined && (typeof args.path !== 'string' || args.path.length === 0)) {
            throw new Error('invalid argument path');
        }
        if (args.callback !== undefined && typeof args.callback !== 'function') {
            throw new Error('invalid argument callback');
        }
        if (this.checkDestroyed('unsubscribe')) {
            return;
        }
        this.emitter.off(args.path || '', args.callback, context);
    };
    /**
     * Deletes the record on the server.
     */
    RecordCore.prototype.delete = function (callback) {
        var _this = this;
        if (!this.services.connection.isConnected) {
            // this.services.logger.warn({ topic: TOPIC.RECORD }, RECORD_ACTION.DELETE, 'Deleting while offline is not supported')
            if (callback) {
                this.services.timerRegistry.requestIdleCallback(function () {
                    callback('Deleting while offline is not supported');
                });
                return;
            }
            return Promise.reject('Deleting while offline is not supported');
        }
        if (this.checkDestroyed('delete')) {
            return;
        }
        this.stateMachine.transition(constants_1.RECORD_ACTION.DELETE);
        if (callback && typeof callback === 'function') {
            this.deleteResponse = { callback: callback };
            this.sendDelete();
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.deleteResponse = { resolve: resolve, reject: reject };
                _this.sendDelete();
            });
        }
    };
    /**
     * Set a merge strategy to resolve any merge conflicts that may occur due
     * to offline work or write conflicts. The function will be called with the
     * local record, the remote version/data and a callback to call once the merge has
     * completed or if an error occurs ( which leaves it in an inconsistent state until
     * the next update merge attempt ).
     */
    RecordCore.prototype.setMergeStrategy = function (mergeStrategy) {
        this.recordServices.mergeStrategy.setMergeStrategyByName(this.name, mergeStrategy);
    };
    RecordCore.prototype.saveRecordToOffline = function (callback) {
        if (callback === void 0) { callback = function () { }; }
        this.services.storage.set(this.name, this.version, this.data, callback);
    };
    /**
     * Transition States
     */
    RecordCore.prototype.onSubscribing = function () {
        this.recordServices.readRegistry.register(this.name, this, this.handleReadResponse);
        this.responseTimeout = this.services.timeoutRegistry.add({
            message: {
                topic: constants_1.TOPIC.RECORD,
                action: constants_1.RECORD_ACTION.READ_RESPONSE,
                name: this.name
            }
        });
        if (this.recordReadOnlyMode) {
            this.recordServices.bulkSubscriptionService[constants_1.RECORD_ACTION.SUBSCRIBEANDREAD].subscribe(this.name);
        }
        else {
            this.recordServices.bulkSubscriptionService[constants_1.RECORD_ACTION.SUBSCRIBECREATEANDREAD].subscribe(this.name);
        }
    };
    RecordCore.prototype.onResubscribing = function () {
        this.services.timerRegistry.remove(this.readyTimer);
        this.recordServices.headRegistry.register(this.name, this, this.handleHeadResponse);
        this.responseTimeout = this.services.timeoutRegistry.add({
            message: {
                topic: constants_1.TOPIC.RECORD,
                action: constants_1.RECORD_ACTION.HEAD,
                name: this.name
            }
        });
        this.recordServices.bulkSubscriptionService[constants_1.RECORD_ACTION.SUBSCRIBEANDHEAD].subscribe(this.name);
    };
    RecordCore.prototype.onReady = function () {
        this.services.timeoutRegistry.clear(this.responseTimeout);
        this.applyPendingWrites();
        this.isReady = true;
        // We temporarily reset the data in order to allow the change callback
        // to trigger all the subscriptions on the first response.
        this.applyChange(this.data, true, false);
        this.readyCallbacks.forEach(function (_a) {
            var context = _a.context, callback = _a.callback;
            callback.call(context, context);
        });
        this.readyCallbacks = [];
    };
    RecordCore.prototype.applyPendingWrites = function () {
        var _this = this;
        var writeCallbacks = [];
        var oldData = this.data;
        var newData = oldData;
        for (var i = 0; i < this.pendingWrites.length; i++) {
            var _a = this.pendingWrites[i], callback = _a.callback, path = _a.path, data = _a.data;
            if (callback) {
                writeCallbacks.push(callback);
            }
            newData = (0, json_path_1.setValue)(newData, path || null, data);
        }
        this.pendingWrites = [];
        this.applyChange(newData);
        var runFns;
        if (writeCallbacks.length !== 0) {
            runFns = function (err) {
                for (var i = 0; i < writeCallbacks.length; i++) {
                    writeCallbacks[i](err, _this.name);
                }
            };
        }
        if (utils.deepEquals(oldData, newData)) {
            if (runFns) {
                runFns(null);
            }
            return;
        }
        if (this.services.connection.isConnected) {
            this.sendUpdate(null, newData, runFns);
        }
        else {
            if (runFns) {
                runFns(constants_1.EVENT.CLIENT_OFFLINE);
            }
            this.saveUpdate();
        }
    };
    RecordCore.prototype.onUnsubscribed = function () {
        var _this = this;
        if (this.services.connection.isConnected) {
            // TODO: Remove the discard concept from an individual record into bulk
            // this.recordServices.bulkSubscriptionService[RA.SUBSCRIBEANDHEAD].unsubscribe(this.name)
            var message = {
                topic: constants_1.TOPIC.RECORD,
                action: constants_1.RECORD_ACTION.UNSUBSCRIBE,
                names: [this.name],
                correlationId: this.name
            };
            this.discardTimeout = this.services.timeoutRegistry.add({ message: message });
            this.services.connection.sendMessage(message);
        }
        this.emit(constants_1.EVENT.RECORD_DISCARDED);
        this.saveRecordToOffline(function () { return _this.destroy(); });
    };
    RecordCore.prototype.onDeleted = function () {
        this.services.storage.delete(this.name, function () { });
        this.emit(constants_1.EVENT.RECORD_DELETED);
        this.destroy();
    };
    RecordCore.prototype.handle = function (message) {
        if (message.action === constants_1.RECORD_ACTION.PATCH || message.action === constants_1.RECORD_ACTION.UPDATE || message.action === constants_1.RECORD_ACTION.ERASE) {
            if (this.stateMachine.state === "MERGING" /* MERGING */) {
                // The scenario this covers is when a read is requested because the head doesn't match
                // but an update comes in because we subscribed. In that scenario we just ignore the update
                // and wait for the read response. Hopefully the messages don't cross on the wire in which case
                // it might result in another merge conflict.
                return;
            }
            this.applyUpdate(message);
            return;
        }
        if (message.action === constants_1.RECORD_ACTION.DELETE_SUCCESS) {
            this.services.timeoutRegistry.clear(this.deletedTimeout);
            this.stateMachine.transition(constants_1.RECORD_ACTION.DELETE_SUCCESS);
            if (this.deleteResponse.callback) {
                this.deleteResponse.callback(null);
            }
            else if (this.deleteResponse.resolve) {
                this.deleteResponse.resolve();
            }
            return;
        }
        if (message.action === constants_1.RECORD_ACTION.DELETED) {
            this.stateMachine.transition(constants_1.RECORD_ACTION.DELETED);
            return;
        }
        if (message.action === constants_1.RECORD_ACTION.VERSION_EXISTS) {
            this.recoverRecordFromMessage(message);
            return;
        }
        if (message.action === constants_1.RECORD_ACTION.MESSAGE_DENIED ||
            message.action === constants_1.RECORD_ACTION.MESSAGE_PERMISSION_ERROR ||
            message.action === constants_1.RECORD_ACTION.RECORD_UPDATE_ERROR) {
            if (message.originalAction === constants_1.RECORD_ACTION.SUBSCRIBECREATEANDREAD ||
                message.originalAction === constants_1.RECORD_ACTION.SUBSCRIBEANDHEAD ||
                message.originalAction === constants_1.RECORD_ACTION.SUBSCRIBEANDREAD) {
                var subscribeMsg = __assign(__assign({}, message), { originalAction: constants_1.RECORD_ACTION.SUBSCRIBE });
                var actionMsg = __assign(__assign({}, message), { originalAction: message.originalAction === constants_1.RECORD_ACTION.SUBSCRIBECREATEANDREAD ? constants_1.RECORD_ACTION.READ_RESPONSE : constants_1.RECORD_ACTION.HEAD_RESPONSE });
                this.services.timeoutRegistry.remove(subscribeMsg); // TODO: This doesn't contain correlationIds
                this.services.timeoutRegistry.remove(actionMsg);
                this.services.logger.error(message);
            }
            // handle message denied on record set with ack
            if (message.isWriteAck) {
                this.recordServices.writeAckService.recieve(message);
                return;
            }
            this.emit(constants_1.EVENT.RECORD_ERROR, constants_1.RECORD_ACTION[message.action], constants_1.RECORD_ACTION[message.originalAction]);
            if (message.originalAction === constants_1.RECORD_ACTION.DELETE) {
                if (this.deleteResponse.callback) {
                    this.deleteResponse.callback(constants_1.RECORD_ACTION[constants_1.RECORD_ACTION.MESSAGE_DENIED]);
                }
                else if (this.deleteResponse.reject) {
                    this.deleteResponse.reject(constants_1.RECORD_ACTION[constants_1.RECORD_ACTION.MESSAGE_DENIED]);
                }
            }
            return;
        }
        if (message.action === constants_1.RECORD_ACTION.SUBSCRIPTION_HAS_PROVIDER ||
            message.action === constants_1.RECORD_ACTION.SUBSCRIPTION_HAS_NO_PROVIDER) {
            this.hasProvider = message.action === constants_1.RECORD_ACTION.SUBSCRIPTION_HAS_PROVIDER;
            this.emit(constants_1.EVENT.RECORD_HAS_PROVIDER_CHANGED, this.hasProvider);
            return;
        }
        if (message.action === constants_1.RECORD_ACTION.CACHE_RETRIEVAL_TIMEOUT || message.action === constants_1.RECORD_ACTION.STORAGE_RETRIEVAL_TIMEOUT) {
            this.services.logger.error(message);
            return;
        }
    };
    RecordCore.prototype.handleReadResponse = function (message) {
        if (this.stateMachine.state === "MERGING" /* MERGING */) {
            this.recoverRecordFromMessage(message);
            this.recordServices.dirtyService.setDirty(this.name, false);
            return;
        }
        this.version = message.version;
        this.data = message.parsedData;
        this.stateMachine.transition(constants_1.RECORD_ACTION.READ_RESPONSE);
    };
    RecordCore.prototype.handleHeadResponse = function (message) {
        var remoteVersion = message.version;
        if (this.recordServices.dirtyService.isDirty(this.name)) {
            if (remoteVersion === -1 && this.version === this.options.initialRecordVersion) {
                /**
                 * Record created while offline
                 */
                this.stateMachine.transition("SUBSCRIBED" /* SUBSCRIBED */);
                this.sendCreateUpdate(this.data);
            }
            else if (this.version === remoteVersion + 1) {
                /**
                 * record updated by client while offline
                */
                this.stateMachine.transition("RESUBSCRIBED" /* RESUBSCRIBED */);
                this.sendUpdate(null, this.data);
            }
            else {
                /**
                 * record updated by server when offline, get latest data
                 */
                this.stateMachine.transition("INVALID_VERSION" /* INVALID_VERSION */);
                if (remoteVersion !== -1) {
                    /**
                     * A read with version -1 would result in a read error
                     */
                    this.sendRead();
                    this.recordServices.readRegistry.register(this.name, this, this.handleReadResponse);
                }
                else {
                    this.recoverRecordDeletedRemotely();
                }
            }
        }
        else {
            if (this.version === remoteVersion) {
                this.stateMachine.transition("RESUBSCRIBED" /* RESUBSCRIBED */);
            }
            else {
                this.stateMachine.transition("INVALID_VERSION" /* INVALID_VERSION */);
                if (remoteVersion < this.version) {
                    /**
                     *  deleted and created again remotely, up to merge conflict I guess
                     */
                    this.recoverRecordDeletedRemotely();
                }
                else {
                    this.sendRead();
                    this.recordServices.readRegistry.register(this.name, this, this.handleReadResponse);
                }
            }
        }
    };
    RecordCore.prototype.sendRead = function () {
        this.services.connection.sendMessage({
            topic: constants_1.TOPIC.RECORD,
            action: constants_1.RECORD_ACTION.READ,
            name: this.name
        });
    };
    RecordCore.prototype.saveUpdate = function () {
        if (!this.recordServices.dirtyService.isDirty(this.name)) {
            this.version++;
            this.recordServices.dirtyService.setDirty(this.name, true);
        }
        this.saveRecordToOffline();
    };
    RecordCore.prototype.sendUpdate = function (path, data, callback) {
        if (path === void 0) { path = null; }
        if (this.recordReadOnlyMode) {
            this.services.logger.error({ topic: constants_1.TOPIC.RECORD }, constants_1.EVENT.RECORD_READ_ONLY_MODE, 'Attempting to send updated data, ignoring');
            return;
        }
        if (this.recordServices.dirtyService.isDirty(this.name)) {
            this.recordServices.dirtyService.setDirty(this.name, false);
        }
        else {
            this.version++;
        }
        var message = {
            topic: constants_1.TOPIC.RECORD,
            version: this.version,
            name: this.name
        };
        if (path) {
            if (data === undefined) {
                Object.assign(message, { action: constants_1.RECORD_ACTION.ERASE, path: path });
            }
            else {
                Object.assign(message, { action: constants_1.RECORD_ACTION.PATCH, path: path, parsedData: data });
            }
        }
        else {
            Object.assign(message, { action: constants_1.RECORD_ACTION.UPDATE, parsedData: data });
        }
        if (callback) {
            this.recordServices.writeAckService.send(message, callback);
        }
        else {
            this.services.connection.sendMessage(message);
        }
    };
    RecordCore.prototype.sendCreateUpdate = function (data) {
        this.services.connection.sendMessage({
            name: this.name,
            topic: constants_1.TOPIC.RECORD,
            action: constants_1.RECORD_ACTION.CREATEANDUPDATE,
            version: this.options.initialRecordVersion,
            parsedData: data
        });
        this.recordServices.dirtyService.setDirty(this.name, false);
    };
    /**
     * Applies incoming updates and patches to the record's dataset
     */
    RecordCore.prototype.applyUpdate = function (message) {
        var version = message.version;
        var data = message.parsedData;
        if (this.version === null) {
            this.version = version;
        }
        else if (this.version + 1 !== version) {
            this.stateMachine.transition("INVALID_VERSION" /* INVALID_VERSION */);
            if (message.action === constants_1.RECORD_ACTION.PATCH) {
                /**
                * Request a snapshot so that a merge can be done with the read reply which contains
                * the full state of the record
                **/
                this.sendRead();
                this.recordServices.readRegistry.register(this.name, this, this.handleReadResponse);
            }
            else {
                this.recoverRecordFromMessage(message);
            }
            return;
        }
        this.version = version;
        var newData;
        if (message.action === constants_1.RECORD_ACTION.PATCH) {
            newData = (0, json_path_1.setValue)(this.data, message.path, data);
        }
        else if (message.action === constants_1.RECORD_ACTION.ERASE) {
            newData = (0, json_path_1.setValue)(this.data, message.path, undefined);
        }
        else {
            newData = data;
        }
        this.applyChange(newData);
    };
    /**
     * Compares the new values for every path with the previously stored ones and
     * updates the subscribers if the value has changed
     */
    RecordCore.prototype.applyChange = function (newData, force, save) {
        if (force === void 0) { force = false; }
        if (save === void 0) { save = true; }
        if (this.stateMachine.inEndState) {
            return;
        }
        var oldData = this.data;
        this.data = newData;
        if (this.options.saveUpdatesOffline && save) {
            this.saveRecordToOffline();
        }
        var paths = this.emitter.eventNames();
        for (var i = 0; i < paths.length; i++) {
            var newValue = (0, json_path_1.get)(newData, paths[i], false);
            var oldValue = (0, json_path_1.get)(oldData, paths[i], false);
            if (!utils.deepEquals(newValue, oldValue) || (force && newValue)) {
                this.emitter.emit(paths[i], this.get(paths[i]));
            }
        }
    };
    /**
     */
    RecordCore.prototype.sendDelete = function () {
        var _this = this;
        this.whenReadyInternal(null, function () {
            _this.services.storage.delete(_this.name, function () {
                if (_this.services.connection.isConnected) {
                    var message = {
                        topic: constants_1.TOPIC.RECORD,
                        action: constants_1.RECORD_ACTION.DELETE,
                        name: _this.name
                    };
                    _this.deletedTimeout = _this.services.timeoutRegistry.add({
                        message: message,
                        event: constants_1.EVENT.RECORD_DELETE_TIMEOUT,
                        duration: _this.options.recordDeleteTimeout
                    });
                    _this.services.connection.sendMessage(message);
                }
                else {
                    _this.stateMachine.transition(constants_1.RECORD_ACTION.DELETE_SUCCESS);
                }
            });
        });
    };
    RecordCore.prototype.recoverRecordFromMessage = function (message) {
        this.recordServices.mergeStrategy.merge(message, this.version, this.get(), this.onRecordRecovered, this);
    };
    RecordCore.prototype.recoverRecordDeletedRemotely = function () {
        this.recordServices.mergeStrategy.merge({
            name: this.name,
            version: -1,
            parsedData: null
        }, this.version, this.get(), this.onRecordRecovered, this);
    };
    /**
   * Callback once the record merge has completed. If successful it will set the
   * record state, else emit and error and the record will remain in an
   * inconsistent state until the next update.
   */
    RecordCore.prototype.onRecordRecovered = function (error, recordMessage, mergedData) {
        var _this = this;
        var remoteVersion = recordMessage.version, remoteData = recordMessage.parsedData;
        if (error) {
            this.services.logger.error({ topic: constants_1.TOPIC.RECORD }, constants_1.EVENT.RECORD_VERSION_EXISTS);
            if (recordMessage.correlationId) {
                this.recordServices.writeAckService.recieve(__assign(__assign({}, recordMessage), { reason: error }));
            }
            return;
        }
        if (mergedData === null) {
            if (remoteVersion === -1) {
                this.services.storage.delete(this.name, function () { });
                this.stateMachine.transition(constants_1.RECORD_ACTION.DELETED);
            }
            else {
                this.stateMachine.transition(constants_1.RECORD_ACTION.DELETE);
            }
            return;
        }
        this.version = remoteVersion;
        var oldValue = this.data;
        if (utils.deepEquals(oldValue, remoteData)) {
            if (this.stateMachine.state === "MERGING" /* MERGING */) {
                this.stateMachine.transition("MERGED" /* MERGED */);
            }
            return;
        }
        if (this.stateMachine.state !== "MERGING" /* MERGING */) {
            this.services.logger.warn({
                topic: constants_1.TOPIC.RECORD,
                action: constants_1.RECORD_ACTION.VERSION_EXISTS
            });
            return;
        }
        var newValue = mergedData;
        this.stateMachine.transition("MERGED" /* MERGED */);
        var runFns;
        var writeCallbacks = this.pendingWrites
            .map(function (_a) {
            var callback = _a.callback;
            return callback;
        })
            .filter(function (callback) { return callback !== undefined; });
        if (writeCallbacks.length !== 0) {
            runFns = function (err) {
                writeCallbacks.forEach(function (callback) { return callback(err, _this.name); });
            };
        }
        this.pendingWrites = [];
        if (utils.deepEquals(mergedData, remoteData)) {
            this.applyChange(mergedData);
            if (runFns) {
                runFns(null);
            }
            return;
        }
        if (this.recordReadOnlyMode) {
            this.services.logger.error({ topic: constants_1.TOPIC.RECORD }, constants_1.EVENT.RECORD_READ_ONLY_MODE, 'Attempting to set data after merge when in readonly mode, ignoring');
            return;
        }
        this.applyChange(newValue);
        this.sendUpdate(null, this.data, runFns);
    };
    /**
   * A quick check that's carried out by most methods that interact with the record
   * to make sure it hasn't been destroyed yet - and to handle it gracefully if it has.
   */
    RecordCore.prototype.checkDestroyed = function (methodName) {
        if (this.stateMachine.inEndState) {
            this.services.logger.error({ topic: constants_1.TOPIC.RECORD }, constants_1.EVENT.RECORD_ALREADY_DESTROYED, { methodName: methodName });
            return true;
        }
        return false;
    };
    /**
     * Destroys the record and nulls all
     * its dependencies
     */
    RecordCore.prototype.destroy = function () {
        this.services.timerRegistry.remove(this.readyTimer);
        this.services.timeoutRegistry.clear(this.responseTimeout);
        this.services.timeoutRegistry.clear(this.deletedTimeout);
        this.services.timeoutRegistry.clear(this.discardTimeout);
        this.services.connection.removeOnReestablished(this.onConnectionReestablished);
        this.services.connection.removeOnLost(this.onConnectionLost);
        this.emitter.off();
        this.isReady = false;
        this.whenComplete(this.name);
    };
    RecordCore.prototype.onConnectionReestablished = function () {
        this.stateMachine.transition("RESUBSCRIBE" /* RESUBSCRIBE */);
    };
    RecordCore.prototype.onConnectionLost = function () {
        this.saveRecordToOffline();
    };
    RecordCore.prototype.getDebugId = function () {
        if (this.options.debug) {
            return utils.getUid();
        }
        return null;
    };
    return RecordCore;
}(emitter_1.Emitter));
exports.RecordCore = RecordCore;
var recordStateTransitions = [
    { name: constants_1.RECORD_ACTION.SUBSCRIBECREATEANDREAD, from: "LOADING_OFFLINE" /* LOADING_OFFLINE */, to: "SUBSCRIBING" /* SUBSCRIBING */, handler: RecordCore.prototype.onSubscribing },
    { name: "LOADED" /* LOADED */, from: "LOADING_OFFLINE" /* LOADING_OFFLINE */, to: "READY" /* READY */, handler: RecordCore.prototype.onReady },
    { name: constants_1.RECORD_ACTION.READ_RESPONSE, from: "SUBSCRIBING" /* SUBSCRIBING */, to: "READY" /* READY */, handler: RecordCore.prototype.onReady },
    { name: "SUBSCRIBED" /* SUBSCRIBED */, from: "RESUBSCRIBING" /* RESUBSCRIBING */, to: "READY" /* READY */, handler: RecordCore.prototype.onReady },
    { name: "RESUBSCRIBE" /* RESUBSCRIBE */, from: "LOADING_OFFLINE" /* LOADING_OFFLINE */, to: "RESUBSCRIBING" /* RESUBSCRIBING */, handler: RecordCore.prototype.onResubscribing },
    { name: "RESUBSCRIBE" /* RESUBSCRIBE */, from: "READY" /* READY */, to: "RESUBSCRIBING" /* RESUBSCRIBING */, handler: RecordCore.prototype.onResubscribing },
    { name: "RESUBSCRIBE" /* RESUBSCRIBE */, from: "RESUBSCRIBING" /* RESUBSCRIBING */, to: "RESUBSCRIBING" /* RESUBSCRIBING */, handler: RecordCore.prototype.onResubscribing },
    { name: "RESUBSCRIBE" /* RESUBSCRIBE */, from: "SUBSCRIBING" /* SUBSCRIBING */, to: "SUBSCRIBING" /* SUBSCRIBING */, handler: RecordCore.prototype.onSubscribing },
    { name: "RESUBSCRIBE" /* RESUBSCRIBE */, from: "UNSUBSCRIBING" /* UNSUBSCRIBING */, to: "UNSUBSCRIBING" /* UNSUBSCRIBING */ },
    { name: "RESUBSCRIBED" /* RESUBSCRIBED */, from: "RESUBSCRIBING" /* RESUBSCRIBING */, to: "READY" /* READY */, handler: RecordCore.prototype.onReady },
    { name: "INVALID_VERSION" /* INVALID_VERSION */, from: "RESUBSCRIBING" /* RESUBSCRIBING */, to: "MERGING" /* MERGING */ },
    { name: "MERGED" /* MERGED */, from: "MERGING" /* MERGING */, to: "READY" /* READY */, handler: RecordCore.prototype.onReady },
    { name: constants_1.RECORD_ACTION.DELETED, from: "MERGING" /* MERGING */, to: "DELETED" /* DELETED */, handler: RecordCore.prototype.onDeleted, isEndState: true },
    { name: constants_1.RECORD_ACTION.DELETE, from: "MERGING" /* MERGING */, to: "DELETING" /* DELETING */ },
    { name: constants_1.RECORD_ACTION.DELETE, from: "READY" /* READY */, to: "DELETING" /* DELETING */ },
    { name: constants_1.RECORD_ACTION.DELETED, from: "READY" /* READY */, to: "DELETED" /* DELETED */, handler: RecordCore.prototype.onDeleted, isEndState: true },
    { name: constants_1.RECORD_ACTION.DELETED, from: "UNSUBSCRIBE_FOR_REAL" /* UNSUBSCRIBE_FOR_REAL */, to: "DELETED" /* DELETED */, handler: RecordCore.prototype.onDeleted, isEndState: true },
    { name: constants_1.RECORD_ACTION.DELETED, from: "UNSUBSCRIBING" /* UNSUBSCRIBING */, to: "DELETED" /* DELETED */, handler: RecordCore.prototype.onDeleted, isEndState: true },
    { name: constants_1.RECORD_ACTION.DELETE_SUCCESS, from: "DELETING" /* DELETING */, to: "DELETED" /* DELETED */, handler: RecordCore.prototype.onDeleted, isEndState: true },
    { name: constants_1.RECORD_ACTION.UNSUBSCRIBE, from: "READY" /* READY */, to: "UNSUBSCRIBING" /* UNSUBSCRIBING */ },
    { name: constants_1.RECORD_ACTION.SUBSCRIBE, from: "UNSUBSCRIBING" /* UNSUBSCRIBING */, to: "READY" /* READY */ },
    { name: "UNSUBSCRIBE_FOR_REAL" /* UNSUBSCRIBE_FOR_REAL */, from: "UNSUBSCRIBING" /* UNSUBSCRIBING */, to: "UNSUBSCRIBED" /* UNSUBSCRIBED */, handler: RecordCore.prototype.onUnsubscribed, isEndState: true },
    { name: "INVALID_VERSION" /* INVALID_VERSION */, from: "READY" /* READY */, to: "MERGING" /* MERGING */ },
];

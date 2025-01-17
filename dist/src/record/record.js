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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Record = void 0;
var utils = require("../util/utils");
var constants_1 = require("../constants");
var emitter_1 = require("../util/emitter");
var Record = /** @class */ (function (_super) {
    __extends(Record, _super);
    function Record(record) {
        var _this = _super.call(this) || this;
        _this.record = record;
        _this.debugId = _this.record.getDebugId();
        _this.subscriptions = [];
        _this.record.on(constants_1.EVENT.RECORD_READY, _this.emit.bind(_this, constants_1.EVENT.RECORD_READY, _this), _this);
        _this.record.on(constants_1.EVENT.RECORD_DISCARDED, _this.emit.bind(_this, constants_1.EVENT.RECORD_DISCARDED), _this);
        _this.record.on(constants_1.EVENT.RECORD_DELETED, _this.emit.bind(_this, constants_1.EVENT.RECORD_DELETED), _this);
        _this.record.on(constants_1.EVENT.RECORD_ERROR, _this.emit.bind(_this, constants_1.EVENT.RECORD_ERROR), _this);
        _this.record.addReference(_this);
        return _this;
    }
    Object.defineProperty(Record.prototype, "name", {
        get: function () {
            return this.record.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Record.prototype, "isReady", {
        get: function () {
            return this.record.isReady;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Record.prototype, "version", {
        get: function () {
            return this.record.version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Record.prototype, "hasProvider", {
        get: function () {
            return this.record.hasProvider;
        },
        enumerable: false,
        configurable: true
    });
    Record.prototype.whenReady = function (callback) {
        if (callback) {
            this.record.whenReady(this, callback);
        }
        else {
            return this.record.whenReady(this);
        }
    };
    Record.prototype.get = function (path) {
        return this.record.get(path);
    };
    Record.prototype.set = function (dataOrPath, dataOrCallback, callback) {
        return this.record.set(utils.normalizeSetArguments(arguments));
    };
    Record.prototype.setWithAck = function (pathOrData, dataOrCallback, callback) {
        return this.record.setWithAck(utils.normalizeSetArguments(arguments));
    };
    /**
     * Deletes a path from the record. Equivalent to doing `record.set(path, undefined)`
     *
     * @param {String} path The path to be deleted
     */
    Record.prototype.erase = function (path) {
        if (!path) {
            throw new Error('unable to erase record data without path, consider using `delete`');
        }
        this.set(path, undefined);
    };
    Record.prototype.eraseWithAck = function (path, callback) {
        if (!path) {
            throw new Error('unable to erase record data without path, consider using `delete`');
        }
        if (callback) {
            this.setWithAck(path, undefined, callback);
        }
        else {
            return this.setWithAck(path, undefined);
        }
    };
    Record.prototype.subscribe = function (pathOrCallback, callbackOrTriggerNow, triggerNow) {
        var parameters = utils.normalizeArguments(arguments);
        this.subscriptions.push(parameters);
        this.record.subscribe(parameters, this);
    };
    Record.prototype.unsubscribe = function (pathOrCallback, callback) {
        var parameters = utils.normalizeArguments(arguments);
        this.subscriptions = this.subscriptions.filter(function (subscription) {
            if (!parameters.callback && (subscription.path === parameters.path))
                return false;
            if (parameters.callback && (subscription.path === parameters.path && subscription.callback === parameters.callback))
                return false;
            return true;
        });
        this.record.unsubscribe(parameters, this);
    };
    Record.prototype.discard = function () {
        for (var i = 0; i < this.subscriptions.length; i++) {
            this.record.unsubscribe(this.subscriptions[i], this);
        }
        this.record.removeReference(this);
        this.record.removeContext(this);
    };
    Record.prototype.delete = function (callback) {
        return this.record.delete(callback);
    };
    Record.prototype.setMergeStrategy = function (mergeStrategy) {
        this.record.setMergeStrategy(mergeStrategy);
    };
    return Record;
}(emitter_1.Emitter));
exports.Record = Record;

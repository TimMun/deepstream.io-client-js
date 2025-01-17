"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RPCHandler = void 0;
var constants_1 = require("../constants");
var rpc_1 = require("../rpc/rpc");
var rpc_response_1 = require("../rpc/rpc-response");
var utils_1 = require("../util/utils");
var bulk_subscription_service_1 = require("../util/bulk-subscription-service");
var RPCHandler = /** @class */ (function () {
    function RPCHandler(services, options) {
        this.services = services;
        this.options = options;
        this.rpcs = new Map();
        this.providers = new Map();
        this.limboQueue = [];
        this.bulkSubscription = new bulk_subscription_service_1.BulkSubscriptionService(this.services, options.subscriptionInterval, constants_1.TOPIC.RPC, constants_1.RPC_ACTION.PROVIDE, constants_1.RPC_ACTION.UNPROVIDE, this.onBulkSubscriptionSent.bind(this));
        this.services.connection.registerHandler(constants_1.TOPIC.RPC, this.handle.bind(this));
        this.services.connection.onReestablished(this.onConnectionReestablished.bind(this));
        this.services.connection.onExitLimbo(this.onExitLimbo.bind(this));
        this.services.connection.onLost(this.onConnectionLost.bind(this));
    }
    /**
     * Returns the names of all the RPCs provided
     */
    RPCHandler.prototype.providerNames = function () {
        return __spreadArray([], __read(this.providers.keys()), false);
    };
    /**
     * Registers a callback function as a RPC provider. If another connected client calls
     * client.rpc.make() the request will be routed to this method
     *
     * The callback will be invoked with two arguments:
     *     {Mixed} data The data passed to the client.rpc.make function
     *     {RpcResponse} rpcResponse An object with methods to response,
     *                               acknowledge or reject the request
     *
     * Only one callback can be registered for a RPC at a time
     *
     * Please note: Deepstream tries to deliver data in its original format.
     * Data passed to client.rpc.make as a String will arrive as a String,
     * numbers or implicitly JSON serialized objects will arrive in their
     * respective format as well
     */
    RPCHandler.prototype.provide = function (name, callback) {
        if (typeof name !== 'string' || name.length === 0) {
            throw new Error('invalid argument name');
        }
        if (this.providers.has(name)) {
            throw new Error("RPC ".concat(name, " already registered"));
        }
        if (typeof callback !== 'function') {
            throw new Error('invalid argument callback');
        }
        this.providers.set(name, callback);
        if (this.services.connection.isConnected) {
            this.bulkSubscription.subscribe(name);
        }
    };
    /**
     * Unregisters this client as a provider for a remote procedure call
     */
    RPCHandler.prototype.unprovide = function (name) {
        if (typeof name !== 'string' || name.length === 0) {
            throw new Error('invalid argument name');
        }
        if (!this.providers.has(name)) {
            this.services.logger.warn({
                topic: constants_1.TOPIC.RPC,
                action: constants_1.RPC_ACTION.NOT_PROVIDED,
                name: name
            });
            return;
        }
        this.providers.delete(name);
        if (this.services.connection.isConnected) {
            this.bulkSubscription.unsubscribe(name);
        }
    };
    RPCHandler.prototype.make = function (name, data, callback) {
        var _this = this;
        if (typeof name !== 'string' || name.length === 0) {
            throw new Error('invalid argument name');
        }
        if (callback && typeof callback !== 'function') {
            throw new Error('invalid argument callback');
        }
        var correlationId = (0, utils_1.getUid)();
        if (this.services.connection.isConnected) {
            if (callback) {
                this.rpcs.set(correlationId, new rpc_1.RPC(name, correlationId, data, callback, this.options, this.services));
                return;
            }
            return new Promise(function (resolve, reject) {
                _this.rpcs.set(correlationId, new rpc_1.RPC(name, correlationId, data, function (error, result) { return error ? reject(error) : resolve(result); }, _this.options, _this.services));
            });
        }
        else if (this.services.connection.isInLimbo) {
            if (callback) {
                this.limboQueue.push({ correlationId: correlationId, name: name, data: data, callback: callback });
            }
            else {
                return new Promise(function (resolve, reject) {
                    _this.limboQueue.push({ correlationId: correlationId, name: name, data: data, callback: function (error, result) { return error ? reject(error) : resolve(result); } });
                });
            }
        }
        else {
            if (callback) {
                callback(constants_1.EVENT.CLIENT_OFFLINE);
            }
            else {
                return Promise.reject(constants_1.EVENT.CLIENT_OFFLINE);
            }
        }
    };
    /**
     * Handles incoming rpc REQUEST messages. Instantiates a new response object
     * and invokes the provider callback or rejects the request if no rpc provider
     * is present (which shouldn't really happen, but might be the result of a race condition
     * if this client sends a unprovide message whilst an incoming request is already in flight)
     */
    RPCHandler.prototype.respondToRpc = function (message) {
        var provider = this.providers.get(message.name);
        if (provider) {
            provider(message.parsedData, new rpc_response_1.RPCResponse(message, this.options, this.services));
        }
        else {
            this.services.connection.sendMessage({
                topic: constants_1.TOPIC.RPC,
                action: constants_1.RPC_ACTION.REJECT,
                name: message.name,
                correlationId: message.correlationId
            });
        }
    };
    /**
     * Distributes incoming messages from the server
     * based on their action
     */
    RPCHandler.prototype.handle = function (message) {
        // RPC Requests
        if (message.action === constants_1.RPC_ACTION.REQUEST) {
            this.respondToRpc(message);
            return;
        }
        // RPC subscription Acks
        if (message.isAck) {
            this.services.timeoutRegistry.remove(message);
            return;
        }
        // handle auth/denied subscription errors
        if (message.action === constants_1.RPC_ACTION.MESSAGE_PERMISSION_ERROR || message.action === constants_1.RPC_ACTION.MESSAGE_DENIED) {
            if (message.originalAction === constants_1.RPC_ACTION.PROVIDE || message.originalAction === constants_1.RPC_ACTION.UNPROVIDE) {
                this.services.timeoutRegistry.remove(message);
                this.providers.delete(message.name);
                this.services.logger.error(message);
                return;
            }
            if (message.originalAction === constants_1.RPC_ACTION.REQUEST) {
                var invalidRPC = this.getRPC(message);
                if (invalidRPC) {
                    invalidRPC.error(constants_1.RPC_ACTION[message.action]);
                    this.rpcs.delete(message.correlationId);
                    return;
                }
            }
        }
        // RPC Responses
        var rpc = this.getRPC(message);
        if (rpc) {
            if (message.action === constants_1.RPC_ACTION.ACCEPT) {
                rpc.accept();
                return;
            }
            if (message.action === constants_1.RPC_ACTION.RESPONSE) {
                rpc.respond(message.parsedData);
            }
            else if (message.action === constants_1.RPC_ACTION.REQUEST_ERROR) {
                rpc.error(message.parsedData);
            }
            else if (message.action === constants_1.RPC_ACTION.RESPONSE_TIMEOUT ||
                message.action === constants_1.RPC_ACTION.ACCEPT_TIMEOUT ||
                message.action === constants_1.RPC_ACTION.NO_RPC_PROVIDER) {
                rpc.error(constants_1.RPC_ACTION[message.action]);
            }
            this.rpcs.delete(message.correlationId);
        }
    };
    RPCHandler.prototype.getRPC = function (message) {
        var rpc = this.rpcs.get(message.correlationId);
        if (rpc === undefined) {
            this.services.logger.error(message, constants_1.EVENT.UNKNOWN_CORRELATION_ID);
        }
        return rpc;
    };
    RPCHandler.prototype.onConnectionReestablished = function () {
        this.bulkSubscription.subscribeList(__spreadArray([], __read(this.providers.keys()), false));
        for (var i = 0; i < this.limboQueue.length; i++) {
            var _a = this.limboQueue[i], correlationId = _a.correlationId, name_1 = _a.name, data = _a.data, callback = _a.callback;
            this.rpcs.set(correlationId, new rpc_1.RPC(name_1, correlationId, data, callback, this.options, this.services));
        }
        this.limboQueue = [];
    };
    RPCHandler.prototype.onExitLimbo = function () {
        for (var i = 0; i < this.limboQueue.length; i++) {
            this.limboQueue[i].callback(constants_1.EVENT.CLIENT_OFFLINE);
        }
        this.limboQueue = [];
    };
    RPCHandler.prototype.onConnectionLost = function () {
        this.rpcs.forEach(function (rpc) {
            rpc.error(constants_1.EVENT.CLIENT_OFFLINE);
        });
        this.rpcs.clear();
    };
    RPCHandler.prototype.onBulkSubscriptionSent = function (message) {
        this.services.timeoutRegistry.add({ message: message });
    };
    return RPCHandler;
}());
exports.RPCHandler = RPCHandler;

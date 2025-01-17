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
exports.DefaultOptions = exports.C = exports.DeepstreamClient = void 0;
var client_options_1 = require("./client-options");
Object.defineProperty(exports, "DefaultOptions", { enumerable: true, get: function () { return client_options_1.DefaultOptions; } });
var C = require("./constants");
exports.C = C;
var logger_1 = require("./util/logger");
var timeout_registry_1 = require("./util/timeout-registry");
var interval_timer_registry_1 = require("./util/interval-timer-registry");
var native_timer_registry_1 = require("./util/native-timer-registry");
var connection_1 = require("./connection/connection");
var socket_factory_1 = require("./connection/socket-factory");
var event_handler_1 = require("./event/event-handler");
var rpc_handler_1 = require("./rpc/rpc-handler");
var record_handler_1 = require("./record/record-handler");
var presence_handler_1 = require("./presence/presence-handler");
var emitter_1 = require("./util/emitter");
var indexdb_storage_service_1 = require("./storage/indexdb-storage-service");
var noop_storage_service_1 = require("./storage/noop-storage-service");
var DeepstreamClient = /** @class */ (function (_super) {
    __extends(DeepstreamClient, _super);
    function DeepstreamClient(url, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this.options = __assign(__assign({}, client_options_1.DefaultOptions), options);
        var services = {};
        services.logger = new logger_1.Logger(_this);
        if (options.nativeTimerRegistry) {
            services.timerRegistry = new native_timer_registry_1.NativeTimerRegistry();
        }
        else {
            services.timerRegistry = new interval_timer_registry_1.IntervalTimerRegistry(_this.options.intervalTimerResolution);
        }
        services.timeoutRegistry = new timeout_registry_1.TimeoutRegistry(services, _this.options);
        services.socketFactory = _this.options.socketFactory || socket_factory_1.socketFactory;
        services.connection = new connection_1.Connection(services, _this.options, url, _this);
        if (_this.options.offlineEnabled) {
            services.storage = _this.options.storage || new indexdb_storage_service_1.Storage(_this.options);
        }
        else {
            services.storage = new noop_storage_service_1.NoopStorage();
        }
        _this.services = services;
        _this.services.connection.onLost(services.timeoutRegistry.onConnectionLost.bind(services.timeoutRegistry));
        _this.event = new event_handler_1.EventHandler(_this.services, _this.options);
        _this.rpc = new rpc_handler_1.RPCHandler(_this.services, _this.options);
        _this.record = new record_handler_1.RecordHandler(_this.services, _this.options);
        _this.presence = new presence_handler_1.PresenceHandler(_this.services, _this.options);
        return _this;
    }
    DeepstreamClient.prototype.login = function (detailsOrCallback, callback) {
        var _this = this;
        if (detailsOrCallback && typeof detailsOrCallback === 'object') {
            if (callback) {
                this.services.connection.authenticate(detailsOrCallback, callback);
            }
            else {
                return new Promise(function (resolve, reject) {
                    _this.services.connection.authenticate(detailsOrCallback, function (success, data) {
                        success ? resolve(data) : reject(data);
                    });
                });
            }
        }
        else {
            if (typeof detailsOrCallback === 'function') {
                this.services.connection.authenticate({}, detailsOrCallback);
            }
            else {
                return new Promise(function (resolve, reject) {
                    _this.services.connection.authenticate({}, function (success, data) {
                        success ? resolve(data) : reject(data);
                    });
                });
            }
        }
    };
    DeepstreamClient.prototype.getConnectionState = function () {
        return this.services.connection.getConnectionState();
    };
    DeepstreamClient.prototype.close = function () {
        var _this = this;
        Object.keys(this.services).forEach(function (serviceName) {
            if (_this.services[serviceName].close) {
                _this.services[serviceName].close();
            }
        });
    };
    DeepstreamClient.prototype.pause = function () {
        this.services.connection.pause();
    };
    DeepstreamClient.prototype.resume = function (callback) {
        var _this = this;
        if (callback) {
            this.services.connection.resume(callback);
            return;
        }
        return new Promise(function (resolve, reject) {
            _this.services.connection.resume(function (error) {
                error ? reject(error) : resolve();
            });
        });
    };
    /**
    * Returns a random string. The first block of characters
    * is a timestamp, in order to allow databases to optimize for semi-
    * sequential numberings
    */
    DeepstreamClient.prototype.getUid = function () {
        var timestamp = (new Date()).getTime().toString(36);
        var randomString = (Math.random() * 10000000000000000).toString(36).replace('.', '');
        return "".concat(timestamp, "-").concat(randomString);
    };
    return DeepstreamClient;
}(emitter_1.Emitter));
exports.DeepstreamClient = DeepstreamClient;

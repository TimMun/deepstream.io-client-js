"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var sinon = require("sinon");
var mocks_1 = require("../test/mocks");
var constants_1 = require("../constants");
var client_options_1 = require("../client-options");
var rpc_handler_1 = require("./rpc-handler");
var rpc_response_1 = require("./rpc-response");
var timeout_registry_1 = require("../util/timeout-registry");
var utils_1 = require("../util/utils");
describe('RPC handler', function () {
    var services;
    var rpcHandler;
    var handle;
    var rpcProviderSpy;
    var rpcMakeSpy;
    var data;
    var name = 'myRpc';
    var rpcAcceptTimeout = 10;
    var rpcResponseTimeout = 30;
    var options = __assign(__assign({}, client_options_1.DefaultOptions), { rpcAcceptTimeout: rpcAcceptTimeout, rpcResponseTimeout: rpcResponseTimeout, subscriptionInterval: 0 });
    beforeEach(function () {
        services = (0, mocks_1.getServicesMock)();
        rpcHandler = new rpc_handler_1.RPCHandler(services, options);
        handle = services.getHandle();
        rpcProviderSpy = sinon.spy();
        rpcMakeSpy = sinon.spy();
        data = { foo: 'bar' };
    });
    afterEach(function () {
        services.connectionMock.verify();
        services.timeoutRegistryMock.verify();
        services.loggerMock.verify();
    });
    it('validates parameters on provide, unprovide and make', function () {
        (0, chai_1.expect)(rpcHandler.provide.bind(rpcHandler, '', function () { })).to.throw();
        (0, chai_1.expect)(rpcHandler.unprovide.bind(rpcHandler, '')).to.throw();
        (0, chai_1.expect)(rpcHandler.unprovide.bind(rpcHandler)).to.throw();
        (0, chai_1.expect)(rpcHandler.make.bind(rpcHandler, '')).to.throw();
        (0, chai_1.expect)(rpcHandler.make.bind(rpcHandler)).to.throw();
    });
    it('registers a provider', function () {
        var message = {
            topic: constants_1.TOPIC.RPC,
            action: constants_1.RPC_ACTION.PROVIDE,
            names: [name],
            correlationId: '0'
        };
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs(message);
        services.timeoutRegistryMock
            .expects('add')
            .once()
            .withExactArgs({ message: message });
        rpcHandler.provide(name, rpcProviderSpy);
        sinon.assert.notCalled(rpcProviderSpy);
    });
    it('gets provider names', function () {
        rpcHandler.provide('rpc1', rpcProviderSpy);
        rpcHandler.provide('rpc2', rpcProviderSpy);
        (0, chai_1.expect)(rpcHandler.providerNames()).to.deep.equal(['rpc1', 'rpc2']);
        rpcHandler.unprovide('rpc2');
        (0, chai_1.expect)(rpcHandler.providerNames()).to.deep.equal(['rpc1']);
    });
    it('reregisters a provider after a connection reconnection', function () {
        var message = {
            topic: constants_1.TOPIC.RPC,
            action: constants_1.RPC_ACTION.PROVIDE,
            names: [name],
            correlationId: '0'
        };
        services.connectionMock
            .expects('sendMessage')
            .twice()
            .withExactArgs(message);
        services.timeoutRegistryMock
            .expects('add')
            .twice()
            .withExactArgs({ message: message });
        rpcHandler.provide(name, rpcProviderSpy);
        services.simulateConnectionLost();
        services.simulateConnectionReestablished();
        sinon.assert.notCalled(rpcProviderSpy);
    });
    it('sends rpc request message on make', function () {
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs({
            topic: constants_1.TOPIC.RPC,
            action: constants_1.RPC_ACTION.REQUEST,
            name: name,
            parsedData: data,
            correlationId: sinon.match.any
        });
        rpcHandler.make(name, data, function () { });
    });
    it('returns promise on make when no callback is passed', function () {
        services.connectionMock
            .expects('sendMessage')
            .once();
        var promise = rpcHandler.make(name, data);
        (0, chai_1.expect)(promise).to.be.a('promise');
    });
    it('cant\'t make requests when client is offline', function () { return __awaiter(void 0, void 0, void 0, function () {
        var callback, promisseError, promisseSuccess, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    callback = sinon.spy();
                    promisseError = sinon.spy();
                    promisseSuccess = sinon.spy();
                    services.connection.isConnected = false;
                    rpcHandler.make(name, data, callback);
                    promise = rpcHandler.make(name, data);
                    promise.then(promisseSuccess).catch(promisseError);
                    return [4 /*yield*/, (0, utils_1.PromiseDelay)(1)];
                case 1:
                    _a.sent();
                    sinon.assert.calledOnce(callback);
                    sinon.assert.calledWithExactly(callback, constants_1.EVENT.CLIENT_OFFLINE);
                    sinon.assert.notCalled(promisseSuccess);
                    sinon.assert.calledOnce(promisseError);
                    sinon.assert.calledWithExactly(promisseError, constants_1.EVENT.CLIENT_OFFLINE);
                    return [2 /*return*/];
            }
        });
    }); });
    it('doesn\'t reply rpc and sends rejection if no provider exists', function () {
        services.connectionMock
            .expects('sendMessage')
            .once()
            .withExactArgs({
            topic: constants_1.TOPIC.RPC,
            action: constants_1.RPC_ACTION.REJECT,
            name: name,
            correlationId: '123'
        });
        services.timeoutRegistryMock
            .expects('add')
            .never();
        handle({
            topic: constants_1.TOPIC.RPC,
            action: constants_1.RPC_ACTION.REQUEST,
            name: name,
            parsedData: data,
            correlationId: '123'
        });
    });
    it('handles ack messages', function () {
        var message = {
            topic: constants_1.TOPIC.RPC,
            action: constants_1.RPC_ACTION.PROVIDE,
            name: name,
            isAck: true
        };
        services.timeoutRegistryMock
            .expects('remove')
            .once()
            .withExactArgs(message);
        handle(message);
    });
    it('handles permission and message denied errors for provide and unprovide', function () {
        var expectations = function (message) {
            services.timeoutRegistryMock
                .expects('remove')
                .once()
                .withExactArgs(message);
            services.loggerMock
                .expects('error')
                .once()
                .withExactArgs(message);
        };
        var permissionErrProvidingMsg = {
            topic: constants_1.TOPIC.RPC,
            action: constants_1.RPC_ACTION.MESSAGE_PERMISSION_ERROR,
            name: name,
            originalAction: constants_1.RPC_ACTION.PROVIDE
        };
        var permissionErrUnprovidingMsg = {
            topic: constants_1.TOPIC.RPC,
            action: constants_1.RPC_ACTION.MESSAGE_PERMISSION_ERROR,
            name: name,
            originalAction: constants_1.RPC_ACTION.UNPROVIDE
        };
        var msgDeniedProving = {
            topic: constants_1.TOPIC.RPC,
            action: constants_1.RPC_ACTION.MESSAGE_DENIED,
            name: name,
            originalAction: constants_1.RPC_ACTION.PROVIDE
        };
        var msgDeniedUnproving = {
            topic: constants_1.TOPIC.RPC,
            action: constants_1.RPC_ACTION.MESSAGE_DENIED,
            name: name,
            originalAction: constants_1.RPC_ACTION.UNPROVIDE
        };
        expectations(permissionErrProvidingMsg);
        expectations(permissionErrUnprovidingMsg);
        expectations(msgDeniedProving);
        expectations(msgDeniedUnproving);
        handle(permissionErrProvidingMsg);
        handle(permissionErrUnprovidingMsg);
        handle(msgDeniedProving);
        handle(msgDeniedUnproving);
    });
    it('logs unknown correlation error when handling unknown rpc response', function () {
        var message = {
            topic: constants_1.TOPIC.RPC,
            action: constants_1.RPC_ACTION.ACCEPT,
            name: name,
            correlationId: '123abc'
        };
        services.loggerMock
            .expects('error')
            .once()
            .withExactArgs(message, constants_1.EVENT.UNKNOWN_CORRELATION_ID);
        handle(message);
    });
    describe('when providing', function () {
        beforeEach(function () {
            rpcHandler.provide(name, rpcProviderSpy);
        });
        it('doesn\'t register provider twice', function () {
            services.connectionMock
                .expects('sendMessage')
                .never();
            services.timeoutRegistryMock
                .expects('add')
                .never();
            (0, chai_1.expect)(rpcHandler.provide.bind(rpcHandler, name, rpcProviderSpy))
                .to.throw("RPC ".concat(name, " already registered"));
        });
        it('triggers rpc provider callback in a new request', function () {
            var message = {
                topic: constants_1.TOPIC.RPC,
                action: constants_1.RPC_ACTION.REQUEST,
                name: name,
                parsedData: data,
                correlationId: '123'
            };
            var rpcResponse = new rpc_response_1.RPCResponse(message, options, services);
            handle(message);
            sinon.assert.calledOnce(rpcProviderSpy);
            sinon.assert.calledWithExactly(rpcProviderSpy, data, rpcResponse);
        });
        it('deregisters providers', function () {
            var message = {
                topic: constants_1.TOPIC.RPC,
                action: constants_1.RPC_ACTION.UNPROVIDE,
                names: [name],
                correlationId: '1'
            };
            services.connectionMock
                .expects('sendMessage')
                .once()
                .withExactArgs(message);
            services.timeoutRegistryMock
                .expects('add')
                .once()
                .withExactArgs({ message: message });
            rpcHandler.unprovide(name);
        });
        it('doesn\'t send deregister provider message twice', function () {
            services.connectionMock
                .expects('sendMessage')
                .once();
            services.timeoutRegistryMock
                .expects('add')
                .once();
            services.loggerMock
                .expects('warn')
                .once();
            rpcHandler.unprovide(name);
            rpcHandler.unprovide(name);
        });
    });
    describe('when making', function () {
        var rpcResponseCallback;
        var promise;
        var rpcPromiseResponseSuccess;
        var rpcPromiseResponseFail;
        var correlationIdCallbackRpc;
        var correlationIdPromiseRpc;
        beforeEach(function () {
            services.timeoutRegistry = new timeout_registry_1.TimeoutRegistry(services, options);
            rpcResponseCallback = sinon.spy();
            rpcHandler.make(name, data, rpcResponseCallback);
            correlationIdCallbackRpc = (0, mocks_1.getLastMessageSent)().correlationId;
            rpcPromiseResponseSuccess = sinon.spy();
            rpcPromiseResponseFail = sinon.spy();
            promise = rpcHandler.make(name, data);
            promise
                .then(rpcPromiseResponseSuccess)
                .catch(rpcPromiseResponseFail);
            correlationIdPromiseRpc = (0, mocks_1.getLastMessageSent)().correlationId;
        });
        it('handles permission errors', function () { return __awaiter(void 0, void 0, void 0, function () {
            var action, handleMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        action = constants_1.RPC_ACTION.MESSAGE_PERMISSION_ERROR;
                        handleMessage = function (correlationId) { return handle({
                            topic: constants_1.TOPIC.RPC,
                            action: action,
                            name: name,
                            originalAction: constants_1.RPC_ACTION.REQUEST,
                            correlationId: correlationId
                        }); };
                        handleMessage(correlationIdCallbackRpc);
                        handleMessage(correlationIdPromiseRpc);
                        return [4 /*yield*/, (0, utils_1.PromiseDelay)(rpcAcceptTimeout * 2)];
                    case 1:
                        _a.sent();
                        sinon.assert.calledOnce(rpcResponseCallback);
                        sinon.assert.calledWithExactly(rpcResponseCallback, constants_1.RPC_ACTION[action]);
                        sinon.assert.notCalled(rpcPromiseResponseSuccess);
                        sinon.assert.calledOnce(rpcPromiseResponseFail);
                        sinon.assert.calledWithExactly(rpcPromiseResponseFail, constants_1.RPC_ACTION[action]);
                        return [2 /*return*/];
                }
            });
        }); });
        it('handles message denied errors', function () { return __awaiter(void 0, void 0, void 0, function () {
            var action, handleMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        action = constants_1.RPC_ACTION.MESSAGE_DENIED;
                        handleMessage = function (correlationId) { return handle({
                            topic: constants_1.TOPIC.RPC,
                            action: action,
                            name: name,
                            originalAction: constants_1.RPC_ACTION.REQUEST,
                            correlationId: correlationId
                        }); };
                        handleMessage(correlationIdCallbackRpc);
                        handleMessage(correlationIdPromiseRpc);
                        return [4 /*yield*/, (0, utils_1.PromiseDelay)(rpcAcceptTimeout * 2)];
                    case 1:
                        _a.sent();
                        sinon.assert.calledOnce(rpcResponseCallback);
                        sinon.assert.calledWithExactly(rpcResponseCallback, constants_1.RPC_ACTION[action]);
                        sinon.assert.notCalled(rpcPromiseResponseSuccess);
                        sinon.assert.calledOnce(rpcPromiseResponseFail);
                        sinon.assert.calledWithExactly(rpcPromiseResponseFail, constants_1.RPC_ACTION[action]);
                        return [2 /*return*/];
                }
            });
        }); });
        it('responds rpc with error when request is not accepted in time', function () { return __awaiter(void 0, void 0, void 0, function () {
            var action, handleMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        action = constants_1.RPC_ACTION.ACCEPT_TIMEOUT;
                        handleMessage = function (correlationId) { return handle({
                            topic: constants_1.TOPIC.RPC,
                            action: action,
                            name: name,
                            correlationId: correlationId
                        }); };
                        handleMessage(correlationIdCallbackRpc);
                        handleMessage(correlationIdPromiseRpc);
                        return [4 /*yield*/, (0, utils_1.PromiseDelay)(0)];
                    case 1:
                        _a.sent();
                        sinon.assert.calledOnce(rpcResponseCallback);
                        sinon.assert.calledWithExactly(rpcResponseCallback, constants_1.RPC_ACTION[constants_1.RPC_ACTION.ACCEPT_TIMEOUT]);
                        sinon.assert.notCalled(rpcPromiseResponseSuccess);
                        sinon.assert.calledOnce(rpcPromiseResponseFail);
                        sinon.assert.calledWithExactly(rpcPromiseResponseFail, constants_1.RPC_ACTION[constants_1.RPC_ACTION.ACCEPT_TIMEOUT]);
                        return [2 /*return*/];
                }
            });
        }); });
        it('handles the rpc response accepted message', function () { return __awaiter(void 0, void 0, void 0, function () {
            var handleMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handleMessage = function (correlationId) { return handle({
                            topic: constants_1.TOPIC.RPC,
                            action: constants_1.RPC_ACTION.ACCEPT,
                            name: name,
                            correlationId: correlationId
                        }); };
                        handleMessage(correlationIdCallbackRpc);
                        handleMessage(correlationIdPromiseRpc);
                        return [4 /*yield*/, (0, utils_1.PromiseDelay)(rpcAcceptTimeout * 2)];
                    case 1:
                        _a.sent();
                        sinon.assert.notCalled(rpcResponseCallback);
                        sinon.assert.notCalled(rpcPromiseResponseFail);
                        sinon.assert.notCalled(rpcPromiseResponseSuccess);
                        return [2 /*return*/];
                }
            });
        }); });
        it('calls rpcResponse with error when response is not sent in time', function () { return __awaiter(void 0, void 0, void 0, function () {
            var handleMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handleMessage = function (correlationId) { return handle({
                            topic: constants_1.TOPIC.RPC,
                            action: constants_1.RPC_ACTION.ACCEPT,
                            name: name,
                            correlationId: correlationId
                        }); };
                        handleMessage(correlationIdCallbackRpc);
                        handleMessage(correlationIdPromiseRpc);
                        handle({
                            topic: constants_1.TOPIC.RPC,
                            action: constants_1.RPC_ACTION.RESPONSE_TIMEOUT,
                            name: name,
                            correlationId: correlationIdCallbackRpc
                        });
                        handle({
                            topic: constants_1.TOPIC.RPC,
                            action: constants_1.RPC_ACTION.RESPONSE_TIMEOUT,
                            name: name,
                            correlationId: correlationIdPromiseRpc
                        });
                        sinon.assert.calledOnce(rpcResponseCallback);
                        sinon.assert.calledWithExactly(rpcResponseCallback, constants_1.RPC_ACTION[constants_1.RPC_ACTION.RESPONSE_TIMEOUT]);
                        return [4 /*yield*/, (0, utils_1.PromiseDelay)(0)];
                    case 1:
                        _a.sent();
                        sinon.assert.notCalled(rpcPromiseResponseSuccess);
                        sinon.assert.calledOnce(rpcPromiseResponseFail);
                        sinon.assert.calledWithExactly(rpcPromiseResponseFail, constants_1.RPC_ACTION[constants_1.RPC_ACTION.RESPONSE_TIMEOUT]);
                        return [2 /*return*/];
                }
            });
        }); });
        it('calls rpcResponse with error when no rpc provider is returned', function () { return __awaiter(void 0, void 0, void 0, function () {
            var handleMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handleMessage = function (correlationId) { return handle({
                            topic: constants_1.TOPIC.RPC,
                            action: constants_1.RPC_ACTION.ACCEPT,
                            name: name,
                            correlationId: correlationId
                        }); };
                        handleMessage(correlationIdCallbackRpc);
                        handleMessage(correlationIdPromiseRpc);
                        handle({
                            topic: constants_1.TOPIC.RPC,
                            action: constants_1.RPC_ACTION.NO_RPC_PROVIDER,
                            name: name,
                            correlationId: correlationIdCallbackRpc
                        });
                        handle({
                            topic: constants_1.TOPIC.RPC,
                            action: constants_1.RPC_ACTION.NO_RPC_PROVIDER,
                            name: name,
                            correlationId: correlationIdPromiseRpc
                        });
                        sinon.assert.calledOnce(rpcResponseCallback);
                        sinon.assert.calledWithExactly(rpcResponseCallback, constants_1.RPC_ACTION[constants_1.RPC_ACTION.NO_RPC_PROVIDER]);
                        return [4 /*yield*/, (0, utils_1.PromiseDelay)(0)];
                    case 1:
                        _a.sent();
                        sinon.assert.notCalled(rpcPromiseResponseSuccess);
                        sinon.assert.calledOnce(rpcPromiseResponseFail);
                        sinon.assert.calledWithExactly(rpcPromiseResponseFail, constants_1.RPC_ACTION[constants_1.RPC_ACTION.NO_RPC_PROVIDER]);
                        return [2 /*return*/];
                }
            });
        }); });
        it('handles the rpc response RESPONSE message', function () { return __awaiter(void 0, void 0, void 0, function () {
            var handleMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handleMessage = function (correlationId) { return handle({
                            topic: constants_1.TOPIC.RPC,
                            action: constants_1.RPC_ACTION.RESPONSE,
                            name: name,
                            correlationId: correlationId,
                            parsedData: data
                        }); };
                        handleMessage(correlationIdCallbackRpc);
                        handleMessage(correlationIdPromiseRpc);
                        sinon.assert.calledOnce(rpcResponseCallback);
                        sinon.assert.calledWithExactly(rpcResponseCallback, null, data);
                        return [4 /*yield*/, (0, utils_1.PromiseDelay)(0)];
                    case 1:
                        _a.sent();
                        sinon.assert.notCalled(rpcPromiseResponseFail);
                        sinon.assert.calledOnce(rpcPromiseResponseSuccess);
                        sinon.assert.calledWithExactly(rpcPromiseResponseSuccess, data);
                        return [2 /*return*/];
                }
            });
        }); });
        it('doesn\'t call rpc response callback twice when handling response message', function () { return __awaiter(void 0, void 0, void 0, function () {
            var handleMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handleMessage = function (correlationId) { return handle({
                            topic: constants_1.TOPIC.RPC,
                            action: constants_1.RPC_ACTION.RESPONSE,
                            name: name,
                            correlationId: correlationId,
                            parsedData: data
                        }); };
                        handleMessage(correlationIdCallbackRpc);
                        handleMessage(correlationIdCallbackRpc);
                        handleMessage(correlationIdPromiseRpc);
                        handleMessage(correlationIdPromiseRpc);
                        return [4 /*yield*/, (0, utils_1.PromiseDelay)(rpcResponseTimeout * 2)];
                    case 1:
                        _a.sent();
                        sinon.assert.calledOnce(rpcResponseCallback);
                        sinon.assert.notCalled(rpcPromiseResponseFail);
                        sinon.assert.calledOnce(rpcPromiseResponseSuccess);
                        return [2 /*return*/];
                }
            });
        }); });
        it('handles the rpc response error message', function () { return __awaiter(void 0, void 0, void 0, function () {
            var error, handleMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        error = 'ERROR';
                        handleMessage = function (correlationId) { return handle({
                            topic: constants_1.TOPIC.RPC,
                            action: constants_1.RPC_ACTION.REQUEST_ERROR,
                            name: name,
                            correlationId: correlationId,
                            parsedData: error
                        }); };
                        handleMessage(correlationIdCallbackRpc);
                        handleMessage(correlationIdPromiseRpc);
                        return [4 /*yield*/, (0, utils_1.PromiseDelay)(rpcResponseTimeout * 2)];
                    case 1:
                        _a.sent();
                        sinon.assert.calledOnce(rpcResponseCallback);
                        sinon.assert.calledWithExactly(rpcResponseCallback, error);
                        sinon.assert.notCalled(rpcPromiseResponseSuccess);
                        sinon.assert.calledOnce(rpcPromiseResponseFail);
                        sinon.assert.calledWithExactly(rpcPromiseResponseFail, error);
                        return [2 /*return*/];
                }
            });
        }); });
        it('doesn\'t call rpc response callback twice when handling error message', function () { return __awaiter(void 0, void 0, void 0, function () {
            var error, handleMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        error = 'ERROR';
                        handleMessage = function (correlationId) { return handle({
                            topic: constants_1.TOPIC.RPC,
                            action: constants_1.RPC_ACTION.REQUEST_ERROR,
                            name: name,
                            correlationId: correlationId,
                            parsedData: error
                        }); };
                        handleMessage(correlationIdCallbackRpc);
                        handleMessage(correlationIdCallbackRpc);
                        handleMessage(correlationIdPromiseRpc);
                        handleMessage(correlationIdPromiseRpc);
                        return [4 /*yield*/, (0, utils_1.PromiseDelay)(rpcResponseTimeout * 2)];
                    case 1:
                        _a.sent();
                        sinon.assert.calledOnce(rpcResponseCallback);
                        sinon.assert.notCalled(rpcPromiseResponseSuccess);
                        sinon.assert.calledOnce(rpcPromiseResponseFail);
                        return [2 /*return*/];
                }
            });
        }); });
        it('responds with error when onConnectionLost', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        services.simulateConnectionLost();
                        return [4 /*yield*/, (0, utils_1.PromiseDelay)(1)];
                    case 1:
                        _a.sent();
                        sinon.assert.calledOnce(rpcResponseCallback);
                        sinon.assert.calledWithExactly(rpcResponseCallback, constants_1.EVENT.CLIENT_OFFLINE);
                        sinon.assert.notCalled(rpcPromiseResponseSuccess);
                        sinon.assert.calledOnce(rpcPromiseResponseFail);
                        sinon.assert.calledWithExactly(rpcPromiseResponseFail, constants_1.EVENT.CLIENT_OFFLINE);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('limbo', function () {
        beforeEach(function () {
            services.connection.isConnected = false;
            services.connection.isInLimbo = true;
        });
        it('returns client offline error once limbo state over', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcHandler.make(name, data, rpcMakeSpy);
                        services.simulateExitLimbo();
                        return [4 /*yield*/, (0, utils_1.PromiseDelay)(1)];
                    case 1:
                        _a.sent();
                        sinon.assert.calledOnce(rpcMakeSpy);
                        sinon.assert.calledWithExactly(rpcMakeSpy, constants_1.EVENT.CLIENT_OFFLINE);
                        return [2 /*return*/];
                }
            });
        }); });
        it('sends messages once re-established if in limbo', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcHandler.make(name, data, rpcMakeSpy);
                        services.connectionMock
                            .expects('sendMessage')
                            .once();
                        services.simulateConnectionReestablished();
                        return [4 /*yield*/, (0, utils_1.PromiseDelay)(1)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListenerMock = exports.getRecordServices = exports.getServicesMock = exports.getLastMessageSent = void 0;
// tslint:disable:no-empty
var sinon_1 = require("sinon");
var constants_1 = require("../constants");
var single_notifier_1 = require("../record/single-notifier");
var write_ack_service_1 = require("../record/write-ack-service");
var dirty_service_1 = require("../record/dirty-service");
var listener_1 = require("../util/listener");
var bulk_subscription_service_1 = require("../util/bulk-subscription-service");
var events_1 = require("events");
var native_timer_registry_1 = require("../util/native-timer-registry");
var lastMessageSent;
var getLastMessageSent = function () { return lastMessageSent; };
exports.getLastMessageSent = getLastMessageSent;
var getServicesMock = function () {
    var handle = null;
    var emitter = new events_1.EventEmitter();
    var connection = {
        sendMessage: function (message) { lastMessageSent = message; },
        getConnectionState: (0, sinon_1.stub)().returns(constants_1.CONNECTION_STATE.OPEN),
        isConnected: true,
        isInLimbo: false,
        registerHandler: function (topic, callback) {
            handle = callback;
        },
        onReestablished: function (callback) {
            emitter.on('onReestablished', callback);
        },
        onLost: function (callback) {
            emitter.on('onLost', callback);
        },
        onExitLimbo: function (callback) {
            emitter.on('onExitLimbo', callback);
        },
        removeOnReestablished: function () { },
        removeOnLost: function () { }
    };
    var connectionMock = (0, sinon_1.mock)(connection);
    var logger = {
        warn: function () { },
        error: function () { }
    };
    var loggerMock = (0, sinon_1.mock)(logger);
    loggerMock.expects('warn').never();
    // loggerMock.expects('error').never()
    var timerRegistry = new native_timer_registry_1.NativeTimerRegistry();
    var timeoutRegistry = {
        add: function () { },
        remove: function () { },
        clear: function () { }
    };
    var timeoutRegistryMock = (0, sinon_1.mock)(timeoutRegistry);
    // TODO: Use a real timeout registry to catch potential errors
    // const timeoutRegistry = new TimeoutRegistry({
    //   timerRegistry,
    //   logger,
    //   connection
    // } as any, { subscriptionTimeout: 20 } as any)
    // const timeoutRegistryMock = mock(timeoutRegistry)
    // tslint:disable-next-line
    var Socket = /** @class */ (function () {
        function Socket(url) {
            this.url = url;
        }
        Socket.prototype.sendParsedMessage = function (message) { };
        Socket.prototype.onparsedmessages = function (message) { };
        Socket.prototype.onopened = function () { };
        Socket.prototype.onerror = function () { };
        Socket.prototype.onclosed = function () { };
        Socket.prototype.close = function () {
            process.nextTick(this.onclosed);
        };
        Socket.prototype.simulateRemoteClose = function () {
            this.close();
        };
        Socket.prototype.simulateOpen = function () {
            process.nextTick(this.onopened);
        };
        Socket.prototype.simulateError = function () {
            process.nextTick(this.onerror.bind(null, { code: 1234 }));
        };
        Socket.prototype.simulateMessages = function (messages) {
            process.nextTick(this.onparsedmessages.bind(this, messages));
        };
        Socket.prototype.getTimeSinceLastMessage = function () {
            return 1;
        };
        return Socket;
    }());
    var socket;
    var socketFactory = function (url, options) {
        socket = new Socket(url);
        return socket;
    };
    var storage = {
        get: function () { },
        set: function () { },
        delete: function () { },
        reset: function () { }
    };
    var storageMock = (0, sinon_1.mock)(storage);
    return {
        socketFactory: socketFactory,
        getSocket: function () { return ({ socket: socket, socketMock: (0, sinon_1.mock)(socket) }); },
        connection: connection,
        connectionMock: connectionMock,
        timeoutRegistry: timeoutRegistry,
        timeoutRegistryMock: timeoutRegistryMock,
        logger: logger,
        loggerMock: loggerMock,
        getLogger: function () { return ({ logger: logger, loggerMock: loggerMock }); },
        timerRegistry: timerRegistry,
        getHandle: function () { return handle; },
        simulateConnectionLost: function () { emitter.emit('onLost'); },
        simulateConnectionReestablished: function () { emitter.emit('onReestablished'); },
        simulateExitLimbo: function () { emitter.emit('onExitLimbo'); },
        storage: storage,
        storageMock: storageMock,
        verify: function () {
            connectionMock.verify();
            timeoutRegistryMock.verify();
            loggerMock.verify();
            storageMock.verify();
        }
    };
};
exports.getServicesMock = getServicesMock;
var getRecordServices = function (services) {
    var _a;
    services.storageMock.expects('get').withArgs('__ds__dirty_records', sinon_1.match.func).atLeast(0).callsArgWith(1, '__ds__dirty_records', 1, []);
    services.storageMock.expects('set').withArgs('__ds__dirty_records', 1, sinon_1.match.any, sinon_1.match.func).atLeast(0);
    var dirtyService = new dirty_service_1.DirtyService(services.storage, '__ds__dirty_records');
    var headRegistry = new single_notifier_1.SingleNotifier(services, constants_1.RECORD_ACTION.HEAD, 50);
    var readRegistry = new single_notifier_1.SingleNotifier(services, constants_1.RECORD_ACTION.READ, 50);
    var writeAckService = new write_ack_service_1.WriteAcknowledgementService(services);
    var bulkSubscriptionService = (_a = {},
        _a[constants_1.RECORD_ACTION.SUBSCRIBECREATEANDREAD] = new bulk_subscription_service_1.BulkSubscriptionService(services, 0, constants_1.TOPIC.RECORD, constants_1.RECORD_ACTION.SUBSCRIBECREATEANDREAD, constants_1.RECORD_ACTION.UNSUBSCRIBE),
        _a[constants_1.RECORD_ACTION.SUBSCRIBEANDHEAD] = new bulk_subscription_service_1.BulkSubscriptionService(services, 0, constants_1.TOPIC.RECORD, constants_1.RECORD_ACTION.SUBSCRIBEANDHEAD, constants_1.RECORD_ACTION.UNSUBSCRIBE),
        _a[constants_1.RECORD_ACTION.SUBSCRIBEANDREAD] = new bulk_subscription_service_1.BulkSubscriptionService(services, 0, constants_1.TOPIC.RECORD, constants_1.RECORD_ACTION.SUBSCRIBEANDREAD, constants_1.RECORD_ACTION.UNSUBSCRIBE),
        _a);
    var dirtyServiceMock = (0, sinon_1.mock)(dirtyService);
    var readRegistryMock = (0, sinon_1.mock)(readRegistry);
    var headRegistryMock = (0, sinon_1.mock)(headRegistry);
    var writeAckServiceMock = (0, sinon_1.mock)(writeAckService);
    return {
        dirtyService: dirtyService,
        dirtyServiceMock: dirtyServiceMock,
        headRegistry: headRegistry,
        headRegistryMock: headRegistryMock,
        readRegistry: readRegistry,
        readRegistryMock: readRegistryMock,
        writeAckService: writeAckService,
        writeAckServiceMock: writeAckServiceMock,
        bulkSubscriptionService: bulkSubscriptionService,
        verify: function () {
            dirtyServiceMock.verify();
            headRegistryMock.verify();
            readRegistryMock.verify();
            writeAckServiceMock.verify();
        }
    };
};
exports.getRecordServices = getRecordServices;
var getListenerMock = function () {
    var listener = listener_1.Listener.prototype;
    var listenerMock = (0, sinon_1.mock)(listener);
    return {
        listener: listener,
        listenerMock: listenerMock
    };
};
exports.getListenerMock = getListenerMock;
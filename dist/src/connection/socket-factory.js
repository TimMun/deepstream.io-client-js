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
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketFactory = void 0;
global.Buffer = require('buffer').Buffer;
var message_parser_1 = require("@deepstream/protobuf/dist/src/message-parser");
var message_builder_1 = require("@deepstream/protobuf/dist/src/message-builder");
var constants_1 = require("../constants");
var BrowserWebsocket = (global.WebSocket || global.MozWebSocket);
var socketFactory = function (url, options, heartBeatInterval) {
    if (options === void 0) { options = { jsonTransportMode: false }; }
    var socket = BrowserWebsocket
        ? new BrowserWebsocket(url, [], options)
        : new (require('ws'))(url, options);
    if (BrowserWebsocket && options.jsonTransportMode !== true) {
        socket.binaryType = 'arraybuffer';
    }
    var buildMessage = options.jsonTransportMode !== true ? message_builder_1.getMessage : function (message, isAck) { return JSON.stringify(__assign(__assign({}, message), { isAck: isAck })); };
    var pingMessage = buildMessage({ topic: constants_1.TOPIC.CONNECTION, action: constants_1.CONNECTION_ACTION.PING }, false);
    var pingInterval = null;
    var lastRecievedMessageTimestamp = -1;
    // tslint:disable-next-line:no-empty
    socket.onparsedmessage = function () { };
    socket.onmessage = function (raw) {
        lastRecievedMessageTimestamp = Date.now();
        var parseResults;
        if (options.jsonTransportMode !== true) {
            parseResults = (0, message_parser_1.parse)(BrowserWebsocket ? new Buffer(new Uint8Array(raw.data)) : raw.data);
        }
        else {
            parseResults = [JSON.parse(raw.data)];
        }
        socket.onparsedmessages(parseResults);
    };
    socket.getTimeSinceLastMessage = function () {
        if (lastRecievedMessageTimestamp < 0)
            return 0;
        return Date.now() - lastRecievedMessageTimestamp;
    };
    socket.sendParsedMessage = function (message) {
        if (message.topic === constants_1.TOPIC.CONNECTION && message.action === constants_1.CONNECTION_ACTION.CLOSING) {
            socket.onparsedmessages([{ topic: constants_1.TOPIC.CONNECTION, action: constants_1.CONNECTION_ACTION.CLOSED }]);
            socket.close();
            return;
        }
        if (message.parsedData) {
            message.data = JSON.stringify(message.parsedData);
        }
        // if (message.action !== CONNECTION_ACTIONS.PONG && message.action !== CONNECTION_ACTIONS.PING) {
        //     console.log('>>>', TOPIC[message.topic], (ACTIONS as any)[message.topic][message.action], message.parsedData, message.data, message.name)
        // }
        if (message.data === undefined) {
            delete message.data;
        }
        socket.send(buildMessage(message, false));
    };
    socket.onclosed = null;
    socket.onclose = function () {
        clearInterval(pingInterval);
        socket.onclosed();
    };
    socket.onopened = null;
    socket.onopen = function () {
        pingInterval = setInterval(function () {
            try {
                socket.send(pingMessage);
            }
            catch (e) {
                clearTimeout(pingInterval);
            }
        }, heartBeatInterval);
        socket.onopened();
    };
    return socket;
};
exports.socketFactory = socketFactory;

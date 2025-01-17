"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONNECTION_STATE = exports.EVENT = exports.RESPONSE_TO_REQUEST = void 0;
var all_1 = require("@deepstream/protobuf/dist/types/all");
__exportStar(require("@deepstream/protobuf/dist/types/all"), exports);
__exportStar(require("@deepstream/protobuf/dist/types/messages"), exports);
exports.RESPONSE_TO_REQUEST = (_a = {},
    _a[all_1.TOPIC.RECORD] = (_b = {},
        _b[all_1.RECORD_ACTION.HEAD_RESPONSE] = all_1.RECORD_ACTION.HEAD,
        _b[all_1.RECORD_ACTION.READ_RESPONSE] = all_1.RECORD_ACTION.READ,
        _b[all_1.RECORD_ACTION.DELETE_SUCCESS] = all_1.RECORD_ACTION.DELETE,
        _b),
    _a[all_1.TOPIC.PRESENCE] = (_c = {},
        _c[all_1.PRESENCE_ACTION.QUERY_RESPONSE] = all_1.PRESENCE_ACTION.QUERY,
        _c[all_1.PRESENCE_ACTION.QUERY_ALL_RESPONSE] = all_1.PRESENCE_ACTION.QUERY_ALL,
        _c),
    _a[all_1.TOPIC.RPC] = (_d = {},
        _d[all_1.RPC_ACTION.ACCEPT] = all_1.RPC_ACTION.REQUEST,
        _d[all_1.RPC_ACTION.ERROR] = all_1.RPC_ACTION.REQUEST,
        _d),
    _a[all_1.TOPIC.EVENT] = {},
    _a);
var EVENT;
(function (EVENT) {
    EVENT["RECORD_READ_ONLY_MODE"] = "RECORD_READ_ONLY_MODE";
    EVENT["UNSOLICITED_MESSAGE"] = "UNSOLICITED_MESSAGE";
    EVENT["IS_CLOSED"] = "IS_CLOSED";
    EVENT["MAX_RECONNECTION_ATTEMPTS_REACHED"] = "MAX_RECONNECTION_ATTEMPTS_REACHED";
    EVENT["CONNECTION_ERROR"] = "CONNECTION_ERROR";
    EVENT["ACK_TIMEOUT"] = "ACK_TIMEOUT";
    EVENT["UNKNOWN_CORRELATION_ID"] = "UNKNOWN_CORRELATION_ID";
    EVENT["HEARTBEAT_TIMEOUT"] = "HEARTBEAT_TIMEOUT";
    EVENT["LISTENER_EXISTS"] = "LISTENER_EXISTS";
    EVENT["NOT_LISTENING"] = "NOT_LISTENING";
    EVENT["RECORD_ALREADY_DESTROYED"] = "RECORD_ALREADY_DESTROYED";
    EVENT["RECORD_DELETE_TIMEOUT"] = "RECORD_DELETE_TIMEOUT";
    EVENT["CLIENT_OFFLINE"] = "client offline";
    EVENT["INVALID_AUTHENTICATION_DETAILS"] = "INVALID_AUTHENTICATION_DETAILS";
    EVENT["CONNECTION_LOST"] = "connectionLost";
    EVENT["CONNECTION_REESTABLISHED"] = "connectionReestablished";
    EVENT["EXIT_LIMBO"] = "exitLimbo";
    EVENT["CONNECTION_STATE_CHANGED"] = "connectionStateChanged";
    EVENT["CLIENT_DATA_CHANGED"] = "clientDataChanged";
    EVENT["REAUTHENTICATION_FAILURE"] = "reauthenticationFailure";
    EVENT["AUTHENTICATION_TIMEOUT"] = "AUTHENTICATION_TIMEOUT";
    EVENT["RECORD_ERROR"] = "error";
    EVENT["RECORD_READY"] = "ready";
    EVENT["RECORD_DELETED"] = "delete";
    EVENT["RECORD_DISCARDED"] = "discard";
    EVENT["RECORD_VERSION_EXISTS"] = "versionExists";
    EVENT["RECORD_HAS_PROVIDER_CHANGED"] = "hasProviderChanged";
    EVENT["RECORD_STATE_CHANGED"] = "onRecordStateChanged";
    EVENT["ENTRY_ADDED_EVENT"] = "entry-added";
    EVENT["ENTRY_REMOVED_EVENT"] = "entry-removed";
    EVENT["ENTRY_MOVED_EVENT"] = "entry-moved";
})(EVENT = exports.EVENT || (exports.EVENT = {}));
var CONNECTION_STATE;
(function (CONNECTION_STATE) {
    CONNECTION_STATE["CLOSING"] = "CLOSING";
    CONNECTION_STATE["CLOSED"] = "CLOSED";
    CONNECTION_STATE["INITIALISING"] = "INITIALISING";
    CONNECTION_STATE["AWAITING_CONNECTION"] = "AWAITING_CONNECTION";
    CONNECTION_STATE["CHALLENGING"] = "CHALLENGING";
    CONNECTION_STATE["AWAITING_AUTHENTICATION"] = "AWAITING_AUTHENTICATION";
    CONNECTION_STATE["AUTHENTICATING"] = "AUTHENTICATING";
    CONNECTION_STATE["OPEN"] = "OPEN";
    CONNECTION_STATE["ERROR"] = "ERROR";
    CONNECTION_STATE["RECONNECTING"] = "RECONNECTING";
    CONNECTION_STATE["REDIRECTING"] = "REDIRECTING";
    CONNECTION_STATE["CHALLENGE_DENIED"] = "CHALLENGE_DENIED";
    CONNECTION_STATE["TOO_MANY_AUTH_ATTEMPTS"] = "TOO_MANY_AUTH_ATTEMPTS";
    CONNECTION_STATE["AUTHENTICATION_TIMEOUT"] = "AUTHENTICATION_TIMEOUT";
    CONNECTION_STATE["PAUSING"] = "PAUSING";
    CONNECTION_STATE["OFFLINE"] = "OFFLINE";
})(CONNECTION_STATE = exports.CONNECTION_STATE || (exports.CONNECTION_STATE = {}));

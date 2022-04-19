(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DeepstreamClient"] = factory();
	else
		root["DeepstreamClient"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@deepstream/protobuf/dist/generated/protobuf.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@deepstream/protobuf/dist/generated/protobuf.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/


var $protobuf = __webpack_require__(/*! protobufjs/minimal */ "./node_modules/protobufjs/minimal.js");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * AUTH_ACTION enum.
 * @exports AUTH_ACTION
 * @enum {number}
 * @property {number} AUTH_UNKNOWN=0 AUTH_UNKNOWN value
 * @property {number} AUTH_ERROR=1 AUTH_ERROR value
 * @property {number} AUTH_REQUEST=2 AUTH_REQUEST value
 * @property {number} AUTH_AUTH_SUCCESSFUL=3 AUTH_AUTH_SUCCESSFUL value
 * @property {number} AUTH_AUTH_UNSUCCESSFUL=4 AUTH_AUTH_UNSUCCESSFUL value
 * @property {number} AUTH_TOO_MANY_AUTH_ATTEMPTS=100 AUTH_TOO_MANY_AUTH_ATTEMPTS value
 * @property {number} AUTH_INVALID_MESSAGE=101 AUTH_INVALID_MESSAGE value
 * @property {number} AUTH_INVALID_MESSAGE_DATA=102 AUTH_INVALID_MESSAGE_DATA value
 */
$root.AUTH_ACTION = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "AUTH_UNKNOWN"] = 0;
    values[valuesById[1] = "AUTH_ERROR"] = 1;
    values[valuesById[2] = "AUTH_REQUEST"] = 2;
    values[valuesById[3] = "AUTH_AUTH_SUCCESSFUL"] = 3;
    values[valuesById[4] = "AUTH_AUTH_UNSUCCESSFUL"] = 4;
    values[valuesById[100] = "AUTH_TOO_MANY_AUTH_ATTEMPTS"] = 100;
    values[valuesById[101] = "AUTH_INVALID_MESSAGE"] = 101;
    values[valuesById[102] = "AUTH_INVALID_MESSAGE_DATA"] = 102;
    return values;
})();

$root.AuthMessage = (function() {

    /**
     * Properties of an AuthMessage.
     * @exports IAuthMessage
     * @interface IAuthMessage
     * @property {AUTH_ACTION|null} [action] AuthMessage action
     * @property {string|null} [data] AuthMessage data
     * @property {boolean|null} [isError] AuthMessage isError
     * @property {boolean|null} [isAck] AuthMessage isAck
     */

    /**
     * Constructs a new AuthMessage.
     * @exports AuthMessage
     * @classdesc Represents an AuthMessage.
     * @implements IAuthMessage
     * @constructor
     * @param {IAuthMessage=} [properties] Properties to set
     */
    function AuthMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AuthMessage action.
     * @member {AUTH_ACTION} action
     * @memberof AuthMessage
     * @instance
     */
    AuthMessage.prototype.action = 0;

    /**
     * AuthMessage data.
     * @member {string} data
     * @memberof AuthMessage
     * @instance
     */
    AuthMessage.prototype.data = "";

    /**
     * AuthMessage isError.
     * @member {boolean} isError
     * @memberof AuthMessage
     * @instance
     */
    AuthMessage.prototype.isError = false;

    /**
     * AuthMessage isAck.
     * @member {boolean} isAck
     * @memberof AuthMessage
     * @instance
     */
    AuthMessage.prototype.isAck = false;

    /**
     * Encodes the specified AuthMessage message. Does not implicitly {@link AuthMessage.verify|verify} messages.
     * @function encode
     * @memberof AuthMessage
     * @static
     * @param {IAuthMessage} message AuthMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
        if (message.isError != null && Object.hasOwnProperty.call(message, "isError"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isError);
        if (message.isAck != null && Object.hasOwnProperty.call(message, "isAck"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isAck);
        return writer;
    };

    /**
     * Encodes the specified AuthMessage message, length delimited. Does not implicitly {@link AuthMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AuthMessage
     * @static
     * @param {IAuthMessage} message AuthMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AuthMessage message from the specified reader or buffer.
     * @function decode
     * @memberof AuthMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuthMessage} AuthMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.action = reader.int32();
                break;
            case 2:
                message.data = reader.string();
                break;
            case 3:
                message.isError = reader.bool();
                break;
            case 4:
                message.isAck = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AuthMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AuthMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AuthMessage} AuthMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    return AuthMessage;
})();

/**
 * CLUSTER_ACTION enum.
 * @exports CLUSTER_ACTION
 * @enum {number}
 * @property {number} CLUSTER_UNKNOWN=0 CLUSTER_UNKNOWN value
 * @property {number} CLUSTER_REMOVE=1 CLUSTER_REMOVE value
 * @property {number} CLUSTER_STATUS=2 CLUSTER_STATUS value
 */
$root.CLUSTER_ACTION = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "CLUSTER_UNKNOWN"] = 0;
    values[valuesById[1] = "CLUSTER_REMOVE"] = 1;
    values[valuesById[2] = "CLUSTER_STATUS"] = 2;
    return values;
})();

$root.ClusterMessage = (function() {

    /**
     * Properties of a ClusterMessage.
     * @exports IClusterMessage
     * @interface IClusterMessage
     * @property {CLUSTER_ACTION|null} [action] ClusterMessage action
     * @property {string|null} [data] ClusterMessage data
     * @property {boolean|null} [isError] ClusterMessage isError
     * @property {boolean|null} [isAck] ClusterMessage isAck
     * @property {number|null} [leaderScore] ClusterMessage leaderScore
     * @property {string|null} [externalUrl] ClusterMessage externalUrl
     * @property {string|null} [role] ClusterMessage role
     */

    /**
     * Constructs a new ClusterMessage.
     * @exports ClusterMessage
     * @classdesc Represents a ClusterMessage.
     * @implements IClusterMessage
     * @constructor
     * @param {IClusterMessage=} [properties] Properties to set
     */
    function ClusterMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClusterMessage action.
     * @member {CLUSTER_ACTION} action
     * @memberof ClusterMessage
     * @instance
     */
    ClusterMessage.prototype.action = 0;

    /**
     * ClusterMessage data.
     * @member {string} data
     * @memberof ClusterMessage
     * @instance
     */
    ClusterMessage.prototype.data = "";

    /**
     * ClusterMessage isError.
     * @member {boolean} isError
     * @memberof ClusterMessage
     * @instance
     */
    ClusterMessage.prototype.isError = false;

    /**
     * ClusterMessage isAck.
     * @member {boolean} isAck
     * @memberof ClusterMessage
     * @instance
     */
    ClusterMessage.prototype.isAck = false;

    /**
     * ClusterMessage leaderScore.
     * @member {number} leaderScore
     * @memberof ClusterMessage
     * @instance
     */
    ClusterMessage.prototype.leaderScore = 0;

    /**
     * ClusterMessage externalUrl.
     * @member {string} externalUrl
     * @memberof ClusterMessage
     * @instance
     */
    ClusterMessage.prototype.externalUrl = "";

    /**
     * ClusterMessage role.
     * @member {string} role
     * @memberof ClusterMessage
     * @instance
     */
    ClusterMessage.prototype.role = "";

    /**
     * Encodes the specified ClusterMessage message. Does not implicitly {@link ClusterMessage.verify|verify} messages.
     * @function encode
     * @memberof ClusterMessage
     * @static
     * @param {IClusterMessage} message ClusterMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClusterMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
        if (message.isError != null && Object.hasOwnProperty.call(message, "isError"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isError);
        if (message.isAck != null && Object.hasOwnProperty.call(message, "isAck"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isAck);
        if (message.leaderScore != null && Object.hasOwnProperty.call(message, "leaderScore"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.leaderScore);
        if (message.externalUrl != null && Object.hasOwnProperty.call(message, "externalUrl"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.externalUrl);
        if (message.role != null && Object.hasOwnProperty.call(message, "role"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.role);
        return writer;
    };

    /**
     * Encodes the specified ClusterMessage message, length delimited. Does not implicitly {@link ClusterMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClusterMessage
     * @static
     * @param {IClusterMessage} message ClusterMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClusterMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClusterMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ClusterMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClusterMessage} ClusterMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClusterMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClusterMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.action = reader.int32();
                break;
            case 2:
                message.data = reader.string();
                break;
            case 3:
                message.isError = reader.bool();
                break;
            case 4:
                message.isAck = reader.bool();
                break;
            case 5:
                message.leaderScore = reader.int32();
                break;
            case 6:
                message.externalUrl = reader.string();
                break;
            case 7:
                message.role = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClusterMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClusterMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClusterMessage} ClusterMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClusterMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    return ClusterMessage;
})();

/**
 * CONNECTION_ACTION enum.
 * @exports CONNECTION_ACTION
 * @enum {number}
 * @property {number} CONNECTION_UNKNOWN=0 CONNECTION_UNKNOWN value
 * @property {number} CONNECTION_ERROR=1 CONNECTION_ERROR value
 * @property {number} CONNECTION_PING=2 CONNECTION_PING value
 * @property {number} CONNECTION_PONG=3 CONNECTION_PONG value
 * @property {number} CONNECTION_ACCEPT=4 CONNECTION_ACCEPT value
 * @property {number} CONNECTION_CHALLENGE=5 CONNECTION_CHALLENGE value
 * @property {number} CONNECTION_REJECT=6 CONNECTION_REJECT value
 * @property {number} CONNECTION_REDIRECT=7 CONNECTION_REDIRECT value
 * @property {number} CONNECTION_CLOSING=8 CONNECTION_CLOSING value
 * @property {number} CONNECTION_CLOSED=9 CONNECTION_CLOSED value
 * @property {number} CONNECTION_AUTHENTICATION_TIMEOUT=100 CONNECTION_AUTHENTICATION_TIMEOUT value
 * @property {number} CONNECTION_INVALID_MESSAGE=101 CONNECTION_INVALID_MESSAGE value
 */
$root.CONNECTION_ACTION = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "CONNECTION_UNKNOWN"] = 0;
    values[valuesById[1] = "CONNECTION_ERROR"] = 1;
    values[valuesById[2] = "CONNECTION_PING"] = 2;
    values[valuesById[3] = "CONNECTION_PONG"] = 3;
    values[valuesById[4] = "CONNECTION_ACCEPT"] = 4;
    values[valuesById[5] = "CONNECTION_CHALLENGE"] = 5;
    values[valuesById[6] = "CONNECTION_REJECT"] = 6;
    values[valuesById[7] = "CONNECTION_REDIRECT"] = 7;
    values[valuesById[8] = "CONNECTION_CLOSING"] = 8;
    values[valuesById[9] = "CONNECTION_CLOSED"] = 9;
    values[valuesById[100] = "CONNECTION_AUTHENTICATION_TIMEOUT"] = 100;
    values[valuesById[101] = "CONNECTION_INVALID_MESSAGE"] = 101;
    return values;
})();

$root.ConnectionMessage = (function() {

    /**
     * Properties of a ConnectionMessage.
     * @exports IConnectionMessage
     * @interface IConnectionMessage
     * @property {CONNECTION_ACTION|null} [action] ConnectionMessage action
     * @property {string|null} [data] ConnectionMessage data
     * @property {boolean|null} [isError] ConnectionMessage isError
     * @property {boolean|null} [isAck] ConnectionMessage isAck
     * @property {string|null} [url] ConnectionMessage url
     * @property {string|null} [protocolVersion] ConnectionMessage protocolVersion
     * @property {string|null} [sdkType] ConnectionMessage sdkType
     * @property {string|null} [sdkVersion] ConnectionMessage sdkVersion
     */

    /**
     * Constructs a new ConnectionMessage.
     * @exports ConnectionMessage
     * @classdesc Represents a ConnectionMessage.
     * @implements IConnectionMessage
     * @constructor
     * @param {IConnectionMessage=} [properties] Properties to set
     */
    function ConnectionMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConnectionMessage action.
     * @member {CONNECTION_ACTION} action
     * @memberof ConnectionMessage
     * @instance
     */
    ConnectionMessage.prototype.action = 0;

    /**
     * ConnectionMessage data.
     * @member {string} data
     * @memberof ConnectionMessage
     * @instance
     */
    ConnectionMessage.prototype.data = "";

    /**
     * ConnectionMessage isError.
     * @member {boolean} isError
     * @memberof ConnectionMessage
     * @instance
     */
    ConnectionMessage.prototype.isError = false;

    /**
     * ConnectionMessage isAck.
     * @member {boolean} isAck
     * @memberof ConnectionMessage
     * @instance
     */
    ConnectionMessage.prototype.isAck = false;

    /**
     * ConnectionMessage url.
     * @member {string} url
     * @memberof ConnectionMessage
     * @instance
     */
    ConnectionMessage.prototype.url = "";

    /**
     * ConnectionMessage protocolVersion.
     * @member {string} protocolVersion
     * @memberof ConnectionMessage
     * @instance
     */
    ConnectionMessage.prototype.protocolVersion = "";

    /**
     * ConnectionMessage sdkType.
     * @member {string} sdkType
     * @memberof ConnectionMessage
     * @instance
     */
    ConnectionMessage.prototype.sdkType = "";

    /**
     * ConnectionMessage sdkVersion.
     * @member {string} sdkVersion
     * @memberof ConnectionMessage
     * @instance
     */
    ConnectionMessage.prototype.sdkVersion = "";

    /**
     * Encodes the specified ConnectionMessage message. Does not implicitly {@link ConnectionMessage.verify|verify} messages.
     * @function encode
     * @memberof ConnectionMessage
     * @static
     * @param {IConnectionMessage} message ConnectionMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConnectionMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
        if (message.isError != null && Object.hasOwnProperty.call(message, "isError"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isError);
        if (message.isAck != null && Object.hasOwnProperty.call(message, "isAck"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isAck);
        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.url);
        if (message.protocolVersion != null && Object.hasOwnProperty.call(message, "protocolVersion"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.protocolVersion);
        if (message.sdkVersion != null && Object.hasOwnProperty.call(message, "sdkVersion"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.sdkVersion);
        if (message.sdkType != null && Object.hasOwnProperty.call(message, "sdkType"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.sdkType);
        return writer;
    };

    /**
     * Encodes the specified ConnectionMessage message, length delimited. Does not implicitly {@link ConnectionMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConnectionMessage
     * @static
     * @param {IConnectionMessage} message ConnectionMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConnectionMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConnectionMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ConnectionMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConnectionMessage} ConnectionMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConnectionMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConnectionMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.action = reader.int32();
                break;
            case 2:
                message.data = reader.string();
                break;
            case 3:
                message.isError = reader.bool();
                break;
            case 4:
                message.isAck = reader.bool();
                break;
            case 5:
                message.url = reader.string();
                break;
            case 6:
                message.protocolVersion = reader.string();
                break;
            case 8:
                message.sdkType = reader.string();
                break;
            case 7:
                message.sdkVersion = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConnectionMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConnectionMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConnectionMessage} ConnectionMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConnectionMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    return ConnectionMessage;
})();

/**
 * EVENT_ACTION enum.
 * @exports EVENT_ACTION
 * @enum {number}
 * @property {number} EVENT_UNKNOWN=0 EVENT_UNKNOWN value
 * @property {number} EVENT_ERROR=1 EVENT_ERROR value
 * @property {number} EVENT_EMIT=2 EVENT_EMIT value
 * @property {number} EVENT_SUBSCRIBE=3 EVENT_SUBSCRIBE value
 * @property {number} EVENT_UNSUBSCRIBE=4 EVENT_UNSUBSCRIBE value
 * @property {number} EVENT_LISTEN=5 EVENT_LISTEN value
 * @property {number} EVENT_UNLISTEN=6 EVENT_UNLISTEN value
 * @property {number} EVENT_LISTEN_ACCEPT=7 EVENT_LISTEN_ACCEPT value
 * @property {number} EVENT_LISTEN_REJECT=8 EVENT_LISTEN_REJECT value
 * @property {number} EVENT_SUBSCRIPTION_HAS_PROVIDER=9 EVENT_SUBSCRIPTION_HAS_PROVIDER value
 * @property {number} EVENT_SUBSCRIPTION_HAS_NO_PROVIDER=10 EVENT_SUBSCRIPTION_HAS_NO_PROVIDER value
 * @property {number} EVENT_SUBSCRIPTION_FOR_PATTERN_FOUND=11 EVENT_SUBSCRIPTION_FOR_PATTERN_FOUND value
 * @property {number} EVENT_SUBSCRIPTION_FOR_PATTERN_REMOVED=12 EVENT_SUBSCRIPTION_FOR_PATTERN_REMOVED value
 * @property {number} EVENT_INVALID_LISTEN_REGEX=100 EVENT_INVALID_LISTEN_REGEX value
 * @property {number} EVENT_LISTEN_RESPONSE_TIMEOUT=101 EVENT_LISTEN_RESPONSE_TIMEOUT value
 * @property {number} EVENT_LISTEN_UNSUCCESSFUL=102 EVENT_LISTEN_UNSUCCESSFUL value
 * @property {number} EVENT_MESSAGE_PERMISSION_ERROR=103 EVENT_MESSAGE_PERMISSION_ERROR value
 * @property {number} EVENT_MESSAGE_DENIED=104 EVENT_MESSAGE_DENIED value
 * @property {number} EVENT_INVALID_MESSAGE_DATA=105 EVENT_INVALID_MESSAGE_DATA value
 * @property {number} EVENT_MULTIPLE_SUBSCRIPTIONS=106 EVENT_MULTIPLE_SUBSCRIPTIONS value
 * @property {number} EVENT_NOT_SUBSCRIBED=107 EVENT_NOT_SUBSCRIBED value
 */
$root.EVENT_ACTION = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "EVENT_UNKNOWN"] = 0;
    values[valuesById[1] = "EVENT_ERROR"] = 1;
    values[valuesById[2] = "EVENT_EMIT"] = 2;
    values[valuesById[3] = "EVENT_SUBSCRIBE"] = 3;
    values[valuesById[4] = "EVENT_UNSUBSCRIBE"] = 4;
    values[valuesById[5] = "EVENT_LISTEN"] = 5;
    values[valuesById[6] = "EVENT_UNLISTEN"] = 6;
    values[valuesById[7] = "EVENT_LISTEN_ACCEPT"] = 7;
    values[valuesById[8] = "EVENT_LISTEN_REJECT"] = 8;
    values[valuesById[9] = "EVENT_SUBSCRIPTION_HAS_PROVIDER"] = 9;
    values[valuesById[10] = "EVENT_SUBSCRIPTION_HAS_NO_PROVIDER"] = 10;
    values[valuesById[11] = "EVENT_SUBSCRIPTION_FOR_PATTERN_FOUND"] = 11;
    values[valuesById[12] = "EVENT_SUBSCRIPTION_FOR_PATTERN_REMOVED"] = 12;
    values[valuesById[100] = "EVENT_INVALID_LISTEN_REGEX"] = 100;
    values[valuesById[101] = "EVENT_LISTEN_RESPONSE_TIMEOUT"] = 101;
    values[valuesById[102] = "EVENT_LISTEN_UNSUCCESSFUL"] = 102;
    values[valuesById[103] = "EVENT_MESSAGE_PERMISSION_ERROR"] = 103;
    values[valuesById[104] = "EVENT_MESSAGE_DENIED"] = 104;
    values[valuesById[105] = "EVENT_INVALID_MESSAGE_DATA"] = 105;
    values[valuesById[106] = "EVENT_MULTIPLE_SUBSCRIPTIONS"] = 106;
    values[valuesById[107] = "EVENT_NOT_SUBSCRIBED"] = 107;
    return values;
})();

$root.EventMessage = (function() {

    /**
     * Properties of an EventMessage.
     * @exports IEventMessage
     * @interface IEventMessage
     * @property {EVENT_ACTION|null} [action] EventMessage action
     * @property {string|null} [data] EventMessage data
     * @property {string|null} [correlationId] EventMessage correlationId
     * @property {boolean|null} [isError] EventMessage isError
     * @property {boolean|null} [isAck] EventMessage isAck
     * @property {string|null} [name] EventMessage name
     * @property {Array.<string>|null} [names] EventMessage names
     * @property {string|null} [subscription] EventMessage subscription
     * @property {TOPIC|null} [originalTOPIC] EventMessage originalTOPIC
     * @property {EVENT_ACTION|null} [originalAction] EventMessage originalAction
     */

    /**
     * Constructs a new EventMessage.
     * @exports EventMessage
     * @classdesc Represents an EventMessage.
     * @implements IEventMessage
     * @constructor
     * @param {IEventMessage=} [properties] Properties to set
     */
    function EventMessage(properties) {
        this.names = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EventMessage action.
     * @member {EVENT_ACTION} action
     * @memberof EventMessage
     * @instance
     */
    EventMessage.prototype.action = 0;

    /**
     * EventMessage data.
     * @member {string} data
     * @memberof EventMessage
     * @instance
     */
    EventMessage.prototype.data = "";

    /**
     * EventMessage correlationId.
     * @member {string} correlationId
     * @memberof EventMessage
     * @instance
     */
    EventMessage.prototype.correlationId = "";

    /**
     * EventMessage isError.
     * @member {boolean} isError
     * @memberof EventMessage
     * @instance
     */
    EventMessage.prototype.isError = false;

    /**
     * EventMessage isAck.
     * @member {boolean} isAck
     * @memberof EventMessage
     * @instance
     */
    EventMessage.prototype.isAck = false;

    /**
     * EventMessage name.
     * @member {string} name
     * @memberof EventMessage
     * @instance
     */
    EventMessage.prototype.name = "";

    /**
     * EventMessage names.
     * @member {Array.<string>} names
     * @memberof EventMessage
     * @instance
     */
    EventMessage.prototype.names = $util.emptyArray;

    /**
     * EventMessage subscription.
     * @member {string} subscription
     * @memberof EventMessage
     * @instance
     */
    EventMessage.prototype.subscription = "";

    /**
     * EventMessage originalTOPIC.
     * @member {TOPIC} originalTOPIC
     * @memberof EventMessage
     * @instance
     */
    EventMessage.prototype.originalTOPIC = 0;

    /**
     * EventMessage originalAction.
     * @member {EVENT_ACTION} originalAction
     * @memberof EventMessage
     * @instance
     */
    EventMessage.prototype.originalAction = 0;

    /**
     * Encodes the specified EventMessage message. Does not implicitly {@link EventMessage.verify|verify} messages.
     * @function encode
     * @memberof EventMessage
     * @static
     * @param {IEventMessage} message EventMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
        if (message.correlationId != null && Object.hasOwnProperty.call(message, "correlationId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.correlationId);
        if (message.isError != null && Object.hasOwnProperty.call(message, "isError"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isError);
        if (message.isAck != null && Object.hasOwnProperty.call(message, "isAck"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isAck);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.name);
        if (message.names != null && message.names.length)
            for (var i = 0; i < message.names.length; ++i)
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.names[i]);
        if (message.subscription != null && Object.hasOwnProperty.call(message, "subscription"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.subscription);
        if (message.originalTOPIC != null && Object.hasOwnProperty.call(message, "originalTOPIC"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.originalTOPIC);
        if (message.originalAction != null && Object.hasOwnProperty.call(message, "originalAction"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.originalAction);
        return writer;
    };

    /**
     * Encodes the specified EventMessage message, length delimited. Does not implicitly {@link EventMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EventMessage
     * @static
     * @param {IEventMessage} message EventMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EventMessage message from the specified reader or buffer.
     * @function decode
     * @memberof EventMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EventMessage} EventMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.action = reader.int32();
                break;
            case 2:
                message.data = reader.string();
                break;
            case 3:
                message.correlationId = reader.string();
                break;
            case 4:
                message.isError = reader.bool();
                break;
            case 5:
                message.isAck = reader.bool();
                break;
            case 6:
                message.name = reader.string();
                break;
            case 7:
                if (!(message.names && message.names.length))
                    message.names = [];
                message.names.push(reader.string());
                break;
            case 8:
                message.subscription = reader.string();
                break;
            case 10:
                message.originalTOPIC = reader.int32();
                break;
            case 11:
                message.originalAction = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EventMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EventMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EventMessage} EventMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    return EventMessage;
})();

/**
 * TOPIC enum.
 * @exports TOPIC
 * @enum {number}
 * @property {number} UNKNOWN=0 UNKNOWN value
 * @property {number} PARSER=1 PARSER value
 * @property {number} CONNECTION=2 CONNECTION value
 * @property {number} AUTH=3 AUTH value
 * @property {number} EVENT=4 EVENT value
 * @property {number} RECORD=5 RECORD value
 * @property {number} RPC=6 RPC value
 * @property {number} PRESENCE=7 PRESENCE value
 * @property {number} MONITORING=8 MONITORING value
 * @property {number} CLUSTER=9 CLUSTER value
 * @property {number} LOCK=10 LOCK value
 * @property {number} STATE_REGISTRY=11 STATE_REGISTRY value
 * @property {number} ERROR=100 ERROR value
 */
$root.TOPIC = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "UNKNOWN"] = 0;
    values[valuesById[1] = "PARSER"] = 1;
    values[valuesById[2] = "CONNECTION"] = 2;
    values[valuesById[3] = "AUTH"] = 3;
    values[valuesById[4] = "EVENT"] = 4;
    values[valuesById[5] = "RECORD"] = 5;
    values[valuesById[6] = "RPC"] = 6;
    values[valuesById[7] = "PRESENCE"] = 7;
    values[valuesById[8] = "MONITORING"] = 8;
    values[valuesById[9] = "CLUSTER"] = 9;
    values[valuesById[10] = "LOCK"] = 10;
    values[valuesById[11] = "STATE_REGISTRY"] = 11;
    values[valuesById[100] = "ERROR"] = 100;
    return values;
})();

$root.Message = (function() {

    /**
     * Properties of a Message.
     * @exports IMessage
     * @interface IMessage
     * @property {TOPIC|null} [topic] Message topic
     * @property {Uint8Array|null} [message] Message message
     */

    /**
     * Constructs a new Message.
     * @exports Message
     * @classdesc Represents a Message.
     * @implements IMessage
     * @constructor
     * @param {IMessage=} [properties] Properties to set
     */
    function Message(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Message topic.
     * @member {TOPIC} topic
     * @memberof Message
     * @instance
     */
    Message.prototype.topic = 0;

    /**
     * Message message.
     * @member {Uint8Array} message
     * @memberof Message
     * @instance
     */
    Message.prototype.message = $util.newBuffer([]);

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @function encode
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.topic != null && Object.hasOwnProperty.call(message, "topic"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.topic);
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.message);
        return writer;
    };

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @function decode
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.topic = reader.int32();
                break;
            case 3:
                message.message = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    return Message;
})();

/**
 * LOCK_ACTION enum.
 * @exports LOCK_ACTION
 * @enum {number}
 * @property {number} LOCK_UNKNOWN=0 LOCK_UNKNOWN value
 * @property {number} LOCK_ERROR=1 LOCK_ERROR value
 * @property {number} LOCK_REQUEST=2 LOCK_REQUEST value
 * @property {number} LOCK_RESPONSE=3 LOCK_RESPONSE value
 * @property {number} LOCK_RELEASE=4 LOCK_RELEASE value
 */
$root.LOCK_ACTION = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "LOCK_UNKNOWN"] = 0;
    values[valuesById[1] = "LOCK_ERROR"] = 1;
    values[valuesById[2] = "LOCK_REQUEST"] = 2;
    values[valuesById[3] = "LOCK_RESPONSE"] = 3;
    values[valuesById[4] = "LOCK_RELEASE"] = 4;
    return values;
})();

$root.LockMessage = (function() {

    /**
     * Properties of a LockMessage.
     * @exports ILockMessage
     * @interface ILockMessage
     * @property {LOCK_ACTION|null} [action] LockMessage action
     * @property {boolean|null} [locked] LockMessage locked
     */

    /**
     * Constructs a new LockMessage.
     * @exports LockMessage
     * @classdesc Represents a LockMessage.
     * @implements ILockMessage
     * @constructor
     * @param {ILockMessage=} [properties] Properties to set
     */
    function LockMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LockMessage action.
     * @member {LOCK_ACTION} action
     * @memberof LockMessage
     * @instance
     */
    LockMessage.prototype.action = 0;

    /**
     * LockMessage locked.
     * @member {boolean} locked
     * @memberof LockMessage
     * @instance
     */
    LockMessage.prototype.locked = false;

    /**
     * Encodes the specified LockMessage message. Does not implicitly {@link LockMessage.verify|verify} messages.
     * @function encode
     * @memberof LockMessage
     * @static
     * @param {ILockMessage} message LockMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LockMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
        if (message.locked != null && Object.hasOwnProperty.call(message, "locked"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.locked);
        return writer;
    };

    /**
     * Encodes the specified LockMessage message, length delimited. Does not implicitly {@link LockMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LockMessage
     * @static
     * @param {ILockMessage} message LockMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LockMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LockMessage message from the specified reader or buffer.
     * @function decode
     * @memberof LockMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LockMessage} LockMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LockMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LockMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.action = reader.int32();
                break;
            case 3:
                message.locked = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LockMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LockMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LockMessage} LockMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LockMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    return LockMessage;
})();

/**
 * MONITORING_ACTION enum.
 * @exports MONITORING_ACTION
 * @enum {number}
 * @property {number} MONITORING_UNKNOWN=0 MONITORING_UNKNOWN value
 */
$root.MONITORING_ACTION = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "MONITORING_UNKNOWN"] = 0;
    return values;
})();

$root.MonitoringMessage = (function() {

    /**
     * Properties of a MonitoringMessage.
     * @exports IMonitoringMessage
     * @interface IMonitoringMessage
     * @property {MONITORING_ACTION|null} [action] MonitoringMessage action
     * @property {string|null} [data] MonitoringMessage data
     * @property {string|null} [correlationId] MonitoringMessage correlationId
     * @property {boolean|null} [isError] MonitoringMessage isError
     * @property {boolean|null} [isAck] MonitoringMessage isAck
     */

    /**
     * Constructs a new MonitoringMessage.
     * @exports MonitoringMessage
     * @classdesc Represents a MonitoringMessage.
     * @implements IMonitoringMessage
     * @constructor
     * @param {IMonitoringMessage=} [properties] Properties to set
     */
    function MonitoringMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MonitoringMessage action.
     * @member {MONITORING_ACTION} action
     * @memberof MonitoringMessage
     * @instance
     */
    MonitoringMessage.prototype.action = 0;

    /**
     * MonitoringMessage data.
     * @member {string} data
     * @memberof MonitoringMessage
     * @instance
     */
    MonitoringMessage.prototype.data = "";

    /**
     * MonitoringMessage correlationId.
     * @member {string} correlationId
     * @memberof MonitoringMessage
     * @instance
     */
    MonitoringMessage.prototype.correlationId = "";

    /**
     * MonitoringMessage isError.
     * @member {boolean} isError
     * @memberof MonitoringMessage
     * @instance
     */
    MonitoringMessage.prototype.isError = false;

    /**
     * MonitoringMessage isAck.
     * @member {boolean} isAck
     * @memberof MonitoringMessage
     * @instance
     */
    MonitoringMessage.prototype.isAck = false;

    /**
     * Encodes the specified MonitoringMessage message. Does not implicitly {@link MonitoringMessage.verify|verify} messages.
     * @function encode
     * @memberof MonitoringMessage
     * @static
     * @param {IMonitoringMessage} message MonitoringMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MonitoringMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
        if (message.correlationId != null && Object.hasOwnProperty.call(message, "correlationId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.correlationId);
        if (message.isError != null && Object.hasOwnProperty.call(message, "isError"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isError);
        if (message.isAck != null && Object.hasOwnProperty.call(message, "isAck"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isAck);
        return writer;
    };

    /**
     * Encodes the specified MonitoringMessage message, length delimited. Does not implicitly {@link MonitoringMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MonitoringMessage
     * @static
     * @param {IMonitoringMessage} message MonitoringMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MonitoringMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MonitoringMessage message from the specified reader or buffer.
     * @function decode
     * @memberof MonitoringMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MonitoringMessage} MonitoringMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MonitoringMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MonitoringMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.action = reader.int32();
                break;
            case 2:
                message.data = reader.string();
                break;
            case 3:
                message.correlationId = reader.string();
                break;
            case 4:
                message.isError = reader.bool();
                break;
            case 5:
                message.isAck = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MonitoringMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MonitoringMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MonitoringMessage} MonitoringMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MonitoringMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    return MonitoringMessage;
})();

/**
 * PARSER_ACTION enum.
 * @exports PARSER_ACTION
 * @enum {number}
 * @property {number} PARSER_UNKNOWN=0 PARSER_UNKNOWN value
 * @property {number} PARSER_UNKNOWN_TOPIC=1 PARSER_UNKNOWN_TOPIC value
 * @property {number} PARSER_UNKNOWN_ACTION=2 PARSER_UNKNOWN_ACTION value
 * @property {number} PARSER_INVALID_MESSAGE=3 PARSER_INVALID_MESSAGE value
 * @property {number} PARSER_MESSAGE_PARSE_ERROR=4 PARSER_MESSAGE_PARSE_ERROR value
 * @property {number} PARSER_MAXIMUM_MESSAGE_SIZE_EXCEEDED=5 PARSER_MAXIMUM_MESSAGE_SIZE_EXCEEDED value
 * @property {number} PARSER_ERROR=6 PARSER_ERROR value
 * @property {number} PARSER_INVALID_META_PARAMS=7 PARSER_INVALID_META_PARAMS value
 */
$root.PARSER_ACTION = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "PARSER_UNKNOWN"] = 0;
    values[valuesById[1] = "PARSER_UNKNOWN_TOPIC"] = 1;
    values[valuesById[2] = "PARSER_UNKNOWN_ACTION"] = 2;
    values[valuesById[3] = "PARSER_INVALID_MESSAGE"] = 3;
    values[valuesById[4] = "PARSER_MESSAGE_PARSE_ERROR"] = 4;
    values[valuesById[5] = "PARSER_MAXIMUM_MESSAGE_SIZE_EXCEEDED"] = 5;
    values[valuesById[6] = "PARSER_ERROR"] = 6;
    values[valuesById[7] = "PARSER_INVALID_META_PARAMS"] = 7;
    return values;
})();

$root.ParserMessage = (function() {

    /**
     * Properties of a ParserMessage.
     * @exports IParserMessage
     * @interface IParserMessage
     * @property {PARSER_ACTION|null} [action] ParserMessage action
     * @property {string|null} [data] ParserMessage data
     * @property {TOPIC|null} [originalTOPIC] ParserMessage originalTOPIC
     * @property {number|null} [originalAction] ParserMessage originalAction
     */

    /**
     * Constructs a new ParserMessage.
     * @exports ParserMessage
     * @classdesc Represents a ParserMessage.
     * @implements IParserMessage
     * @constructor
     * @param {IParserMessage=} [properties] Properties to set
     */
    function ParserMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ParserMessage action.
     * @member {PARSER_ACTION} action
     * @memberof ParserMessage
     * @instance
     */
    ParserMessage.prototype.action = 0;

    /**
     * ParserMessage data.
     * @member {string} data
     * @memberof ParserMessage
     * @instance
     */
    ParserMessage.prototype.data = "";

    /**
     * ParserMessage originalTOPIC.
     * @member {TOPIC} originalTOPIC
     * @memberof ParserMessage
     * @instance
     */
    ParserMessage.prototype.originalTOPIC = 0;

    /**
     * ParserMessage originalAction.
     * @member {number} originalAction
     * @memberof ParserMessage
     * @instance
     */
    ParserMessage.prototype.originalAction = 0;

    /**
     * Encodes the specified ParserMessage message. Does not implicitly {@link ParserMessage.verify|verify} messages.
     * @function encode
     * @memberof ParserMessage
     * @static
     * @param {IParserMessage} message ParserMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ParserMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
        if (message.originalTOPIC != null && Object.hasOwnProperty.call(message, "originalTOPIC"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.originalTOPIC);
        if (message.originalAction != null && Object.hasOwnProperty.call(message, "originalAction"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.originalAction);
        return writer;
    };

    /**
     * Encodes the specified ParserMessage message, length delimited. Does not implicitly {@link ParserMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ParserMessage
     * @static
     * @param {IParserMessage} message ParserMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ParserMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ParserMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ParserMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ParserMessage} ParserMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ParserMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ParserMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.action = reader.int32();
                break;
            case 2:
                message.data = reader.string();
                break;
            case 8:
                message.originalTOPIC = reader.int32();
                break;
            case 9:
                message.originalAction = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ParserMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ParserMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ParserMessage} ParserMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ParserMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    return ParserMessage;
})();

/**
 * PRESENCE_ACTION enum.
 * @exports PRESENCE_ACTION
 * @enum {number}
 * @property {number} PRESENCE_UNKNOWN=0 PRESENCE_UNKNOWN value
 * @property {number} PRESENCE_ERROR=1 PRESENCE_ERROR value
 * @property {number} PRESENCE_QUERY_ALL=2 PRESENCE_QUERY_ALL value
 * @property {number} PRESENCE_QUERY_ALL_RESPONSE=3 PRESENCE_QUERY_ALL_RESPONSE value
 * @property {number} PRESENCE_QUERY=4 PRESENCE_QUERY value
 * @property {number} PRESENCE_QUERY_RESPONSE=5 PRESENCE_QUERY_RESPONSE value
 * @property {number} PRESENCE_PRESENCE_JOIN=6 PRESENCE_PRESENCE_JOIN value
 * @property {number} PRESENCE_PRESENCE_JOIN_ALL=7 PRESENCE_PRESENCE_JOIN_ALL value
 * @property {number} PRESENCE_PRESENCE_LEAVE=8 PRESENCE_PRESENCE_LEAVE value
 * @property {number} PRESENCE_PRESENCE_LEAVE_ALL=9 PRESENCE_PRESENCE_LEAVE_ALL value
 * @property {number} PRESENCE_SUBSCRIBE=10 PRESENCE_SUBSCRIBE value
 * @property {number} PRESENCE_UNSUBSCRIBE=11 PRESENCE_UNSUBSCRIBE value
 * @property {number} PRESENCE_SUBSCRIBE_ALL=12 PRESENCE_SUBSCRIBE_ALL value
 * @property {number} PRESENCE_UNSUBSCRIBE_ALL=13 PRESENCE_UNSUBSCRIBE_ALL value
 * @property {number} PRESENCE_INVALID_PRESENCE_USERS=100 PRESENCE_INVALID_PRESENCE_USERS value
 * @property {number} PRESENCE_MESSAGE_PERMISSION_ERROR=101 PRESENCE_MESSAGE_PERMISSION_ERROR value
 * @property {number} PRESENCE_MESSAGE_DENIED=102 PRESENCE_MESSAGE_DENIED value
 * @property {number} PRESENCE_MULTIPLE_SUBSCRIPTIONS=103 PRESENCE_MULTIPLE_SUBSCRIPTIONS value
 * @property {number} PRESENCE_NOT_SUBSCRIBED=104 PRESENCE_NOT_SUBSCRIBED value
 */
$root.PRESENCE_ACTION = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "PRESENCE_UNKNOWN"] = 0;
    values[valuesById[1] = "PRESENCE_ERROR"] = 1;
    values[valuesById[2] = "PRESENCE_QUERY_ALL"] = 2;
    values[valuesById[3] = "PRESENCE_QUERY_ALL_RESPONSE"] = 3;
    values[valuesById[4] = "PRESENCE_QUERY"] = 4;
    values[valuesById[5] = "PRESENCE_QUERY_RESPONSE"] = 5;
    values[valuesById[6] = "PRESENCE_PRESENCE_JOIN"] = 6;
    values[valuesById[7] = "PRESENCE_PRESENCE_JOIN_ALL"] = 7;
    values[valuesById[8] = "PRESENCE_PRESENCE_LEAVE"] = 8;
    values[valuesById[9] = "PRESENCE_PRESENCE_LEAVE_ALL"] = 9;
    values[valuesById[10] = "PRESENCE_SUBSCRIBE"] = 10;
    values[valuesById[11] = "PRESENCE_UNSUBSCRIBE"] = 11;
    values[valuesById[12] = "PRESENCE_SUBSCRIBE_ALL"] = 12;
    values[valuesById[13] = "PRESENCE_UNSUBSCRIBE_ALL"] = 13;
    values[valuesById[100] = "PRESENCE_INVALID_PRESENCE_USERS"] = 100;
    values[valuesById[101] = "PRESENCE_MESSAGE_PERMISSION_ERROR"] = 101;
    values[valuesById[102] = "PRESENCE_MESSAGE_DENIED"] = 102;
    values[valuesById[103] = "PRESENCE_MULTIPLE_SUBSCRIPTIONS"] = 103;
    values[valuesById[104] = "PRESENCE_NOT_SUBSCRIBED"] = 104;
    return values;
})();

$root.PresenceMessage = (function() {

    /**
     * Properties of a PresenceMessage.
     * @exports IPresenceMessage
     * @interface IPresenceMessage
     * @property {PRESENCE_ACTION|null} [action] PresenceMessage action
     * @property {TOPIC|null} [originalTOPIC] PresenceMessage originalTOPIC
     * @property {number|null} [originalAction] PresenceMessage originalAction
     * @property {string|null} [data] PresenceMessage data
     * @property {string|null} [correlationId] PresenceMessage correlationId
     * @property {boolean|null} [isError] PresenceMessage isError
     * @property {boolean|null} [isAck] PresenceMessage isAck
     * @property {string|null} [name] PresenceMessage name
     * @property {Array.<string>|null} [names] PresenceMessage names
     */

    /**
     * Constructs a new PresenceMessage.
     * @exports PresenceMessage
     * @classdesc Represents a PresenceMessage.
     * @implements IPresenceMessage
     * @constructor
     * @param {IPresenceMessage=} [properties] Properties to set
     */
    function PresenceMessage(properties) {
        this.names = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PresenceMessage action.
     * @member {PRESENCE_ACTION} action
     * @memberof PresenceMessage
     * @instance
     */
    PresenceMessage.prototype.action = 0;

    /**
     * PresenceMessage originalTOPIC.
     * @member {TOPIC} originalTOPIC
     * @memberof PresenceMessage
     * @instance
     */
    PresenceMessage.prototype.originalTOPIC = 0;

    /**
     * PresenceMessage originalAction.
     * @member {number} originalAction
     * @memberof PresenceMessage
     * @instance
     */
    PresenceMessage.prototype.originalAction = 0;

    /**
     * PresenceMessage data.
     * @member {string} data
     * @memberof PresenceMessage
     * @instance
     */
    PresenceMessage.prototype.data = "";

    /**
     * PresenceMessage correlationId.
     * @member {string} correlationId
     * @memberof PresenceMessage
     * @instance
     */
    PresenceMessage.prototype.correlationId = "";

    /**
     * PresenceMessage isError.
     * @member {boolean} isError
     * @memberof PresenceMessage
     * @instance
     */
    PresenceMessage.prototype.isError = false;

    /**
     * PresenceMessage isAck.
     * @member {boolean} isAck
     * @memberof PresenceMessage
     * @instance
     */
    PresenceMessage.prototype.isAck = false;

    /**
     * PresenceMessage name.
     * @member {string} name
     * @memberof PresenceMessage
     * @instance
     */
    PresenceMessage.prototype.name = "";

    /**
     * PresenceMessage names.
     * @member {Array.<string>} names
     * @memberof PresenceMessage
     * @instance
     */
    PresenceMessage.prototype.names = $util.emptyArray;

    /**
     * Encodes the specified PresenceMessage message. Does not implicitly {@link PresenceMessage.verify|verify} messages.
     * @function encode
     * @memberof PresenceMessage
     * @static
     * @param {IPresenceMessage} message PresenceMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PresenceMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
        if (message.originalTOPIC != null && Object.hasOwnProperty.call(message, "originalTOPIC"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.originalTOPIC);
        if (message.originalAction != null && Object.hasOwnProperty.call(message, "originalAction"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.originalAction);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.data);
        if (message.correlationId != null && Object.hasOwnProperty.call(message, "correlationId"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.correlationId);
        if (message.isError != null && Object.hasOwnProperty.call(message, "isError"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isError);
        if (message.isAck != null && Object.hasOwnProperty.call(message, "isAck"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isAck);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.name);
        if (message.names != null && message.names.length)
            for (var i = 0; i < message.names.length; ++i)
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.names[i]);
        return writer;
    };

    /**
     * Encodes the specified PresenceMessage message, length delimited. Does not implicitly {@link PresenceMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PresenceMessage
     * @static
     * @param {IPresenceMessage} message PresenceMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PresenceMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PresenceMessage message from the specified reader or buffer.
     * @function decode
     * @memberof PresenceMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PresenceMessage} PresenceMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PresenceMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PresenceMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.action = reader.int32();
                break;
            case 2:
                message.originalTOPIC = reader.int32();
                break;
            case 3:
                message.originalAction = reader.int32();
                break;
            case 4:
                message.data = reader.string();
                break;
            case 5:
                message.correlationId = reader.string();
                break;
            case 6:
                message.isError = reader.bool();
                break;
            case 7:
                message.isAck = reader.bool();
                break;
            case 8:
                message.name = reader.string();
                break;
            case 9:
                if (!(message.names && message.names.length))
                    message.names = [];
                message.names.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PresenceMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PresenceMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PresenceMessage} PresenceMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PresenceMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    return PresenceMessage;
})();

/**
 * RECORD_ACTION enum.
 * @exports RECORD_ACTION
 * @enum {number}
 * @property {number} RECORD_UNKNOWN=0 RECORD_UNKNOWN value
 * @property {number} RECORD_ERROR=1 RECORD_ERROR value
 * @property {number} RECORD_NOTIFY=2 RECORD_NOTIFY value
 * @property {number} RECORD_READ=3 RECORD_READ value
 * @property {number} RECORD_READ_RESPONSE=4 RECORD_READ_RESPONSE value
 * @property {number} RECORD_HEAD=5 RECORD_HEAD value
 * @property {number} RECORD_HEAD_RESPONSE=6 RECORD_HEAD_RESPONSE value
 * @property {number} RECORD_HEAD_BULK=7 RECORD_HEAD_BULK value
 * @property {number} RECORD_HEAD_RESPONSE_BULK=8 RECORD_HEAD_RESPONSE_BULK value
 * @property {number} RECORD_DELETE=9 RECORD_DELETE value
 * @property {number} RECORD_DELETE_SUCCESS=10 RECORD_DELETE_SUCCESS value
 * @property {number} RECORD_DELETE_BULK=11 RECORD_DELETE_BULK value
 * @property {number} RECORD_DELETE_BULK_SUCCESS=12 RECORD_DELETE_BULK_SUCCESS value
 * @property {number} RECORD_DELETED=13 RECORD_DELETED value
 * @property {number} RECORD_WRITE_ACKNOWLEDGEMENT=14 RECORD_WRITE_ACKNOWLEDGEMENT value
 * @property {number} RECORD_CREATE=15 RECORD_CREATE value
 * @property {number} RECORD_CREATEANDUPDATE=16 RECORD_CREATEANDUPDATE value
 * @property {number} RECORD_CREATEANDPATCH=17 RECORD_CREATEANDPATCH value
 * @property {number} RECORD_UPDATE=18 RECORD_UPDATE value
 * @property {number} RECORD_PATCH=19 RECORD_PATCH value
 * @property {number} RECORD_ERASE=20 RECORD_ERASE value
 * @property {number} RECORD_SUBSCRIBEANDHEAD=21 RECORD_SUBSCRIBEANDHEAD value
 * @property {number} RECORD_SUBSCRIBEANDREAD=22 RECORD_SUBSCRIBEANDREAD value
 * @property {number} RECORD_SUBSCRIBECREATEANDREAD=23 RECORD_SUBSCRIBECREATEANDREAD value
 * @property {number} RECORD_SUBSCRIBECREATEANDUPDATE=24 RECORD_SUBSCRIBECREATEANDUPDATE value
 * @property {number} RECORD_SUBSCRIBE=25 RECORD_SUBSCRIBE value
 * @property {number} RECORD_UNSUBSCRIBE=26 RECORD_UNSUBSCRIBE value
 * @property {number} RECORD_LISTEN=27 RECORD_LISTEN value
 * @property {number} RECORD_UNLISTEN=28 RECORD_UNLISTEN value
 * @property {number} RECORD_LISTEN_ACCEPT=29 RECORD_LISTEN_ACCEPT value
 * @property {number} RECORD_LISTEN_REJECT=30 RECORD_LISTEN_REJECT value
 * @property {number} RECORD_SUBSCRIPTION_HAS_PROVIDER=31 RECORD_SUBSCRIPTION_HAS_PROVIDER value
 * @property {number} RECORD_SUBSCRIPTION_HAS_NO_PROVIDER=32 RECORD_SUBSCRIPTION_HAS_NO_PROVIDER value
 * @property {number} RECORD_SUBSCRIPTION_FOR_PATTERN_FOUND=33 RECORD_SUBSCRIPTION_FOR_PATTERN_FOUND value
 * @property {number} RECORD_SUBSCRIPTION_FOR_PATTERN_REMOVED=34 RECORD_SUBSCRIPTION_FOR_PATTERN_REMOVED value
 * @property {number} RECORD_CACHE_RETRIEVAL_TIMEOUT=100 RECORD_CACHE_RETRIEVAL_TIMEOUT value
 * @property {number} RECORD_STORAGE_RETRIEVAL_TIMEOUT=101 RECORD_STORAGE_RETRIEVAL_TIMEOUT value
 * @property {number} RECORD_VERSION_EXISTS=102 RECORD_VERSION_EXISTS value
 * @property {number} RECORD_RECORD_LOAD_ERROR=103 RECORD_RECORD_LOAD_ERROR value
 * @property {number} RECORD_RECORD_CREATE_ERROR=104 RECORD_RECORD_CREATE_ERROR value
 * @property {number} RECORD_RECORD_UPDATE_ERROR=105 RECORD_RECORD_UPDATE_ERROR value
 * @property {number} RECORD_RECORD_DELETE_ERROR=106 RECORD_RECORD_DELETE_ERROR value
 * @property {number} RECORD_RECORD_NOT_FOUND=107 RECORD_RECORD_NOT_FOUND value
 * @property {number} RECORD_INVALID_VERSION=108 RECORD_INVALID_VERSION value
 * @property {number} RECORD_INVALID_PATCH_ON_HOTPATH=109 RECORD_INVALID_PATCH_ON_HOTPATH value
 * @property {number} RECORD_INVALID_LISTEN_REGEX=110 RECORD_INVALID_LISTEN_REGEX value
 * @property {number} RECORD_LISTEN_RESPONSE_TIMEOUT=111 RECORD_LISTEN_RESPONSE_TIMEOUT value
 * @property {number} RECORD_LISTEN_UNSUCCESSFUL=112 RECORD_LISTEN_UNSUCCESSFUL value
 * @property {number} RECORD_RECORD_NOTIFY_ERROR=113 RECORD_RECORD_NOTIFY_ERROR value
 * @property {number} RECORD_MESSAGE_PERMISSION_ERROR=114 RECORD_MESSAGE_PERMISSION_ERROR value
 * @property {number} RECORD_MESSAGE_DENIED=115 RECORD_MESSAGE_DENIED value
 * @property {number} RECORD_INVALID_MESSAGE_DATA=116 RECORD_INVALID_MESSAGE_DATA value
 * @property {number} RECORD_MULTIPLE_SUBSCRIPTIONS=117 RECORD_MULTIPLE_SUBSCRIPTIONS value
 * @property {number} RECORD_NOT_SUBSCRIBED=118 RECORD_NOT_SUBSCRIBED value
 */
$root.RECORD_ACTION = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "RECORD_UNKNOWN"] = 0;
    values[valuesById[1] = "RECORD_ERROR"] = 1;
    values[valuesById[2] = "RECORD_NOTIFY"] = 2;
    values[valuesById[3] = "RECORD_READ"] = 3;
    values[valuesById[4] = "RECORD_READ_RESPONSE"] = 4;
    values[valuesById[5] = "RECORD_HEAD"] = 5;
    values[valuesById[6] = "RECORD_HEAD_RESPONSE"] = 6;
    values[valuesById[7] = "RECORD_HEAD_BULK"] = 7;
    values[valuesById[8] = "RECORD_HEAD_RESPONSE_BULK"] = 8;
    values[valuesById[9] = "RECORD_DELETE"] = 9;
    values[valuesById[10] = "RECORD_DELETE_SUCCESS"] = 10;
    values[valuesById[11] = "RECORD_DELETE_BULK"] = 11;
    values[valuesById[12] = "RECORD_DELETE_BULK_SUCCESS"] = 12;
    values[valuesById[13] = "RECORD_DELETED"] = 13;
    values[valuesById[14] = "RECORD_WRITE_ACKNOWLEDGEMENT"] = 14;
    values[valuesById[15] = "RECORD_CREATE"] = 15;
    values[valuesById[16] = "RECORD_CREATEANDUPDATE"] = 16;
    values[valuesById[17] = "RECORD_CREATEANDPATCH"] = 17;
    values[valuesById[18] = "RECORD_UPDATE"] = 18;
    values[valuesById[19] = "RECORD_PATCH"] = 19;
    values[valuesById[20] = "RECORD_ERASE"] = 20;
    values[valuesById[21] = "RECORD_SUBSCRIBEANDHEAD"] = 21;
    values[valuesById[22] = "RECORD_SUBSCRIBEANDREAD"] = 22;
    values[valuesById[23] = "RECORD_SUBSCRIBECREATEANDREAD"] = 23;
    values[valuesById[24] = "RECORD_SUBSCRIBECREATEANDUPDATE"] = 24;
    values[valuesById[25] = "RECORD_SUBSCRIBE"] = 25;
    values[valuesById[26] = "RECORD_UNSUBSCRIBE"] = 26;
    values[valuesById[27] = "RECORD_LISTEN"] = 27;
    values[valuesById[28] = "RECORD_UNLISTEN"] = 28;
    values[valuesById[29] = "RECORD_LISTEN_ACCEPT"] = 29;
    values[valuesById[30] = "RECORD_LISTEN_REJECT"] = 30;
    values[valuesById[31] = "RECORD_SUBSCRIPTION_HAS_PROVIDER"] = 31;
    values[valuesById[32] = "RECORD_SUBSCRIPTION_HAS_NO_PROVIDER"] = 32;
    values[valuesById[33] = "RECORD_SUBSCRIPTION_FOR_PATTERN_FOUND"] = 33;
    values[valuesById[34] = "RECORD_SUBSCRIPTION_FOR_PATTERN_REMOVED"] = 34;
    values[valuesById[100] = "RECORD_CACHE_RETRIEVAL_TIMEOUT"] = 100;
    values[valuesById[101] = "RECORD_STORAGE_RETRIEVAL_TIMEOUT"] = 101;
    values[valuesById[102] = "RECORD_VERSION_EXISTS"] = 102;
    values[valuesById[103] = "RECORD_RECORD_LOAD_ERROR"] = 103;
    values[valuesById[104] = "RECORD_RECORD_CREATE_ERROR"] = 104;
    values[valuesById[105] = "RECORD_RECORD_UPDATE_ERROR"] = 105;
    values[valuesById[106] = "RECORD_RECORD_DELETE_ERROR"] = 106;
    values[valuesById[107] = "RECORD_RECORD_NOT_FOUND"] = 107;
    values[valuesById[108] = "RECORD_INVALID_VERSION"] = 108;
    values[valuesById[109] = "RECORD_INVALID_PATCH_ON_HOTPATH"] = 109;
    values[valuesById[110] = "RECORD_INVALID_LISTEN_REGEX"] = 110;
    values[valuesById[111] = "RECORD_LISTEN_RESPONSE_TIMEOUT"] = 111;
    values[valuesById[112] = "RECORD_LISTEN_UNSUCCESSFUL"] = 112;
    values[valuesById[113] = "RECORD_RECORD_NOTIFY_ERROR"] = 113;
    values[valuesById[114] = "RECORD_MESSAGE_PERMISSION_ERROR"] = 114;
    values[valuesById[115] = "RECORD_MESSAGE_DENIED"] = 115;
    values[valuesById[116] = "RECORD_INVALID_MESSAGE_DATA"] = 116;
    values[valuesById[117] = "RECORD_MULTIPLE_SUBSCRIPTIONS"] = 117;
    values[valuesById[118] = "RECORD_NOT_SUBSCRIBED"] = 118;
    return values;
})();

$root.RecordMessage = (function() {

    /**
     * Properties of a RecordMessage.
     * @exports IRecordMessage
     * @interface IRecordMessage
     * @property {RECORD_ACTION|null} [action] RecordMessage action
     * @property {string|null} [data] RecordMessage data
     * @property {string|null} [correlationId] RecordMessage correlationId
     * @property {boolean|null} [isError] RecordMessage isError
     * @property {boolean|null} [isAck] RecordMessage isAck
     * @property {string|null} [name] RecordMessage name
     * @property {Array.<string>|null} [names] RecordMessage names
     * @property {string|null} [pattern] RecordMessage pattern
     * @property {string|null} [subscription] RecordMessage subscription
     * @property {RECORD_ACTION|null} [originalAction] RecordMessage originalAction
     * @property {boolean|null} [isWriteAck] RecordMessage isWriteAck
     * @property {string|null} [path] RecordMessage path
     * @property {number|null} [version] RecordMessage version
     * @property {Object.<string,number>|null} [versions] RecordMessage versions
     */

    /**
     * Constructs a new RecordMessage.
     * @exports RecordMessage
     * @classdesc Represents a RecordMessage.
     * @implements IRecordMessage
     * @constructor
     * @param {IRecordMessage=} [properties] Properties to set
     */
    function RecordMessage(properties) {
        this.names = [];
        this.versions = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RecordMessage action.
     * @member {RECORD_ACTION} action
     * @memberof RecordMessage
     * @instance
     */
    RecordMessage.prototype.action = 0;

    /**
     * RecordMessage data.
     * @member {string} data
     * @memberof RecordMessage
     * @instance
     */
    RecordMessage.prototype.data = "";

    /**
     * RecordMessage correlationId.
     * @member {string} correlationId
     * @memberof RecordMessage
     * @instance
     */
    RecordMessage.prototype.correlationId = "";

    /**
     * RecordMessage isError.
     * @member {boolean} isError
     * @memberof RecordMessage
     * @instance
     */
    RecordMessage.prototype.isError = false;

    /**
     * RecordMessage isAck.
     * @member {boolean} isAck
     * @memberof RecordMessage
     * @instance
     */
    RecordMessage.prototype.isAck = false;

    /**
     * RecordMessage name.
     * @member {string} name
     * @memberof RecordMessage
     * @instance
     */
    RecordMessage.prototype.name = "";

    /**
     * RecordMessage names.
     * @member {Array.<string>} names
     * @memberof RecordMessage
     * @instance
     */
    RecordMessage.prototype.names = $util.emptyArray;

    /**
     * RecordMessage pattern.
     * @member {string} pattern
     * @memberof RecordMessage
     * @instance
     */
    RecordMessage.prototype.pattern = "";

    /**
     * RecordMessage subscription.
     * @member {string} subscription
     * @memberof RecordMessage
     * @instance
     */
    RecordMessage.prototype.subscription = "";

    /**
     * RecordMessage originalAction.
     * @member {RECORD_ACTION} originalAction
     * @memberof RecordMessage
     * @instance
     */
    RecordMessage.prototype.originalAction = 0;

    /**
     * RecordMessage isWriteAck.
     * @member {boolean} isWriteAck
     * @memberof RecordMessage
     * @instance
     */
    RecordMessage.prototype.isWriteAck = false;

    /**
     * RecordMessage path.
     * @member {string} path
     * @memberof RecordMessage
     * @instance
     */
    RecordMessage.prototype.path = "";

    /**
     * RecordMessage version.
     * @member {number} version
     * @memberof RecordMessage
     * @instance
     */
    RecordMessage.prototype.version = 0;

    /**
     * RecordMessage versions.
     * @member {Object.<string,number>} versions
     * @memberof RecordMessage
     * @instance
     */
    RecordMessage.prototype.versions = $util.emptyObject;

    /**
     * Encodes the specified RecordMessage message. Does not implicitly {@link RecordMessage.verify|verify} messages.
     * @function encode
     * @memberof RecordMessage
     * @static
     * @param {IRecordMessage} message RecordMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RecordMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
        if (message.correlationId != null && Object.hasOwnProperty.call(message, "correlationId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.correlationId);
        if (message.isError != null && Object.hasOwnProperty.call(message, "isError"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isError);
        if (message.isAck != null && Object.hasOwnProperty.call(message, "isAck"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isAck);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.name);
        if (message.names != null && message.names.length)
            for (var i = 0; i < message.names.length; ++i)
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.names[i]);
        if (message.pattern != null && Object.hasOwnProperty.call(message, "pattern"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.pattern);
        if (message.subscription != null && Object.hasOwnProperty.call(message, "subscription"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.subscription);
        if (message.originalAction != null && Object.hasOwnProperty.call(message, "originalAction"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.originalAction);
        if (message.isWriteAck != null && Object.hasOwnProperty.call(message, "isWriteAck"))
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.isWriteAck);
        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.path);
        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.version);
        if (message.versions != null && Object.hasOwnProperty.call(message, "versions"))
            for (var keys = Object.keys(message.versions), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 14, wireType 2 =*/114).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.versions[keys[i]]).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RecordMessage message, length delimited. Does not implicitly {@link RecordMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RecordMessage
     * @static
     * @param {IRecordMessage} message RecordMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RecordMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RecordMessage message from the specified reader or buffer.
     * @function decode
     * @memberof RecordMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RecordMessage} RecordMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RecordMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RecordMessage(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.action = reader.int32();
                break;
            case 2:
                message.data = reader.string();
                break;
            case 3:
                message.correlationId = reader.string();
                break;
            case 4:
                message.isError = reader.bool();
                break;
            case 5:
                message.isAck = reader.bool();
                break;
            case 6:
                message.name = reader.string();
                break;
            case 7:
                if (!(message.names && message.names.length))
                    message.names = [];
                message.names.push(reader.string());
                break;
            case 8:
                message.pattern = reader.string();
                break;
            case 9:
                message.subscription = reader.string();
                break;
            case 10:
                message.originalAction = reader.int32();
                break;
            case 11:
                message.isWriteAck = reader.bool();
                break;
            case 12:
                message.path = reader.string();
                break;
            case 13:
                message.version = reader.int32();
                break;
            case 14:
                reader.skip().pos++;
                if (message.versions === $util.emptyObject)
                    message.versions = {};
                key = reader.string();
                reader.pos++;
                message.versions[key] = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RecordMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RecordMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RecordMessage} RecordMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RecordMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    return RecordMessage;
})();

/**
 * RPC_ACTION enum.
 * @exports RPC_ACTION
 * @enum {number}
 * @property {number} RPC_UNKNOWN=0 RPC_UNKNOWN value
 * @property {number} RPC_ERROR=1 RPC_ERROR value
 * @property {number} RPC_REQUEST=2 RPC_REQUEST value
 * @property {number} RPC_ACCEPT=4 RPC_ACCEPT value
 * @property {number} RPC_RESPONSE=5 RPC_RESPONSE value
 * @property {number} RPC_REJECT=6 RPC_REJECT value
 * @property {number} RPC_REQUEST_ERROR=7 RPC_REQUEST_ERROR value
 * @property {number} RPC_PROVIDE=8 RPC_PROVIDE value
 * @property {number} RPC_UNPROVIDE=9 RPC_UNPROVIDE value
 * @property {number} RPC_NO_RPC_PROVIDER=100 RPC_NO_RPC_PROVIDER value
 * @property {number} RPC_ACCEPT_TIMEOUT=101 RPC_ACCEPT_TIMEOUT value
 * @property {number} RPC_MULTIPLE_ACCEPT=102 RPC_MULTIPLE_ACCEPT value
 * @property {number} RPC_INVALID_RPC_CORRELATION_ID=103 RPC_INVALID_RPC_CORRELATION_ID value
 * @property {number} RPC_RESPONSE_TIMEOUT=104 RPC_RESPONSE_TIMEOUT value
 * @property {number} RPC_MULTIPLE_RESPONSE=105 RPC_MULTIPLE_RESPONSE value
 * @property {number} RPC_MESSAGE_PERMISSION_ERROR=106 RPC_MESSAGE_PERMISSION_ERROR value
 * @property {number} RPC_MESSAGE_DENIED=107 RPC_MESSAGE_DENIED value
 * @property {number} RPC_INVALID_MESSAGE_DATA=108 RPC_INVALID_MESSAGE_DATA value
 * @property {number} RPC_MULTIPLE_PROVIDERS=109 RPC_MULTIPLE_PROVIDERS value
 * @property {number} RPC_NOT_PROVIDED=110 RPC_NOT_PROVIDED value
 */
$root.RPC_ACTION = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "RPC_UNKNOWN"] = 0;
    values[valuesById[1] = "RPC_ERROR"] = 1;
    values[valuesById[2] = "RPC_REQUEST"] = 2;
    values[valuesById[4] = "RPC_ACCEPT"] = 4;
    values[valuesById[5] = "RPC_RESPONSE"] = 5;
    values[valuesById[6] = "RPC_REJECT"] = 6;
    values[valuesById[7] = "RPC_REQUEST_ERROR"] = 7;
    values[valuesById[8] = "RPC_PROVIDE"] = 8;
    values[valuesById[9] = "RPC_UNPROVIDE"] = 9;
    values[valuesById[100] = "RPC_NO_RPC_PROVIDER"] = 100;
    values[valuesById[101] = "RPC_ACCEPT_TIMEOUT"] = 101;
    values[valuesById[102] = "RPC_MULTIPLE_ACCEPT"] = 102;
    values[valuesById[103] = "RPC_INVALID_RPC_CORRELATION_ID"] = 103;
    values[valuesById[104] = "RPC_RESPONSE_TIMEOUT"] = 104;
    values[valuesById[105] = "RPC_MULTIPLE_RESPONSE"] = 105;
    values[valuesById[106] = "RPC_MESSAGE_PERMISSION_ERROR"] = 106;
    values[valuesById[107] = "RPC_MESSAGE_DENIED"] = 107;
    values[valuesById[108] = "RPC_INVALID_MESSAGE_DATA"] = 108;
    values[valuesById[109] = "RPC_MULTIPLE_PROVIDERS"] = 109;
    values[valuesById[110] = "RPC_NOT_PROVIDED"] = 110;
    return values;
})();

$root.RpcMessage = (function() {

    /**
     * Properties of a RpcMessage.
     * @exports IRpcMessage
     * @interface IRpcMessage
     * @property {RPC_ACTION|null} [action] RpcMessage action
     * @property {string|null} [data] RpcMessage data
     * @property {string|null} [correlationId] RpcMessage correlationId
     * @property {boolean|null} [isError] RpcMessage isError
     * @property {boolean|null} [isAck] RpcMessage isAck
     * @property {Array.<string>|null} [names] RpcMessage names
     * @property {string|null} [name] RpcMessage name
     * @property {string|null} [reason] RpcMessage reason
     * @property {number|null} [originalAction] RpcMessage originalAction
     */

    /**
     * Constructs a new RpcMessage.
     * @exports RpcMessage
     * @classdesc Represents a RpcMessage.
     * @implements IRpcMessage
     * @constructor
     * @param {IRpcMessage=} [properties] Properties to set
     */
    function RpcMessage(properties) {
        this.names = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RpcMessage action.
     * @member {RPC_ACTION} action
     * @memberof RpcMessage
     * @instance
     */
    RpcMessage.prototype.action = 0;

    /**
     * RpcMessage data.
     * @member {string} data
     * @memberof RpcMessage
     * @instance
     */
    RpcMessage.prototype.data = "";

    /**
     * RpcMessage correlationId.
     * @member {string} correlationId
     * @memberof RpcMessage
     * @instance
     */
    RpcMessage.prototype.correlationId = "";

    /**
     * RpcMessage isError.
     * @member {boolean} isError
     * @memberof RpcMessage
     * @instance
     */
    RpcMessage.prototype.isError = false;

    /**
     * RpcMessage isAck.
     * @member {boolean} isAck
     * @memberof RpcMessage
     * @instance
     */
    RpcMessage.prototype.isAck = false;

    /**
     * RpcMessage names.
     * @member {Array.<string>} names
     * @memberof RpcMessage
     * @instance
     */
    RpcMessage.prototype.names = $util.emptyArray;

    /**
     * RpcMessage name.
     * @member {string} name
     * @memberof RpcMessage
     * @instance
     */
    RpcMessage.prototype.name = "";

    /**
     * RpcMessage reason.
     * @member {string} reason
     * @memberof RpcMessage
     * @instance
     */
    RpcMessage.prototype.reason = "";

    /**
     * RpcMessage originalAction.
     * @member {number} originalAction
     * @memberof RpcMessage
     * @instance
     */
    RpcMessage.prototype.originalAction = 0;

    /**
     * Encodes the specified RpcMessage message. Does not implicitly {@link RpcMessage.verify|verify} messages.
     * @function encode
     * @memberof RpcMessage
     * @static
     * @param {IRpcMessage} message RpcMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RpcMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
        if (message.correlationId != null && Object.hasOwnProperty.call(message, "correlationId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.correlationId);
        if (message.isError != null && Object.hasOwnProperty.call(message, "isError"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isError);
        if (message.isAck != null && Object.hasOwnProperty.call(message, "isAck"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isAck);
        if (message.names != null && message.names.length)
            for (var i = 0; i < message.names.length; ++i)
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.names[i]);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.name);
        if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.reason);
        if (message.originalAction != null && Object.hasOwnProperty.call(message, "originalAction"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.originalAction);
        return writer;
    };

    /**
     * Encodes the specified RpcMessage message, length delimited. Does not implicitly {@link RpcMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RpcMessage
     * @static
     * @param {IRpcMessage} message RpcMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RpcMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RpcMessage message from the specified reader or buffer.
     * @function decode
     * @memberof RpcMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RpcMessage} RpcMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RpcMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RpcMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.action = reader.int32();
                break;
            case 2:
                message.data = reader.string();
                break;
            case 3:
                message.correlationId = reader.string();
                break;
            case 4:
                message.isError = reader.bool();
                break;
            case 5:
                message.isAck = reader.bool();
                break;
            case 6:
                if (!(message.names && message.names.length))
                    message.names = [];
                message.names.push(reader.string());
                break;
            case 7:
                message.name = reader.string();
                break;
            case 8:
                message.reason = reader.string();
                break;
            case 9:
                message.originalAction = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RpcMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RpcMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RpcMessage} RpcMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RpcMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    return RpcMessage;
})();

/**
 * STATE_REGISTRY_TOPIC enum.
 * @exports STATE_REGISTRY_TOPIC
 * @enum {number}
 * @property {number} STATE_REGISTRY_UNKNOWN=0 STATE_REGISTRY_UNKNOWN value
 * @property {number} STATE_REGISTRY_EVENT_SUBSCRIPTIONS=11 STATE_REGISTRY_EVENT_SUBSCRIPTIONS value
 * @property {number} STATE_REGISTRY_RECORD_SUBSCRIPTIONS=12 STATE_REGISTRY_RECORD_SUBSCRIPTIONS value
 * @property {number} STATE_REGISTRY_SUBSCRIPTIONS=9 STATE_REGISTRY_SUBSCRIPTIONS value
 * @property {number} STATE_REGISTRY_ONLINE_USERS=10 STATE_REGISTRY_ONLINE_USERS value
 * @property {number} STATE_REGISTRY_MONITORING_SUBSCRIPTIONS=24 STATE_REGISTRY_MONITORING_SUBSCRIPTIONS value
 * @property {number} STATE_REGISTRY_RPC_SUBSCRIPTIONS=13 STATE_REGISTRY_RPC_SUBSCRIPTIONS value
 * @property {number} STATE_REGISTRY_PRESENCE_SUBSCRIPTIONS=14 STATE_REGISTRY_PRESENCE_SUBSCRIPTIONS value
 * @property {number} STATE_REGISTRY_RECORD_LISTEN_PATTERNS=15 STATE_REGISTRY_RECORD_LISTEN_PATTERNS value
 * @property {number} STATE_REGISTRY_EVENT_LISTEN_PATTERNS=16 STATE_REGISTRY_EVENT_LISTEN_PATTERNS value
 * @property {number} STATE_REGISTRY_RECORD_PUBLISHED_SUBSCRIPTIONS=17 STATE_REGISTRY_RECORD_PUBLISHED_SUBSCRIPTIONS value
 * @property {number} STATE_REGISTRY_EVENT_PUBLISHED_SUBSCRIPTIONS=18 STATE_REGISTRY_EVENT_PUBLISHED_SUBSCRIPTIONS value
 * @property {number} STATE_REGISTRY_RECORD_LISTENING=19 STATE_REGISTRY_RECORD_LISTENING value
 * @property {number} STATE_REGISTRY_EVENT_LISTENING=20 STATE_REGISTRY_EVENT_LISTENING value
 * @property {number} STATE_REGISTRY_STATE_REGISTRY=21 STATE_REGISTRY_STATE_REGISTRY value
 */
$root.STATE_REGISTRY_TOPIC = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "STATE_REGISTRY_UNKNOWN"] = 0;
    values[valuesById[11] = "STATE_REGISTRY_EVENT_SUBSCRIPTIONS"] = 11;
    values[valuesById[12] = "STATE_REGISTRY_RECORD_SUBSCRIPTIONS"] = 12;
    values[valuesById[9] = "STATE_REGISTRY_SUBSCRIPTIONS"] = 9;
    values[valuesById[10] = "STATE_REGISTRY_ONLINE_USERS"] = 10;
    values[valuesById[24] = "STATE_REGISTRY_MONITORING_SUBSCRIPTIONS"] = 24;
    values[valuesById[13] = "STATE_REGISTRY_RPC_SUBSCRIPTIONS"] = 13;
    values[valuesById[14] = "STATE_REGISTRY_PRESENCE_SUBSCRIPTIONS"] = 14;
    values[valuesById[15] = "STATE_REGISTRY_RECORD_LISTEN_PATTERNS"] = 15;
    values[valuesById[16] = "STATE_REGISTRY_EVENT_LISTEN_PATTERNS"] = 16;
    values[valuesById[17] = "STATE_REGISTRY_RECORD_PUBLISHED_SUBSCRIPTIONS"] = 17;
    values[valuesById[18] = "STATE_REGISTRY_EVENT_PUBLISHED_SUBSCRIPTIONS"] = 18;
    values[valuesById[19] = "STATE_REGISTRY_RECORD_LISTENING"] = 19;
    values[valuesById[20] = "STATE_REGISTRY_EVENT_LISTENING"] = 20;
    values[valuesById[21] = "STATE_REGISTRY_STATE_REGISTRY"] = 21;
    return values;
})();

/**
 * STATE_ACTION enum.
 * @exports STATE_ACTION
 * @enum {number}
 * @property {number} STATE_UNKNOWN=0 STATE_UNKNOWN value
 * @property {number} STATE_ERROR=1 STATE_ERROR value
 * @property {number} STATE_ADD=2 STATE_ADD value
 * @property {number} STATE_REMOVE=3 STATE_REMOVE value
 * @property {number} STATE_REQUEST_FULL_STATE=4 STATE_REQUEST_FULL_STATE value
 * @property {number} STATE_FULL_STATE=5 STATE_FULL_STATE value
 * @property {number} STATE_CHECKSUM=6 STATE_CHECKSUM value
 */
$root.STATE_ACTION = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "STATE_UNKNOWN"] = 0;
    values[valuesById[1] = "STATE_ERROR"] = 1;
    values[valuesById[2] = "STATE_ADD"] = 2;
    values[valuesById[3] = "STATE_REMOVE"] = 3;
    values[valuesById[4] = "STATE_REQUEST_FULL_STATE"] = 4;
    values[valuesById[5] = "STATE_FULL_STATE"] = 5;
    values[valuesById[6] = "STATE_CHECKSUM"] = 6;
    return values;
})();

$root.StateMessage = (function() {

    /**
     * Properties of a StateMessage.
     * @exports IStateMessage
     * @interface IStateMessage
     * @property {STATE_ACTION|null} [action] StateMessage action
     * @property {string|null} [data] StateMessage data
     * @property {boolean|null} [isError] StateMessage isError
     * @property {number|null} [checksum] StateMessage checksum
     * @property {Array.<string>|null} [fullState] StateMessage fullState
     * @property {string|null} [serverName] StateMessage serverName
     * @property {STATE_REGISTRY_TOPIC|null} [registryTOPIC] StateMessage registryTOPIC
     */

    /**
     * Constructs a new StateMessage.
     * @exports StateMessage
     * @classdesc Represents a StateMessage.
     * @implements IStateMessage
     * @constructor
     * @param {IStateMessage=} [properties] Properties to set
     */
    function StateMessage(properties) {
        this.fullState = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StateMessage action.
     * @member {STATE_ACTION} action
     * @memberof StateMessage
     * @instance
     */
    StateMessage.prototype.action = 0;

    /**
     * StateMessage data.
     * @member {string} data
     * @memberof StateMessage
     * @instance
     */
    StateMessage.prototype.data = "";

    /**
     * StateMessage isError.
     * @member {boolean} isError
     * @memberof StateMessage
     * @instance
     */
    StateMessage.prototype.isError = false;

    /**
     * StateMessage checksum.
     * @member {number} checksum
     * @memberof StateMessage
     * @instance
     */
    StateMessage.prototype.checksum = 0;

    /**
     * StateMessage fullState.
     * @member {Array.<string>} fullState
     * @memberof StateMessage
     * @instance
     */
    StateMessage.prototype.fullState = $util.emptyArray;

    /**
     * StateMessage serverName.
     * @member {string} serverName
     * @memberof StateMessage
     * @instance
     */
    StateMessage.prototype.serverName = "";

    /**
     * StateMessage registryTOPIC.
     * @member {STATE_REGISTRY_TOPIC} registryTOPIC
     * @memberof StateMessage
     * @instance
     */
    StateMessage.prototype.registryTOPIC = 0;

    /**
     * Encodes the specified StateMessage message. Does not implicitly {@link StateMessage.verify|verify} messages.
     * @function encode
     * @memberof StateMessage
     * @static
     * @param {IStateMessage} message StateMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StateMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
        if (message.isError != null && Object.hasOwnProperty.call(message, "isError"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isError);
        if (message.checksum != null && Object.hasOwnProperty.call(message, "checksum"))
            writer.uint32(/* id 19, wireType 0 =*/152).int32(message.checksum);
        if (message.fullState != null && message.fullState.length)
            for (var i = 0; i < message.fullState.length; ++i)
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.fullState[i]);
        if (message.serverName != null && Object.hasOwnProperty.call(message, "serverName"))
            writer.uint32(/* id 21, wireType 2 =*/170).string(message.serverName);
        if (message.registryTOPIC != null && Object.hasOwnProperty.call(message, "registryTOPIC"))
            writer.uint32(/* id 22, wireType 0 =*/176).int32(message.registryTOPIC);
        return writer;
    };

    /**
     * Encodes the specified StateMessage message, length delimited. Does not implicitly {@link StateMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StateMessage
     * @static
     * @param {IStateMessage} message StateMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StateMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StateMessage message from the specified reader or buffer.
     * @function decode
     * @memberof StateMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StateMessage} StateMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StateMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StateMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.action = reader.int32();
                break;
            case 2:
                message.data = reader.string();
                break;
            case 3:
                message.isError = reader.bool();
                break;
            case 19:
                message.checksum = reader.int32();
                break;
            case 20:
                if (!(message.fullState && message.fullState.length))
                    message.fullState = [];
                message.fullState.push(reader.string());
                break;
            case 21:
                message.serverName = reader.string();
                break;
            case 22:
                message.registryTOPIC = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StateMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StateMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StateMessage} StateMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StateMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    return StateMessage;
})();

module.exports = $root;


/***/ }),

/***/ "./node_modules/@deepstream/protobuf/dist/src/message-builder.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@deepstream/protobuf/dist/src/message-builder.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const protobuf_map_1 = __webpack_require__(/*! ./protobuf-map */ "./node_modules/@deepstream/protobuf/dist/src/protobuf-map.js");
// @ts-ignore
const protobuf_1 = __webpack_require__(/*! ../generated/protobuf */ "./node_modules/@deepstream/protobuf/dist/generated/protobuf.js");
function getMessage(message, isAck) {
    if (isAck && !message.isAck) {
        message = Object.assign(Object.assign({}, message), { isAck: true });
    }
    if (message.data === undefined && message.parsedData !== undefined) {
        message.data = JSON.stringify(message.parsedData);
    }
    const serializedMessage = protobuf_map_1.TopicMessage[message.topic].encode(message).finish();
    const x = protobuf_1.Message.encodeDelimited({ topic: message.topic, message: serializedMessage }).finish();
    return x;
}
exports.getMessage = getMessage;
//# sourceMappingURL=message-builder.js.map

/***/ }),

/***/ "./node_modules/@deepstream/protobuf/dist/src/message-parser.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@deepstream/protobuf/dist/src/message-parser.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const protobuf_map_1 = __webpack_require__(/*! ./protobuf-map */ "./node_modules/@deepstream/protobuf/dist/src/protobuf-map.js");
// @ts-ignore
const protobuf_1 = __webpack_require__(/*! ../generated/protobuf */ "./node_modules/@deepstream/protobuf/dist/generated/protobuf.js");
const all_1 = __webpack_require__(/*! ../types/all */ "./node_modules/@deepstream/protobuf/dist/types/all.js");
function parse(data) {
    try {
        const msg = protobuf_1.Message.decodeDelimited(data);
        const message = protobuf_map_1.TopicMessage[msg.topic].decode(msg.message, msg.message.length);
        return [Object.assign({ topic: msg.topic }, message)];
    }
    catch (e) {
        return [{ topic: all_1.TOPIC.PARSER, action: all_1.PARSER_ACTION.ERROR }];
    }
}
exports.parse = parse;
function parseData(message) {
    if (message.parsedData !== undefined || message.data === undefined) {
        return true;
    }
    message.parsedData = JSON.parse(message.data);
    if (message.parsedData === undefined) {
        return new Error(`unable to parse data ${message.data}`);
    }
    return true;
}
exports.parseData = parseData;
//# sourceMappingURL=message-parser.js.map

/***/ }),

/***/ "./node_modules/@deepstream/protobuf/dist/src/protobuf-map.js":
/*!********************************************************************!*\
  !*** ./node_modules/@deepstream/protobuf/dist/src/protobuf-map.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const protobuf_1 = __webpack_require__(/*! ../generated/protobuf */ "./node_modules/@deepstream/protobuf/dist/generated/protobuf.js");
exports.TopicMessage = {
    [protobuf_1.TOPIC.RECORD]: protobuf_1.RecordMessage,
    [protobuf_1.TOPIC.CLUSTER]: protobuf_1.ClusterMessage,
    [protobuf_1.TOPIC.CONNECTION]: protobuf_1.ConnectionMessage,
    [protobuf_1.TOPIC.AUTH]: protobuf_1.AuthMessage,
    [protobuf_1.TOPIC.EVENT]: protobuf_1.EventMessage,
    [protobuf_1.TOPIC.LOCK]: protobuf_1.LockMessage,
    [protobuf_1.TOPIC.MONITORING]: protobuf_1.MonitoringMessage,
    [protobuf_1.TOPIC.PARSER]: protobuf_1.ParserMessage,
    [protobuf_1.TOPIC.PRESENCE]: protobuf_1.PresenceMessage,
    [protobuf_1.TOPIC.RPC]: protobuf_1.RpcMessage
};
//# sourceMappingURL=protobuf-map.js.map

/***/ }),

/***/ "./node_modules/@deepstream/protobuf/dist/types/all.js":
/*!*************************************************************!*\
  !*** ./node_modules/@deepstream/protobuf/dist/types/all.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var general_1 = __webpack_require__(/*! ../types/general */ "./node_modules/@deepstream/protobuf/dist/types/general.js");
exports.TOPIC = general_1.TOPIC;
var record_1 = __webpack_require__(/*! ../types/record */ "./node_modules/@deepstream/protobuf/dist/types/record.js");
exports.RECORD_ACTION = record_1.RECORD_ACTION;
var auth_1 = __webpack_require__(/*! ../types/auth */ "./node_modules/@deepstream/protobuf/dist/types/auth.js");
exports.AUTH_ACTION = auth_1.AUTH_ACTION;
var event_1 = __webpack_require__(/*! ../types/event */ "./node_modules/@deepstream/protobuf/dist/types/event.js");
exports.EVENT_ACTION = event_1.EVENT_ACTION;
var rpc_1 = __webpack_require__(/*! ../types/rpc */ "./node_modules/@deepstream/protobuf/dist/types/rpc.js");
exports.RPC_ACTION = rpc_1.RPC_ACTION;
var presence_1 = __webpack_require__(/*! ../types/presence */ "./node_modules/@deepstream/protobuf/dist/types/presence.js");
exports.PRESENCE_ACTION = presence_1.PRESENCE_ACTION;
var connection_1 = __webpack_require__(/*! ../types/connection */ "./node_modules/@deepstream/protobuf/dist/types/connection.js");
exports.CONNECTION_ACTION = connection_1.CONNECTION_ACTION;
var cluster_1 = __webpack_require__(/*! ../types/cluster */ "./node_modules/@deepstream/protobuf/dist/types/cluster.js");
exports.CLUSTER_ACTION = cluster_1.CLUSTER_ACTION;
var lock_1 = __webpack_require__(/*! ../types/lock */ "./node_modules/@deepstream/protobuf/dist/types/lock.js");
exports.LOCK_ACTION = lock_1.LOCK_ACTION;
var parser_1 = __webpack_require__(/*! ../types/parser */ "./node_modules/@deepstream/protobuf/dist/types/parser.js");
exports.PARSER_ACTION = parser_1.PARSER_ACTION;
var monitoring_1 = __webpack_require__(/*! ../types/monitoring */ "./node_modules/@deepstream/protobuf/dist/types/monitoring.js");
exports.MONITORING_ACTION = monitoring_1.MONITORING_ACTION;
var state_1 = __webpack_require__(/*! ../types/state */ "./node_modules/@deepstream/protobuf/dist/types/state.js");
exports.STATE_ACTION = state_1.STATE_ACTION;
exports.STATE_REGISTRY_TOPIC = state_1.STATE_REGISTRY_TOPIC;
//# sourceMappingURL=all.js.map

/***/ }),

/***/ "./node_modules/@deepstream/protobuf/dist/types/auth.js":
/*!**************************************************************!*\
  !*** ./node_modules/@deepstream/protobuf/dist/types/auth.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AUTH_ACTION;
(function (AUTH_ACTION) {
    AUTH_ACTION[AUTH_ACTION["UNKNOWN"] = 0] = "UNKNOWN";
    AUTH_ACTION[AUTH_ACTION["ERROR"] = 1] = "ERROR";
    AUTH_ACTION[AUTH_ACTION["REQUEST"] = 2] = "REQUEST";
    AUTH_ACTION[AUTH_ACTION["AUTH_SUCCESSFUL"] = 3] = "AUTH_SUCCESSFUL";
    AUTH_ACTION[AUTH_ACTION["AUTH_UNSUCCESSFUL"] = 4] = "AUTH_UNSUCCESSFUL";
    AUTH_ACTION[AUTH_ACTION["TOO_MANY_AUTH_ATTEMPTS"] = 100] = "TOO_MANY_AUTH_ATTEMPTS";
    AUTH_ACTION[AUTH_ACTION["INVALID_MESSAGE"] = 101] = "INVALID_MESSAGE";
    AUTH_ACTION[AUTH_ACTION["INVALID_MESSAGE_DATA"] = 102] = "INVALID_MESSAGE_DATA";
})(AUTH_ACTION = exports.AUTH_ACTION || (exports.AUTH_ACTION = {}));
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ "./node_modules/@deepstream/protobuf/dist/types/cluster.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@deepstream/protobuf/dist/types/cluster.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CLUSTER_ACTION;
(function (CLUSTER_ACTION) {
    CLUSTER_ACTION[CLUSTER_ACTION["REMOVE"] = 1] = "REMOVE";
    CLUSTER_ACTION[CLUSTER_ACTION["STATUS"] = 2] = "STATUS";
})(CLUSTER_ACTION = exports.CLUSTER_ACTION || (exports.CLUSTER_ACTION = {}));
//# sourceMappingURL=cluster.js.map

/***/ }),

/***/ "./node_modules/@deepstream/protobuf/dist/types/connection.js":
/*!********************************************************************!*\
  !*** ./node_modules/@deepstream/protobuf/dist/types/connection.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CONNECTION_ACTION;
(function (CONNECTION_ACTION) {
    CONNECTION_ACTION[CONNECTION_ACTION["UNKNOWN"] = 0] = "UNKNOWN";
    CONNECTION_ACTION[CONNECTION_ACTION["ERROR"] = 1] = "ERROR";
    CONNECTION_ACTION[CONNECTION_ACTION["PING"] = 2] = "PING";
    CONNECTION_ACTION[CONNECTION_ACTION["PONG"] = 3] = "PONG";
    CONNECTION_ACTION[CONNECTION_ACTION["ACCEPT"] = 4] = "ACCEPT";
    CONNECTION_ACTION[CONNECTION_ACTION["CHALLENGE"] = 5] = "CHALLENGE";
    CONNECTION_ACTION[CONNECTION_ACTION["REJECT"] = 6] = "REJECT";
    CONNECTION_ACTION[CONNECTION_ACTION["REDIRECT"] = 7] = "REDIRECT";
    CONNECTION_ACTION[CONNECTION_ACTION["CLOSING"] = 8] = "CLOSING";
    CONNECTION_ACTION[CONNECTION_ACTION["CLOSED"] = 9] = "CLOSED";
    CONNECTION_ACTION[CONNECTION_ACTION["AUTHENTICATION_TIMEOUT"] = 100] = "AUTHENTICATION_TIMEOUT";
    CONNECTION_ACTION[CONNECTION_ACTION["INVALID_MESSAGE"] = 101] = "INVALID_MESSAGE";
})(CONNECTION_ACTION = exports.CONNECTION_ACTION || (exports.CONNECTION_ACTION = {}));
//# sourceMappingURL=connection.js.map

/***/ }),

/***/ "./node_modules/@deepstream/protobuf/dist/types/event.js":
/*!***************************************************************!*\
  !*** ./node_modules/@deepstream/protobuf/dist/types/event.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EVENT_ACTION;
(function (EVENT_ACTION) {
    EVENT_ACTION[EVENT_ACTION["UNKNOWN"] = 0] = "UNKNOWN";
    EVENT_ACTION[EVENT_ACTION["ERROR"] = 1] = "ERROR";
    EVENT_ACTION[EVENT_ACTION["EMIT"] = 2] = "EMIT";
    EVENT_ACTION[EVENT_ACTION["SUBSCRIBE"] = 3] = "SUBSCRIBE";
    EVENT_ACTION[EVENT_ACTION["UNSUBSCRIBE"] = 4] = "UNSUBSCRIBE";
    EVENT_ACTION[EVENT_ACTION["LISTEN"] = 5] = "LISTEN";
    EVENT_ACTION[EVENT_ACTION["UNLISTEN"] = 6] = "UNLISTEN";
    EVENT_ACTION[EVENT_ACTION["LISTEN_ACCEPT"] = 7] = "LISTEN_ACCEPT";
    EVENT_ACTION[EVENT_ACTION["LISTEN_REJECT"] = 8] = "LISTEN_REJECT";
    EVENT_ACTION[EVENT_ACTION["SUBSCRIPTION_HAS_PROVIDER"] = 9] = "SUBSCRIPTION_HAS_PROVIDER";
    EVENT_ACTION[EVENT_ACTION["SUBSCRIPTION_HAS_NO_PROVIDER"] = 10] = "SUBSCRIPTION_HAS_NO_PROVIDER";
    EVENT_ACTION[EVENT_ACTION["SUBSCRIPTION_FOR_PATTERN_FOUND"] = 11] = "SUBSCRIPTION_FOR_PATTERN_FOUND";
    EVENT_ACTION[EVENT_ACTION["SUBSCRIPTION_FOR_PATTERN_REMOVED"] = 12] = "SUBSCRIPTION_FOR_PATTERN_REMOVED";
    EVENT_ACTION[EVENT_ACTION["INVALID_LISTEN_REGEX"] = 100] = "INVALID_LISTEN_REGEX";
    EVENT_ACTION[EVENT_ACTION["LISTEN_RESPONSE_TIMEOUT"] = 101] = "LISTEN_RESPONSE_TIMEOUT";
    EVENT_ACTION[EVENT_ACTION["LISTEN_UNSUCCESSFUL"] = 102] = "LISTEN_UNSUCCESSFUL";
    EVENT_ACTION[EVENT_ACTION["MESSAGE_PERMISSION_ERROR"] = 103] = "MESSAGE_PERMISSION_ERROR";
    EVENT_ACTION[EVENT_ACTION["MESSAGE_DENIED"] = 104] = "MESSAGE_DENIED";
    EVENT_ACTION[EVENT_ACTION["INVALID_MESSAGE_DATA"] = 105] = "INVALID_MESSAGE_DATA";
    EVENT_ACTION[EVENT_ACTION["MULTIPLE_SUBSCRIPTIONS"] = 106] = "MULTIPLE_SUBSCRIPTIONS";
    EVENT_ACTION[EVENT_ACTION["NOT_SUBSCRIBED"] = 107] = "NOT_SUBSCRIBED";
})(EVENT_ACTION = exports.EVENT_ACTION || (exports.EVENT_ACTION = {}));
//# sourceMappingURL=event.js.map

/***/ }),

/***/ "./node_modules/@deepstream/protobuf/dist/types/general.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@deepstream/protobuf/dist/types/general.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TOPIC;
(function (TOPIC) {
    TOPIC[TOPIC["UNKNOWN"] = 0] = "UNKNOWN";
    TOPIC[TOPIC["PARSER"] = 1] = "PARSER";
    TOPIC[TOPIC["CONNECTION"] = 2] = "CONNECTION";
    TOPIC[TOPIC["AUTH"] = 3] = "AUTH";
    TOPIC[TOPIC["EVENT"] = 4] = "EVENT";
    TOPIC[TOPIC["RECORD"] = 5] = "RECORD";
    TOPIC[TOPIC["RPC"] = 6] = "RPC";
    TOPIC[TOPIC["PRESENCE"] = 7] = "PRESENCE";
    TOPIC[TOPIC["MONITORING"] = 8] = "MONITORING";
    TOPIC[TOPIC["CLUSTER"] = 9] = "CLUSTER";
    TOPIC[TOPIC["LOCK"] = 10] = "LOCK";
    TOPIC[TOPIC["STATE_REGISTRY"] = 11] = "STATE_REGISTRY";
    TOPIC[TOPIC["ERROR"] = 100] = "ERROR";
})(TOPIC = exports.TOPIC || (exports.TOPIC = {}));
//# sourceMappingURL=general.js.map

/***/ }),

/***/ "./node_modules/@deepstream/protobuf/dist/types/lock.js":
/*!**************************************************************!*\
  !*** ./node_modules/@deepstream/protobuf/dist/types/lock.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LOCK_ACTION;
(function (LOCK_ACTION) {
    LOCK_ACTION[LOCK_ACTION["UNKNOWN"] = 0] = "UNKNOWN";
    LOCK_ACTION[LOCK_ACTION["ERROR"] = 1] = "ERROR";
    LOCK_ACTION[LOCK_ACTION["REQUEST"] = 2] = "REQUEST";
    LOCK_ACTION[LOCK_ACTION["RESPONSE"] = 3] = "RESPONSE";
    LOCK_ACTION[LOCK_ACTION["RELEASE"] = 4] = "RELEASE";
})(LOCK_ACTION = exports.LOCK_ACTION || (exports.LOCK_ACTION = {}));
//# sourceMappingURL=lock.js.map

/***/ }),

/***/ "./node_modules/@deepstream/protobuf/dist/types/messages.js":
/*!******************************************************************!*\
  !*** ./node_modules/@deepstream/protobuf/dist/types/messages.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const all_1 = __webpack_require__(/*! ./all */ "./node_modules/@deepstream/protobuf/dist/types/all.js");
exports.ACTIONS = {
    [all_1.TOPIC.PARSER]: all_1.PARSER_ACTION,
    [all_1.TOPIC.CONNECTION]: all_1.CONNECTION_ACTION,
    [all_1.TOPIC.AUTH]: all_1.AUTH_ACTION,
    [all_1.TOPIC.EVENT]: all_1.EVENT_ACTION,
    [all_1.TOPIC.RECORD]: all_1.RECORD_ACTION,
    [all_1.TOPIC.RPC]: all_1.RPC_ACTION,
    [all_1.TOPIC.PRESENCE]: all_1.PRESENCE_ACTION,
    [all_1.TOPIC.LOCK]: all_1.LOCK_ACTION,
    [all_1.TOPIC.STATE_REGISTRY]: all_1.STATE_ACTION,
    [all_1.TOPIC.CLUSTER]: all_1.CLUSTER_ACTION,
    [all_1.TOPIC.MONITORING]: all_1.MONITORING_ACTION
};
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "./node_modules/@deepstream/protobuf/dist/types/monitoring.js":
/*!********************************************************************!*\
  !*** ./node_modules/@deepstream/protobuf/dist/types/monitoring.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MONITORING_ACTION;
(function (MONITORING_ACTION) {
})(MONITORING_ACTION = exports.MONITORING_ACTION || (exports.MONITORING_ACTION = {}));
//# sourceMappingURL=monitoring.js.map

/***/ }),

/***/ "./node_modules/@deepstream/protobuf/dist/types/parser.js":
/*!****************************************************************!*\
  !*** ./node_modules/@deepstream/protobuf/dist/types/parser.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PARSER_ACTION;
(function (PARSER_ACTION) {
    PARSER_ACTION[PARSER_ACTION["UNKNOWN"] = 0] = "UNKNOWN";
    PARSER_ACTION[PARSER_ACTION["UNKNOWN_TOPIC"] = 1] = "UNKNOWN_TOPIC";
    PARSER_ACTION[PARSER_ACTION["UNKNOWN_ACTION"] = 2] = "UNKNOWN_ACTION";
    PARSER_ACTION[PARSER_ACTION["INVALID_MESSAGE"] = 3] = "INVALID_MESSAGE";
    PARSER_ACTION[PARSER_ACTION["MESSAGE_PARSE_ERROR"] = 4] = "MESSAGE_PARSE_ERROR";
    PARSER_ACTION[PARSER_ACTION["MAXIMUM_MESSAGE_SIZE_EXCEEDED"] = 5] = "MAXIMUM_MESSAGE_SIZE_EXCEEDED";
    PARSER_ACTION[PARSER_ACTION["ERROR"] = 6] = "ERROR";
    PARSER_ACTION[PARSER_ACTION["INVALID_META_PARAMS"] = 7] = "INVALID_META_PARAMS";
})(PARSER_ACTION = exports.PARSER_ACTION || (exports.PARSER_ACTION = {}));
//# sourceMappingURL=parser.js.map

/***/ }),

/***/ "./node_modules/@deepstream/protobuf/dist/types/presence.js":
/*!******************************************************************!*\
  !*** ./node_modules/@deepstream/protobuf/dist/types/presence.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PRESENCE_ACTION;
(function (PRESENCE_ACTION) {
    PRESENCE_ACTION[PRESENCE_ACTION["UNKNOWN"] = 0] = "UNKNOWN";
    PRESENCE_ACTION[PRESENCE_ACTION["ERROR"] = 1] = "ERROR";
    PRESENCE_ACTION[PRESENCE_ACTION["QUERY_ALL"] = 2] = "QUERY_ALL";
    PRESENCE_ACTION[PRESENCE_ACTION["QUERY_ALL_RESPONSE"] = 3] = "QUERY_ALL_RESPONSE";
    PRESENCE_ACTION[PRESENCE_ACTION["QUERY"] = 4] = "QUERY";
    PRESENCE_ACTION[PRESENCE_ACTION["QUERY_RESPONSE"] = 5] = "QUERY_RESPONSE";
    PRESENCE_ACTION[PRESENCE_ACTION["PRESENCE_JOIN"] = 6] = "PRESENCE_JOIN";
    PRESENCE_ACTION[PRESENCE_ACTION["PRESENCE_JOIN_ALL"] = 7] = "PRESENCE_JOIN_ALL";
    PRESENCE_ACTION[PRESENCE_ACTION["PRESENCE_LEAVE"] = 8] = "PRESENCE_LEAVE";
    PRESENCE_ACTION[PRESENCE_ACTION["PRESENCE_LEAVE_ALL"] = 9] = "PRESENCE_LEAVE_ALL";
    PRESENCE_ACTION[PRESENCE_ACTION["SUBSCRIBE"] = 10] = "SUBSCRIBE";
    PRESENCE_ACTION[PRESENCE_ACTION["UNSUBSCRIBE"] = 11] = "UNSUBSCRIBE";
    PRESENCE_ACTION[PRESENCE_ACTION["SUBSCRIBE_ALL"] = 12] = "SUBSCRIBE_ALL";
    PRESENCE_ACTION[PRESENCE_ACTION["UNSUBSCRIBE_ALL"] = 13] = "UNSUBSCRIBE_ALL";
    PRESENCE_ACTION[PRESENCE_ACTION["INVALID_PRESENCE_USERS"] = 100] = "INVALID_PRESENCE_USERS";
    PRESENCE_ACTION[PRESENCE_ACTION["MESSAGE_PERMISSION_ERROR"] = 101] = "MESSAGE_PERMISSION_ERROR";
    PRESENCE_ACTION[PRESENCE_ACTION["MESSAGE_DENIED"] = 102] = "MESSAGE_DENIED";
    PRESENCE_ACTION[PRESENCE_ACTION["MULTIPLE_SUBSCRIPTIONS"] = 103] = "MULTIPLE_SUBSCRIPTIONS";
    PRESENCE_ACTION[PRESENCE_ACTION["NOT_SUBSCRIBED"] = 104] = "NOT_SUBSCRIBED";
})(PRESENCE_ACTION = exports.PRESENCE_ACTION || (exports.PRESENCE_ACTION = {}));
//# sourceMappingURL=presence.js.map

/***/ }),

/***/ "./node_modules/@deepstream/protobuf/dist/types/record.js":
/*!****************************************************************!*\
  !*** ./node_modules/@deepstream/protobuf/dist/types/record.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RECORD_ACTION;
(function (RECORD_ACTION) {
    RECORD_ACTION[RECORD_ACTION["UNKNOWN"] = 0] = "UNKNOWN";
    RECORD_ACTION[RECORD_ACTION["ERROR"] = 1] = "ERROR";
    RECORD_ACTION[RECORD_ACTION["NOTIFY"] = 2] = "NOTIFY";
    RECORD_ACTION[RECORD_ACTION["READ"] = 3] = "READ";
    RECORD_ACTION[RECORD_ACTION["READ_RESPONSE"] = 4] = "READ_RESPONSE";
    RECORD_ACTION[RECORD_ACTION["HEAD"] = 5] = "HEAD";
    RECORD_ACTION[RECORD_ACTION["HEAD_RESPONSE"] = 6] = "HEAD_RESPONSE";
    RECORD_ACTION[RECORD_ACTION["HEAD_BULK"] = 7] = "HEAD_BULK";
    RECORD_ACTION[RECORD_ACTION["HEAD_RESPONSE_BULK"] = 8] = "HEAD_RESPONSE_BULK";
    RECORD_ACTION[RECORD_ACTION["DELETE"] = 9] = "DELETE";
    RECORD_ACTION[RECORD_ACTION["DELETE_SUCCESS"] = 10] = "DELETE_SUCCESS";
    RECORD_ACTION[RECORD_ACTION["DELETE_BULK"] = 11] = "DELETE_BULK";
    RECORD_ACTION[RECORD_ACTION["DELETE_BULK_SUCCESS"] = 12] = "DELETE_BULK_SUCCESS";
    RECORD_ACTION[RECORD_ACTION["DELETED"] = 13] = "DELETED";
    RECORD_ACTION[RECORD_ACTION["WRITE_ACKNOWLEDGEMENT"] = 14] = "WRITE_ACKNOWLEDGEMENT";
    RECORD_ACTION[RECORD_ACTION["CREATE"] = 15] = "CREATE";
    RECORD_ACTION[RECORD_ACTION["CREATEANDUPDATE"] = 16] = "CREATEANDUPDATE";
    RECORD_ACTION[RECORD_ACTION["CREATEANDPATCH"] = 17] = "CREATEANDPATCH";
    RECORD_ACTION[RECORD_ACTION["UPDATE"] = 18] = "UPDATE";
    RECORD_ACTION[RECORD_ACTION["PATCH"] = 19] = "PATCH";
    RECORD_ACTION[RECORD_ACTION["ERASE"] = 20] = "ERASE";
    RECORD_ACTION[RECORD_ACTION["SUBSCRIBEANDHEAD"] = 21] = "SUBSCRIBEANDHEAD";
    RECORD_ACTION[RECORD_ACTION["SUBSCRIBEANDREAD"] = 22] = "SUBSCRIBEANDREAD";
    RECORD_ACTION[RECORD_ACTION["SUBSCRIBECREATEANDREAD"] = 23] = "SUBSCRIBECREATEANDREAD";
    RECORD_ACTION[RECORD_ACTION["SUBSCRIBECREATEANDUPDATE"] = 24] = "SUBSCRIBECREATEANDUPDATE";
    RECORD_ACTION[RECORD_ACTION["SUBSCRIBE"] = 25] = "SUBSCRIBE";
    RECORD_ACTION[RECORD_ACTION["UNSUBSCRIBE"] = 26] = "UNSUBSCRIBE";
    RECORD_ACTION[RECORD_ACTION["LISTEN"] = 27] = "LISTEN";
    RECORD_ACTION[RECORD_ACTION["UNLISTEN"] = 28] = "UNLISTEN";
    RECORD_ACTION[RECORD_ACTION["LISTEN_ACCEPT"] = 29] = "LISTEN_ACCEPT";
    RECORD_ACTION[RECORD_ACTION["LISTEN_REJECT"] = 30] = "LISTEN_REJECT";
    RECORD_ACTION[RECORD_ACTION["SUBSCRIPTION_HAS_PROVIDER"] = 31] = "SUBSCRIPTION_HAS_PROVIDER";
    RECORD_ACTION[RECORD_ACTION["SUBSCRIPTION_HAS_NO_PROVIDER"] = 32] = "SUBSCRIPTION_HAS_NO_PROVIDER";
    RECORD_ACTION[RECORD_ACTION["SUBSCRIPTION_FOR_PATTERN_FOUND"] = 33] = "SUBSCRIPTION_FOR_PATTERN_FOUND";
    RECORD_ACTION[RECORD_ACTION["SUBSCRIPTION_FOR_PATTERN_REMOVED"] = 34] = "SUBSCRIPTION_FOR_PATTERN_REMOVED";
    RECORD_ACTION[RECORD_ACTION["CACHE_RETRIEVAL_TIMEOUT"] = 100] = "CACHE_RETRIEVAL_TIMEOUT";
    RECORD_ACTION[RECORD_ACTION["STORAGE_RETRIEVAL_TIMEOUT"] = 101] = "STORAGE_RETRIEVAL_TIMEOUT";
    RECORD_ACTION[RECORD_ACTION["VERSION_EXISTS"] = 102] = "VERSION_EXISTS";
    RECORD_ACTION[RECORD_ACTION["RECORD_LOAD_ERROR"] = 103] = "RECORD_LOAD_ERROR";
    RECORD_ACTION[RECORD_ACTION["RECORD_CREATE_ERROR"] = 104] = "RECORD_CREATE_ERROR";
    RECORD_ACTION[RECORD_ACTION["RECORD_UPDATE_ERROR"] = 105] = "RECORD_UPDATE_ERROR";
    RECORD_ACTION[RECORD_ACTION["RECORD_DELETE_ERROR"] = 106] = "RECORD_DELETE_ERROR";
    RECORD_ACTION[RECORD_ACTION["RECORD_NOT_FOUND"] = 107] = "RECORD_NOT_FOUND";
    RECORD_ACTION[RECORD_ACTION["INVALID_VERSION"] = 108] = "INVALID_VERSION";
    RECORD_ACTION[RECORD_ACTION["INVALID_PATCH_ON_HOTPATH"] = 109] = "INVALID_PATCH_ON_HOTPATH";
    RECORD_ACTION[RECORD_ACTION["INVALID_LISTEN_REGEX"] = 110] = "INVALID_LISTEN_REGEX";
    RECORD_ACTION[RECORD_ACTION["LISTEN_RESPONSE_TIMEOUT"] = 111] = "LISTEN_RESPONSE_TIMEOUT";
    RECORD_ACTION[RECORD_ACTION["LISTEN_UNSUCCESSFUL"] = 112] = "LISTEN_UNSUCCESSFUL";
    RECORD_ACTION[RECORD_ACTION["RECORD_NOTIFY_ERROR"] = 113] = "RECORD_NOTIFY_ERROR";
    RECORD_ACTION[RECORD_ACTION["MESSAGE_PERMISSION_ERROR"] = 114] = "MESSAGE_PERMISSION_ERROR";
    RECORD_ACTION[RECORD_ACTION["MESSAGE_DENIED"] = 115] = "MESSAGE_DENIED";
    RECORD_ACTION[RECORD_ACTION["INVALID_MESSAGE_DATA"] = 116] = "INVALID_MESSAGE_DATA";
    RECORD_ACTION[RECORD_ACTION["MULTIPLE_SUBSCRIPTIONS"] = 117] = "MULTIPLE_SUBSCRIPTIONS";
    RECORD_ACTION[RECORD_ACTION["NOT_SUBSCRIBED"] = 118] = "NOT_SUBSCRIBED";
})(RECORD_ACTION = exports.RECORD_ACTION || (exports.RECORD_ACTION = {}));
//# sourceMappingURL=record.js.map

/***/ }),

/***/ "./node_modules/@deepstream/protobuf/dist/types/rpc.js":
/*!*************************************************************!*\
  !*** ./node_modules/@deepstream/protobuf/dist/types/rpc.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RPC_ACTION;
(function (RPC_ACTION) {
    RPC_ACTION[RPC_ACTION["UNKNOWN"] = 0] = "UNKNOWN";
    RPC_ACTION[RPC_ACTION["ERROR"] = 1] = "ERROR";
    RPC_ACTION[RPC_ACTION["REQUEST"] = 2] = "REQUEST";
    RPC_ACTION[RPC_ACTION["ACCEPT"] = 4] = "ACCEPT";
    RPC_ACTION[RPC_ACTION["RESPONSE"] = 5] = "RESPONSE";
    RPC_ACTION[RPC_ACTION["REJECT"] = 6] = "REJECT";
    RPC_ACTION[RPC_ACTION["REQUEST_ERROR"] = 7] = "REQUEST_ERROR";
    RPC_ACTION[RPC_ACTION["PROVIDE"] = 8] = "PROVIDE";
    RPC_ACTION[RPC_ACTION["UNPROVIDE"] = 9] = "UNPROVIDE";
    RPC_ACTION[RPC_ACTION["NO_RPC_PROVIDER"] = 100] = "NO_RPC_PROVIDER";
    RPC_ACTION[RPC_ACTION["ACCEPT_TIMEOUT"] = 101] = "ACCEPT_TIMEOUT";
    RPC_ACTION[RPC_ACTION["MULTIPLE_ACCEPT"] = 102] = "MULTIPLE_ACCEPT";
    RPC_ACTION[RPC_ACTION["INVALID_RPC_CORRELATION_ID"] = 103] = "INVALID_RPC_CORRELATION_ID";
    RPC_ACTION[RPC_ACTION["RESPONSE_TIMEOUT"] = 104] = "RESPONSE_TIMEOUT";
    RPC_ACTION[RPC_ACTION["MULTIPLE_RESPONSE"] = 105] = "MULTIPLE_RESPONSE";
    RPC_ACTION[RPC_ACTION["MESSAGE_PERMISSION_ERROR"] = 106] = "MESSAGE_PERMISSION_ERROR";
    RPC_ACTION[RPC_ACTION["MESSAGE_DENIED"] = 107] = "MESSAGE_DENIED";
    RPC_ACTION[RPC_ACTION["INVALID_MESSAGE_DATA"] = 108] = "INVALID_MESSAGE_DATA";
    RPC_ACTION[RPC_ACTION["MULTIPLE_PROVIDERS"] = 109] = "MULTIPLE_PROVIDERS";
    RPC_ACTION[RPC_ACTION["NOT_PROVIDED"] = 110] = "NOT_PROVIDED";
})(RPC_ACTION = exports.RPC_ACTION || (exports.RPC_ACTION = {}));
//# sourceMappingURL=rpc.js.map

/***/ }),

/***/ "./node_modules/@deepstream/protobuf/dist/types/state.js":
/*!***************************************************************!*\
  !*** ./node_modules/@deepstream/protobuf/dist/types/state.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var STATE_REGISTRY_TOPIC;
(function (STATE_REGISTRY_TOPIC) {
    STATE_REGISTRY_TOPIC[STATE_REGISTRY_TOPIC["EVENT_SUBSCRIPTIONS"] = 11] = "EVENT_SUBSCRIPTIONS";
    STATE_REGISTRY_TOPIC[STATE_REGISTRY_TOPIC["RECORD_SUBSCRIPTIONS"] = 12] = "RECORD_SUBSCRIPTIONS";
    STATE_REGISTRY_TOPIC[STATE_REGISTRY_TOPIC["SUBSCRIPTIONS"] = 9] = "SUBSCRIPTIONS";
    STATE_REGISTRY_TOPIC[STATE_REGISTRY_TOPIC["ONLINE_USERS"] = 10] = "ONLINE_USERS";
    STATE_REGISTRY_TOPIC[STATE_REGISTRY_TOPIC["MONITORING_SUBSCRIPTIONS"] = 24] = "MONITORING_SUBSCRIPTIONS";
    STATE_REGISTRY_TOPIC[STATE_REGISTRY_TOPIC["RPC_SUBSCRIPTIONS"] = 13] = "RPC_SUBSCRIPTIONS";
    STATE_REGISTRY_TOPIC[STATE_REGISTRY_TOPIC["PRESENCE_SUBSCRIPTIONS"] = 14] = "PRESENCE_SUBSCRIPTIONS";
    STATE_REGISTRY_TOPIC[STATE_REGISTRY_TOPIC["RECORD_LISTEN_PATTERNS"] = 15] = "RECORD_LISTEN_PATTERNS";
    STATE_REGISTRY_TOPIC[STATE_REGISTRY_TOPIC["EVENT_LISTEN_PATTERNS"] = 16] = "EVENT_LISTEN_PATTERNS";
    STATE_REGISTRY_TOPIC[STATE_REGISTRY_TOPIC["RECORD_PUBLISHED_SUBSCRIPTIONS"] = 17] = "RECORD_PUBLISHED_SUBSCRIPTIONS";
    STATE_REGISTRY_TOPIC[STATE_REGISTRY_TOPIC["EVENT_PUBLISHED_SUBSCRIPTIONS"] = 18] = "EVENT_PUBLISHED_SUBSCRIPTIONS";
    STATE_REGISTRY_TOPIC[STATE_REGISTRY_TOPIC["RECORD_LISTENING"] = 19] = "RECORD_LISTENING";
    STATE_REGISTRY_TOPIC[STATE_REGISTRY_TOPIC["EVENT_LISTENING"] = 20] = "EVENT_LISTENING";
    STATE_REGISTRY_TOPIC[STATE_REGISTRY_TOPIC["STATE_REGISTRY"] = 21] = "STATE_REGISTRY";
})(STATE_REGISTRY_TOPIC = exports.STATE_REGISTRY_TOPIC || (exports.STATE_REGISTRY_TOPIC = {}));
var STATE_ACTION;
(function (STATE_ACTION) {
    STATE_ACTION[STATE_ACTION["UNKNOWN"] = 0] = "UNKNOWN";
    STATE_ACTION[STATE_ACTION["ERROR"] = 1] = "ERROR";
    STATE_ACTION[STATE_ACTION["ADD"] = 2] = "ADD";
    STATE_ACTION[STATE_ACTION["REMOVE"] = 3] = "REMOVE";
    STATE_ACTION[STATE_ACTION["REQUEST_FULL_STATE"] = 4] = "REQUEST_FULL_STATE";
    STATE_ACTION[STATE_ACTION["FULL_STATE"] = 5] = "FULL_STATE";
    STATE_ACTION[STATE_ACTION["CHECKSUM"] = 6] = "CHECKSUM";
})(STATE_ACTION = exports.STATE_ACTION || (exports.STATE_ACTION = {}));
//# sourceMappingURL=state.js.map

/***/ }),

/***/ "./node_modules/@protobufjs/aspromise/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@protobufjs/aspromise/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = asPromise;

/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */

/**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */
function asPromise(fn, ctx/*, varargs */) {
    var params  = new Array(arguments.length - 1),
        offset  = 0,
        index   = 2,
        pending = true;
    while (index < arguments.length)
        params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err/*, varargs */) {
            if (pending) {
                pending = false;
                if (err)
                    reject(err);
                else {
                    var params = new Array(arguments.length - 1),
                        offset = 0;
                    while (offset < params.length)
                        params[offset++] = arguments[offset];
                    resolve.apply(null, params);
                }
            }
        };
        try {
            fn.apply(ctx || null, params);
        } catch (err) {
            if (pending) {
                pending = false;
                reject(err);
            }
        }
    });
}


/***/ }),

/***/ "./node_modules/@protobufjs/base64/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@protobufjs/base64/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var base64 = exports;

/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */
base64.length = function length(string) {
    var p = string.length;
    if (!p)
        return 0;
    var n = 0;
    while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
    return Math.ceil(string.length * 3) / 4 - n;
};

// Base64 encoding table
var b64 = new Array(64);

// Base64 decoding table
var s64 = new Array(123);

// 65..90, 97..122, 48..57, 43, 47
for (var i = 0; i < 64;)
    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */
base64.encode = function encode(buffer, start, end) {
    var parts = null,
        chunk = [];
    var i = 0, // output index
        j = 0, // goto index
        t;     // temporary
    while (start < end) {
        var b = buffer[start++];
        switch (j) {
            case 0:
                chunk[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[b & 63];
                j = 0;
                break;
        }
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (j) {
        chunk[i++] = b64[t];
        chunk[i++] = 61;
        if (j === 1)
            chunk[i++] = 61;
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

var invalidEncoding = "invalid encoding";

/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */
base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, // goto index
        t;     // temporary
    for (var i = 0; i < string.length;) {
        var c = string.charCodeAt(i++);
        if (c === 61 && j > 1)
            break;
        if ((c = s64[c]) === undefined)
            throw Error(invalidEncoding);
        switch (j) {
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1)
        throw Error(invalidEncoding);
    return offset - start;
};

/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */
base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};


/***/ }),

/***/ "./node_modules/@protobufjs/eventemitter/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@protobufjs/eventemitter/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = EventEmitter;

/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */
function EventEmitter() {

    /**
     * Registered listeners.
     * @type {Object.<string,*>}
     * @private
     */
    this._listeners = {};
}

/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn  : fn,
        ctx : ctx || this
    });
    return this;
};

/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined)
        this._listeners = {};
    else {
        if (fn === undefined)
            this._listeners[evt] = [];
        else {
            var listeners = this._listeners[evt];
            for (var i = 0; i < listeners.length;)
                if (listeners[i].fn === fn)
                    listeners.splice(i, 1);
                else
                    ++i;
        }
    }
    return this;
};

/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
        var args = [],
            i = 1;
        for (; i < arguments.length;)
            args.push(arguments[i++]);
        for (i = 0; i < listeners.length;)
            listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
};


/***/ }),

/***/ "./node_modules/@protobufjs/float/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@protobufjs/float/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory(factory);

/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */

/**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

// Factory function for the purpose of node-based testing in modified global environments
function factory(exports) {

    // float: typed array
    if (typeof Float32Array !== "undefined") (function() {

        var f32 = new Float32Array([ -0 ]),
            f8b = new Uint8Array(f32.buffer),
            le  = f8b[3] === 128;

        function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
        }

        function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        /* istanbul ignore next */
        exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

        function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
        }

        function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos    ];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
        }

        /* istanbul ignore next */
        exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        /* istanbul ignore next */
        exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;

    // float: ieee754
    })(); else (function() {

        function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0)
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
            else if (isNaN(val))
                writeUint(2143289344, buf, pos);
            else if (val > 3.4028234663852886e+38) // +-Infinity
                writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 1.1754943508222875e-38) // denormal
                writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);
            else {
                var exponent = Math.floor(Math.log(val) / Math.LN2),
                    mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
        }

        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

        function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos),
                sign = (uint >> 31) * 2 + 1,
                exponent = uint >>> 23 & 255,
                mantissa = uint & 8388607;
            return exponent === 255
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 1.401298464324817e-45 * mantissa
                : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }

        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);

    })();

    // double: typed array
    if (typeof Float64Array !== "undefined") (function() {

        var f64 = new Float64Array([-0]),
            f8b = new Uint8Array(f64.buffer),
            le  = f8b[7] === 128;

        function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
        }

        function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        /* istanbul ignore next */
        exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

        function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
        }

        function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos    ];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
        }

        /* istanbul ignore next */
        exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        /* istanbul ignore next */
        exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;

    // double: ieee754
    })(); else (function() {

        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
            } else if (val > 1.7976931348623157e+308) { // +-Infinity
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
                var mantissa;
                if (val < 2.2250738585072014e-308) { // denormal
                    mantissa = val / 5e-324;
                    writeUint(mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2);
                    if (exponent === 1024)
                        exponent = 1023;
                    mantissa = val * Math.pow(2, -exponent);
                    writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
            }
        }

        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0),
                hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1,
                exponent = hi >>> 20 & 2047,
                mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 5e-324 * mantissa
                : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }

        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);

    })();

    return exports;
}

// uint helpers

function writeUintLE(val, buf, pos) {
    buf[pos    ] =  val        & 255;
    buf[pos + 1] =  val >>> 8  & 255;
    buf[pos + 2] =  val >>> 16 & 255;
    buf[pos + 3] =  val >>> 24;
}

function writeUintBE(val, buf, pos) {
    buf[pos    ] =  val >>> 24;
    buf[pos + 1] =  val >>> 16 & 255;
    buf[pos + 2] =  val >>> 8  & 255;
    buf[pos + 3] =  val        & 255;
}

function readUintLE(buf, pos) {
    return (buf[pos    ]
          | buf[pos + 1] << 8
          | buf[pos + 2] << 16
          | buf[pos + 3] << 24) >>> 0;
}

function readUintBE(buf, pos) {
    return (buf[pos    ] << 24
          | buf[pos + 1] << 16
          | buf[pos + 2] << 8
          | buf[pos + 3]) >>> 0;
}


/***/ }),

/***/ "./node_modules/@protobufjs/inquire/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@protobufjs/inquire/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = inquire;

/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */
function inquire(moduleName) {
    try {
        var mod = eval("quire".replace(/^/,"re"))(moduleName); // eslint-disable-line no-eval
        if (mod && (mod.length || Object.keys(mod).length))
            return mod;
    } catch (e) {} // eslint-disable-line no-empty
    return null;
}


/***/ }),

/***/ "./node_modules/@protobufjs/pool/index.js":
/*!************************************************!*\
  !*** ./node_modules/@protobufjs/pool/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = pool;

/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */

/**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */
function pool(alloc, slice, size) {
    var SIZE   = size || 8192;
    var MAX    = SIZE >>> 1;
    var slab   = null;
    var offset = SIZE;
    return function pool_alloc(size) {
        if (size < 1 || size > MAX)
            return alloc(size);
        if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size);
        if (offset & 7) // align to 32 bit
            offset = (offset | 7) + 1;
        return buf;
    };
}


/***/ }),

/***/ "./node_modules/@protobufjs/utf8/index.js":
/*!************************************************!*\
  !*** ./node_modules/@protobufjs/utf8/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var utf8 = exports;

/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */
utf8.length = function utf8_length(string) {
    var len = 0,
        c = 0;
    for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
            len += 1;
        else if (c < 2048)
            len += 2;
        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
            ++i;
            len += 4;
        } else
            len += 3;
    }
    return len;
};

/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */
utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1)
        return "";
    var parts = null,
        chunk = [],
        i = 0, // char offset
        t;     // temporary
    while (start < end) {
        t = buffer[start++];
        if (t < 128)
            chunk[i++] = t;
        else if (t > 191 && t < 224)
            chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
            chunk[i++] = 0xD800 + (t >> 10);
            chunk[i++] = 0xDC00 + (t & 1023);
        } else
            chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */
utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset,
        c1, // character 1
        c2; // character 2
    for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6       | 192;
            buffer[offset++] = c1       & 63 | 128;
        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
            ++i;
            buffer[offset++] = c1 >> 18      | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12      | 224;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        }
    }
    return offset - start;
};


/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/buffer/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/buffer/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/node-libs-browser/node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/isarray/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/isarray/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/protobufjs/minimal.js":
/*!********************************************!*\
  !*** ./node_modules/protobufjs/minimal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// minimal library entry point.


module.exports = __webpack_require__(/*! ./src/index-minimal */ "./node_modules/protobufjs/src/index-minimal.js");


/***/ }),

/***/ "./node_modules/protobufjs/src/index-minimal.js":
/*!******************************************************!*\
  !*** ./node_modules/protobufjs/src/index-minimal.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var protobuf = exports;

/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */
protobuf.build = "minimal";

// Serialization
protobuf.Writer       = __webpack_require__(/*! ./writer */ "./node_modules/protobufjs/src/writer.js");
protobuf.BufferWriter = __webpack_require__(/*! ./writer_buffer */ "./node_modules/protobufjs/src/writer_buffer.js");
protobuf.Reader       = __webpack_require__(/*! ./reader */ "./node_modules/protobufjs/src/reader.js");
protobuf.BufferReader = __webpack_require__(/*! ./reader_buffer */ "./node_modules/protobufjs/src/reader_buffer.js");

// Utility
protobuf.util         = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");
protobuf.rpc          = __webpack_require__(/*! ./rpc */ "./node_modules/protobufjs/src/rpc.js");
protobuf.roots        = __webpack_require__(/*! ./roots */ "./node_modules/protobufjs/src/roots.js");
protobuf.configure    = configure;

/* istanbul ignore next */
/**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */
function configure() {
    protobuf.util._configure();
    protobuf.Writer._configure(protobuf.BufferWriter);
    protobuf.Reader._configure(protobuf.BufferReader);
}

// Set up buffer utility according to the environment
configure();


/***/ }),

/***/ "./node_modules/protobufjs/src/reader.js":
/*!***********************************************!*\
  !*** ./node_modules/protobufjs/src/reader.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Reader;

var util      = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

var BufferReader; // cyclic

var LongBits  = util.LongBits,
    utf8      = util.utf8;

/* istanbul ignore next */
function indexOutOfRange(reader, writeLength) {
    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}

/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */
function Reader(buffer) {

    /**
     * Read buffer.
     * @type {Uint8Array}
     */
    this.buf = buffer;

    /**
     * Read buffer position.
     * @type {number}
     */
    this.pos = 0;

    /**
     * Read buffer length.
     * @type {number}
     */
    this.len = buffer.length;
}

var create_array = typeof Uint8Array !== "undefined"
    ? function create_typed_array(buffer) {
        if (buffer instanceof Uint8Array || Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    }
    /* istanbul ignore next */
    : function create_array(buffer) {
        if (Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    };

var create = function create() {
    return util.Buffer
        ? function create_buffer_setup(buffer) {
            return (Reader.create = function create_buffer(buffer) {
                return util.Buffer.isBuffer(buffer)
                    ? new BufferReader(buffer)
                    /* istanbul ignore next */
                    : create_array(buffer);
            })(buffer);
        }
        /* istanbul ignore next */
        : create_array;
};

/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */
Reader.create = create();

Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */ util.Array.prototype.slice;

/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.uint32 = (function read_uint32_setup() {
    var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
    return function read_uint32() {
        value = (         this.buf[this.pos] & 127       ) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) <<  7) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] &  15) << 28) >>> 0; if (this.buf[this.pos++] < 128) return value;

        /* istanbul ignore if */
        if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
        }
        return value;
    };
})();

/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
};

/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
};

/* eslint-disable no-invalid-this */

function readLongVarint() {
    // tends to deopt with local vars for octet etc.
    var bits = new LongBits(0, 0);
    var i = 0;
    if (this.len - this.pos > 4) { // fast route (lo)
        for (; i < 4; ++i) {
            // 1st..4th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 5th
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >>  4) >>> 0;
        if (this.buf[this.pos++] < 128)
            return bits;
        i = 0;
    } else {
        for (; i < 3; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 1st..3th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 4th
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
    }
    if (this.len - this.pos > 4) { // fast route (hi)
        for (; i < 5; ++i) {
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    } else {
        for (; i < 5; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    }
    /* istanbul ignore next */
    throw Error("invalid varint encoding");
}

/* eslint-enable no-invalid-this */

/**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */
Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
};

function readFixed32_end(buf, end) { // note that this uses `end`, not `pos`
    return (buf[end - 4]
          | buf[end - 3] << 8
          | buf[end - 2] << 16
          | buf[end - 1] << 24) >>> 0;
}

/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.fixed32 = function read_fixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4);
};

/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.sfixed32 = function read_sfixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4) | 0;
};

/* eslint-disable no-invalid-this */

function readFixed64(/* this: Reader */) {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);

    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}

/* eslint-enable no-invalid-this */

/**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.float = function read_float() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
};

/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.double = function read_double() {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */
Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32(),
        start  = this.pos,
        end    = this.pos + length;

    /* istanbul ignore if */
    if (end > this.len)
        throw indexOutOfRange(this, length);

    this.pos += length;
    if (Array.isArray(this.buf)) // plain array
        return this.buf.slice(start, end);
    return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
        ? new this.buf.constructor(0)
        : this._slice.call(this.buf, start, end);
};

/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */
Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf8.read(bytes, 0, bytes.length);
};

/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */
Reader.prototype.skip = function skip(length) {
    if (typeof length === "number") {
        /* istanbul ignore if */
        if (this.pos + length > this.len)
            throw indexOutOfRange(this, length);
        this.pos += length;
    } else {
        do {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
    }
    return this;
};

/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */
Reader.prototype.skipType = function(wireType) {
    switch (wireType) {
        case 0:
            this.skip();
            break;
        case 1:
            this.skip(8);
            break;
        case 2:
            this.skip(this.uint32());
            break;
        case 3:
            while ((wireType = this.uint32() & 7) !== 4) {
                this.skipType(wireType);
            }
            break;
        case 5:
            this.skip(4);
            break;

        /* istanbul ignore next */
        default:
            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
};

Reader._configure = function(BufferReader_) {
    BufferReader = BufferReader_;
    Reader.create = create();
    BufferReader._configure();

    var fn = util.Long ? "toLong" : /* istanbul ignore next */ "toNumber";
    util.merge(Reader.prototype, {

        int64: function read_int64() {
            return readLongVarint.call(this)[fn](false);
        },

        uint64: function read_uint64() {
            return readLongVarint.call(this)[fn](true);
        },

        sint64: function read_sint64() {
            return readLongVarint.call(this).zzDecode()[fn](false);
        },

        fixed64: function read_fixed64() {
            return readFixed64.call(this)[fn](true);
        },

        sfixed64: function read_sfixed64() {
            return readFixed64.call(this)[fn](false);
        }

    });
};


/***/ }),

/***/ "./node_modules/protobufjs/src/reader_buffer.js":
/*!******************************************************!*\
  !*** ./node_modules/protobufjs/src/reader_buffer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = BufferReader;

// extends Reader
var Reader = __webpack_require__(/*! ./reader */ "./node_modules/protobufjs/src/reader.js");
(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

var util = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */
function BufferReader(buffer) {
    Reader.call(this, buffer);

    /**
     * Read buffer.
     * @name BufferReader#buf
     * @type {Buffer}
     */
}

BufferReader._configure = function () {
    /* istanbul ignore else */
    if (util.Buffer)
        BufferReader.prototype._slice = util.Buffer.prototype.slice;
};


/**
 * @override
 */
BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32(); // modifies pos
    return this.buf.utf8Slice
        ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len))
        : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */

BufferReader._configure();


/***/ }),

/***/ "./node_modules/protobufjs/src/roots.js":
/*!**********************************************!*\
  !*** ./node_modules/protobufjs/src/roots.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};

/**
 * Named roots.
 * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
 * Can also be used manually to make roots available accross modules.
 * @name roots
 * @type {Object.<string,Root>}
 * @example
 * // pbjs -r myroot -o compiled.js ...
 *
 * // in another module:
 * require("./compiled.js");
 *
 * // in any subsequent module:
 * var root = protobuf.roots["myroot"];
 */


/***/ }),

/***/ "./node_modules/protobufjs/src/rpc.js":
/*!********************************************!*\
  !*** ./node_modules/protobufjs/src/rpc.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Streaming RPC helpers.
 * @namespace
 */
var rpc = exports;

/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */

rpc.Service = __webpack_require__(/*! ./rpc/service */ "./node_modules/protobufjs/src/rpc/service.js");


/***/ }),

/***/ "./node_modules/protobufjs/src/rpc/service.js":
/*!****************************************************!*\
  !*** ./node_modules/protobufjs/src/rpc/service.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Service;

var util = __webpack_require__(/*! ../util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

// Extends EventEmitter
(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;

/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */
function Service(rpcImpl, requestDelimited, responseDelimited) {

    if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");

    util.EventEmitter.call(this);

    /**
     * RPC implementation. Becomes `null` once the service is ended.
     * @type {RPCImpl|null}
     */
    this.rpcImpl = rpcImpl;

    /**
     * Whether requests are length-delimited.
     * @type {boolean}
     */
    this.requestDelimited = Boolean(requestDelimited);

    /**
     * Whether responses are length-delimited.
     * @type {boolean}
     */
    this.responseDelimited = Boolean(responseDelimited);
}

/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */
Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {

    if (!request)
        throw TypeError("request must be specified");

    var self = this;
    if (!callback)
        return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

    if (!self.rpcImpl) {
        setTimeout(function() { callback(Error("already ended")); }, 0);
        return undefined;
    }

    try {
        return self.rpcImpl(
            method,
            requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
            function rpcCallback(err, response) {

                if (err) {
                    self.emit("error", err, method);
                    return callback(err);
                }

                if (response === null) {
                    self.end(/* endedByRPC */ true);
                    return undefined;
                }

                if (!(response instanceof responseCtor)) {
                    try {
                        response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                    } catch (err) {
                        self.emit("error", err, method);
                        return callback(err);
                    }
                }

                self.emit("data", response, method);
                return callback(null, response);
            }
        );
    } catch (err) {
        self.emit("error", err, method);
        setTimeout(function() { callback(err); }, 0);
        return undefined;
    }
};

/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */
Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
        if (!endedByRPC) // signal end to rpcImpl
            this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
    }
    return this;
};


/***/ }),

/***/ "./node_modules/protobufjs/src/util/longbits.js":
/*!******************************************************!*\
  !*** ./node_modules/protobufjs/src/util/longbits.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = LongBits;

var util = __webpack_require__(/*! ../util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */
function LongBits(lo, hi) {

    // note that the casts below are theoretically unnecessary as of today, but older statically
    // generated converter code might still call the ctor with signed 32bits. kept for compat.

    /**
     * Low bits.
     * @type {number}
     */
    this.lo = lo >>> 0;

    /**
     * High bits.
     * @type {number}
     */
    this.hi = hi >>> 0;
}

/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */
var zero = LongBits.zero = new LongBits(0, 0);

zero.toNumber = function() { return 0; };
zero.zzEncode = zero.zzDecode = function() { return this; };
zero.length = function() { return 1; };

/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */
var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";

/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.fromNumber = function fromNumber(value) {
    if (value === 0)
        return zero;
    var sign = value < 0;
    if (sign)
        value = -value;
    var lo = value >>> 0,
        hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
            lo = 0;
            if (++hi > 4294967295)
                hi = 0;
        }
    }
    return new LongBits(lo, hi);
};

/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.from = function from(value) {
    if (typeof value === "number")
        return LongBits.fromNumber(value);
    if (util.isString(value)) {
        /* istanbul ignore else */
        if (util.Long)
            value = util.Long.fromString(value);
        else
            return LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
};

/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */
LongBits.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0,
            hi = ~this.hi     >>> 0;
        if (!lo)
            hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
};

/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */
LongBits.prototype.toLong = function toLong(unsigned) {
    return util.Long
        ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
        /* istanbul ignore next */
        : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
};

var charCodeAt = String.prototype.charCodeAt;

/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */
LongBits.fromHash = function fromHash(hash) {
    if (hash === zeroHash)
        return zero;
    return new LongBits(
        ( charCodeAt.call(hash, 0)
        | charCodeAt.call(hash, 1) << 8
        | charCodeAt.call(hash, 2) << 16
        | charCodeAt.call(hash, 3) << 24) >>> 0
    ,
        ( charCodeAt.call(hash, 4)
        | charCodeAt.call(hash, 5) << 8
        | charCodeAt.call(hash, 6) << 16
        | charCodeAt.call(hash, 7) << 24) >>> 0
    );
};

/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */
LongBits.prototype.toHash = function toHash() {
    return String.fromCharCode(
        this.lo        & 255,
        this.lo >>> 8  & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24      ,
        this.hi        & 255,
        this.hi >>> 8  & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
    );
};

/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzEncode = function zzEncode() {
    var mask =   this.hi >> 31;
    this.hi  = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo  = ( this.lo << 1                   ^ mask) >>> 0;
    return this;
};

/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo  = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi  = ( this.hi >>> 1                  ^ mask) >>> 0;
    return this;
};

/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */
LongBits.prototype.length = function length() {
    var part0 =  this.lo,
        part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
        part2 =  this.hi >>> 24;
    return part2 === 0
         ? part1 === 0
           ? part0 < 16384
             ? part0 < 128 ? 1 : 2
             : part0 < 2097152 ? 3 : 4
           : part1 < 16384
             ? part1 < 128 ? 5 : 6
             : part1 < 2097152 ? 7 : 8
         : part2 < 128 ? 9 : 10;
};


/***/ }),

/***/ "./node_modules/protobufjs/src/util/minimal.js":
/*!*****************************************************!*\
  !*** ./node_modules/protobufjs/src/util/minimal.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var util = exports;

// used to return a Promise where callback is omitted
util.asPromise = __webpack_require__(/*! @protobufjs/aspromise */ "./node_modules/@protobufjs/aspromise/index.js");

// converts to / from base64 encoded strings
util.base64 = __webpack_require__(/*! @protobufjs/base64 */ "./node_modules/@protobufjs/base64/index.js");

// base class of rpc.Service
util.EventEmitter = __webpack_require__(/*! @protobufjs/eventemitter */ "./node_modules/@protobufjs/eventemitter/index.js");

// float handling accross browsers
util.float = __webpack_require__(/*! @protobufjs/float */ "./node_modules/@protobufjs/float/index.js");

// requires modules optionally and hides the call from bundlers
util.inquire = __webpack_require__(/*! @protobufjs/inquire */ "./node_modules/@protobufjs/inquire/index.js");

// converts to / from utf8 encoded strings
util.utf8 = __webpack_require__(/*! @protobufjs/utf8 */ "./node_modules/@protobufjs/utf8/index.js");

// provides a node-like buffer pool in the browser
util.pool = __webpack_require__(/*! @protobufjs/pool */ "./node_modules/@protobufjs/pool/index.js");

// utility to work with the low and high bits of a 64 bit value
util.LongBits = __webpack_require__(/*! ./longbits */ "./node_modules/protobufjs/src/util/longbits.js");

/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 */
util.isNode = Boolean(typeof global !== "undefined"
                   && global
                   && global.process
                   && global.process.versions
                   && global.process.versions.node);

/**
 * Global object reference.
 * @memberof util
 * @type {Object}
 */
util.global = util.isNode && global
           || typeof window !== "undefined" && window
           || typeof self   !== "undefined" && self
           || this; // eslint-disable-line no-invalid-this

/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */
util.emptyArray = Object.freeze ? Object.freeze([]) : /* istanbul ignore next */ []; // used on prototypes

/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */
util.emptyObject = Object.freeze ? Object.freeze({}) : /* istanbul ignore next */ {}; // used on prototypes

/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */
util.isInteger = Number.isInteger || /* istanbul ignore next */ function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};

/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */
util.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
};

/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */
util.isObject = function isObject(value) {
    return value && typeof value === "object";
};

/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isset =

/**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
};

/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @interface Buffer
 * @extends Uint8Array
 */

/**
 * Node's Buffer class if available.
 * @type {Constructor<Buffer>}
 */
util.Buffer = (function() {
    try {
        var Buffer = util.inquire("buffer").Buffer;
        // refuse to use non-node buffers if not explicitly assigned (perf reasons):
        return Buffer.prototype.utf8Write ? Buffer : /* istanbul ignore next */ null;
    } catch (e) {
        /* istanbul ignore next */
        return null;
    }
})();

// Internal alias of or polyfull for Buffer.from.
util._Buffer_from = null;

// Internal alias of or polyfill for Buffer.allocUnsafe.
util._Buffer_allocUnsafe = null;

/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */
util.newBuffer = function newBuffer(sizeOrArray) {
    /* istanbul ignore next */
    return typeof sizeOrArray === "number"
        ? util.Buffer
            ? util._Buffer_allocUnsafe(sizeOrArray)
            : new util.Array(sizeOrArray)
        : util.Buffer
            ? util._Buffer_from(sizeOrArray)
            : typeof Uint8Array === "undefined"
                ? sizeOrArray
                : new Uint8Array(sizeOrArray);
};

/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {Constructor<Uint8Array>}
 */
util.Array = typeof Uint8Array !== "undefined" ? Uint8Array /* istanbul ignore next */ : Array;

/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @interface Long
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */

/**
 * Long.js's Long class if available.
 * @type {Constructor<Long>}
 */
util.Long = /* istanbul ignore next */ util.global.dcodeIO && /* istanbul ignore next */ util.global.dcodeIO.Long
         || /* istanbul ignore next */ util.global.Long
         || util.inquire("long");

/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */
util.key2Re = /^true|false|0|1$/;

/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;

/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;

/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */
util.longToHash = function longToHash(value) {
    return value
        ? util.LongBits.from(value).toHash()
        : util.LongBits.zeroHash;
};

/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */
util.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util.LongBits.fromHash(hash);
    if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
};

/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */
function merge(dst, src, ifNotSet) { // used by converters
    for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === undefined || !ifNotSet)
            dst[keys[i]] = src[keys[i]];
    return dst;
}

util.merge = merge;

/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
};

/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {Constructor<Error>} Custom error constructor
 */
function newError(name) {

    function CustomError(message, properties) {

        if (!(this instanceof CustomError))
            return new CustomError(message, properties);

        // Error.call(this, message);
        // ^ just returns a new error instance because the ctor can be called as a function

        Object.defineProperty(this, "message", { get: function() { return message; } });

        /* istanbul ignore next */
        if (Error.captureStackTrace) // node
            Error.captureStackTrace(this, CustomError);
        else
            Object.defineProperty(this, "stack", { value: new Error().stack || "" });

        if (properties)
            merge(this, properties);
    }

    (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;

    Object.defineProperty(CustomError.prototype, "name", { get: function() { return name; } });

    CustomError.prototype.toString = function toString() {
        return this.name + ": " + this.message;
    };

    return CustomError;
}

util.newError = newError;

/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @template T extends Message<T>
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>} [properties] Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */
util.ProtocolError = newError("ProtocolError");

/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message<T>}
 */

/**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @typedef OneOfGetter
 * @type {function}
 * @returns {string|undefined} Set field name, if any
 */

/**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfGetter} Unbound getter
 */
util.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {};
    for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;

    /**
     * @returns {string|undefined} Set field name, if any
     * @this Object
     * @ignore
     */
    return function() { // eslint-disable-line consistent-return
        for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i)
            if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null)
                return keys[i];
    };
};

/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @typedef OneOfSetter
 * @type {function}
 * @param {string|undefined} value Field name
 * @returns {undefined}
 */

/**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfSetter} Unbound setter
 */
util.oneOfSetter = function setOneOf(fieldNames) {

    /**
     * @param {string} name Field name
     * @returns {undefined}
     * @this Object
     * @ignore
     */
    return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
            if (fieldNames[i] !== name)
                delete this[fieldNames[i]];
    };
};

/**
 * Default conversion options used for {@link Message#toJSON} implementations.
 *
 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
 *
 * - Longs become strings
 * - Enums become string keys
 * - Bytes become base64 encoded strings
 * - (Sub-)Messages become plain objects
 * - Maps become plain objects with all string keys
 * - Repeated fields become arrays
 * - NaN and Infinity for float and double fields become strings
 *
 * @type {IConversionOptions}
 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
 */
util.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
};

// Sets up buffer utility according to the environment (called in index-minimal)
util._configure = function() {
    var Buffer = util.Buffer;
    /* istanbul ignore if */
    if (!Buffer) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
    }
    // because node 4.x buffers are incompatible & immutable
    // see: https://github.com/dcodeIO/protobuf.js/pull/665
    util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
        /* istanbul ignore next */
        function Buffer_from(value, encoding) {
            return new Buffer(value, encoding);
        };
    util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
        /* istanbul ignore next */
        function Buffer_allocUnsafe(size) {
            return new Buffer(size);
        };
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/protobufjs/src/writer.js":
/*!***********************************************!*\
  !*** ./node_modules/protobufjs/src/writer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Writer;

var util      = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

var BufferWriter; // cyclic

var LongBits  = util.LongBits,
    base64    = util.base64,
    utf8      = util.utf8;

/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */
function Op(fn, len, val) {

    /**
     * Function to call.
     * @type {function(Uint8Array, number, *)}
     */
    this.fn = fn;

    /**
     * Value byte length.
     * @type {number}
     */
    this.len = len;

    /**
     * Next operation.
     * @type {Writer.Op|undefined}
     */
    this.next = undefined;

    /**
     * Value to write.
     * @type {*}
     */
    this.val = val; // type varies
}

/* istanbul ignore next */
function noop() {} // eslint-disable-line no-empty-function

/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */
function State(writer) {

    /**
     * Current head.
     * @type {Writer.Op}
     */
    this.head = writer.head;

    /**
     * Current tail.
     * @type {Writer.Op}
     */
    this.tail = writer.tail;

    /**
     * Current buffer length.
     * @type {number}
     */
    this.len = writer.len;

    /**
     * Next state.
     * @type {State|null}
     */
    this.next = writer.states;
}

/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */
function Writer() {

    /**
     * Current length.
     * @type {number}
     */
    this.len = 0;

    /**
     * Operations head.
     * @type {Object}
     */
    this.head = new Op(noop, 0, 0);

    /**
     * Operations tail
     * @type {Object}
     */
    this.tail = this.head;

    /**
     * Linked forked states.
     * @type {Object|null}
     */
    this.states = null;

    // When a value is written, the writer calculates its byte length and puts it into a linked
    // list of operations to perform when finish() is called. This both allows us to allocate
    // buffers of the exact required size and reduces the amount of work we have to do compared
    // to first calculating over objects and then encoding over objects. In our case, the encoding
    // part is just a linked list walk calling operations with already prepared values.
}

var create = function create() {
    return util.Buffer
        ? function create_buffer_setup() {
            return (Writer.create = function create_buffer() {
                return new BufferWriter();
            })();
        }
        /* istanbul ignore next */
        : function create_array() {
            return new Writer();
        };
};

/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */
Writer.create = create();

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */
Writer.alloc = function alloc(size) {
    return new util.Array(size);
};

// Use Uint8Array buffer pool in the browser, just like node does with buffers
/* istanbul ignore else */
if (util.Array !== Array)
    Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);

/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */
Writer.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
};

function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
}

function writeVarint32(val, buf, pos) {
    while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
    }
    buf[pos] = val;
}

/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */
function VarintOp(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
}

VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;

/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.uint32 = function write_uint32(value) {
    // here, the call to this.push has been inlined and a varint specific Op subclass is used.
    // uint32 is by far the most frequently used operation and benefits significantly from this.
    this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0)
                < 128       ? 1
        : value < 16384     ? 2
        : value < 2097152   ? 3
        : value < 268435456 ? 4
        :                     5,
    value)).len;
    return this;
};

/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.int32 = function write_int32(value) {
    return value < 0
        ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
        : this.uint32(value);
};

/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
};

function writeVarint64(val, buf, pos) {
    while (val.hi) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
    }
    while (val.lo > 127) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
}

/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits.from(value);
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.int64 = Writer.prototype.uint64;

/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits.from(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.bool = function write_bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
};

function writeFixed32(val, buf, pos) {
    buf[pos    ] =  val         & 255;
    buf[pos + 1] =  val >>> 8   & 255;
    buf[pos + 2] =  val >>> 16  & 255;
    buf[pos + 3] =  val >>> 24;
}

/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.fixed32 = function write_fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
};

/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sfixed32 = Writer.prototype.fixed32;

/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits.from(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};

/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sfixed64 = Writer.prototype.fixed64;

/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.float = function write_float(value) {
    return this._push(util.float.writeFloatLE, 4, value);
};

/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.double = function write_double(value) {
    return this._push(util.float.writeDoubleLE, 8, value);
};

var writeBytes = util.Array.prototype.set
    ? function writeBytes_set(val, buf, pos) {
        buf.set(val, pos); // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytes_for(val, buf, pos) {
        for (var i = 0; i < val.length; ++i)
            buf[pos + i] = val[i];
    };

/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */
Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
        return this._push(writeByte, 1, 0);
    if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
};

/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.string = function write_string(value) {
    var len = utf8.length(value);
    return len
        ? this.uint32(len)._push(utf8.write, len, value)
        : this._push(writeByte, 1, 0);
};

/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */
Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
};

/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */
Writer.prototype.reset = function reset() {
    if (this.states) {
        this.head   = this.states.head;
        this.tail   = this.states.tail;
        this.len    = this.states.len;
        this.states = this.states.next;
    } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len  = 0;
    }
    return this;
};

/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */
Writer.prototype.ldelim = function ldelim() {
    var head = this.head,
        tail = this.tail,
        len  = this.len;
    this.reset().uint32(len);
    if (len) {
        this.tail.next = head.next; // skip noop
        this.tail = tail;
        this.len += len;
    }
    return this;
};

/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */
Writer.prototype.finish = function finish() {
    var head = this.head.next, // skip noop
        buf  = this.constructor.alloc(this.len),
        pos  = 0;
    while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
    }
    // this.head = this.tail = null;
    return buf;
};

Writer._configure = function(BufferWriter_) {
    BufferWriter = BufferWriter_;
    Writer.create = create();
    BufferWriter._configure();
};


/***/ }),

/***/ "./node_modules/protobufjs/src/writer_buffer.js":
/*!******************************************************!*\
  !*** ./node_modules/protobufjs/src/writer_buffer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = BufferWriter;

// extends Writer
var Writer = __webpack_require__(/*! ./writer */ "./node_modules/protobufjs/src/writer.js");
(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

var util = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */
function BufferWriter() {
    Writer.call(this);
}

BufferWriter._configure = function () {
    /**
     * Allocates a buffer of the specified size.
     * @function
     * @param {number} size Buffer size
     * @returns {Buffer} Buffer
     */
    BufferWriter.alloc = util._Buffer_allocUnsafe;

    BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set"
        ? function writeBytesBuffer_set(val, buf, pos) {
          buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
          // also works for plain array values
        }
        /* istanbul ignore next */
        : function writeBytesBuffer_copy(val, buf, pos) {
          if (val.copy) // Buffer values
            val.copy(buf, pos, 0, val.length);
          else for (var i = 0; i < val.length;) // plain array values
            buf[pos++] = val[i++];
        };
};


/**
 * @override
 */
BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util.isString(value))
        value = util._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len)
        this._push(BufferWriter.writeBytesBuffer, len, value);
    return this;
};

function writeStringBuffer(val, buf, pos) {
    if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
        util.utf8.write(val, buf, pos);
    else if (buf.utf8Write)
        buf.utf8Write(val, pos);
    else
        buf.write(val, pos);
}

/**
 * @override
 */
BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = util.Buffer.byteLength(value);
    this.uint32(len);
    if (len)
        this._push(writeStringBuffer, len, value);
    return this;
};


/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */

BufferWriter._configure();


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, keywords, mocha, main, types, directories, scripts, repository, dependencies, browser, devDependencies, author, license, bugs, homepage, eslintConfig, husky, nyc, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@deepstream/client\",\"version\":\"6.0.0\",\"description\":\"the javascript client for deepstream.io\",\"keywords\":[\"deepstream\",\"javascript\",\"realtime\",\"client\"],\"mocha\":{\"recursive\":true,\"reporter\":\"dot\",\"require\":\"ts-node/register/transpile-only\",\"exit\":true},\"main\":\"dist/src/deepstream.js\",\"types\":\"dist/src/deepstream-client.d.ts\",\"directories\":{\"test\":\"src/test\"},\"scripts\":{\"tsc\":\"rm -rf dist && tsc\",\"build\":\"npm run tsc && npm run build:dev && npm run build:prod\",\"build:dev\":\"webpack --config webpack.dev.js\",\"build:prod\":\"webpack --config webpack.prod.js\",\"rebuild\":\"rimraf dist && webpack\",\"clean\":\"rimraf dist\",\"lint\":\"tslint src/*.ts src/**/*.ts -t verbose\",\"lint:fix\":\"npm run lint -- --fix\",\"test\":\"mocha src/**/*.spec.ts\",\"test:coverage\":\"nyc npm test\",\"bundle:analyse\":\"webpack --config webpack.prod.js --profile --json > ./dist/stats.json && webpack-bundle-analyzer ./dist/stats.json\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/deepstreamIO/deepstream.io-client-js.git\"},\"dependencies\":{\"@deepstream/protobuf\":\"^1.0.4\",\"buffer\":\"^5.4.3\",\"protobufjs\":\"^6.10.2\",\"ws\":\"^7.4.0\"},\"browser\":{\"net\":false,\"ws\":false},\"devDependencies\":{\"@istanbuljs/nyc-config-typescript\":\"^1.0.1\",\"@types/chai\":\"^4.2.14\",\"@types/mocha\":\"^8.0.4\",\"@types/node\":\"^14.14.9\",\"@types/sinon\":\"^9.0.9\",\"@types/ws\":\"^7.4.0\",\"chai\":\"^4.2.0\",\"coveralls\":\"^3.1.0\",\"husky\":\"^4.3.0\",\"mocha\":\"^8.2.1\",\"mocha-lcov-reporter\":\"^1.3.0\",\"nyc\":\"^15.1.0\",\"rimraf\":\"^3.0.2\",\"sinon\":\"^9.2.1\",\"terser-webpack-plugin\":\"^4.2.3\",\"ts-essentials\":\"^7.0.1\",\"ts-loader\":\"^8.0.11\",\"ts-node\":\"^9.1.1\",\"tslint\":\"^6.1.3\",\"typescript\":\"^4.1.2\",\"uglifyjs-webpack-plugin\":\"^2.2.0\",\"webpack\":\"^4.44.2\",\"webpack-bundle-analyzer\":\"^3.9.0\",\"webpack-cli\":\"^3.3.12\"},\"author\":\"deepstreamHub GmbH\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/deepstreamIO/deepstream.io-client-js/issues\"},\"homepage\":\"http://deepstream.io\",\"eslintConfig\":{\"extends\":\"deepstream\"},\"husky\":{\"hooks\":{\"pre-commit\":\"npm t && npm run lint && npm run build\",\"pre-publish\":\"npm t && npm run build\"}},\"nyc\":{\"extends\":\"@istanbuljs/nyc-config-typescript\",\"include\":[\"src/**/*.ts\"],\"exclude\":[\"src/**/*.spec.ts\"],\"extension\":[\".ts\"],\"require\":[\"ts-node/register\"],\"reporter\":[\"lcov\"]}}");

/***/ }),

/***/ "./src/client-options.ts":
/*!*******************************!*\
  !*** ./src/client-options.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultOptions = void 0;
var merge_strategy_1 = __webpack_require__(/*! ./record/merge-strategy */ "./src/record/merge-strategy.ts");
exports.DefaultOptions = {
    nativeTimerRegistry: true,
    intervalTimerResolution: 50,
    subscriptionInterval: 100,
    heartbeatInterval: 30000,
    reconnectIntervalIncrement: 4000,
    maxReconnectInterval: 180000,
    maxReconnectAttempts: 5,
    subscriptionTimeout: 2000,
    recordReadAckTimeout: 15000,
    recordReadTimeout: 15000,
    recordDeleteTimeout: 15000,
    offlineBufferTimeout: 2000,
    recordDiscardTimeout: 5000,
    offlineEnabled: false,
    saveUpdatesOffline: false,
    recordReadOnlyMode: false,
    recordPrefixWriteWhitelist: [],
    path: '/deepstream',
    mergeStrategy: merge_strategy_1.REMOTE_WINS,
    recordDeepCopy: true,
    dirtyStorageName: '__ds__dirty_records',
    nodeStoragePath: './local-storage',
    indexdb: {
        autoVersion: false,
        dbVersion: 1,
        primaryKey: 'id',
        storageDatabaseName: 'deepstream',
        defaultObjectStoreName: 'records',
        objectStoreNames: [],
        ignorePrefixes: [],
        flushTimeout: 50,
    },
    nodeStorageSize: 5,
    lazyConnect: false,
    debug: false,
    initialRecordVersion: 1
};


/***/ }),

/***/ "./src/connection/connection.ts":
/*!**************************************!*\
  !*** ./src/connection/connection.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
var message_parser_1 = __webpack_require__(/*! @deepstream/protobuf/dist/src/message-parser */ "./node_modules/@deepstream/protobuf/dist/src/message-parser.js");
var state_machine_1 = __webpack_require__(/*! ../util/state-machine */ "./src/util/state-machine.ts");
var utils = __webpack_require__(/*! ../util/utils */ "./src/util/utils.ts");
var emitter_1 = __webpack_require__(/*! ../util/emitter */ "./src/util/emitter.ts");
var pkg = __webpack_require__(/*! ../../package.json */ "./package.json");
var Connection = /** @class */ (function () {
    function Connection(services, options, url, emitter) {
        var _this = this;
        this.services = services;
        this.options = options;
        this.reconnectTimeout = null;
        this.authParams = null;
        this.handlers = new Map();
        this.authCallback = null;
        this.resumeCallback = null;
        this.emitter = emitter;
        this.internalEmitter = new emitter_1.Emitter();
        this.isInLimbo = true;
        this.clientData = null;
        this.heartbeatIntervalTimeout = null;
        this.endpoint = null;
        this.reconnectionAttempt = 0;
        this.limboTimeout = null;
        var isReconnecting = false;
        var firstOpen = true;
        this.stateMachine = new state_machine_1.StateMachine(this.services.logger, {
            init: constants_1.CONNECTION_STATE.CLOSED,
            onStateChanged: function (newState, oldState) {
                if (newState === oldState) {
                    return;
                }
                emitter.emit(constants_1.EVENT.CONNECTION_STATE_CHANGED, newState);
                if (newState === constants_1.CONNECTION_STATE.RECONNECTING) {
                    _this.isInLimbo = true;
                    isReconnecting = true;
                    if (oldState !== constants_1.CONNECTION_STATE.CLOSED) {
                        _this.internalEmitter.emit(constants_1.EVENT.CONNECTION_LOST);
                        _this.limboTimeout = _this.services.timerRegistry.add({
                            duration: _this.options.offlineBufferTimeout,
                            context: _this,
                            callback: function () {
                                _this.isInLimbo = false;
                                _this.internalEmitter.emit(constants_1.EVENT.EXIT_LIMBO);
                            }
                        });
                    }
                }
                else if (newState === constants_1.CONNECTION_STATE.OPEN && (isReconnecting || firstOpen)) {
                    firstOpen = false;
                    _this.isInLimbo = false;
                    _this.internalEmitter.emit(constants_1.EVENT.CONNECTION_REESTABLISHED);
                    _this.services.timerRegistry.remove(_this.limboTimeout);
                }
            },
            transitions: [
                { name: "initialised" /* INITIALISED */, from: constants_1.CONNECTION_STATE.CLOSED, to: constants_1.CONNECTION_STATE.INITIALISING },
                { name: "connected" /* CONNECTED */, from: constants_1.CONNECTION_STATE.INITIALISING, to: constants_1.CONNECTION_STATE.AWAITING_CONNECTION },
                { name: "connected" /* CONNECTED */, from: constants_1.CONNECTION_STATE.REDIRECTING, to: constants_1.CONNECTION_STATE.AWAITING_CONNECTION },
                { name: "connected" /* CONNECTED */, from: constants_1.CONNECTION_STATE.RECONNECTING, to: constants_1.CONNECTION_STATE.AWAITING_CONNECTION },
                { name: "challenge" /* CHALLENGE */, from: constants_1.CONNECTION_STATE.AWAITING_CONNECTION, to: constants_1.CONNECTION_STATE.CHALLENGING },
                { name: "redirected" /* CONNECTION_REDIRECTED */, from: constants_1.CONNECTION_STATE.CHALLENGING, to: constants_1.CONNECTION_STATE.REDIRECTING },
                { name: "challenge-denied" /* CHALLENGE_DENIED */, from: constants_1.CONNECTION_STATE.CHALLENGING, to: constants_1.CONNECTION_STATE.CHALLENGE_DENIED },
                { name: "accepted" /* CHALLENGE_ACCEPTED */, from: constants_1.CONNECTION_STATE.CHALLENGING, to: constants_1.CONNECTION_STATE.AWAITING_AUTHENTICATION, handler: this.onAwaitingAuthentication.bind(this) },
                { name: "authentication-timeout" /* AUTHENTICATION_TIMEOUT */, from: constants_1.CONNECTION_STATE.AWAITING_CONNECTION, to: constants_1.CONNECTION_STATE.AUTHENTICATION_TIMEOUT },
                { name: "authentication-timeout" /* AUTHENTICATION_TIMEOUT */, from: constants_1.CONNECTION_STATE.AWAITING_AUTHENTICATION, to: constants_1.CONNECTION_STATE.AUTHENTICATION_TIMEOUT },
                { name: "authenticate" /* AUTHENTICATE */, from: constants_1.CONNECTION_STATE.AWAITING_AUTHENTICATION, to: constants_1.CONNECTION_STATE.AUTHENTICATING },
                { name: "unsuccesful-login" /* UNSUCCESFUL_LOGIN */, from: constants_1.CONNECTION_STATE.AUTHENTICATING, to: constants_1.CONNECTION_STATE.AWAITING_AUTHENTICATION },
                { name: "succesful-login" /* SUCCESFUL_LOGIN */, from: constants_1.CONNECTION_STATE.AUTHENTICATING, to: constants_1.CONNECTION_STATE.OPEN },
                { name: "too-many-auth-attempts" /* TOO_MANY_AUTH_ATTEMPTS */, from: constants_1.CONNECTION_STATE.AUTHENTICATING, to: constants_1.CONNECTION_STATE.TOO_MANY_AUTH_ATTEMPTS },
                { name: "too-many-auth-attempts" /* TOO_MANY_AUTH_ATTEMPTS */, from: constants_1.CONNECTION_STATE.AWAITING_AUTHENTICATION, to: constants_1.CONNECTION_STATE.TOO_MANY_AUTH_ATTEMPTS },
                { name: "authentication-timeout" /* AUTHENTICATION_TIMEOUT */, from: constants_1.CONNECTION_STATE.AWAITING_AUTHENTICATION, to: constants_1.CONNECTION_STATE.AUTHENTICATION_TIMEOUT },
                { name: "reconnect" /* RECONNECT */, from: constants_1.CONNECTION_STATE.RECONNECTING, to: constants_1.CONNECTION_STATE.RECONNECTING },
                { name: "closed" /* CLOSED */, from: constants_1.CONNECTION_STATE.CLOSING, to: constants_1.CONNECTION_STATE.CLOSED },
                { name: "offline" /* OFFLINE */, from: constants_1.CONNECTION_STATE.PAUSING, to: constants_1.CONNECTION_STATE.OFFLINE },
                { name: "error" /* ERROR */, to: constants_1.CONNECTION_STATE.RECONNECTING },
                { name: "connection-lost" /* LOST */, to: constants_1.CONNECTION_STATE.RECONNECTING },
                { name: "resume" /* RESUME */, to: constants_1.CONNECTION_STATE.RECONNECTING },
                { name: "pause" /* PAUSE */, to: constants_1.CONNECTION_STATE.PAUSING },
                { name: "close" /* CLOSE */, to: constants_1.CONNECTION_STATE.CLOSING },
            ]
        });
        this.stateMachine.transition("initialised" /* INITIALISED */);
        this.originalUrl = utils.parseUrl(url, this.options.path);
        this.url = this.originalUrl;
        if (!options.lazyConnect) {
            this.createEndpoint();
        }
    }
    Object.defineProperty(Connection.prototype, "isConnected", {
        get: function () {
            return this.stateMachine.state === constants_1.CONNECTION_STATE.OPEN;
        },
        enumerable: false,
        configurable: true
    });
    Connection.prototype.onLost = function (callback) {
        this.internalEmitter.on(constants_1.EVENT.CONNECTION_LOST, callback);
    };
    Connection.prototype.removeOnLost = function (callback) {
        this.internalEmitter.off(constants_1.EVENT.CONNECTION_LOST, callback);
    };
    Connection.prototype.onReestablished = function (callback) {
        this.internalEmitter.on(constants_1.EVENT.CONNECTION_REESTABLISHED, callback);
    };
    Connection.prototype.removeOnReestablished = function (callback) {
        this.internalEmitter.off(constants_1.EVENT.CONNECTION_REESTABLISHED, callback);
    };
    Connection.prototype.onExitLimbo = function (callback) {
        this.internalEmitter.on(constants_1.EVENT.EXIT_LIMBO, callback);
    };
    Connection.prototype.registerHandler = function (topic, callback) {
        this.handlers.set(topic, callback);
    };
    Connection.prototype.sendMessage = function (message) {
        if (!this.isOpen()) {
            this.services.logger.error(message, constants_1.EVENT.IS_CLOSED);
            return;
        }
        if (this.endpoint) {
            this.endpoint.sendParsedMessage(message);
        }
    };
    Connection.prototype.authenticate = function (authParamsOrCallback, callback) {
        if (authParamsOrCallback &&
            typeof authParamsOrCallback !== 'object' &&
            typeof authParamsOrCallback !== 'function') {
            throw new Error('invalid argument authParamsOrCallback');
        }
        if (callback && typeof callback !== 'function') {
            throw new Error('invalid argument callback');
        }
        if (this.stateMachine.state === constants_1.CONNECTION_STATE.CHALLENGE_DENIED ||
            this.stateMachine.state === constants_1.CONNECTION_STATE.TOO_MANY_AUTH_ATTEMPTS ||
            this.stateMachine.state === constants_1.CONNECTION_STATE.AUTHENTICATION_TIMEOUT) {
            this.services.logger.error({ topic: constants_1.TOPIC.CONNECTION }, constants_1.EVENT.IS_CLOSED);
            return;
        }
        if (authParamsOrCallback) {
            // @ts-ignore
            this.authParams = typeof authParamsOrCallback === 'object' ? authParamsOrCallback : {};
        }
        if (authParamsOrCallback && typeof authParamsOrCallback === 'function') {
            this.authCallback = authParamsOrCallback;
        }
        else if (callback) {
            this.authCallback = callback;
        }
        else {
            this.authCallback = function () { };
        }
        // if (this.stateMachine.state === CONNECTION_STATE.CLOSED && !this.endpoint) {
        //   this.createEndpoint()
        //   return
        // }
        if (this.stateMachine.state === constants_1.CONNECTION_STATE.AWAITING_AUTHENTICATION && this.authParams) {
            this.sendAuthParams();
        }
        if (!this.endpoint) {
            this.createEndpoint();
        }
    };
    /*
    * Returns the current connection state.
    */
    Connection.prototype.getConnectionState = function () {
        return this.stateMachine.state;
    };
    Connection.prototype.isOpen = function () {
        var connState = this.getConnectionState();
        return connState !== constants_1.CONNECTION_STATE.CLOSED
            && connState !== constants_1.CONNECTION_STATE.ERROR
            && connState !== constants_1.CONNECTION_STATE.CLOSING;
    };
    /**
     * Closes the connection. Using this method
     * will prevent the client from reconnecting.
     */
    Connection.prototype.close = function () {
        this.services.timerRegistry.remove(this.heartbeatIntervalTimeout);
        this.sendMessage({
            topic: constants_1.TOPIC.CONNECTION,
            action: constants_1.CONNECTION_ACTION.CLOSING
        });
        this.stateMachine.transition("close" /* CLOSE */);
    };
    Connection.prototype.pause = function () {
        this.stateMachine.transition("pause" /* PAUSE */);
        this.services.timerRegistry.remove(this.heartbeatIntervalTimeout);
        if (this.endpoint) {
            this.endpoint.close();
        }
    };
    Connection.prototype.resume = function (callback) {
        this.stateMachine.transition("resume" /* RESUME */);
        this.resumeCallback = callback;
        this.tryReconnect();
    };
    /**
     * Creates the endpoint to connect to using the url deepstream
     * was initialised with.
     */
    Connection.prototype.createEndpoint = function () {
        this.endpoint = this.services.socketFactory(this.url, this.options.socketOptions, this.options.heartbeatInterval);
        this.endpoint.onopened = this.onOpen.bind(this);
        this.endpoint.onerror = this.onError.bind(this);
        this.endpoint.onclosed = this.onClose.bind(this);
        this.endpoint.onparsedmessages = this.onMessages.bind(this);
    };
    /********************************
    ****** Endpoint Callbacks ******
    /********************************/
    /**
    * Will be invoked once the connection is established. The client
    * can't send messages yet, and needs to get a connection ACK or REDIRECT
    * from the server before authenticating
    */
    Connection.prototype.onOpen = function () {
        this.clearReconnect();
        this.checkHeartBeat();
        this.stateMachine.transition("connected" /* CONNECTED */);
        this.sendMessage({
            topic: constants_1.TOPIC.CONNECTION,
            action: constants_1.CONNECTION_ACTION.CHALLENGE,
            url: this.originalUrl,
            protocolVersion: '0.1a',
            sdkVersion: pkg.version,
            sdkType: 'javascript'
        });
        this.stateMachine.transition("challenge" /* CHALLENGE */);
    };
    /**
     * Callback for generic connection errors. Forwards
     * the error to the client.
     *
     * The connection is considered broken once this method has been
     * invoked.
     */
    Connection.prototype.onError = function (error) {
        var _this = this;
        /*
         * If the implementation isn't listening on the error event this will throw
         * an error. So let's defer it to allow the reconnection to kick in.
         */
        setTimeout(function () {
            var msg;
            if (error.code === 'ECONNRESET' || error.code === 'ECONNREFUSED') {
                msg = "Can't connect! Deepstream server unreachable on ".concat(_this.originalUrl);
            }
            else {
                msg = error;
            }
            _this.services.logger.error({ topic: constants_1.TOPIC.CONNECTION }, constants_1.EVENT.CONNECTION_ERROR, msg);
        }, 1);
        this.services.timerRegistry.remove(this.heartbeatIntervalTimeout);
        this.stateMachine.transition("error" /* ERROR */);
        this.tryReconnect();
    };
    /**
     * Callback when the connection closes. This might have been a deliberate
     * close triggered by the client or the result of the connection getting
     * lost.
     *
     * In the latter case the client will try to reconnect using the configured
     * strategy.
     */
    Connection.prototype.onClose = function () {
        this.services.timerRegistry.remove(this.heartbeatIntervalTimeout);
        if (this.stateMachine.state === constants_1.CONNECTION_STATE.REDIRECTING) {
            this.createEndpoint();
            return;
        }
        if (this.stateMachine.state === constants_1.CONNECTION_STATE.CHALLENGE_DENIED ||
            this.stateMachine.state === constants_1.CONNECTION_STATE.TOO_MANY_AUTH_ATTEMPTS ||
            this.stateMachine.state === constants_1.CONNECTION_STATE.AUTHENTICATION_TIMEOUT) {
            return;
        }
        if (this.stateMachine.state === constants_1.CONNECTION_STATE.CLOSING) {
            this.stateMachine.transition("closed" /* CLOSED */);
            return;
        }
        if (this.stateMachine.state === constants_1.CONNECTION_STATE.PAUSING) {
            this.stateMachine.transition("offline" /* OFFLINE */);
            return;
        }
        this.stateMachine.transition("connection-lost" /* LOST */);
        this.tryReconnect();
    };
    /**
     * Callback for messages received on the connection.
     */
    Connection.prototype.onMessages = function (parseResults) {
        var _this = this;
        parseResults.forEach(function (parseResult) {
            if (parseResult.parseError) {
                _this.services.logger.error({ topic: constants_1.TOPIC.PARSER }, parseResult.action, parseResult.raw && parseResult.raw.toString());
                return;
            }
            var message = parseResult;
            var res = (0, message_parser_1.parseData)(message);
            if (res !== true) {
                _this.services.logger.error({ topic: constants_1.TOPIC.PARSER }, constants_1.PARSER_ACTION.INVALID_MESSAGE, res);
            }
            if (message === null) {
                return;
            }
            if (message.topic === constants_1.TOPIC.CONNECTION) {
                _this.handleConnectionResponse(message);
                return;
            }
            if (message.topic === constants_1.TOPIC.AUTH) {
                _this.handleAuthResponse(message);
                return;
            }
            var handler = _this.handlers.get(message.topic);
            if (!handler) {
                // this should never happen
                return;
            }
            handler(message);
        });
    };
    /**
    * Sends authentication params to the server. Please note, this
    * doesn't use the queued message mechanism, but rather sends the message directly
    */
    Connection.prototype.sendAuthParams = function () {
        this.stateMachine.transition("authenticate" /* AUTHENTICATE */);
        this.sendMessage({
            topic: constants_1.TOPIC.AUTH,
            action: constants_1.AUTH_ACTION.REQUEST,
            parsedData: this.authParams
        });
    };
    /**
    * Ensures that a heartbeat was not missed more than once, otherwise it considers the connection
    * to have been lost and closes it for reconnection.
    */
    Connection.prototype.checkHeartBeat = function () {
        var heartBeatTolerance = this.options.heartbeatInterval * 2;
        if (!this.endpoint) {
            return;
        }
        if (this.endpoint.getTimeSinceLastMessage() > heartBeatTolerance) {
            this.services.timerRegistry.remove(this.heartbeatIntervalTimeout);
            this.services.logger.error({ topic: constants_1.TOPIC.CONNECTION }, constants_1.EVENT.HEARTBEAT_TIMEOUT);
            this.endpoint.close();
            return;
        }
        this.heartbeatIntervalTimeout = this.services.timerRegistry.add({
            duration: this.options.heartbeatInterval,
            callback: this.checkHeartBeat,
            context: this
        });
    };
    /**
    * If the connection drops or is closed in error this
    * method schedules increasing reconnection intervals
    *
    * If the number of failed reconnection attempts exceeds
    * options.maxReconnectAttempts the connection is closed
    */
    Connection.prototype.tryReconnect = function () {
        if (this.reconnectTimeout !== null) {
            return;
        }
        if (this.reconnectionAttempt < this.options.maxReconnectAttempts) {
            this.stateMachine.transition("reconnect" /* RECONNECT */);
            this.reconnectTimeout = this.services.timerRegistry.add({
                callback: this.tryOpen,
                context: this,
                duration: Math.min(this.options.maxReconnectInterval, this.options.reconnectIntervalIncrement * this.reconnectionAttempt)
            });
            this.reconnectionAttempt++;
            return;
        }
        this.emitter.emit(constants_1.EVENT[constants_1.EVENT.MAX_RECONNECTION_ATTEMPTS_REACHED], this.reconnectionAttempt);
        this.clearReconnect();
        this.close();
    };
    /**
     * Attempts to open a errourosly closed connection
     */
    Connection.prototype.tryOpen = function () {
        if (this.stateMachine.state !== constants_1.CONNECTION_STATE.REDIRECTING) {
            this.url = this.originalUrl;
        }
        this.createEndpoint();
        this.reconnectTimeout = null;
    };
    /**
     * Stops all further reconnection attempts,
     * either because the connection is open again
     * or because the maximal number of reconnection
     * attempts has been exceeded
     */
    Connection.prototype.clearReconnect = function () {
        this.services.timerRegistry.remove(this.reconnectTimeout);
        this.reconnectTimeout = null;
        this.reconnectionAttempt = 0;
    };
    /**
     * The connection response will indicate whether the deepstream connection
     * can be used or if it should be forwarded to another instance. This
     * allows us to introduce load-balancing if needed.
     *
     * If authentication parameters are already provided this will kick of
     * authentication immediately. The actual 'open' event won't be emitted
     * by the client until the authentication is successful.
     *
     * If a challenge is recieved, the user will send the url to the server
     * in response to get the appropriate redirect. If the URL is invalid the
     * server will respond with a REJECTION resulting in the client connection
     * being permanently closed.
     *
     * If a redirect is recieved, this connection is closed and updated with
     * a connection to the url supplied in the message.
     */
    Connection.prototype.handleConnectionResponse = function (message) {
        if (message.action === constants_1.CONNECTION_ACTION.ACCEPT) {
            this.stateMachine.transition("accepted" /* CHALLENGE_ACCEPTED */);
            return;
        }
        if (message.action === constants_1.CONNECTION_ACTION.REJECT) {
            this.stateMachine.transition("challenge-denied" /* CHALLENGE_DENIED */);
            if (this.endpoint) {
                this.endpoint.close();
            }
            return;
        }
        if (message.action === constants_1.CONNECTION_ACTION.REDIRECT) {
            this.url = message.url;
            this.stateMachine.transition("redirected" /* CONNECTION_REDIRECTED */);
            if (this.endpoint) {
                this.endpoint.close();
            }
            return;
        }
        if (message.action === constants_1.CONNECTION_ACTION.AUTHENTICATION_TIMEOUT) {
            this.stateMachine.transition("authentication-timeout" /* AUTHENTICATION_TIMEOUT */);
            this.services.logger.error(message);
        }
    };
    /**
     * Callback for messages received for the AUTH topic. If
     * the authentication was successful this method will
     * open the connection and send all messages that the client
     * tried to send so far.
     */
    Connection.prototype.handleAuthResponse = function (message) {
        if (message.action === constants_1.AUTH_ACTION.TOO_MANY_AUTH_ATTEMPTS) {
            this.stateMachine.transition("too-many-auth-attempts" /* TOO_MANY_AUTH_ATTEMPTS */);
            this.services.logger.error(message);
            return;
        }
        if (message.action === constants_1.AUTH_ACTION.AUTH_UNSUCCESSFUL) {
            this.stateMachine.transition("unsuccesful-login" /* UNSUCCESFUL_LOGIN */);
            this.onAuthUnSuccessful();
            return;
        }
        if (message.action === constants_1.AUTH_ACTION.AUTH_SUCCESSFUL) {
            this.stateMachine.transition("succesful-login" /* SUCCESFUL_LOGIN */);
            this.onAuthSuccessful(message.parsedData);
            return;
        }
    };
    Connection.prototype.onAwaitingAuthentication = function () {
        if (this.authParams) {
            this.sendAuthParams();
        }
    };
    Connection.prototype.onAuthSuccessful = function (clientData) {
        this.updateClientData(clientData);
        if (this.resumeCallback) {
            this.resumeCallback();
            this.resumeCallback = null;
        }
        if (this.authCallback === null) {
            return;
        }
        this.authCallback(true, this.clientData);
        this.authCallback = null;
    };
    Connection.prototype.onAuthUnSuccessful = function () {
        var reason = { reason: constants_1.EVENT[constants_1.EVENT.INVALID_AUTHENTICATION_DETAILS] };
        if (this.resumeCallback) {
            this.resumeCallback(reason);
            this.resumeCallback = null;
        }
        if (this.authCallback === null) {
            this.emitter.emit(constants_1.EVENT.REAUTHENTICATION_FAILURE, reason);
            return;
        }
        this.authCallback(false, reason);
        this.authCallback = null;
    };
    Connection.prototype.updateClientData = function (data) {
        var newClientData = data || null;
        if (this.clientData === null &&
            (newClientData === null || Object.keys(newClientData).length === 0)) {
            return;
        }
        if (!utils.deepEquals(this.clientData, data)) {
            this.emitter.emit(constants_1.EVENT.CLIENT_DATA_CHANGED, Object.assign({}, newClientData));
            this.clientData = newClientData;
        }
    };
    return Connection;
}());
exports.Connection = Connection;


/***/ }),

/***/ "./src/connection/socket-factory.ts":
/*!******************************************!*\
  !*** ./src/connection/socket-factory.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, Buffer) {
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
global.Buffer = __webpack_require__(/*! buffer */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;
var message_parser_1 = __webpack_require__(/*! @deepstream/protobuf/dist/src/message-parser */ "./node_modules/@deepstream/protobuf/dist/src/message-parser.js");
var message_builder_1 = __webpack_require__(/*! @deepstream/protobuf/dist/src/message-builder */ "./node_modules/@deepstream/protobuf/dist/src/message-builder.js");
var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
var BrowserWebsocket = (global.WebSocket || global.MozWebSocket);
var socketFactory = function (url, options, heartBeatInterval) {
    if (options === void 0) { options = { jsonTransportMode: false }; }
    var socket = BrowserWebsocket
        ? new BrowserWebsocket(url, [], options)
        : new (__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'ws'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())))(url, options);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './../../node_modules/node-libs-browser/node_modules/buffer/index.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).Buffer))

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var all_1 = __webpack_require__(/*! @deepstream/protobuf/dist/types/all */ "./node_modules/@deepstream/protobuf/dist/types/all.js");
__exportStar(__webpack_require__(/*! @deepstream/protobuf/dist/types/all */ "./node_modules/@deepstream/protobuf/dist/types/all.js"), exports);
__exportStar(__webpack_require__(/*! @deepstream/protobuf/dist/types/messages */ "./node_modules/@deepstream/protobuf/dist/types/messages.js"), exports);
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


/***/ }),

/***/ "./src/deepstream-client.ts":
/*!**********************************!*\
  !*** ./src/deepstream-client.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var client_options_1 = __webpack_require__(/*! ./client-options */ "./src/client-options.ts");
Object.defineProperty(exports, "DefaultOptions", { enumerable: true, get: function () { return client_options_1.DefaultOptions; } });
var C = __webpack_require__(/*! ./constants */ "./src/constants.ts");
exports.C = C;
var logger_1 = __webpack_require__(/*! ./util/logger */ "./src/util/logger.ts");
var timeout_registry_1 = __webpack_require__(/*! ./util/timeout-registry */ "./src/util/timeout-registry.ts");
var interval_timer_registry_1 = __webpack_require__(/*! ./util/interval-timer-registry */ "./src/util/interval-timer-registry.ts");
var native_timer_registry_1 = __webpack_require__(/*! ./util/native-timer-registry */ "./src/util/native-timer-registry.ts");
var connection_1 = __webpack_require__(/*! ./connection/connection */ "./src/connection/connection.ts");
var socket_factory_1 = __webpack_require__(/*! ./connection/socket-factory */ "./src/connection/socket-factory.ts");
var event_handler_1 = __webpack_require__(/*! ./event/event-handler */ "./src/event/event-handler.ts");
var rpc_handler_1 = __webpack_require__(/*! ./rpc/rpc-handler */ "./src/rpc/rpc-handler.ts");
var record_handler_1 = __webpack_require__(/*! ./record/record-handler */ "./src/record/record-handler.ts");
var presence_handler_1 = __webpack_require__(/*! ./presence/presence-handler */ "./src/presence/presence-handler.ts");
var emitter_1 = __webpack_require__(/*! ./util/emitter */ "./src/util/emitter.ts");
var indexdb_storage_service_1 = __webpack_require__(/*! ./storage/indexdb-storage-service */ "./src/storage/indexdb-storage-service.ts");
var noop_storage_service_1 = __webpack_require__(/*! ./storage/noop-storage-service */ "./src/storage/noop-storage-service.ts");
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


/***/ }),

/***/ "./src/deepstream.ts":
/*!***************************!*\
  !*** ./src/deepstream.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = exports.C = exports.DeepstreamClient = void 0;
var deepstream_client_1 = __webpack_require__(/*! ./deepstream-client */ "./src/deepstream-client.ts");
Object.defineProperty(exports, "DeepstreamClient", { enumerable: true, get: function () { return deepstream_client_1.DeepstreamClient; } });
Object.defineProperty(exports, "C", { enumerable: true, get: function () { return deepstream_client_1.C; } });
Object.defineProperty(exports, "Options", { enumerable: true, get: function () { return deepstream_client_1.DefaultOptions; } });


/***/ }),

/***/ "./src/event/event-handler.ts":
/*!************************************!*\
  !*** ./src/event/event-handler.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.EventHandler = void 0;
var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
var listener_1 = __webpack_require__(/*! ../util/listener */ "./src/util/listener.ts");
var emitter_1 = __webpack_require__(/*! ../util/emitter */ "./src/util/emitter.ts");
var bulk_subscription_service_1 = __webpack_require__(/*! ../util/bulk-subscription-service */ "./src/util/bulk-subscription-service.ts");
var EventHandler = /** @class */ (function () {
    function EventHandler(services, options, listeners) {
        this.services = services;
        this.emitter = new emitter_1.Emitter();
        this.limboQueue = [];
        this.bulkSubscription = new bulk_subscription_service_1.BulkSubscriptionService(this.services, options.subscriptionInterval, constants_1.TOPIC.EVENT, constants_1.EVENT_ACTION.SUBSCRIBE, constants_1.EVENT_ACTION.UNSUBSCRIBE, this.onBulkSubscriptionSent.bind(this));
        this.listeners = listeners || new listener_1.Listener(constants_1.TOPIC.EVENT, services);
        this.services.connection.registerHandler(constants_1.TOPIC.EVENT, this.handle.bind(this));
        this.services.connection.onExitLimbo(this.onExitLimbo.bind(this));
        this.services.connection.onReestablished(this.onConnectionReestablished.bind(this));
    }
    /**
     * Returns all the events that are subscribed to locally
     */
    EventHandler.prototype.eventNames = function () {
        return this.emitter.eventNames();
    };
    /**
    * Subscribe to an event. This will receive both locally emitted events
    * as well as events emitted by other connected clients.
    */
    EventHandler.prototype.subscribe = function (name, callback) {
        if (typeof name !== 'string' || name.length === 0) {
            throw new Error('invalid argument name');
        }
        if (typeof callback !== 'function') {
            throw new Error('invalid argument callback');
        }
        if (!this.emitter.hasListeners(name)) {
            if (this.services.connection.isConnected) {
                this.bulkSubscription.subscribe(name);
            }
        }
        this.emitter.on(name, callback);
    };
    /**
     * Removes a callback for a specified event. If all callbacks
     * for an event have been removed, the server will be notified
     * that the client is unsubscribed as a listener
     */
    EventHandler.prototype.unsubscribe = function (name, callback) {
        if (!name || typeof name !== 'string' || name.length === 0) {
            throw new Error('invalid argument name');
        }
        if (callback !== undefined && typeof callback !== 'function') {
            throw new Error('invalid argument callback');
        }
        if (!this.emitter.hasListeners(name)) {
            this.services.logger.warn({
                topic: constants_1.TOPIC.EVENT,
                action: constants_1.EVENT_ACTION.NOT_SUBSCRIBED,
                name: name
            });
            return;
        }
        this.emitter.off(name, callback);
        if (!this.emitter.hasListeners(name)) {
            this.bulkSubscription.unsubscribe(name);
        }
    };
    /**
     * Emits an event locally and sends a message to the server to
     * broadcast the event to the other connected clients
     */
    EventHandler.prototype.emit = function (name, data) {
        if (typeof name !== 'string' || name.length === 0) {
            throw new Error('invalid argument name');
        }
        var message = {
            topic: constants_1.TOPIC.EVENT,
            action: constants_1.EVENT_ACTION.EMIT,
            name: name,
            parsedData: data
        };
        if (this.services.connection.isConnected) {
            this.services.connection.sendMessage(message);
        }
        else if (this.services.connection.isInLimbo) {
            this.limboQueue.push(message);
        }
        this.emitter.emit(name, data);
    };
    /**
   * Allows to listen for event subscriptions made by this or other clients. This
   * is useful to create "active" data providers, e.g. providers that only provide
   * data for a particular event if a user is actually interested in it
   */
    EventHandler.prototype.listen = function (pattern, callback) {
        this.listeners.listen(pattern, callback);
    };
    /**
     * Removes a listener that was previously registered
     */
    EventHandler.prototype.unlisten = function (pattern) {
        this.listeners.unlisten(pattern);
    };
    /**
   * Handles incoming messages from the server
   */
    EventHandler.prototype.handle = function (message) {
        if (message.isAck) {
            this.services.timeoutRegistry.remove(message);
            return;
        }
        if (message.action === constants_1.EVENT_ACTION.EMIT) {
            if (message.parsedData !== undefined) {
                this.emitter.emit(message.name, message.parsedData);
            }
            else {
                this.emitter.emit(message.name, undefined);
            }
            return;
        }
        if (message.action === constants_1.EVENT_ACTION.MESSAGE_DENIED) {
            this.services.logger.error({ topic: constants_1.TOPIC.EVENT }, constants_1.EVENT_ACTION.MESSAGE_DENIED);
            this.services.timeoutRegistry.remove(message);
            if (message.originalAction === constants_1.EVENT_ACTION.SUBSCRIBE) {
                this.emitter.off(message.name);
            }
            return;
        }
        if (message.action === constants_1.EVENT_ACTION.MULTIPLE_SUBSCRIPTIONS || message.action === constants_1.EVENT_ACTION.NOT_SUBSCRIBED) {
            this.services.timeoutRegistry.remove(__assign(__assign({}, message), { action: constants_1.EVENT_ACTION.SUBSCRIBE }));
            this.services.logger.warn(message);
            return;
        }
        if (message.action === constants_1.EVENT_ACTION.SUBSCRIPTION_FOR_PATTERN_FOUND ||
            message.action === constants_1.EVENT_ACTION.SUBSCRIPTION_FOR_PATTERN_REMOVED) {
            this.listeners.handle(message);
            return;
        }
        if (message.action === constants_1.EVENT_ACTION.INVALID_LISTEN_REGEX) {
            this.services.logger.error(message);
            return;
        }
        this.services.logger.error(message, constants_1.EVENT.UNSOLICITED_MESSAGE);
    };
    /**
     * Resubscribes to events when connection is lost
     */
    EventHandler.prototype.onConnectionReestablished = function () {
        this.bulkSubscription.subscribeList(this.emitter.eventNames());
        for (var i = 0; i < this.limboQueue.length; i++) {
            this.services.connection.sendMessage(this.limboQueue[i]);
        }
        this.limboQueue = [];
    };
    EventHandler.prototype.onExitLimbo = function () {
        this.limboQueue = [];
    };
    EventHandler.prototype.onBulkSubscriptionSent = function (message) {
        this.services.timeoutRegistry.add({ message: message });
    };
    return EventHandler;
}());
exports.EventHandler = EventHandler;


/***/ }),

/***/ "./src/presence/presence-handler.ts":
/*!******************************************!*\
  !*** ./src/presence/presence-handler.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PresenceHandler = void 0;
var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
var emitter_1 = __webpack_require__(/*! ../util/emitter */ "./src/util/emitter.ts");
var bulk_subscription_service_1 = __webpack_require__(/*! ../util/bulk-subscription-service */ "./src/util/bulk-subscription-service.ts");
var ONLY_EVENT = 'OE';
function validateQueryArguments(rest) {
    var users = null;
    var callback = null;
    if (rest.length === 1) {
        if (Array.isArray(rest[0])) {
            users = rest[0];
        }
        else {
            if (typeof rest[0] !== 'function') {
                throw new Error('invalid argument: "callback"');
            }
            callback = rest[0];
        }
    }
    else if (rest.length === 2) {
        users = rest[0];
        callback = rest[1];
        if (!Array.isArray(users) || typeof callback !== 'function') {
            throw new Error('invalid argument: "users" or "callback"');
        }
    }
    return { users: users, callback: callback };
}
var PresenceHandler = /** @class */ (function () {
    function PresenceHandler(services, options) {
        this.services = services;
        this.globalSubscriptionEmitter = new emitter_1.Emitter();
        this.subscriptionEmitter = new emitter_1.Emitter();
        this.queryEmitter = new emitter_1.Emitter();
        this.queryAllEmitter = new emitter_1.Emitter();
        this.counter = 0;
        this.limboQueue = [];
        this.bulkSubscription = new bulk_subscription_service_1.BulkSubscriptionService(this.services, options.subscriptionInterval, constants_1.TOPIC.PRESENCE, constants_1.PRESENCE_ACTION.SUBSCRIBE, constants_1.PRESENCE_ACTION.UNSUBSCRIBE, this.onBulkSubscriptionSent.bind(this));
        this.services.connection.registerHandler(constants_1.TOPIC.PRESENCE, this.handle.bind(this));
        this.services.connection.onExitLimbo(this.onExitLimbo.bind(this));
        this.services.connection.onLost(this.onExitLimbo.bind(this));
        this.services.connection.onReestablished(this.onConnectionReestablished.bind(this));
    }
    PresenceHandler.prototype.hasListener = function (user, callback) {
        return this.subscriptionEmitter.hasListenerForFunction(user, callback);
    };
    PresenceHandler.prototype.subscribe = function (userOrCallback, callback) {
        if (typeof userOrCallback === 'string' && userOrCallback.length > 0 && typeof callback === 'function') {
            var user = userOrCallback;
            if (!this.subscriptionEmitter.hasListeners(user)) {
                this.bulkSubscription.subscribe(user);
            }
            this.subscriptionEmitter.on(user, callback);
            return;
        }
        if (typeof userOrCallback === 'function' && typeof callback === 'undefined') {
            if (!this.globalSubscriptionEmitter.hasListeners(ONLY_EVENT)) {
                this.subscribeToAllChanges();
            }
            this.globalSubscriptionEmitter.on(ONLY_EVENT, userOrCallback);
            return;
        }
        throw new Error('invalid arguments: "user" or "callback"');
    };
    PresenceHandler.prototype.unsubscribe = function (userOrCallback, callback) {
        if (userOrCallback && typeof userOrCallback === 'string' && userOrCallback.length > 0) {
            var user = userOrCallback;
            if (callback) {
                if (typeof callback !== 'function') {
                    throw new Error('invalid argument: "callback"');
                }
                this.subscriptionEmitter.off(user, callback);
            }
            else {
                this.subscriptionEmitter.off(user);
            }
            if (!this.subscriptionEmitter.hasListeners(user)) {
                this.bulkSubscription.unsubscribe(user);
                // return
            }
            return; // Added
        }
        if (userOrCallback && typeof userOrCallback === 'function') {
            callback = userOrCallback;
            this.globalSubscriptionEmitter.off(ONLY_EVENT, callback);
            if (!this.globalSubscriptionEmitter.hasListeners(ONLY_EVENT)) {
                this.unsubscribeToAllChanges();
            }
            return;
        }
        if (typeof userOrCallback === 'undefined' && typeof callback === 'undefined') {
            this.subscriptionEmitter.off();
            this.globalSubscriptionEmitter.off();
            this.bulkSubscription.unsubscribeList(this.subscriptionEmitter.eventNames());
            this.unsubscribeToAllChanges();
            return;
        }
        throw new Error('invalid argument: "user" or "callback"');
    };
    PresenceHandler.prototype.getAll = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        var _a = validateQueryArguments(rest), callback = _a.callback, users = _a.users;
        var message;
        var emitter;
        var emitterAction;
        if (users) {
            var queryId = (this.counter++).toString();
            message = {
                topic: constants_1.TOPIC.PRESENCE,
                action: constants_1.PRESENCE_ACTION.QUERY,
                correlationId: queryId,
                names: users
            };
            emitter = this.queryEmitter;
            emitterAction = queryId;
        }
        else {
            message = {
                topic: constants_1.TOPIC.PRESENCE,
                action: constants_1.PRESENCE_ACTION.QUERY_ALL
            };
            emitter = this.queryAllEmitter;
            emitterAction = ONLY_EVENT;
        }
        if (this.services.connection.isConnected) {
            this.sendQuery(message);
        }
        else if (this.services.connection.isInLimbo) {
            this.limboQueue.push(message);
        }
        else {
            this.services.timerRegistry.requestIdleCallback(function () {
                emitter.emit(emitterAction, constants_1.EVENT.CLIENT_OFFLINE);
            });
        }
        if (callback) {
            emitter.once(emitterAction, callback);
            return;
        }
        return new Promise(function (resolve, reject) {
            emitter.once(emitterAction, function (error, results) { return error ? reject(error) : resolve(results); });
        });
    };
    PresenceHandler.prototype.handle = function (message) {
        if (message.isAck) {
            this.services.timeoutRegistry.remove(message);
            return;
        }
        if (message.action === constants_1.PRESENCE_ACTION.QUERY_ALL_RESPONSE) {
            this.queryAllEmitter.emit(ONLY_EVENT, null, message.names);
            this.services.timeoutRegistry.remove(message);
            return;
        }
        if (message.action === constants_1.PRESENCE_ACTION.QUERY_RESPONSE) {
            this.queryEmitter.emit(message.correlationId, null, message.parsedData);
            this.services.timeoutRegistry.remove(message);
            return;
        }
        if (message.action === constants_1.PRESENCE_ACTION.PRESENCE_JOIN) {
            this.subscriptionEmitter.emit(message.name, message.name, true);
            return;
        }
        if (message.action === constants_1.PRESENCE_ACTION.PRESENCE_JOIN_ALL) {
            this.globalSubscriptionEmitter.emit(ONLY_EVENT, message.name, true);
            return;
        }
        if (message.action === constants_1.PRESENCE_ACTION.PRESENCE_LEAVE) {
            this.subscriptionEmitter.emit(message.name, message.name, false);
            return;
        }
        if (message.action === constants_1.PRESENCE_ACTION.PRESENCE_LEAVE_ALL) {
            this.globalSubscriptionEmitter.emit(ONLY_EVENT, message.name, false);
            return;
        }
        if (message.isError) {
            this.services.timeoutRegistry.remove(message);
            if (message.originalAction === constants_1.PRESENCE_ACTION.QUERY) {
                this.queryEmitter.emit(message.correlationId, constants_1.PRESENCE_ACTION[message.action]);
            }
            else if (message.originalAction === constants_1.PRESENCE_ACTION.QUERY_ALL) {
                this.queryAllEmitter.emit(ONLY_EVENT, constants_1.PRESENCE_ACTION[message.action]);
            }
            else {
                this.services.logger.error(message);
            }
            return;
        }
        this.services.logger.error(message, constants_1.EVENT.UNSOLICITED_MESSAGE);
    };
    PresenceHandler.prototype.sendQuery = function (message) {
        this.services.connection.sendMessage(message);
        this.services.timeoutRegistry.add({ message: message });
    };
    PresenceHandler.prototype.subscribeToAllChanges = function () {
        if (!this.services.connection.isConnected) {
            return;
        }
        var message = { topic: constants_1.TOPIC.PRESENCE, action: constants_1.PRESENCE_ACTION.SUBSCRIBE_ALL };
        this.services.timeoutRegistry.add({ message: message });
        this.services.connection.sendMessage(message);
    };
    PresenceHandler.prototype.unsubscribeToAllChanges = function () {
        if (!this.services.connection.isConnected) {
            return;
        }
        var message = { topic: constants_1.TOPIC.PRESENCE, action: constants_1.PRESENCE_ACTION.UNSUBSCRIBE_ALL };
        this.services.timeoutRegistry.add({ message: message });
        this.services.connection.sendMessage(message);
    };
    PresenceHandler.prototype.onConnectionReestablished = function () {
        var keys = this.subscriptionEmitter.eventNames();
        if (keys.length > 0) {
            this.bulkSubscription.subscribeList(keys);
        }
        var hasGlobalSubscription = this.globalSubscriptionEmitter.hasListeners(ONLY_EVENT);
        if (hasGlobalSubscription) {
            this.subscribeToAllChanges();
        }
        for (var i = 0; i < this.limboQueue.length; i++) {
            this.sendQuery(this.limboQueue[i]);
        }
        this.limboQueue = [];
    };
    PresenceHandler.prototype.onExitLimbo = function () {
        var _this = this;
        this.queryEmitter.eventNames().forEach(function (correlationId) {
            _this.queryEmitter.emit(correlationId, constants_1.EVENT.CLIENT_OFFLINE);
        });
        this.queryAllEmitter.emit(ONLY_EVENT, constants_1.EVENT.CLIENT_OFFLINE);
        this.limboQueue = [];
        this.queryAllEmitter.off();
        this.queryEmitter.off();
    };
    PresenceHandler.prototype.onBulkSubscriptionSent = function (message) {
        this.services.timeoutRegistry.add({ message: message });
    };
    return PresenceHandler;
}());
exports.PresenceHandler = PresenceHandler;


/***/ }),

/***/ "./src/record/anonymous-record.ts":
/*!****************************************!*\
  !*** ./src/record/anonymous-record.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.AnonymousRecord = void 0;
var utils = __webpack_require__(/*! ../util/utils */ "./src/util/utils.ts");
var emitter_1 = __webpack_require__(/*! ../util/emitter */ "./src/util/emitter.ts");
var AnonymousRecord = /** @class */ (function (_super) {
    __extends(AnonymousRecord, _super);
    function AnonymousRecord(getRecordCore) {
        var _this = _super.call(this) || this;
        _this.record = null;
        _this.subscriptions = [];
        _this.getRecordCore = getRecordCore;
        return _this;
    }
    Object.defineProperty(AnonymousRecord.prototype, "name", {
        get: function () {
            if (!this.record) {
                return '';
            }
            return this.record.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnonymousRecord.prototype, "isReady", {
        get: function () {
            if (!this.record) {
                return false;
            }
            return this.record.isReady;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnonymousRecord.prototype, "version", {
        get: function () {
            if (!this.record) {
                return -1;
            }
            return this.record.version;
        },
        enumerable: false,
        configurable: true
    });
    AnonymousRecord.prototype.whenReady = function (callback) {
        if (this.record) {
            if (callback) {
                this.record.whenReady(this, callback);
            }
            else {
                return this.record.whenReady(this);
            }
        }
    };
    AnonymousRecord.prototype.setName = function (recordName, callback) {
        if (this.name === recordName) {
            return;
        }
        this.discard();
        this.record = this.getRecordCore(recordName);
        this.record.addReference(this);
        for (var i = 0; i < this.subscriptions.length; i++) {
            this.record.subscribe(this.subscriptions[i], this);
        }
        this.emit('nameChanged', recordName);
        if (callback) {
            this.record.whenReady(this, callback);
        }
        else {
            return this.record.whenReady(this);
        }
    };
    AnonymousRecord.prototype.get = function (path) {
        if (this.record) {
            return this.record.get(path);
        }
    };
    AnonymousRecord.prototype.set = function (path, data, callback) {
        if (this.record) {
            return this.record.set(utils.normalizeSetArguments(arguments));
        }
    };
    AnonymousRecord.prototype.setWithAck = function (path, data, callback) {
        if (this.record) {
            return this.record.setWithAck(utils.normalizeSetArguments(arguments));
        }
    };
    AnonymousRecord.prototype.erase = function (path) {
        if (this.record) {
            return this.record.set(utils.normalizeSetArguments(arguments));
        }
    };
    AnonymousRecord.prototype.eraseWithAck = function (path, callback) {
        if (this.record) {
            return this.record.setWithAck(utils.normalizeSetArguments(arguments));
        }
    };
    AnonymousRecord.prototype.subscribe = function (path, callback, triggerNow) {
        var parameters = utils.normalizeArguments(arguments);
        this.subscriptions.push(parameters);
        if (this.record) {
            this.record.subscribe(parameters, this);
        }
    };
    AnonymousRecord.prototype.unsubscribe = function (path, callback) {
        var parameters = utils.normalizeArguments(arguments);
        this.subscriptions = this.subscriptions.filter(function (subscription) {
            if (!parameters.callback && (subscription.path === parameters.path))
                return false;
            if (parameters.callback && (subscription.path === parameters.path && subscription.callback === parameters.callback))
                return false;
            return true;
        });
        if (this.record) {
            this.record.unsubscribe(parameters, this);
        }
    };
    AnonymousRecord.prototype.discard = function () {
        if (this.record) {
            for (var i = 0; i < this.subscriptions.length; i++) {
                this.record.unsubscribe(this.subscriptions[i], this);
            }
            return this.record.removeReference(this);
        }
    };
    AnonymousRecord.prototype.delete = function (callback) {
        if (this.record) {
            return this.record.delete(callback);
        }
    };
    AnonymousRecord.prototype.setMergeStrategy = function (mergeStrategy) {
        if (this.record) {
            this.record.setMergeStrategy(mergeStrategy);
        }
    };
    return AnonymousRecord;
}(emitter_1.Emitter));
exports.AnonymousRecord = AnonymousRecord;


/***/ }),

/***/ "./src/record/dirty-service.ts":
/*!*************************************!*\
  !*** ./src/record/dirty-service.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.DirtyService = void 0;
var DirtyService = /** @class */ (function () {
    function DirtyService(storage, dirtyStorageName) {
        this.storage = storage;
        this.dirtyStorageName = dirtyStorageName;
        this.dirtyRecords = new Map();
        this.loadedCallback = [];
        this.flushTimeout = null;
        this.loaded = false;
        this.save = this.save.bind(this);
        this.load();
    }
    DirtyService.prototype.isDirty = function (recordName) {
        return this.dirtyRecords.has(recordName);
    };
    DirtyService.prototype.setDirty = function (recordName, isDirty) {
        var changed = true;
        if (isDirty) {
            this.dirtyRecords.set(recordName, true);
        }
        else {
            changed = this.dirtyRecords.delete(recordName);
        }
        if (!this.flushTimeout && changed) {
            this.flushTimeout = setTimeout(this.save, 1000);
        }
    };
    DirtyService.prototype.save = function () {
        this.storage.set(this.dirtyStorageName, 1, __spreadArray([], __read(this.dirtyRecords), false), function () { });
        if (this.flushTimeout) {
            clearTimeout(this.flushTimeout);
        }
        this.flushTimeout = null;
    };
    DirtyService.prototype.whenLoaded = function (context, callback) {
        if (this.loaded) {
            callback.call(context);
            return;
        }
        this.loadedCallback.push({ callback: callback, context: context });
    };
    DirtyService.prototype.getAll = function () {
        return this.dirtyRecords;
    };
    DirtyService.prototype.load = function () {
        var _this = this;
        if (this.loaded) {
            return;
        }
        this.storage.get(this.dirtyStorageName, function (recordName, version, data) {
            _this.dirtyRecords = data ? new Map(data) : new Map();
            _this.loaded = true;
            _this.loadedCallback.forEach(function (_a) {
                var callback = _a.callback, context = _a.context;
                return callback.call(context);
            });
        });
    };
    return DirtyService;
}());
exports.DirtyService = DirtyService;


/***/ }),

/***/ "./src/record/json-path.ts":
/*!*********************************!*\
  !*** ./src/record/json-path.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setValue = exports.get = void 0;
var utils = __webpack_require__(/*! ../util/utils */ "./src/util/utils.ts");
var SPLIT_REG_EXP = /[[\]]/g;
/**
* Returns the value of the path or
* undefined if the path can't be resolved
*/
function get(data, path, deepCopy) {
    if (deepCopy === void 0) { deepCopy = false; }
    var tokens = tokenize(path);
    var value = data;
    for (var i = 0; i < tokens.length; i++) {
        if (value === undefined) {
            return undefined;
        }
        if (typeof value !== 'object') {
            throw new Error('invalid data or path');
        }
        value = value[tokens[i]];
    }
    return deepCopy !== false ? utils.deepCopy(value) : value;
}
exports.get = get;
/**
 * This class allows to set or get specific
 * values within a json data structure using
 * string-based paths
 */
function setValue(root, path, value) {
    if (path === null) {
        return value;
    }
    var tokens = tokenize(path);
    var rootCopy = utils.deepCopy(root);
    var valueCopy = utils.deepCopy(value);
    var node = rootCopy;
    var i;
    for (i = 0; i < tokens.length - 1; i++) {
        var token = tokens[i];
        if (node[token] !== undefined && node[token] !== null && typeof node[token] === 'object') {
            node = node[token];
        }
        else if (typeof tokens[i + 1] === 'number') {
            var array = new Array(tokens[i + 1]);
            array.fill(null);
            node = node[token] = array;
        }
        else {
            node = node[token] = {};
        }
    }
    if (value === undefined) {
        delete node[tokens[i]];
    }
    else {
        node[tokens[i]] = valueCopy;
    }
    return rootCopy;
}
exports.setValue = setValue;
/**
 * Parses the path. Splits it into
 * keys for objects and indices for arrays.
 */
function tokenize(path) {
    if (path === null) {
        return [];
    }
    var tokens = [];
    var parts = path.split('.');
    for (var i = 0; i < parts.length; i++) {
        var part = parts[i].trim();
        if (part.length === 0) {
            continue;
        }
        var arrayIndexes = part.split(SPLIT_REG_EXP);
        if (arrayIndexes.length === 0) {
            // TODO
            continue;
        }
        tokens.push(arrayIndexes[0]);
        for (var j = 1; j < arrayIndexes.length; j++) {
            if (arrayIndexes[j].length === 0) {
                continue;
            }
            tokens.push(Number(arrayIndexes[j]));
        }
    }
    return tokens;
}


/***/ }),

/***/ "./src/record/list.ts":
/*!****************************!*\
  !*** ./src/record/list.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.List = void 0;
var utils = __webpack_require__(/*! ../util/utils */ "./src/util/utils.ts");
var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
var emitter_1 = __webpack_require__(/*! ../util/emitter */ "./src/util/emitter.ts");
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List(record) {
        var _this = _super.call(this) || this;
        _this.record = record;
        _this.debugId = _this.record.getDebugId();
        _this.wrappedFunctions = new Map();
        _this.hasAddListener = false;
        _this.hasRemoveListener = false;
        _this.hasMoveListener = false;
        _this.subscriptions = [];
        _this.originalApplyUpdate = _this.record.applyUpdate.bind(_this.record);
        _this.record.applyUpdate = _this.applyUpdate.bind(_this);
        _this.record.addReference(_this);
        _this.record.on('discard', function () { return _this.emit('discard', _this); }, _this);
        _this.record.on('delete', function () { return _this.emit('delete', _this); }, _this);
        _this.record.on('error', function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _this.emit.apply(_this, __spreadArray(['error'], __read(args), false));
        }, _this);
        return _this;
    }
    Object.defineProperty(List.prototype, "name", {
        get: function () {
            return this.record.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "isReady", {
        get: function () {
            return this.record.isReady;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "version", {
        get: function () {
            return this.record.version;
        },
        enumerable: false,
        configurable: true
    });
    List.prototype.whenReady = function (callback) {
        if (callback) {
            this.record.whenReady(this, callback);
        }
        else {
            return this.record.whenReady(this);
        }
    };
    List.prototype.discard = function () {
        this.destroy();
        this.record.removeReference(this);
    };
    List.prototype.delete = function (callback) {
        this.destroy();
        return this.record.delete(callback);
    };
    /**
     * Returns the array of list entries or an
     * empty array if the list hasn't been populated yet.
     */
    List.prototype.getEntries = function () {
        var entries = this.record.get();
        if (!(entries instanceof Array)) {
            return [];
        }
        return entries;
    };
    /**
   * Returns true if the list is empty
   */
    List.prototype.isEmpty = function () {
        return this.getEntries().length === 0;
    };
    List.prototype.setEntriesWithAck = function (entries, callback) {
        var _this = this;
        if (!callback) {
            return new Promise(function (resolve, reject) {
                _this.setEntries(entries, function (error) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve();
                    }
                });
            });
        }
        this.setEntries(entries, callback);
    };
    /**
    * Updates the list with a new set of entries
    */
    List.prototype.setEntries = function (entries, callback) {
        var errorMsg = 'entries must be an array of record names';
        var i;
        if (!(entries instanceof Array)) {
            throw new Error(errorMsg);
        }
        for (i = 0; i < entries.length; i++) {
            if (typeof entries[i] !== 'string') {
                throw new Error(errorMsg);
            }
        }
        this.beforeChange();
        this.record.set({ data: entries, callback: callback });
        this.afterChange();
    };
    /**
     * Removes an entry from the list
     *
     * @param {String} entry
     * @param {Number} [index]
     */
    List.prototype.removeEntry = function (entry, index, callback) {
        // @ts-ignore
        var currentEntries = this.record.get();
        var hasIndex = this.hasIndex(index);
        var entries = [];
        var i;
        for (i = 0; i < currentEntries.length; i++) {
            if (currentEntries[i] !== entry || (hasIndex && index !== i)) {
                entries.push(currentEntries[i]);
            }
        }
        this.beforeChange();
        this.record.set({ data: entries, callback: callback });
        this.afterChange();
    };
    /**
   * Adds an entry to the list
   *
   * @param {String} entry
   * @param {Number} [index]
   */
    List.prototype.addEntry = function (entry, index, callback) {
        if (typeof entry !== 'string') {
            throw new Error('Entry must be a recordName');
        }
        var hasIndex = this.hasIndex(index);
        var entries = this.getEntries();
        if (hasIndex) {
            entries.splice(index, 0, entry);
        }
        else {
            entries.push(entry);
        }
        this.beforeChange();
        this.record.set({ data: entries, callback: callback });
        this.afterChange();
    };
    /**
   * Proxies the underlying Record's subscribe method. Makes sure
   * that no path is provided
   */
    List.prototype.subscribe = function (callback) {
        var parameters = utils.normalizeArguments(arguments);
        if (parameters.path) {
            throw new Error('path is not supported for List.subscribe');
        }
        // Make sure the callback is invoked with an empty array for new records
        var listCallback = function (scope, cb) {
            cb(scope.getEntries());
        }.bind(this, this, parameters.callback);
        /**
        * Adding a property onto a function directly is terrible practice,
        * and we will change this as soon as we have a more seperate approach
        * of creating lists that doesn't have records default state.
        *
        * The reason we are holding a referencing to wrapped array is so that
        * on unsubscribe it can provide a reference to the actual method the
        * record is subscribed too.
        **/
        this.wrappedFunctions.set(parameters.callback, listCallback);
        parameters.callback = listCallback;
        this.subscriptions.push(parameters);
        this.record.subscribe(parameters, this);
    };
    /**
   * Proxies the underlying Record's unsubscribe method. Makes sure
   * that no path is provided
   */
    List.prototype.unsubscribe = function (callback) {
        var parameters = utils.normalizeArguments(arguments);
        if (parameters.path) {
            throw new Error('path is not supported for List.unsubscribe');
        }
        var listenCallback = this.wrappedFunctions.get(parameters.callback);
        parameters.callback = listenCallback;
        this.wrappedFunctions.delete(parameters.callback);
        this.subscriptions = this.subscriptions.filter(function (subscription) {
            if (parameters.callback && parameters.callback !== subscription.callback)
                return true;
            return false;
        });
        this.record.unsubscribe(parameters, this);
    };
    /**
     * Proxies the underlying Record's _update method. Set's
     * data to an empty array if no data is provided.
     */
    List.prototype.applyUpdate = function (message) {
        if (!(message.parsedData instanceof Array)) {
            message.parsedData = [];
        }
        this.beforeChange();
        this.originalApplyUpdate(message);
        this.afterChange();
    };
    /**
     * Validates that the index provided is within the current set of entries.
     */
    List.prototype.hasIndex = function (index) {
        var hasIndex = false;
        var entries = this.getEntries();
        if (index !== undefined) {
            if (isNaN(index)) {
                throw new Error('Index must be a number');
            }
            if (index !== entries.length && (index >= entries.length || index < 0)) {
                throw new Error('Index must be within current entries');
            }
            hasIndex = true;
        }
        return hasIndex;
    };
    /**
     * Establishes the current structure of the list, provided the client has attached any
     * add / move / remove listener
     *
     * This will be called before any change to the list, regardsless if the change was triggered
     * by an incoming message from the server or by the client
     */
    List.prototype.beforeChange = function () {
        this.hasAddListener = this.hasListeners(constants_1.EVENT.ENTRY_ADDED_EVENT);
        this.hasRemoveListener = this.hasListeners(constants_1.EVENT.ENTRY_REMOVED_EVENT);
        this.hasMoveListener = this.hasListeners(constants_1.EVENT.ENTRY_MOVED_EVENT);
        if (this.hasAddListener || this.hasRemoveListener || this.hasMoveListener) {
            this.beforeStructure = this.getStructure();
        }
        else {
            this.beforeStructure = null;
        }
    };
    /**
     * Compares the structure of the list after a change to its previous structure and notifies
     * any add / move / remove listener. Won't do anything if no listeners are attached.
     */
    List.prototype.afterChange = function () {
        if (this.beforeStructure === null) {
            return;
        }
        var after = this.getStructure();
        var before = this.beforeStructure;
        var entry;
        var i;
        if (this.hasRemoveListener) {
            for (entry in before) {
                for (i = 0; i < before[entry].length; i++) {
                    if (after[entry] === undefined || after[entry][i] === undefined) {
                        this.emit(constants_1.EVENT.ENTRY_REMOVED_EVENT, entry, before[entry][i]);
                    }
                }
            }
        }
        if (this.hasAddListener || this.hasMoveListener) {
            for (entry in after) {
                if (before[entry] === undefined) {
                    for (i = 0; i < after[entry].length; i++) {
                        this.emit(constants_1.EVENT.ENTRY_ADDED_EVENT, entry, after[entry][i]);
                    }
                }
                else {
                    for (i = 0; i < after[entry].length; i++) {
                        if (before[entry][i] !== after[entry][i]) {
                            if (before[entry][i] === undefined) {
                                this.emit(constants_1.EVENT.ENTRY_ADDED_EVENT, entry, after[entry][i]);
                            }
                            else {
                                this.emit(constants_1.EVENT.ENTRY_MOVED_EVENT, entry, after[entry][i]);
                            }
                        }
                    }
                }
            }
        }
    };
    /**
     * Iterates through the list and creates a map with the entry as a key
     * and an array of its position(s) within the list as a value, e.g.
     *
     * {
     *   'recordA': [ 0, 3 ],
     *   'recordB': [ 1 ],
     *   'recordC': [ 2 ]
     * }
     */
    List.prototype.getStructure = function () {
        var structure = {};
        var i;
        var entries = this.getEntries();
        for (i = 0; i < entries.length; i++) {
            if (structure[entries[i]] === undefined) {
                structure[entries[i]] = [i];
            }
            else {
                structure[entries[i]].push(i);
            }
        }
        return structure;
    };
    List.prototype.destroy = function () {
        for (var i = 0; i < this.subscriptions.length; i++) {
            this.record.unsubscribe(this.subscriptions[i], this);
        }
        this.wrappedFunctions.clear();
        this.record.removeContext(this);
    };
    return List;
}(emitter_1.Emitter));
exports.List = List;


/***/ }),

/***/ "./src/record/merge-strategy-service.ts":
/*!**********************************************!*\
  !*** ./src/record/merge-strategy-service.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeStrategyService = void 0;
var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
var MergeStrategyService = /** @class */ (function () {
    function MergeStrategyService(services, defaultStrategy) {
        this.services = services;
        this.defaultStrategy = defaultStrategy;
        this.strategiesByRecord = new Map();
        this.strategiesByPattern = new Map();
    }
    MergeStrategyService.prototype.setMergeStrategyByName = function (recordName, strategy) {
        this.strategiesByRecord.set(recordName, strategy);
    };
    MergeStrategyService.prototype.setMergeStrategyByPattern = function (pattern, strategy) {
        this.strategiesByPattern.set(pattern, strategy);
    };
    MergeStrategyService.prototype.merge = function (remoteRecord, localVersion, localData, callback, context) {
        var e_1, _a;
        var recordName = remoteRecord.name;
        var exactMergeStrategy = this.strategiesByRecord.get(recordName);
        if (exactMergeStrategy) {
            exactMergeStrategy(localData, localVersion, remoteRecord.parsedData, remoteRecord.version, function (error, data) {
                callback.call(context, error, remoteRecord, data, localVersion, localData);
            });
            return;
        }
        try {
            for (var _b = __values(this.strategiesByPattern), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), pattern = _d[0], patternMergeStrategy = _d[1];
                if (pattern.test(recordName)) {
                    patternMergeStrategy(localData, localVersion, remoteRecord.parsedData, remoteRecord.version, function (error, data) {
                        callback.call(context, error, remoteRecord, data, localVersion, localData);
                    });
                    return;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (this.defaultStrategy) {
            this.defaultStrategy(localData, localVersion, remoteRecord.parsedData, remoteRecord.version, function (error, data) {
                callback.call(context, error, remoteRecord, data, localVersion, localData);
            });
            return;
        }
        this.services.logger.error({ topic: constants_1.TOPIC.RECORD }, constants_1.EVENT.RECORD_VERSION_EXISTS, { remoteVersion: remoteRecord.version, recordName: recordName });
    };
    return MergeStrategyService;
}());
exports.MergeStrategyService = MergeStrategyService;


/***/ }),

/***/ "./src/record/merge-strategy.ts":
/*!**************************************!*\
  !*** ./src/record/merge-strategy.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCAL_WINS = exports.REMOTE_WINS = void 0;
/**
 *  Choose the server's state over the client's
**/
var REMOTE_WINS = function (localValue, localVersion, remoteValue, remoteVersion, callback) {
    callback(null, remoteValue);
};
exports.REMOTE_WINS = REMOTE_WINS;
/**
 *  Choose the local state over the server's
**/
var LOCAL_WINS = function (localValue, localVersion, remoteValue, remoteVersion, callback) {
    callback(null, localValue);
};
exports.LOCAL_WINS = LOCAL_WINS;


/***/ }),

/***/ "./src/record/record-core.ts":
/*!***********************************!*\
  !*** ./src/record/record-core.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
var json_path_1 = __webpack_require__(/*! ./json-path */ "./src/record/json-path.ts");
var emitter_1 = __webpack_require__(/*! ../util/emitter */ "./src/util/emitter.ts");
var utils = __webpack_require__(/*! ../util/utils */ "./src/util/utils.ts");
var state_machine_1 = __webpack_require__(/*! ../util/state-machine */ "./src/util/state-machine.ts");
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


/***/ }),

/***/ "./src/record/record-handler.ts":
/*!**************************************!*\
  !*** ./src/record/record-handler.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordHandler = void 0;
var utils = __webpack_require__(/*! ../util/utils */ "./src/util/utils.ts");
var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
var record_core_1 = __webpack_require__(/*! ./record-core */ "./src/record/record-core.ts");
var record_1 = __webpack_require__(/*! ./record */ "./src/record/record.ts");
var anonymous_record_1 = __webpack_require__(/*! ./anonymous-record */ "./src/record/anonymous-record.ts");
var list_1 = __webpack_require__(/*! ./list */ "./src/record/list.ts");
var listener_1 = __webpack_require__(/*! ../util/listener */ "./src/util/listener.ts");
var single_notifier_1 = __webpack_require__(/*! ./single-notifier */ "./src/record/single-notifier.ts");
var write_ack_service_1 = __webpack_require__(/*! ./write-ack-service */ "./src/record/write-ack-service.ts");
var dirty_service_1 = __webpack_require__(/*! ./dirty-service */ "./src/record/dirty-service.ts");
var merge_strategy_service_1 = __webpack_require__(/*! ./merge-strategy-service */ "./src/record/merge-strategy-service.ts");
var bulk_subscription_service_1 = __webpack_require__(/*! ../util/bulk-subscription-service */ "./src/util/bulk-subscription-service.ts");
var RecordHandler = /** @class */ (function () {
    function RecordHandler(services, options, recordServices, listener) {
        var _a;
        if (listener === void 0) { listener = new listener_1.Listener(constants_1.TOPIC.RECORD, services); }
        this.services = services;
        this.options = options;
        this.listener = listener;
        this.recordCores = new Map();
        this.notifyCallbacks = new Map();
        this.recordServices = recordServices || {
            bulkSubscriptionService: (_a = {},
                _a[constants_1.RECORD_ACTION.SUBSCRIBECREATEANDREAD] = this.getBulkSubscriptionService(constants_1.RECORD_ACTION.SUBSCRIBECREATEANDREAD),
                _a[constants_1.RECORD_ACTION.SUBSCRIBEANDREAD] = this.getBulkSubscriptionService(constants_1.RECORD_ACTION.SUBSCRIBEANDREAD),
                _a[constants_1.RECORD_ACTION.SUBSCRIBEANDHEAD] = this.getBulkSubscriptionService(constants_1.RECORD_ACTION.SUBSCRIBEANDHEAD),
                _a),
            writeAckService: new write_ack_service_1.WriteAcknowledgementService(services),
            readRegistry: new single_notifier_1.SingleNotifier(services, constants_1.RECORD_ACTION.READ, options.recordReadTimeout),
            headRegistry: new single_notifier_1.SingleNotifier(services, constants_1.RECORD_ACTION.HEAD, options.recordReadTimeout),
            dirtyService: new dirty_service_1.DirtyService(services.storage, options.dirtyStorageName),
            mergeStrategy: new merge_strategy_service_1.MergeStrategyService(services, options.mergeStrategy)
        };
        this.dirtyService = this.recordServices.dirtyService;
        this.sendUpdatedData = this.sendUpdatedData.bind(this);
        this.onMergeCompleted = this.onMergeCompleted.bind(this);
        this.getRecordCore = this.getRecordCore.bind(this);
        this.removeRecord = this.removeRecord.bind(this);
        this.onBulkSubscriptionSent = this.onBulkSubscriptionSent.bind(this);
        this.services.connection.registerHandler(constants_1.TOPIC.RECORD, this.handle.bind(this));
        this.services.connection.onReestablished(this.syncDirtyRecords.bind(this));
        if (this.services.connection.isConnected) {
            this.syncDirtyRecords();
        }
    }
    /**
     * Returns all the available data-sync names.
     *
     * Please note: Lists, AnonymousRecords and Records are all essentially
     * the same thing within the SDK, so this array will contain a list of
     * everything.
     *
     * Due to how records work as well even after a discard this list will
     * take a while to update. This is intentional as their is an option for
     * how long a record will survive before being discarded! You can change that
     * via the `recordDiscardTimeout: milliseconds` option.
     */
    RecordHandler.prototype.names = function () {
        return __spreadArray([], __read(this.recordCores.keys()), false);
    };
    RecordHandler.prototype.setMergeStrategy = function (recordName, mergeStrategy) {
        if (typeof mergeStrategy === 'function') {
            this.recordServices.mergeStrategy.setMergeStrategyByName(recordName, mergeStrategy);
        }
        else {
            throw new Error('Invalid merge strategy: Must be a Function');
        }
    };
    RecordHandler.prototype.setMergeStrategyRegExp = function (regexp, mergeStrategy) {
        if (typeof mergeStrategy === 'function') {
            this.recordServices.mergeStrategy.setMergeStrategyByPattern(regexp, mergeStrategy);
        }
        else {
            throw new Error('Invalid merge strategy: Must be a Function');
        }
    };
    /**
   * Returns an existing record or creates a new one.
   *
   * @param   {String} name the unique name of the record
   */
    RecordHandler.prototype.getRecord = function (name) {
        return new record_1.Record(this.getRecordCore(name));
    };
    /**
     * Returns an existing List or creates a new one. A list is a specialised
     * type of record that holds an array of recordNames.
     *
     * @param   {String} name       the unique name of the list
     */
    RecordHandler.prototype.getList = function (name) {
        return new list_1.List(this.getRecordCore(name));
    };
    /**
     * Returns an anonymous record. A anonymous record is effectively
     * a wrapper that mimicks the API of a record, but allows for the
     * underlying record to be swapped without loosing subscriptions etc.
     *
     * This is particularly useful when selecting from a number of similarly
     * structured records. E.g. a list of users that can be choosen from a list
     *
     * The only API difference to a normal record is an additional setName( name ) method.
     */
    RecordHandler.prototype.getAnonymousRecord = function () {
        return new anonymous_record_1.AnonymousRecord(this.getRecordCore);
    };
    /**
     * Allows to listen for record subscriptions made by this or other clients. This
     * is useful to create "active" data providers, e.g. providers that only provide
     * data for a particular record if a user is actually interested in it
     *
     * @param   {String}   pattern  A combination of alpha numeric characters and wildcards( * )
     * @param   {Function} callback
     */
    RecordHandler.prototype.listen = function (pattern, callback) {
        this.listener.listen(pattern, callback);
    };
    /**
     * Removes a listener that was previously registered with listenForSubscriptions
     *
     * @param   {String}   pattern  A combination of alpha numeric characters and wildcards( * )
     */
    RecordHandler.prototype.unlisten = function (pattern) {
        this.listener.unlisten(pattern);
    };
    RecordHandler.prototype.snapshot = function (name, callback) {
        var _this = this;
        if (typeof name !== 'string' || name.length === 0) {
            throw new Error('invalid argument: name');
        }
        if (callback !== undefined && typeof callback !== 'function') {
            throw new Error('invalid argument: callback');
        }
        var recordCore = this.recordCores.get(name);
        if (recordCore) {
            if (callback) {
                recordCore.whenReady(null, function () {
                    callback(null, recordCore.get());
                });
            }
            else {
                return new Promise(function (resolve, reject) {
                    recordCore.whenReady(null, function () {
                        resolve(recordCore.get());
                    });
                });
            }
            return;
        }
        if (callback) {
            this.recordServices.readRegistry.request(name, callback);
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.recordServices.readRegistry.request(name, function (error, data) { return error ? reject(error) : resolve(data); });
            });
        }
    };
    RecordHandler.prototype.has = function (name, callback) {
        var _this = this;
        if (typeof name !== 'string' || name.length === 0) {
            throw new Error('invalid argument: name');
        }
        if (callback !== undefined && typeof callback !== 'function') {
            throw new Error('invalid argument: callback');
        }
        var cb;
        if (!callback) {
            return new Promise(function (resolve, reject) {
                cb = function (error, version) { return error ? reject(error) : resolve(version !== -1); };
                _this.head(name, cb);
            });
        }
        cb = function (error, version) { return error ? callback(error, null) : callback(null, version !== -1); };
        this.head(name, cb);
    };
    RecordHandler.prototype.head = function (name, callback) {
        var _this = this;
        if (typeof name !== 'string' || name.length === 0) {
            throw new Error('invalid argument: name');
        }
        if (callback !== undefined && typeof callback !== 'function') {
            throw new Error('invalid argument: callback');
        }
        var recordCore = this.recordCores.get(name);
        if (recordCore) {
            if (callback) {
                recordCore.whenReady(null, function () {
                    callback(null, recordCore.version);
                });
            }
            else {
                return new Promise(function (resolve, reject) {
                    recordCore.whenReady(null, function () {
                        resolve(recordCore.version);
                    });
                });
            }
            return;
        }
        if (callback) {
            this.recordServices.headRegistry.request(name, callback);
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.recordServices.headRegistry.request(name, function (error, data) { return error ? reject(error) : resolve(data); });
            });
        }
    };
    RecordHandler.prototype.setDataWithAck = function (recordName) {
        var _this = this;
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var args = utils.normalizeSetArguments(arguments, 1);
        if (!args.callback) {
            return new Promise(function (resolve, reject) {
                args.callback = function (error) { return error === null ? resolve() : reject(error); };
                _this.sendSetData(recordName, -1, args);
            });
        }
        this.sendSetData(recordName, -1, args);
    };
    RecordHandler.prototype.setData = function (recordName) {
        var args = utils.normalizeSetArguments(arguments, 1);
        this.sendSetData(recordName, -1, args);
    };
    RecordHandler.prototype.delete = function (recordName, callback) {
        // TODO: Use a delete service to make the logic in record core and here common
        throw Error('Delete is not yet supported without use of a Record');
    };
    RecordHandler.prototype.notify = function (recordNames, callback) {
        var _this = this;
        if (!this.services.connection.isConnected) {
            if (callback) {
                callback(constants_1.EVENT.CLIENT_OFFLINE);
                return;
            }
            return new Promise(function (resolve, reject) { return reject(constants_1.EVENT.CLIENT_OFFLINE); });
        }
        var correlationId = utils.getUid();
        this.services.connection.sendMessage({
            topic: constants_1.TOPIC.RECORD,
            action: constants_1.RECORD_ACTION.NOTIFY,
            names: recordNames,
            correlationId: correlationId
        });
        if (callback) {
            this.notifyCallbacks.set(correlationId, callback);
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.notifyCallbacks.set(correlationId, function (error) { return error ? reject(error) : resolve(); });
            });
        }
    };
    RecordHandler.prototype.sendSetData = function (recordName, version, args) {
        var path = args.path, data = args.data, callback = args.callback;
        if (!recordName || typeof recordName !== 'string' || recordName.length === 0) {
            throw new Error('invalid argument: recordName must be an non empty string');
        }
        if (!path && (data === null || typeof data !== 'object')) {
            throw new Error('invalid argument: data must be an object when no path is provided');
        }
        var recordCores = this.recordCores.get(recordName);
        if (recordCores) {
            recordCores.set({ path: path, data: data, callback: callback });
            return;
        }
        var action;
        if (path) {
            if (data === undefined) {
                action = constants_1.RECORD_ACTION.ERASE;
            }
            else {
                action = constants_1.RECORD_ACTION.CREATEANDPATCH;
            }
        }
        else {
            action = constants_1.RECORD_ACTION.CREATEANDUPDATE;
        }
        var message = {
            topic: constants_1.TOPIC.RECORD,
            action: action,
            name: recordName,
            path: path,
            version: version,
            parsedData: data
        };
        if (callback) {
            this.recordServices.writeAckService.send(message, callback);
        }
        else {
            this.services.connection.sendMessage(message);
        }
    };
    RecordHandler.prototype.saveToOfflineStorage = function () {
        this.recordCores.forEach(function (recordCore) { return recordCore.saveRecordToOffline(); });
    };
    RecordHandler.prototype.clearOfflineStorage = function (callback) {
        var _this = this;
        if (callback) {
            this.services.storage.reset(callback);
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.services.storage.reset(function (error) { return error ? reject(error) : resolve(); });
            });
        }
    };
    /**
     * Will be called by the client for incoming messages on the RECORD topic
     *
     * @param   {Object} message parsed and validated deepstream message
     */
    RecordHandler.prototype.handle = function (message) {
        var _this = this;
        if ((message.action === constants_1.RECORD_ACTION.NOTIFY && message.isAck) ||
            (message.isError && message.action === constants_1.RECORD_ACTION.RECORD_NOTIFY_ERROR)) {
            var callback = this.notifyCallbacks.get(message.correlationId);
            if (callback) {
                callback(message.data || null);
                this.notifyCallbacks.delete(message.correlationId);
            }
            else {
                this.services.logger.error(message, constants_1.RECORD_ACTION.NOTIFY);
            }
            return;
        }
        if (message.isAck) {
            this.services.timeoutRegistry.remove(message);
            return;
        }
        if (message.action === constants_1.RECORD_ACTION.SUBSCRIPTION_FOR_PATTERN_FOUND ||
            message.action === constants_1.RECORD_ACTION.SUBSCRIPTION_FOR_PATTERN_REMOVED ||
            message.action === constants_1.RECORD_ACTION.LISTEN ||
            message.action === constants_1.RECORD_ACTION.UNLISTEN) {
            this.listener.handle(message);
            return;
        }
        if (message.isWriteAck && message.action !== constants_1.RECORD_ACTION.VERSION_EXISTS) {
            this.recordServices.writeAckService.recieve(message);
            return;
        }
        if (message.action === constants_1.RECORD_ACTION.READ_RESPONSE || message.originalAction === constants_1.RECORD_ACTION.READ) {
            if (message.isError) {
                this.recordServices.readRegistry.recieve(message, constants_1.RECORD_ACTION[message.action]);
            }
            else {
                this.recordServices.readRegistry.recieve(message, null, message.parsedData);
            }
            return;
        }
        if (message.action === constants_1.RECORD_ACTION.HEAD_RESPONSE_BULK) {
            Object.keys(message.versions).forEach(function (name) {
                _this.recordServices.headRegistry.recieve({
                    topic: constants_1.TOPIC.RECORD,
                    action: constants_1.RECORD_ACTION.HEAD_RESPONSE,
                    originalAction: constants_1.RECORD_ACTION.HEAD,
                    name: name,
                    version: message.versions[name]
                }, null, message.versions[name]);
            });
        }
        if (message.action === constants_1.RECORD_ACTION.HEAD_RESPONSE ||
            message.originalAction === constants_1.RECORD_ACTION.HEAD) {
            if (message.isError) {
                this.recordServices.headRegistry.recieve(message, constants_1.RECORD_ACTION[message.action]);
            }
            else {
                this.recordServices.headRegistry.recieve(message, null, message.version);
            }
        }
        var recordCore = this.recordCores.get(message.name);
        if (recordCore) {
            recordCore.handle(message);
            return;
        }
        if (message.action === constants_1.RECORD_ACTION.VERSION_EXISTS) {
            return;
        }
        if (message.action === constants_1.RECORD_ACTION.SUBSCRIPTION_HAS_PROVIDER ||
            message.action === constants_1.RECORD_ACTION.SUBSCRIPTION_HAS_NO_PROVIDER) {
            // record can receive a HAS_PROVIDER after discarding the record
            return;
        }
        if (message.isError) {
            this.services.logger.error(message);
            return;
        }
        this.services.logger.error(message, constants_1.EVENT.UNSOLICITED_MESSAGE);
    };
    /**
     * Callback for 'deleted' and 'discard' events from a record. Removes the record from
     * the registry
     */
    RecordHandler.prototype.removeRecord = function (recordName) {
        this.recordCores.delete(recordName);
    };
    RecordHandler.prototype.getRecordCore = function (recordName) {
        var recordCore = this.recordCores.get(recordName);
        if (!recordCore) {
            recordCore = new record_core_1.RecordCore(recordName, this.services, this.options, this.recordServices, this.removeRecord);
            this.recordCores.set(recordName, recordCore);
        }
        return recordCore;
    };
    RecordHandler.prototype.syncDirtyRecords = function () {
        this.dirtyService.whenLoaded(this, this._syncDirtyRecords);
    };
    // TODO: Expose issues here, as there isn't a reason why a record core needs to exist in
    // order to sync up
    RecordHandler.prototype._syncDirtyRecords = function () {
        var e_1, _a;
        var dirtyRecords = this.dirtyService.getAll();
        try {
            for (var dirtyRecords_1 = __values(dirtyRecords), dirtyRecords_1_1 = dirtyRecords_1.next(); !dirtyRecords_1_1.done; dirtyRecords_1_1 = dirtyRecords_1.next()) {
                var _b = __read(dirtyRecords_1_1.value, 1), recordName = _b[0];
                var recordCore = this.recordCores.get(recordName);
                if (recordCore && recordCore.references.size > 0) {
                    // if it isn't zero the record core takes care of it
                    continue;
                }
                this.services.storage.get(recordName, this.sendUpdatedData);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (dirtyRecords_1_1 && !dirtyRecords_1_1.done && (_a = dirtyRecords_1.return)) _a.call(dirtyRecords_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    RecordHandler.prototype.sendUpdatedData = function (recordName, version, data) {
        var _this = this;
        if (version === -1) {
            // deleted locally, how to merge?
            this.services.logger.warn({ topic: constants_1.TOPIC.RECORD }, constants_1.RECORD_ACTION.DELETE, "Deleted record while offline, can't resolve");
            return;
        }
        var callback = function (error, name) {
            if (!error) {
                _this.dirtyService.setDirty(name, false);
            }
            else {
                _this.recordServices.readRegistry.register(name, _this, function (message) {
                    _this.recordServices.mergeStrategy.merge(message, version, data, _this.onMergeCompleted, _this);
                });
            }
        };
        this.sendSetData(recordName, version, { data: data, callback: callback });
    };
    RecordHandler.prototype.onMergeCompleted = function (error, _a, mergeData) {
        var name = _a.name, version = _a.version;
        this.sendSetData(name, version + 1, { data: mergeData });
    };
    RecordHandler.prototype.getBulkSubscriptionService = function (bulkSubscribe) {
        return new bulk_subscription_service_1.BulkSubscriptionService(this.services, this.options.subscriptionInterval, constants_1.TOPIC.RECORD, bulkSubscribe, constants_1.RECORD_ACTION.UNSUBSCRIBE, this.onBulkSubscriptionSent);
    };
    RecordHandler.prototype.onBulkSubscriptionSent = function (message) {
        if (!message.names) {
            this.services.timeoutRegistry.add({ message: message });
        }
    };
    return RecordHandler;
}());
exports.RecordHandler = RecordHandler;


/***/ }),

/***/ "./src/record/record.ts":
/*!******************************!*\
  !*** ./src/record/record.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var utils = __webpack_require__(/*! ../util/utils */ "./src/util/utils.ts");
var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
var emitter_1 = __webpack_require__(/*! ../util/emitter */ "./src/util/emitter.ts");
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


/***/ }),

/***/ "./src/record/single-notifier.ts":
/*!***************************************!*\
  !*** ./src/record/single-notifier.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleNotifier = void 0;
var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/**
 * Provides a scaffold for subscriptionless requests to deepstream, such as the SNAPSHOT
 * and HAS functionality. The SingleNotifier multiplexes all the client requests so
 * that they can can be notified at once, and also includes reconnection funcionality
 * incase the connection drops.
 *
 * @param {Services} services          The deepstream client
 * @param {Options} options     Function to call to allow resubscribing
 *
 * @constructor
 */
var SingleNotifier = /** @class */ (function () {
    function SingleNotifier(services, action, timeoutDuration) {
        this.services = services;
        this.action = action;
        this.requests = new Map();
        this.internalRequests = new Map();
        this.limboQueue = [];
        this.services.connection.onLost(this.onConnectionLost.bind(this));
        this.services.connection.onExitLimbo(this.onExitLimbo.bind(this));
        this.services.connection.onReestablished(this.onConnectionReestablished.bind(this));
    }
    /**
     * Add a request. If one has already been made it will skip the server request
     * and multiplex the response
     *
     * @param {String} name An identifier for the request, e.g. a record name
     * @param {Object} response An object with property `callback` or `resolve` and `reject`
     *
     * @public
     * @returns {void}
     */
    SingleNotifier.prototype.request = function (name, callback) {
        var req = this.requests.get(name);
        if (req) {
            req.push(callback);
            return;
        }
        this.requests.set(name, [callback]);
        var message = {
            topic: constants_1.TOPIC.RECORD,
            action: this.action,
            name: name
        };
        if (this.services.connection.isConnected) {
            this.services.connection.sendMessage(message);
            this.services.timeoutRegistry.add({ message: message });
        }
        else if (this.services.connection.isInLimbo) {
            this.limboQueue.push(message);
        }
        else {
            this.requests.delete(name);
            callback(constants_1.EVENT.CLIENT_OFFLINE);
        }
    };
    /**
     * Adds a callback to a (possibly) inflight request that will be called
     * on the response.
     */
    SingleNotifier.prototype.register = function (name, context, callback) {
        var request = this.internalRequests.get(name);
        if (!request) {
            this.internalRequests.set(name, [{ callback: callback, context: context }]);
        }
        else {
            request.push({ callback: callback, context: context });
        }
    };
    SingleNotifier.prototype.recieve = function (message, error, data) {
        this.services.timeoutRegistry.remove(message);
        var name = message.name;
        var responses = this.requests.get(name) || [];
        var internalResponses = this.internalRequests.get(name) || [];
        if (!responses && !internalResponses) {
            return;
        }
        for (var i = 0; i < internalResponses.length; i++) {
            internalResponses[i].callback.call(internalResponses[i].context, message);
        }
        this.internalRequests.delete(name);
        // todo we can clean this up and do cb = (error, data) => error ? reject(error) : resolve()
        for (var i = 0; i < responses.length; i++) {
            responses[i](error, data);
        }
        this.requests.delete(name);
        return;
    };
    SingleNotifier.prototype.onConnectionLost = function () {
        this.requests.forEach(function (responses) {
            responses.forEach(function (response) { return response(constants_1.EVENT.CLIENT_OFFLINE); });
        });
        this.requests.clear();
    };
    SingleNotifier.prototype.onExitLimbo = function () {
        for (var i = 0; i < this.limboQueue.length; i++) {
            var message = this.limboQueue[i];
            var requests = this.requests.get(message.name);
            if (requests) {
                requests.forEach(function (cb) { return cb(constants_1.EVENT.CLIENT_OFFLINE); });
            }
        }
        this.requests.clear();
        this.limboQueue = [];
    };
    SingleNotifier.prototype.onConnectionReestablished = function () {
        for (var i = 0; i < this.limboQueue.length; i++) {
            var message = this.limboQueue[i];
            this.services.connection.sendMessage(message);
            this.services.timeoutRegistry.add({ message: message });
        }
    };
    return SingleNotifier;
}());
exports.SingleNotifier = SingleNotifier;


/***/ }),

/***/ "./src/record/write-ack-service.ts":
/*!*****************************************!*\
  !*** ./src/record/write-ack-service.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.WriteAcknowledgementService = void 0;
var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
var WriteAcknowledgementService = /** @class */ (function () {
    function WriteAcknowledgementService(services) {
        this.services = services;
        this.responses = new Map();
        this.count = 1;
        this.services.connection.onLost(this.onConnectionLost.bind(this));
    }
    /**
     * Send message with write ack callback.
     */
    WriteAcknowledgementService.prototype.send = function (message, callback) {
        if (this.services.connection.isConnected === false) {
            this.services.timerRegistry.requestIdleCallback(callback.bind(this, constants_1.EVENT.CLIENT_OFFLINE, message.name));
            return;
        }
        var correlationId = this.count.toString();
        this.responses.set(correlationId, callback);
        this.services.connection.sendMessage(__assign(__assign({}, message), { correlationId: correlationId, isWriteAck: true }));
        this.count++;
    };
    WriteAcknowledgementService.prototype.recieve = function (message) {
        var id = message.correlationId;
        var response = this.responses.get(id);
        if (!response ||
            (message.action !== constants_1.RECORD_ACTION.WRITE_ACKNOWLEDGEMENT && !message.isError && !message.isWriteAck)) {
            return;
        }
        if (message.action === constants_1.RECORD_ACTION.VERSION_EXISTS) {
            response(message.reason || 'Write failed due to conflict', message.name);
        }
        else {
            message.isError
                ? response(constants_1.RECORD_ACTION[message.action], message.name)
                : response(null, message.name);
        }
        this.responses.delete(id);
    };
    WriteAcknowledgementService.prototype.onConnectionLost = function () {
        this.responses.forEach(function (response) { return response(constants_1.EVENT.CLIENT_OFFLINE); });
        this.responses.clear();
    };
    return WriteAcknowledgementService;
}());
exports.WriteAcknowledgementService = WriteAcknowledgementService;


/***/ }),

/***/ "./src/rpc/rpc-handler.ts":
/*!********************************!*\
  !*** ./src/rpc/rpc-handler.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
var rpc_1 = __webpack_require__(/*! ../rpc/rpc */ "./src/rpc/rpc.ts");
var rpc_response_1 = __webpack_require__(/*! ../rpc/rpc-response */ "./src/rpc/rpc-response.ts");
var utils_1 = __webpack_require__(/*! ../util/utils */ "./src/util/utils.ts");
var bulk_subscription_service_1 = __webpack_require__(/*! ../util/bulk-subscription-service */ "./src/util/bulk-subscription-service.ts");
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


/***/ }),

/***/ "./src/rpc/rpc-response.ts":
/*!*********************************!*\
  !*** ./src/rpc/rpc-response.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RPCResponse = void 0;
var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/**
 * This class represents a single remote procedure
 * call made from the client to the server. It's main function
 * is to encapsulate the logic around timeouts and to convert the
 * incoming response data
 */
var RPCResponse = /** @class */ (function () {
    function RPCResponse(message, options, services) {
        this.name = message.name;
        this.correlationId = message.correlationId;
        this.services = services;
        this.isAccepted = false;
        this.isComplete = false;
        this.autoAccept = true;
        this.services.timerRegistry.requestIdleCallback(this.performAutoAck.bind(this));
    }
    /**
     * Acknowledges the receipt of the request. This
     * will happen implicitly unless the request callback
     * explicitly sets autoAck to false
     */
    RPCResponse.prototype.accept = function () {
        if (this.isAccepted === false) {
            this.services.connection.sendMessage({
                topic: constants_1.TOPIC.RPC,
                action: constants_1.RPC_ACTION.ACCEPT,
                name: this.name,
                correlationId: this.correlationId
            });
            this.isAccepted = true;
        }
    };
    /**
     * Reject the request. This might be necessary if the client
     * is already processing a large number of requests. If deepstream
     * receives a rejection message it will try to route the request to
     * another provider - or return a NO_RPC_PROVIDER error if there are no
     * providers left
     */
    RPCResponse.prototype.reject = function () {
        if (this.isComplete === true) {
            throw new Error("Rpc ".concat(this.name, " already completed"));
        }
        this.autoAccept = false;
        this.isComplete = true;
        this.isAccepted = true;
        this.services.connection.sendMessage({
            topic: constants_1.TOPIC.RPC,
            action: constants_1.RPC_ACTION.REJECT,
            name: this.name,
            correlationId: this.correlationId
        });
    };
    /**
     * Notifies the server that an error has occured while trying to process the request.
     * This will complete the rpc.
     */
    RPCResponse.prototype.error = function (error) {
        if (this.isComplete === true) {
            throw new Error("Rpc ".concat(this.name, " already completed"));
        }
        this.autoAccept = false;
        this.isComplete = true;
        this.isAccepted = true;
        this.services.connection.sendMessage({
            topic: constants_1.TOPIC.RPC,
            action: constants_1.RPC_ACTION.REQUEST_ERROR,
            name: this.name,
            correlationId: this.correlationId,
            parsedData: error
        });
    };
    /**
     * Completes the request by sending the response data
     * to the server. If data is an array or object it will
     * automatically be serialised.
     * If autoAck is disabled and the response is sent before
     * the ack message the request will still be completed and the
     * ack message ignored
     */
    RPCResponse.prototype.send = function (data) {
        if (this.isComplete === true) {
            throw new Error("Rpc ".concat(this.name, " already completed"));
        }
        this.accept();
        this.services.connection.sendMessage({
            topic: constants_1.TOPIC.RPC,
            action: constants_1.RPC_ACTION.RESPONSE,
            name: this.name,
            correlationId: this.correlationId,
            parsedData: data
        });
        this.isComplete = true;
    };
    /**
     * Callback for the autoAck timeout. Executes ack
     * if autoAck is not disabled
     */
    RPCResponse.prototype.performAutoAck = function () {
        if (this.autoAccept === true) {
            this.accept();
        }
    };
    return RPCResponse;
}());
exports.RPCResponse = RPCResponse;


/***/ }),

/***/ "./src/rpc/rpc.ts":
/*!************************!*\
  !*** ./src/rpc/rpc.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RPC = void 0;
var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/**
 * This class represents a single remote procedure
 * call made from the client to the server. It's main function
 * is to encapsulate the logic and to convert the
 * incoming response data
 */
var RPC = /** @class */ (function () {
    function RPC(name, correlationId, data, response, options, services) {
        this.response = response;
        this.services = services;
        var message = {
            topic: constants_1.TOPIC.RPC,
            action: constants_1.RPC_ACTION.REQUEST,
            correlationId: correlationId,
            name: name,
            parsedData: data
        };
        this.services.connection.sendMessage(message);
    }
    /**
     * Called once an ack message is received from the server
     */
    RPC.prototype.accept = function () {
    };
    /**
     * Called once a response message is received from the server.
     */
    RPC.prototype.respond = function (data) {
        this.response(null, data);
    };
    /**
     * Called once an error is received from the server.
     */
    RPC.prototype.error = function (data) {
        this.response(data);
    };
    return RPC;
}());
exports.RPC = RPC;


/***/ }),

/***/ "./src/storage/indexdb-storage-service.ts":
/*!************************************************!*\
  !*** ./src/storage/indexdb-storage-service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = void 0;
var Operation;
(function (Operation) {
    Operation[Operation["GET"] = 0] = "GET";
    Operation[Operation["SET"] = 1] = "SET";
    Operation[Operation["DELETE"] = 2] = "DELETE";
})(Operation || (Operation = {}));
var Storage = /** @class */ (function () {
    function Storage(options) {
        var _this = this;
        this.options = options;
        this.isReady = false;
        this.queuedRequests = new Map();
        this.flushTimeout = null;
        if (typeof indexedDB === 'undefined' || indexedDB === null) {
            throw new Error('IndexDB currently not supported when deepstream in node');
        }
        this.flush = this.flush.bind(this);
        var _a = options.indexdb, objectStoreNames = _a.objectStoreNames, storageDatabaseName = _a.storageDatabaseName, defaultObjectStoreName = _a.defaultObjectStoreName, primaryKey = _a.primaryKey;
        if (!objectStoreNames.includes(defaultObjectStoreName)) {
            objectStoreNames.push(defaultObjectStoreName);
        }
        var dbVersion = options.indexdb.dbVersion;
        if (options.indexdb.autoVersion) {
            var previousDBStructureSerialized = localStorage.getItem("deepstream-db/".concat(storageDatabaseName));
            if (previousDBStructureSerialized) {
                var previousDBStructure = JSON.parse(previousDBStructureSerialized);
                var objectStoreChanged = (previousDBStructure.objectStoreNames.length !== objectStoreNames.length ||
                    previousDBStructure.objectStoreNames.some(function (name) { return !objectStoreNames.includes(name); }));
                if (objectStoreChanged) {
                    dbVersion = previousDBStructure.dbVersion + 1;
                }
                else {
                    dbVersion = previousDBStructure.dbVersion;
                }
            }
            else {
                dbVersion = 1;
            }
        }
        var request = indexedDB.open(storageDatabaseName, dbVersion);
        request.onerror = function (event) {
            console.error("Error opening index ".concat(storageDatabaseName), event);
            // TODO: Workflow for lack of permissions to use indexDB
        };
        request.onsuccess = function (event) {
            _this.db = event.target.result;
            _this.onReady();
        };
        request.onupgradeneeded = function () {
            var db = request.result;
            objectStoreNames.forEach(function (objectStoreName) {
                if (!db.objectStoreNames.contains(objectStoreName)) {
                    db.createObjectStore(objectStoreName, { keyPath: primaryKey });
                }
            });
            for (var i = 0; i < db.objectStoreNames.length; i++) {
                if (objectStoreNames.includes(db.objectStoreNames[i]) === false) {
                    db.deleteObjectStore(db.objectStoreNames[i]);
                }
            }
            if (options.indexdb.autoVersion) {
                localStorage.setItem("deepstream-db/".concat(storageDatabaseName), JSON.stringify({ dbVersion: dbVersion, objectStoreNames: objectStoreNames }));
            }
        };
    }
    Storage.prototype.get = function (recordName, callback) {
        var ignore = this.options.indexdb.ignorePrefixes.some(function (prefix) { return recordName.startsWith(prefix); });
        if (ignore) {
            callback(recordName, -1, null);
            return;
        }
        this.insertRequest({ recordName: recordName, callback: callback, operation: Operation.GET });
    };
    Storage.prototype.set = function (recordName, version, data, callback) {
        var ignore = this.options.indexdb.ignorePrefixes.some(function (prefix) { return recordName.startsWith(prefix); });
        if (ignore) {
            callback(null, recordName);
            return;
        }
        this.insertRequest({ recordName: recordName, version: version, callback: callback, data: data, operation: Operation.SET });
    };
    Storage.prototype.delete = function (recordName, callback) {
        var ignore = this.options.indexdb.ignorePrefixes.some(function (prefix) { return recordName.startsWith(prefix); });
        if (ignore) {
            callback(null, recordName);
            return;
        }
        this.insertRequest({ recordName: recordName, callback: callback, operation: Operation.DELETE });
    };
    Storage.prototype.reset = function (callback) {
        var _this = this;
        if (this.db) {
            this.db.close();
            this.db = null;
        }
        var deleteDBReqeust = indexedDB.deleteDatabase(this.options.indexdb.storageDatabaseName);
        deleteDBReqeust.onblocked = function () { return setTimeout(function () { return _this.reset(callback); }, 1000); };
        deleteDBReqeust.onsuccess = function () { return callback(null); };
        deleteDBReqeust.onerror = function (event) {
            var errorMessage = "Error deleting database ".concat(_this.options.indexdb.storageDatabaseName);
            console.error(errorMessage, event);
            callback(errorMessage);
        };
    };
    Storage.prototype.registerFlush = function () {
        if (this.isReady && !this.flushTimeout) {
            this.flushTimeout = setTimeout(this.flush, this.options.indexdb.flushTimeout);
        }
    };
    Storage.prototype.flush = function () {
        var e_1, _a;
        var _this = this;
        var transaction = this.db.transaction(this.queuedRequests.keys(), 'readwrite');
        var _loop_1 = function (key, queuedRequests) {
            var objectStore = transaction.objectStore(key);
            queuedRequests.forEach(function (_a) {
                var _b;
                var operation = _a.operation, recordName = _a.recordName, version = _a.version, data = _a.data, callback = _a.callback;
                switch (operation) {
                    case Operation.GET: {
                        var request_1 = objectStore.get(recordName);
                        // The api doesn't support get errors yet!
                        request_1.onerror = function (event) {
                            throw new Error("Requesting record ".concat(recordName, " failed"));
                        };
                        request_1.onsuccess = function () {
                            if (request_1.result) {
                                callback(recordName, request_1.result.version, request_1.result.data);
                            }
                            else {
                                callback(recordName, -1, null);
                            }
                        };
                        break;
                    }
                    case Operation.DELETE: {
                        var request = objectStore.delete(recordName);
                        request.onsuccess = function () { return callback(null); };
                        request.onerror = function (event) { return callback(event.errorCode); };
                        break;
                    }
                    case Operation.SET: {
                        var request = objectStore.put((_b = {}, _b[_this.options.indexdb.primaryKey] = recordName, _b.version = version, _b.data = data, _b));
                        request.onsuccess = function () { return callback(null); };
                        request.onerror = function (event) { return callback(event.errorCode); };
                        break;
                    }
                }
            });
        };
        try {
            for (var _b = __values(this.queuedRequests), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], queuedRequests = _d[1];
                _loop_1(key, queuedRequests);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.queuedRequests.clear();
        this.flushTimeout = null;
    };
    Storage.prototype.onReady = function () {
        this.isReady = true;
        this.flush();
    };
    Storage.prototype.insertRequest = function (request) {
        var firstSlashIndex = request.recordName.indexOf('/');
        var objectStoreName;
        if (firstSlashIndex > -1) {
            objectStoreName = request.recordName.substring(0, firstSlashIndex);
            if (this.options.indexdb.objectStoreNames.indexOf(objectStoreName) === -1) {
                console.error("Object store names need to be predefined, missing ".concat(objectStoreName, ". Using default objectStore instead."));
                objectStoreName = this.options.indexdb.defaultObjectStoreName;
            }
            else {
                request.recordName = request.recordName.substring(firstSlashIndex + 1, request.recordName.length);
            }
        }
        else {
            objectStoreName = this.options.indexdb.defaultObjectStoreName;
        }
        var requests = this.queuedRequests.get(objectStoreName);
        if (requests === undefined) {
            this.queuedRequests.set(objectStoreName, [request]);
        }
        else {
            requests.push(request);
        }
        this.registerFlush();
    };
    return Storage;
}());
exports.Storage = Storage;


/***/ }),

/***/ "./src/storage/noop-storage-service.ts":
/*!*********************************************!*\
  !*** ./src/storage/noop-storage-service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NoopStorage = void 0;
var NoopStorage = /** @class */ (function () {
    function NoopStorage() {
        this.isReady = true;
    }
    NoopStorage.prototype.get = function (recordName, callback) {
        setTimeout(callback.bind(this, recordName, -1, null), 0);
    };
    NoopStorage.prototype.set = function (recordName, version, data, callback) {
        setTimeout(callback, 0);
    };
    NoopStorage.prototype.delete = function (recordName, callback) {
        setTimeout(callback, 0);
    };
    NoopStorage.prototype.reset = function (callback) {
        callback(null);
    };
    return NoopStorage;
}());
exports.NoopStorage = NoopStorage;


/***/ }),

/***/ "./src/util/bulk-subscription-service.ts":
/*!***********************************************!*\
  !*** ./src/util/bulk-subscription-service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.BulkSubscriptionService = void 0;
var BulkSubscriptionService = /** @class */ (function () {
    function BulkSubscriptionService(services, subscriptionInterval, topic, subscribeBulkAction, unsubscribeBulkAction, onSubscriptionSent) {
        if (onSubscriptionSent === void 0) { onSubscriptionSent = (function () { }); }
        this.services = services;
        this.subscriptionInterval = subscriptionInterval;
        this.topic = topic;
        this.subscribeBulkAction = subscribeBulkAction;
        this.unsubscribeBulkAction = unsubscribeBulkAction;
        this.onSubscriptionSent = onSubscriptionSent;
        this.subscribeNames = new Set();
        this.unsubscribeNames = new Set();
        this.timerRef = -1;
        this.correlationId = 0;
        this.services.connection.onLost(this.onLost.bind(this));
    }
    BulkSubscriptionService.prototype.subscribe = function (name) {
        if (this.subscriptionInterval > 0) {
            if (this.unsubscribeNames.has(name)) {
                this.unsubscribeNames.delete(name);
            }
            else {
                this.subscribeNames.add(name);
                this.registerFlush();
            }
            return;
        }
        var message = {
            topic: this.topic,
            action: this.subscribeBulkAction,
            names: [name],
            correlationId: (this.correlationId++).toString()
        };
        this.services.connection.sendMessage(message);
        this.onSubscriptionSent(message);
    };
    BulkSubscriptionService.prototype.subscribeList = function (users) {
        users.forEach(this.subscribe.bind(this));
    };
    BulkSubscriptionService.prototype.unsubscribe = function (name) {
        if (this.subscriptionInterval > 0) {
            if (this.subscribeNames.has(name)) {
                this.subscribeNames.delete(name);
            }
            else {
                this.unsubscribeNames.add(name);
                this.registerFlush();
            }
            return;
        }
        var message = {
            topic: this.topic,
            action: this.unsubscribeBulkAction,
            names: [name],
            correlationId: (this.correlationId++).toString()
        };
        this.services.connection.sendMessage(message);
        this.onSubscriptionSent(message);
    };
    BulkSubscriptionService.prototype.unsubscribeList = function (users) {
        users.forEach(this.unsubscribe.bind(this));
    };
    BulkSubscriptionService.prototype.registerFlush = function () {
        if (!this.services.timerRegistry.has(this.timerRef)) {
            this.timerRef = this.services.timerRegistry.add({
                callback: this.sendMessages,
                context: this,
                duration: this.subscriptionInterval
            });
        }
    };
    BulkSubscriptionService.prototype.sendMessages = function () {
        if (!this.services.connection.isConnected) {
            this.onLost();
            return;
        }
        if (this.subscribeNames.size > 0) {
            var message = {
                topic: this.topic,
                action: this.subscribeBulkAction,
                names: __spreadArray([], __read(this.subscribeNames), false),
                correlationId: (this.correlationId++).toString()
            };
            this.services.connection.sendMessage(message);
            this.onSubscriptionSent(message);
            this.subscribeNames.clear();
        }
        if (this.unsubscribeNames.size > 0) {
            var message = {
                topic: this.topic,
                action: this.unsubscribeBulkAction,
                names: __spreadArray([], __read(this.unsubscribeNames), false),
                correlationId: (this.correlationId++).toString()
            };
            this.services.connection.sendMessage(message);
            this.onSubscriptionSent(message);
            this.unsubscribeNames.clear();
        }
    };
    BulkSubscriptionService.prototype.onLost = function () {
        this.correlationId = 0;
        this.services.timerRegistry.remove(this.timerRef);
        this.subscribeNames.clear();
        this.unsubscribeNames.clear();
    };
    return BulkSubscriptionService;
}());
exports.BulkSubscriptionService = BulkSubscriptionService;


/***/ }),

/***/ "./src/util/emitter.ts":
/*!*****************************!*\
  !*** ./src/util/emitter.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
exports.Emitter = void 0;
var Emitter = /** @class */ (function () {
    function Emitter() {
        this.callbacks = null;
    }
    /**
     * Listen on the given `event` with `fn`.
     */
    Emitter.prototype.on = function (event, fn, scope) {
        if (scope === void 0) { scope = this; }
        this.callbacks = this.callbacks || new Map();
        var callbacks = this.callbacks.get(event);
        if (!callbacks) {
            callbacks = [{ fn: fn, scope: scope }];
            this.callbacks.set(event, callbacks);
        }
        else {
            callbacks.push({ fn: fn, scope: scope });
        }
        return this;
    };
    Emitter.prototype.once = function (event, fn, scope) {
        var _this = this;
        if (scope === void 0) { scope = this; }
        var on = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.off(event, on, _this);
            fn.apply(_this, args);
        };
        on.fn = fn;
        this.on(event, on, scope);
        return this;
    };
    /**
     * Remove the given callback for `event` or all
     * registered callbacks.
     */
    Emitter.prototype.off = function (event, fn, scope) {
        // all
        if (event === undefined && fn === undefined && scope === undefined) {
            this.callbacks = null;
        }
        if (this.callbacks === null) {
            return this;
        }
        // specific event
        var callbacks = this.callbacks.get(event);
        if (!callbacks) {
            return this;
        }
        // remove all handlers
        if (fn === undefined && scope === undefined) {
            this.callbacks.delete(event);
            return this;
        }
        // remove specific handler
        callbacks = callbacks.filter(function (item) {
            var cb = item.fn, context = item.scope;
            // handle unsubscribing from all callbacks for a given record path
            if (event !== '' && fn === undefined && scope === context) {
                return false;
            }
            if (cb === fn || cb.fn === fn) {
                if (scope === undefined || scope === context) {
                    return false;
                }
            }
            return true;
        });
        if (callbacks.length === 0) {
            this.callbacks.delete(event);
        }
        else {
            this.callbacks.set(event, callbacks);
        }
        return this;
    };
    Emitter.prototype.removeContext = function (context) {
        var e_1, _a;
        if (this.callbacks === null) {
            return;
        }
        try {
            for (var _b = __values(this.callbacks), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), eventName = _d[0], callbacks = _d[1];
                this.callbacks.set(eventName, callbacks.filter(function (_a) {
                    var scope = _a.scope;
                    return scope === context;
                }));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Emitter.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.callbacks === null) {
            return this;
        }
        var callbacks = this.callbacks.get(event);
        if (!callbacks || callbacks.length === 0) {
            return this;
        }
        // We slice them here incase they are 'once' which would shift the array
        callbacks = callbacks.slice(0);
        callbacks.forEach(function (_a) {
            var fn = _a.fn, scope = _a.scope;
            return fn.apply(scope, args);
        });
        return this;
    };
    /**
     * Check if this emitter has `event` handlers.
     */
    Emitter.prototype.hasListeners = function (event) {
        if (this.callbacks === null) {
            return false;
        }
        return this.callbacks.has(event);
    };
    /**
     * Returns an array listing the events for which the emitter has registered listeners.
     */
    Emitter.prototype.eventNames = function () {
        if (this.callbacks === null) {
            return [];
        }
        return __spreadArray([], __read(this.callbacks.keys()), false);
    };
    Emitter.prototype.hasListenerForFunction = function (event, fn, context) {
        if (this.callbacks === null) {
            return false;
        }
        var callbacks = this.callbacks.get(event);
        if (!callbacks || callbacks.length === 0) {
            return false;
        }
        if (context) {
            callbacks = callbacks.filter(function (_a) {
                var scope = _a.scope;
                return scope === context;
            });
        }
        var hasCallback = false;
        callbacks.map(function (cb) {
            if (cb.fn === fn) {
                hasCallback = true;
            }
        });
        return hasCallback;
    };
    return Emitter;
}());
exports.Emitter = Emitter;


/***/ }),

/***/ "./src/util/interval-timer-registry.ts":
/*!*********************************************!*\
  !*** ./src/util/interval-timer-registry.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntervalTimerRegistry = void 0;
var IntervalTimerRegistry = /** @class */ (function () {
    function IntervalTimerRegistry(timerResolution) {
        this.timerResolution = timerResolution;
        this.registry = new Map();
        this.timerIdCounter = 0;
        this.timerId = setTimeout(this.triggerTimeouts.bind(this), this.timerResolution);
    }
    IntervalTimerRegistry.prototype.close = function () {
        clearInterval(this.timerId);
    };
    IntervalTimerRegistry.prototype.triggerTimeouts = function () {
        var e_1, _a;
        var now = Date.now();
        try {
            for (var _b = __values(this.registry), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), timerId = _d[0], timeout = _d[1];
                if (now - timeout.created > timeout.duration) {
                    timeout.callback.call(timeout.context, timeout.data);
                    this.registry.delete(timerId);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.timerId = setTimeout(this.triggerTimeouts.bind(this), this.timerResolution);
    };
    IntervalTimerRegistry.prototype.has = function (timerId) {
        return this.registry.has(timerId);
    };
    IntervalTimerRegistry.prototype.add = function (timeout) {
        this.timerIdCounter++;
        timeout.created = Date.now();
        this.registry.set(this.timerIdCounter, timeout);
        return this.timerIdCounter;
    };
    IntervalTimerRegistry.prototype.remove = function (timerId) {
        return this.registry.delete(timerId);
    };
    IntervalTimerRegistry.prototype.requestIdleCallback = function (callback) {
        setTimeout(callback, 0);
    };
    return IntervalTimerRegistry;
}());
exports.IntervalTimerRegistry = IntervalTimerRegistry;


/***/ }),

/***/ "./src/util/listener.ts":
/*!******************************!*\
  !*** ./src/util/listener.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = void 0;
var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
var Listener = /** @class */ (function () {
    function Listener(topic, services) {
        this.topic = topic;
        this.services = services;
        this.listeners = new Map();
        this.stopCallbacks = new Map();
        if (topic === constants_1.TOPIC.RECORD) {
            this.actions = constants_1.RECORD_ACTION;
        }
        else if (topic === constants_1.TOPIC.EVENT) {
            this.actions = constants_1.EVENT_ACTION;
        }
        this.services.connection.onLost(this.onConnectionLost.bind(this));
        this.services.connection.onReestablished(this.onConnectionReestablished.bind(this));
    }
    Listener.prototype.listen = function (pattern, callback) {
        if (typeof pattern !== 'string' || pattern.length === 0) {
            throw new Error('invalid argument pattern');
        }
        if (typeof callback !== 'function') {
            throw new Error('invalid argument callback');
        }
        if (this.listeners.has(pattern)) {
            this.services.logger.warn({
                topic: this.topic,
                action: this.actions.LISTEN,
                name: pattern
            }, constants_1.EVENT.LISTENER_EXISTS);
            return;
        }
        this.listeners.set(pattern, callback);
        this.sendListen(pattern);
    };
    Listener.prototype.unlisten = function (pattern) {
        if (typeof pattern !== 'string' || pattern.length === 0) {
            throw new Error('invalid argument pattern');
        }
        if (!this.listeners.has(pattern)) {
            this.services.logger.warn({
                topic: this.topic,
                action: this.actions.UNLISTEN,
                name: pattern
            }, constants_1.EVENT.NOT_LISTENING);
            return;
        }
        this.listeners.delete(pattern);
        this.sendUnlisten(pattern);
    };
    /*
   * Accepting a listener request informs deepstream that the current provider is willing to
   * provide the record or event matching the subscriptionName . This will establish the current
   * provider as the only publisher for the actual subscription with the deepstream cluster.
   * Either accept or reject needs to be called by the listener
   */
    Listener.prototype.accept = function (pattern, subscription) {
        this.services.connection.sendMessage({
            topic: this.topic,
            action: this.actions.LISTEN_ACCEPT,
            name: pattern,
            subscription: subscription
        });
    };
    /*
    * Rejecting a listener request informs deepstream that the current provider is not willing
    * to provide the record or event matching the subscriptionName . This will result in deepstream
    * requesting another provider to do so instead. If no other provider accepts or exists, the
    * resource will remain unprovided.
    * Either accept or reject needs to be called by the listener
    */
    Listener.prototype.reject = function (pattern, subscription) {
        this.services.connection.sendMessage({
            topic: this.topic,
            action: this.actions.LISTEN_REJECT,
            name: pattern,
            subscription: subscription
        });
    };
    Listener.prototype.stop = function (subscription, callback) {
        this.stopCallbacks.set(subscription, callback);
    };
    Listener.prototype.handle = function (message) {
        if (message.isAck) {
            this.services.timeoutRegistry.remove(message);
            return;
        }
        if (message.action === this.actions.SUBSCRIPTION_FOR_PATTERN_FOUND) {
            var listener = this.listeners.get(message.name);
            if (listener) {
                listener(message.subscription, {
                    accept: this.accept.bind(this, message.name, message.subscription),
                    reject: this.reject.bind(this, message.name, message.subscription),
                    onStop: this.stop.bind(this, message.subscription)
                });
            }
            return;
        }
        if (message.action === this.actions.SUBSCRIPTION_FOR_PATTERN_REMOVED) {
            var stopCallback = this.stopCallbacks.get(message.subscription);
            if (stopCallback) {
                stopCallback(message.subscription);
                this.stopCallbacks.delete(message.subscription);
            }
            return;
        }
        this.services.logger.error(message, constants_1.EVENT.UNSOLICITED_MESSAGE);
    };
    Listener.prototype.onConnectionLost = function () {
        this.stopCallbacks.forEach(function (callback, subscription) {
            callback(subscription);
        });
        this.stopCallbacks.clear();
    };
    Listener.prototype.onConnectionReestablished = function () {
        var _this = this;
        this.listeners.forEach(function (callback, pattern) {
            _this.sendListen(pattern);
        });
    };
    /*
    * Sends a C.ACTIONS.LISTEN to deepstream.
    */
    Listener.prototype.sendListen = function (pattern) {
        var message = {
            topic: this.topic,
            action: this.actions.LISTEN,
            name: pattern
        };
        this.services.timeoutRegistry.add({ message: message });
        this.services.connection.sendMessage(message);
    };
    Listener.prototype.sendUnlisten = function (pattern) {
        var message = {
            topic: this.topic,
            action: this.actions.UNLISTEN,
            name: pattern
        };
        this.services.timeoutRegistry.add({ message: message });
        this.services.connection.sendMessage(message);
    };
    return Listener;
}());
exports.Listener = Listener;


/***/ }),

/***/ "./src/util/logger.ts":
/*!****************************!*\
  !*** ./src/util/logger.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
var messages_1 = __webpack_require__(/*! @deepstream/protobuf/dist/types/messages */ "./node_modules/@deepstream/protobuf/dist/types/messages.js");
var all_1 = __webpack_require__(/*! @deepstream/protobuf/dist/types/all */ "./node_modules/@deepstream/protobuf/dist/types/all.js");
function isEvent(action) {
    // @ts-ignore
    return constants_1.EVENT[action] !== undefined;
}
var Logger = /** @class */ (function () {
    function Logger(emitter) {
        this.emitter = emitter;
    }
    Logger.prototype.warn = function (message, event, meta) {
        var warnMessage = "Warning: ".concat(all_1.TOPIC[message.topic]);
        var action = message.action;
        if (action) {
            warnMessage += " (".concat(messages_1.ACTIONS[message.topic][action], ")");
        }
        if (event) {
            warnMessage += ": ".concat(constants_1.EVENT[event]);
        }
        if (meta) {
            warnMessage += " \u2013 ".concat(typeof meta === 'string' ? meta : JSON.stringify(meta));
        }
        // tslint:disable-next-line:no-console
        console.warn(warnMessage);
    };
    Logger.prototype.error = function (message, event, meta) {
        if (isEvent(event)) {
            if (event === constants_1.EVENT.IS_CLOSED || event === constants_1.EVENT.CONNECTION_ERROR) {
                this.emitter.emit('error', meta, constants_1.EVENT[event], all_1.TOPIC[all_1.TOPIC.CONNECTION]);
            }
            else {
                // @ts-ignore
                this.emitter.emit('error', meta, constants_1.EVENT[event], all_1.TOPIC[message.topic]);
            }
        }
        else {
            var action = event ? event : message.action;
            this.emitter.emit('error', meta || message, messages_1.ACTIONS[message.topic][action], all_1.TOPIC[message.topic]);
        }
    };
    return Logger;
}());
exports.Logger = Logger;


/***/ }),

/***/ "./src/util/native-timer-registry.ts":
/*!*******************************************!*\
  !*** ./src/util/native-timer-registry.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeTimerRegistry = void 0;
var NativeTimerRegistry = /** @class */ (function () {
    function NativeTimerRegistry() {
        this.registry = new Set();
    }
    NativeTimerRegistry.prototype.close = function () {
        this.registry.forEach(clearTimeout);
        this.registry.clear();
    };
    NativeTimerRegistry.prototype.has = function (timerId) {
        return this.registry.has(timerId);
    };
    NativeTimerRegistry.prototype.add = function (timeout) {
        var _this = this;
        var id = setTimeout(function () {
            _this.remove(id);
            timeout.callback.call(timeout.context, timeout.data);
        }, timeout.duration);
        this.registry.add(id);
        return id;
    };
    NativeTimerRegistry.prototype.remove = function (timerId) {
        clearTimeout(timerId);
        return this.registry.delete(timerId);
    };
    NativeTimerRegistry.prototype.requestIdleCallback = function (callback) {
        setTimeout(callback, 0);
    };
    return NativeTimerRegistry;
}());
exports.NativeTimerRegistry = NativeTimerRegistry;


/***/ }),

/***/ "./src/util/state-machine.ts":
/*!***********************************!*\
  !*** ./src/util/state-machine.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StateMachine = void 0;
var StateMachine = /** @class */ (function () {
    function StateMachine(logger, stateMachine) {
        this.stateMachine = stateMachine;
        this.inEndState = false;
        this.transitions = stateMachine.transitions;
        this.state = stateMachine.init;
        this.context = stateMachine.context;
        this.history = [{ oldState: '-', newState: this.state, transitionName: '-' }];
    }
    /**
     * Try to perform a state change
     */
    StateMachine.prototype.transition = function (transitionName) {
        var transition;
        for (var i = 0; i < this.transitions.length; i++) {
            transition = this.transitions[i];
            if (transitionName === transition.name && (this.state === transition.from || transition.from === undefined)) {
                this.history.push({ oldState: this.state, transitionName: transitionName, newState: transition.to });
                var oldState = this.state;
                this.state = transition.to;
                if (this.stateMachine.onStateChanged) {
                    this.stateMachine.onStateChanged.call(this.context, this.state, oldState);
                }
                if (transition.handler) {
                    transition.handler.call(this.context);
                }
                if (transition.isEndState === true) {
                    this.inEndState = true;
                }
                return;
            }
        }
        var details = JSON.stringify({ transition: transitionName, fromState: this.state });
        var debugHistory = this.history.reverse().reduce(function (result, entry) {
            return result += "\n\tFrom ".concat(entry.oldState, " to ").concat(entry.newState, " via ").concat(entry.transitionName);
        }, '');
        console.trace("Invalid state transition.\nDetails: ".concat(details, " \nHistory: ").concat(debugHistory));
    };
    return StateMachine;
}());
exports.StateMachine = StateMachine;


/***/ }),

/***/ "./src/util/timeout-registry.ts":
/*!**************************************!*\
  !*** ./src/util/timeout-registry.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeoutRegistry = void 0;
var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
var emitter_1 = __webpack_require__(/*! ../util/emitter */ "./src/util/emitter.ts");
/**
 * Subscriptions to events are in a pending state until deepstream acknowledges
 * them. This is a pattern that's used by numerour classes. This registry aims
 * to centralise the functionality necessary to keep track of subscriptions and
 * their respective timeouts.
 */
var TimeoutRegistry = /** @class */ (function (_super) {
    __extends(TimeoutRegistry, _super);
    function TimeoutRegistry(services, options) {
        var _this = _super.call(this) || this;
        _this.services = services;
        _this.options = options;
        _this.register = new Map();
        return _this;
    }
    /**
     * Add an entry
     */
    TimeoutRegistry.prototype.add = function (timeout) {
        if (timeout.duration === undefined) {
            timeout.duration = this.options.subscriptionTimeout;
        }
        if (timeout.event === undefined) {
            timeout.event = constants_1.EVENT.ACK_TIMEOUT;
        }
        /*
        if (timeout.duration < 1) {
          should we throw an error?
          return -1
        }
        */
        if (!this.services.connection.isConnected) {
            return null;
        }
        this.remove(timeout.message);
        var internalTimeout = {
            timerId: -1,
            uniqueName: this.getUniqueName(timeout.message),
            // event: timeout.event,
            timeout: timeout
        };
        internalTimeout.timerId = this.services.timerRegistry.add({
            context: this,
            callback: this.onTimeout,
            duration: timeout.duration,
            data: internalTimeout
        });
        this.register.set(internalTimeout.uniqueName, internalTimeout);
        return internalTimeout.uniqueName;
    };
    /**
     * Remove an entry
     */
    TimeoutRegistry.prototype.remove = function (message) {
        var requestMsg;
        var action = constants_1.RESPONSE_TO_REQUEST[message.topic][message.action];
        if (!action) {
            requestMsg = message;
        }
        else {
            requestMsg = __assign(__assign({}, message), { action: action });
        }
        var uniqueName = this.getUniqueName(requestMsg);
        this.clear(uniqueName);
    };
    /**
     * Processes an incoming ACK-message and removes the corresponding subscription
     */
    TimeoutRegistry.prototype.clear = function (uniqueName) {
        var timeout = this.register.get(uniqueName);
        if (timeout) {
            this.register.delete(uniqueName);
            this.services.timerRegistry.remove(timeout.timerId);
        }
    };
    /**
     * Will be invoked if the timeout has occured before the ack message was received
     */
    TimeoutRegistry.prototype.onTimeout = function (internalTimeout) {
        this.register.delete(internalTimeout.uniqueName);
        var timeout = internalTimeout.timeout;
        if (timeout.callback) {
            timeout.callback(timeout.event, timeout.message);
        }
        else {
            this.services.logger.warn(timeout.message, timeout.event);
        }
    };
    /**
     * Returns a unique name from the timeout
     */
    TimeoutRegistry.prototype.getUniqueName = function (message) {
        var action = message.originalAction || message.action;
        var name = "".concat(message.topic).concat(action, "_");
        if (message.correlationId) {
            name += message.correlationId;
        }
        else if (message.name) {
            name += message.name;
        }
        return name;
    };
    /**
     * Remote all timeouts when connection disconnects
     */
    TimeoutRegistry.prototype.onConnectionLost = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.register), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), uniqueName = _d[0], timeout = _d[1];
                this.services.timerRegistry.remove(timeout.timerId);
                this.register.delete(uniqueName);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return TimeoutRegistry;
}(emitter_1.Emitter));
exports.TimeoutRegistry = TimeoutRegistry;


/***/ }),

/***/ "./src/util/utils.ts":
/*!***************************!*\
  !*** ./src/util/utils.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseDelay = exports.normalizeArguments = exports.normalizeSetArguments = exports.getUid = exports.parseUrl = exports.shallowCopy = exports.deepCopy = exports.deepEquals = void 0;
/**
 * Compares two objects for deep (recoursive) equality
 *
 * This used to be a significantly more complex custom implementation,
 * but JSON.stringify has gotten so fast that it now outperforms the custom
 * way by a factor of 1.5 to 3.
 *
 * In IE11 / Edge the custom implementation is still slightly faster, but for
 * consistencies sake and the upsides of leaving edge-case handling to the native
 * browser / node implementation we'll go for JSON.stringify from here on.
 *
 * Please find performance test results here
 *
 * http://jsperf.com/deep-equals-code-vs-json
 */
var deepEquals = function (objA, objB) {
    if (objA === objB) {
        return true;
    }
    else if (typeof objA !== 'object' || typeof objB !== 'object') {
        return false;
    }
    return JSON.stringify(objA) === JSON.stringify(objB);
};
exports.deepEquals = deepEquals;
/**
 * Similar to deepEquals above, tests have shown that JSON stringify outperforms any attempt of
 * a code based implementation by 50% - 100% whilst also handling edge-cases and keeping
 * implementation complexity low.
 *
 * If ES6/7 ever decides to implement deep copying natively (what happened to Object.clone?
 * that was briefly a thing...), let's switch it for the native implementation. For now though,
 * even Object.assign({}, obj) only provides a shallow copy.
 *
 * Please find performance test results backing these statements here:
 *
 * http://jsperf.com/object-deep-copy-assign
 */
var deepCopy = function (obj) {
    if (typeof obj === 'object') {
        return JSON.parse(JSON.stringify(obj));
    }
    return obj;
};
exports.deepCopy = deepCopy;
/**
 * Copy the top level of items, but do not copy its items recourisvely. This
 * is much quicker than deepCopy does not guarantee the object items are new/unique.
 * Mainly used to change the reference to the actual object itself, but not its children.
 */
var shallowCopy = function (obj) {
    if (Array.isArray(obj)) {
        return obj.slice(0);
    }
    else if (typeof obj === 'object') {
        var copy = Object.create(null);
        var props = Object.keys(obj);
        for (var i = 0; i < props.length; i++) {
            copy[props[i]] = obj[props[i]];
        }
        return copy;
    }
    return obj;
};
exports.shallowCopy = shallowCopy;
/**
 * Used to see if a protocol is specified within the url
 * @type {RegExp}
 */
var hasUrlProtocol = /^wss:|^ws:|^\/\//;
/**
 * Used to see if the protocol contains any unsupported protocols
 * @type {RegExp}
 */
var unsupportedProtocol = /^http:|^https:/;
/**
 * Take the url passed when creating the client and ensure the correct
 * protocol is provided
 * @param  {String} url Url passed in by client
 * @return {String} Url with supported protocol
 */
var parseUrl = function (initialURl, defaultPath) {
    var url = initialURl;
    if (unsupportedProtocol.test(url)) {
        throw new Error('Only ws and wss are supported');
    }
    if (!hasUrlProtocol.test(url)) {
        url = "ws://".concat(url);
    }
    else if (url.indexOf('//') === 0) {
        url = "ws:".concat(url);
    }
    var protocol = url.split('//')[0];
    var host = url.split('//')[1];
    if (!host) {
        throw new Error('Invalid URL: ws://');
    }
    var path = null;
    if (host.indexOf('/') > -1) {
        path = host.split('/');
        host = path.shift() || '';
        path = '/' + path.join('');
    }
    else {
        if (host.indexOf('?') > -1) {
            path = host.split('?');
            host = path.shift() || '';
            path = defaultPath + '?' + path.join('');
        }
    }
    if (!path || path === '/')
        path = defaultPath;
    return "".concat(protocol, "//").concat(host).concat(path);
};
exports.parseUrl = parseUrl;
/**
* Returns a random string. The first block of characters
* is a timestamp, in order to allow databases to optimize for semi-
* sequentuel numberings
*/
var getUid = function () {
    var timestamp = (new Date()).getTime().toString(36);
    var randomString = (Math.random() * 10000000000000000).toString(36).replace('.', '');
    return "".concat(timestamp, "-").concat(randomString);
};
exports.getUid = getUid;
/**
 * Creates a map based on the types of the provided arguments
 */
var normalizeSetArguments = function (args, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var result;
    var isRootData = function (data) { return data !== undefined && typeof data === 'object'; };
    var isNestedData = function (data) { return typeof data !== 'function'; };
    var isPath = function (path) { return path !== undefined && typeof path === 'string'; };
    var isCallback = function (callback) { return typeof callback === 'function'; };
    if (args.length === startIndex + 1) {
        result = {
            path: undefined,
            data: isRootData(args[startIndex]) ? args[startIndex] : undefined,
            callback: undefined
        };
    }
    if (args.length === startIndex + 2) {
        result = { path: undefined, data: undefined, callback: undefined };
        if (!isCallback(args[startIndex]) && isNestedData(args[startIndex])) {
            result.path = isPath(args[startIndex]) ? args[startIndex] : undefined;
        }
        if (isPath(args[startIndex])) {
            result.data = isNestedData(args[startIndex + 1]) ? args[startIndex + 1] : undefined;
        }
        else {
            result.data = isRootData(args[startIndex]) ? args[startIndex] : undefined;
        }
        if (!isPath(args[startIndex])) {
            result.callback = isCallback(args[startIndex + 1]) ? args[startIndex + 1] : false;
        }
    }
    if (args.length === startIndex + 3) {
        result = {
            path: isPath(args[startIndex]) ? args[startIndex] : undefined,
            data: isNestedData(args[startIndex + 1]) ? args[startIndex + 1] : undefined,
            callback: isCallback(args[startIndex + 2]) ? args[startIndex + 2] : undefined
        };
    }
    if (result) {
        if (result.path !== undefined && result.path.length === 0 ||
            (result.path === undefined && !result.data)) {
            throw Error('Invalid set path argument');
        }
        if (result.data === undefined && result.path === undefined) {
            throw Error('Invalid set data argument');
        }
        if (result.callback !== undefined && result.callback === false ||
            result.callback === undefined && args.length === startIndex + 3) {
            throw Error('Invalid set callback argument');
        }
        return result;
    }
    throw Error('Invalid set arguments');
};
exports.normalizeSetArguments = normalizeSetArguments;
/**
 * Creates a map based on the types of the provided arguments
 */
var normalizeArguments = function (args) {
    // If arguments is already a map of normalized parameters
    // (e.g. when called by AnonymousRecord), just return it.
    if (args.length === 1 && typeof args[0] === 'object') {
        return args[0];
    }
    var result = Object.create(null);
    for (var i = 0; i < args.length; i++) {
        if (typeof args[i] === 'string') {
            result.path = args[i];
        }
        else if (typeof args[i] === 'function') {
            result.callback = args[i];
        }
        else if (typeof args[i] === 'boolean') {
            result.triggerNow = args[i];
        }
    }
    return result;
};
exports.normalizeArguments = normalizeArguments;
var PromiseDelay = function (time) {
    return new Promise(function (done) { return setTimeout(done, time); });
};
exports.PromiseDelay = PromiseDelay;


/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/deepstream ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/deepstream */"./src/deepstream.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=ds.js.map
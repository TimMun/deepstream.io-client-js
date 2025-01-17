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
var utils = require("../util/utils");
var emitter_1 = require("../util/emitter");
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

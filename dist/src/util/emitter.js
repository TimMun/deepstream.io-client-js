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

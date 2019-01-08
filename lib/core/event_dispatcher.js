"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An event emitter which calls registered callback functions named `listener` with an event.
 */
var EventDispatcher = /** @class */ (function () {
    function EventDispatcher() {
        this._listenerMap = new Map();
    }
    /**
     * Add `listener` to the dispatcher's event named `type`.
     * @param type
     * @param listener
     */
    EventDispatcher.prototype.addEventListener = function (type, listener) {
        if (!this._listenerMap.has(type)) {
            this._listenerMap.set(type, []);
        }
        this._listenerMap.get(type).push(listener);
    };
    /**
     * Remove the `listener` from the dispatcher.
     *
     * Returns `true` if `listener` is removed, otherwise returns `false`.
     * @param type
     * @param listener
     */
    EventDispatcher.prototype.removeEventListener = function (type, listener) {
        if (this._listenerMap.has(type)) {
            var cbList = this._listenerMap.get(type);
            var index = cbList.indexOf(listener);
            if (index >= 0) {
                cbList.splice(index, 1);
                return true;
            }
        }
        return false;
    };
    /**
     * Remove all listeners. If `type` is specified, remove all listeners of `type`.
     * @param type
     */
    EventDispatcher.prototype.removeAllEventListeners = function (type) {
        var e_1, _a;
        if (type && this._listenerMap.has(type)) {
            var cbList = this._listenerMap.get(type);
            cbList.length = 0;
            return;
        }
        try {
            for (var _b = __values(this._listenerMap.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var listenerList = _c.value;
                listenerList.length = 0;
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
    /**
     * Calls every listeners registered to `type` event.
     * @param type
     * @param event
     */
    EventDispatcher.prototype.dispatchEvent = function (type, event) {
        var e_2, _a;
        var cbList = this._listenerMap.get(type);
        if (cbList) {
            try {
                for (var cbList_1 = __values(cbList), cbList_1_1 = cbList_1.next(); !cbList_1_1.done; cbList_1_1 = cbList_1.next()) {
                    var callback = cbList_1_1.value;
                    callback(event);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (cbList_1_1 && !cbList_1_1.done && (_a = cbList_1.return)) _a.call(cbList_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    };
    return EventDispatcher;
}());
exports.EventDispatcher = EventDispatcher;

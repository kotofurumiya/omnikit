"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var event_dispatcher_1 = require("./event_dispatcher");
/**
 * A timer which calls callback function on every ticks.
 *
 *     const timer = new Timer(1000); // every 1000ms
 *     timer.addEventListener('tick', ()=> console.log('Hello!');
 *     timer.start();
 *
 * You can create an once timer.
 *
 *     const timer = new Timer(1000, { once: true });
 *     timer.addEventListener('tick', ()=> console.log('Hello!');
 *     timer.start();
 *
 * Note: You should call `addEventListener` before start the timer.
 * Otherwise, the timer may fire tick event without listeners.
 */
var Timer = /** @class */ (function (_super) {
    __extends(Timer, _super);
    function Timer(intervalMs, option) {
        if (option === void 0) { option = {}; }
        var _this = _super.call(this) || this;
        _this._once = 'once' in option ? option.once : false;
        if (intervalMs < 4) {
            console.warn("intervalMs cannot be less than 4ms. " + intervalMs + "ms is rounded to 4ms");
        }
        _this._intervalFunction = _this._once ? setTimeout : setInterval;
        _this._clearIntervalFunction = _this._once ? clearTimeout : clearInterval;
        _this._intervalMs = intervalMs;
        _this._timerId = null;
        return _this;
    }
    /**
     * Starts the timer.
     */
    Timer.prototype.start = function () {
        var _this = this;
        if (this._timerId) {
            return;
        }
        this._timerId = this._intervalFunction(function () {
            _this.dispatchEvent('tick');
            if (_this._once) {
                _this.stop();
            }
        }, this._intervalMs);
    };
    /**
     * Stop the timer.
     */
    Timer.prototype.stop = function () {
        this._clearIntervalFunction(this._timerId);
        this._timerId = null;
    };
    return Timer;
}(event_dispatcher_1.EventDispatcher));
exports.Timer = Timer;

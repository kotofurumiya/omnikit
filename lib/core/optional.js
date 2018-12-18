"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var condition_1 = require("./condition");
/**
 * An object that represents nullable(undefinable) value.
 *
 *     const opt1 = new Optional<string>(hello);
 *     const opt2 = new Optional();
 */
var Optional = /** @class */ (function () {
    function Optional(value) {
        this._value = value;
    }
    Object.defineProperty(Optional.prototype, "isPresent", {
        /**
         * Returns `true` if the object has a value, otherwise returns `false`.
         */
        get: function () {
            return !(condition_1.isNull(this._value) || condition_1.isUndefined(this._value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Optional.prototype, "isNotPresent", {
        /**
         * Returns `true` if the object has no value, otherwise returns `false`.
         */
        get: function () {
            return !this.isPresent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Executes the `func` with the value if the object has a value,
     * and returns new Optional object with the return value of the `func`.
     * If the object has no value, just returns new Optional object without applying the `func`.
     * @param func
     */
    Optional.prototype.map = function (func) {
        return this.isPresent ? new Optional(func(this._value)) : new Optional(this._value);
    };
    /**
     * Executes the `func` with the value if the object has a value,
     * and returns the return value of the `func`.
     * If the object has no value, just returns the value which is null or undefined.
     * @param func
     */
    Optional.prototype.flatMap = function (func) {
        return this.isPresent ? func(this._value) : this._value;
    };
    /**
     * Executes the `func` with the value if the object has a value,
     * otherwise do nothing.
     * @param func
     */
    Optional.prototype.ifPresent = function (func) {
        if (this.isPresent) {
            func(this._value);
        }
    };
    /**
     * Executes the `func` with the value if the object has no value,
     * otherwise do nothing.
     * @param func
     */
    Optional.prototype.ifNotPresent = function (func) {
        if (this.isNotPresent) {
            func();
        }
    };
    /**
     * Executes the `func` with the value if the object has a value,
     * otherwise executes elseFunc.
     * @param func
     * @param elseFunc
     */
    Optional.prototype.ifPresentOrElse = function (func, elseFunc) {
        if (this.isPresent) {
            func(this._value);
        }
        else {
            elseFunc();
        }
    };
    return Optional;
}());
exports.Optional = Optional;

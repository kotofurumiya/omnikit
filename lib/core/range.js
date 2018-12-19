"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RangeIterator = /** @class */ (function () {
    function RangeIterator(begin, end, step, option) {
        if (option === void 0) { option = { includesBegin: true, includesEnd: false }; }
        this._begin = begin;
        this._end = end;
        this._step = step;
        this._includesBegin = option.includesBegin;
        this._includesEnd = option.includesEnd;
        this._current = this._includesBegin ? begin : begin + step;
    }
    RangeIterator.prototype.next = function () {
        var distanceToEnd = Math.sign(this._step) * (this._end - this._current);
        var done = this._includesEnd ? distanceToEnd < 0 : distanceToEnd <= 0;
        var value = this._current;
        if (!done) {
            this._current += this._step;
        }
        return { done: done, value: value };
    };
    return RangeIterator;
}());
/**
 * A sequence of numbers.
 */
var NumberRange = /** @class */ (function () {
    function NumberRange(begin, end, step, option) {
        if (option === void 0) { option = { includesBegin: true, includesEnd: false }; }
        this._begin = begin;
        this._end = end;
        this._step = step;
        this._includesBegin = option.includesBegin;
        this._includesEnd = option.includesEnd;
    }
    NumberRange.prototype[Symbol.iterator] = function () {
        var self = this;
        return new RangeIterator(this._begin, this._end, this._step, {
            includesBegin: self._includesBegin,
            includesEnd: self._includesEnd
        });
    };
    /**
     * Returns the range as an array.
     *
     * Throws an error if the range is infinite.
     */
    NumberRange.prototype.toArray = function () {
        if (Number.isFinite(this._end)) {
            return Array.from(this);
        }
        else {
            throw new Error('Cannot convert infinite range to an array');
        }
    };
    return NumberRange;
}());
/**
 * Returns a [`begin`, `end`) [[NumberRange]] with `step`.
 *
 *     for(const value of range(0, 10)) {
 *       console.log(value); // 0, 1, 2, ..., 9
 *     }
 *
 * `end` can be not only finite number but also infinite, and `step` can be negative.
 * @param begin
 * @param end
 * @param step
 */
function range(begin, end, step) {
    if (step === void 0) { step = 1; }
    return new NumberRange(begin, end, step);
}
exports.range = range;
/**
 * Returns a [`begin`, `end`] [[NumberRange]] with `step`.
 *
 *     for(const value of inclusiveRange(0, 10)) {
 *       console.log(value); // 0, 1, 2, ..., 10
 *     }
 *
 * `end` can be not only finite number but also infinite, and `step` can be negative.
 * @param begin
 * @param end
 * @param step
 */
function inclusiveRange(begin, end, step) {
    if (step === void 0) { step = 1; }
    return new NumberRange(begin, end, step, { includesBegin: true, includesEnd: true });
}
exports.inclusiveRange = inclusiveRange;
/**
 * Returns a (`begin`, `end`) [[NumberRange]] with `step`.
 *
 *     for(const value of exclusiveRange(0, 10)) {
 *       console.log(value); // 1, 2, 3, ..., 9
 *     }
 *
 * `end` can be not only finite number but also infinite, and `step` can be negative.
 * @param begin
 * @param end
 * @param step
 */
function exclusiveRange(begin, end, step) {
    if (step === void 0) { step = 1; }
    return new NumberRange(begin, end, step, { includesBegin: false, includesEnd: false });
}
exports.exclusiveRange = exclusiveRange;
/**
 * Returns a (`begin`, `end`] [[NumberRange]] with `step`.
 *
 *     for(const value of openClosedRange(0, 10)) {
 *       console.log(value); // 1, 2, 3, ..., 10
 *     }
 *
 * `end` can be not only finite number but also infinite, and `step` can be negative.
 * @param begin
 * @param end
 * @param step
 */
function openClosedRange(begin, end, step) {
    if (step === void 0) { step = 1; }
    return new NumberRange(begin, end, step, { includesBegin: false, includesEnd: true });
}
exports.openClosedRange = openClosedRange;
/**
 * Same as [[range]].
 * @param begin
 * @param end
 * @param step
 */
function closedOpenRange(begin, end, step) {
    if (step === void 0) { step = 1; }
    return new NumberRange(begin, end, step, { includesBegin: true, includesEnd: false });
}
exports.closedOpenRange = closedOpenRange;

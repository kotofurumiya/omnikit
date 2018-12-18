"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns `true` if the value is null, otherwise returns `false`.
 * @param value
 */
function isNull(value) {
    return value === null;
}
exports.isNull = isNull;
/**
 * Returns `true` if the value is undefined, otherwise returns `false`.
 * @param value
 */
function isUndefined(value) {
    return typeof value === 'undefined';
}
exports.isUndefined = isUndefined;

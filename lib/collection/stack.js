"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * LIFO(Last In First Out) data structure.
 *
 *     const stack = new Stack();
 *     stack.push(123);
 *     console.log(stack.pop()); // 123
 */
var Stack = /** @class */ (function () {
    function Stack() {
        this._values = [];
    }
    /**
     * Adds `value` to the stack.
     * @param value
     */
    Stack.prototype.push = function (value) {
        this._values.push(value);
    };
    /**
     * Returns top value of the stack and remove it.
     * Throws an error if the stack is empty.
     */
    Stack.prototype.pop = function () {
        if (this._values.length > 0) {
            return this._values.pop();
        }
        else {
            throw new Error('You cannot pop value from empty stack.');
        }
    };
    /**
     * Returns top value of the stack.
     * Throws an error if the stack is empty.
     */
    Stack.prototype.peek = function () {
        if (this._values.length > 0) {
            return this._values[this._values.length - 1];
        }
        else {
            throw new Error('You cannot peek value from empty stack.');
        }
    };
    return Stack;
}());
exports.Stack = Stack;

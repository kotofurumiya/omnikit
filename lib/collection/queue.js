"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * FIFO(First In First Out) data structure.
 *
 *     const queue = new Queue();
 *     queue.enqueue(123);
 *     console.log(queue.dequeue()); // 123
 */
var Queue = /** @class */ (function () {
    function Queue() {
        // TODO: doubly linked list may be faster than array.
        this._values = [];
    }
    /**
     * Adds `value` to the queue.
     * @param value
     */
    Queue.prototype.enqueue = function (value) {
        this._values.push(value);
    };
    /**
     * Returns oldest value of the queue and remove it.
     * Throws an error if the queue is empty.
     */
    Queue.prototype.dequeue = function () {
        if (this._values.length > 0) {
            return this._values.shift();
        }
        else {
            throw new Error('You cannot dequeue value from empty queue.');
        }
    };
    return Queue;
}());
exports.Queue = Queue;

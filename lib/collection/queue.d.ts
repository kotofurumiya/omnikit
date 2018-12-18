/**
 * FIFO(First In First Out) data structure.
 *
 *     const queue = new Queue();
 *     queue.enqueue(123);
 *     console.log(queue.dequeue()); // 123
 */
export declare class Queue<T> {
    protected _values: T[];
    constructor();
    /**
     * Adds `value` to the queue.
     * @param value
     */
    enqueue(value: T): void;
    /**
     * Returns oldest value of the queue and remove it.
     * Throws an error if the queue is empty.
     */
    dequeue(): T;
}

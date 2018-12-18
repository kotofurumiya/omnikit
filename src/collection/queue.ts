/**
 * FIFO(First In First Out) data structure.
 *
 *     const queue = new Queue();
 *     queue.enqueue(123);
 *     console.log(queue.dequeue()); // 123
 */
export class Queue<T> {
  protected _values: T[];

  constructor() {
    // TODO: doubly linked list may be faster than array.
    this._values = [];
  }

  /**
   * Adds `value` to the queue.
   * @param value
   */
  enqueue(value: T): void {
    this._values.push(value);
  }

  /**
   * Returns oldest value of the queue and remove it.
   * Throws an error if the queue is empty.
   */
  dequeue(): T {
    if(this._values.length > 0) {
      return <T>this._values.shift();
    } else {
      throw new Error('You cannot dequeue value from empty queue.');
    }
  }
}
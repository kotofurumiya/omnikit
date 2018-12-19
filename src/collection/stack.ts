/**
 * LIFO(Last In First Out) data structure.
 *
 *     const stack = new Stack();
 *     stack.push(123);
 *     console.log(stack.pop()); // 123
 */
export class Stack<T> {
  protected _values: T[];

  constructor() {
    this._values = [];
  }

  /**
   * Adds `value` to the stack.
   * @param value
   */
  push(value: T): void {
    this._values.push(value);
  }

  /**
   * Returns top value of the stack and remove it.
   * Throws an error if the stack is empty.
   */
  pop(): T {
    if (this._values.length > 0) {
      return <T>this._values.pop();
    } else {
      throw new Error('You cannot pop value from empty stack.');
    }
  }

  /**
   * Returns top value of the stack.
   * Throws an error if the stack is empty.
   */
  peek(): T {
    if (this._values.length > 0) {
      return this._values[this._values.length - 1];
    } else {
      throw new Error('You cannot peek value from empty stack.');
    }
  }
}

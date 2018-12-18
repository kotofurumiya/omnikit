/**
 * LIFO(Last In First Out) data structure.
 *
 *     const stack = new Stack();
 *     stack.push(123);
 *     console.log(stack.pop()); // 123
 */
export declare class Stack<T> {
    protected _values: T[];
    constructor();
    /**
     * Adds `value` to the stack.
     * @param value
     */
    push(value: T): void;
    /**
     * Returns top value of the stack and remove it.
     * Throws an error if the stack is empty.
     */
    pop(): T;
    /**
     * Returns top value of the stack.
     * Throws an error if the stack is empty.
     */
    peek(): T;
}

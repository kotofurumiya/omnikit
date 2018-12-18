import { Stack } from '../../lib/';

describe('Stack', () => {
  test('push and pop', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(() => stack.pop()).toThrowError();
  });
});
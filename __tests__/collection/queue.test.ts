import { Queue } from '../../lib/';

describe('Queue', () => {
  test('enqueue and dequeue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(() => queue.dequeue()).toThrowError();
  });
});
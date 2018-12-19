import { range, inclusiveRange, exclusiveRange, closedOpenRange, openClosedRange } from '../../lib';

describe('ranges', () => {
  test('basic', () => {
    expect(range(-2, 3).toArray()).toEqual([-2, -1, 0, 1, 2]);
  });

  test('negative step', () => {
    expect(range(2, -1, -1).toArray()).toEqual([2, 1, 0]);
  });

  test('for-of', () => {
    const mockFn = jest.fn();
    for(const value of range(1, 5)) {
      mockFn(value);
    }

    expect(mockFn.mock.calls.length).toBe(4);
    expect(mockFn.mock.calls[0][0]).toBe(1);
    expect(mockFn.mock.calls[1][0]).toBe(2);
    expect(mockFn.mock.calls[2][0]).toBe(3);
    expect(mockFn.mock.calls[3][0]).toBe(4);
  });

  test('alternatives', () => {
    expect(inclusiveRange(-2, 2).toArray()).toEqual([-2, -1, 0, 1, 2]);
    expect(exclusiveRange(-2, 2).toArray()).toEqual([-1, 0, 1]);
    expect(openClosedRange(-2, 2).toArray()).toEqual([-1, 0, 1, 2]);
    expect(closedOpenRange(-2, 2).toArray()).toEqual([-2, -1, 0, 1]);
  });
});
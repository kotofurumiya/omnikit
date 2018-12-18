import { clamp } from '../../lib/';

describe('math functions', () => {
  test('clamp', () => {
    expect(clamp(5, -10, 20)).toBe(5);
    expect(clamp(-11, -10, 20)).toBe(-10);
    expect(clamp(21, -10, 20)).toBe(20);
  });
});
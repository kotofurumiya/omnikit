import { isNull, isUndefined } from '../../lib/';

describe('condition funcs', () => {
  test('isNull', () => {
    expect(isNull(true)).toBeFalsy();
    expect(isNull(100)).toBeFalsy();
    expect(isNull('hello')).toBeFalsy();
    expect(isNull({})).toBeFalsy();
    expect(isNull(undefined)).toBeFalsy();

    expect(isNull(null)).toBeTruthy();
  });

  test('isUndefined', () => {
    expect(isUndefined(true)).toBeFalsy();
    expect(isUndefined(100)).toBeFalsy();
    expect(isUndefined('hello')).toBeFalsy();
    expect(isUndefined({})).toBeFalsy();
    expect(isUndefined(null)).toBeFalsy();

    expect(isUndefined(undefined)).toBeTruthy();
  });
});
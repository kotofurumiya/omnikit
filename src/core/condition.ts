/**
 * Returns `true` if the value is null, otherwise returns `false`.
 * @param value
 */
export function isNull(value: any): value is null {
  return value === null;
}

/**
 * Returns `true` if the value is undefined, otherwise returns `false`.
 * @param value
 */
export function isUndefined(value: any): value is undefined {
  return typeof value === 'undefined';
}

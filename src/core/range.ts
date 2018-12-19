interface RangeOption {
  readonly includesBegin: boolean;
  readonly includesEnd: boolean;
}

class RangeIterator implements Iterator<number> {
  protected _begin: number;
  protected _end: number;
  protected _step: number;
  protected _includesBegin: boolean;
  protected _includesEnd: boolean;

  protected _current: number;

  constructor(
    begin: number,
    end: number,
    step: number,
    option: RangeOption = { includesBegin: true, includesEnd: false }
  ) {
    this._begin = begin;
    this._end = end;
    this._step = step;

    this._includesBegin = option.includesBegin;
    this._includesEnd = option.includesEnd;

    this._current = this._includesBegin ? begin : begin + step;
  }

  next(): IteratorResult<number> {
    const distanceToEnd = Math.sign(this._step) * (this._end - this._current);
    const done = this._includesEnd ? distanceToEnd < 0 : distanceToEnd <= 0;
    const value = this._current;

    if (!done) {
      this._current += this._step;
    }

    return { done, value };
  }
}

/**
 * A sequence of numbers.
 */
class NumberRange implements Iterable<number> {
  protected _begin: number;
  protected _end: number;
  protected _step: number;
  protected _includesBegin: boolean;
  protected _includesEnd: boolean;

  constructor(
    begin: number,
    end: number,
    step: number,
    option: RangeOption = { includesBegin: true, includesEnd: false }
  ) {
    this._begin = begin;
    this._end = end;
    this._step = step;

    this._includesBegin = option.includesBegin;
    this._includesEnd = option.includesEnd;
  }

  [Symbol.iterator](): Iterator<number> {
    const self = this;
    return new RangeIterator(this._begin, this._end, this._step, {
      includesBegin: self._includesBegin,
      includesEnd: self._includesEnd
    });
  }

  /**
   * Returns the range as an array.
   *
   * Throws an error if the range is infinite.
   */
  toArray(): number[] {
    if (Number.isFinite(this._end)) {
      return Array.from(this);
    } else {
      throw new Error('Cannot convert infinite range to an array');
    }
  }
}

/**
 * Returns a [`begin`, `end`) [[NumberRange]] with `step`.
 *
 *     for(const value of range(0, 10)) {
 *       console.log(value); // 0, 1, 2, ..., 9
 *     }
 *
 * `end` can be not only finite number but also infinite, and `step` can be negative.
 * @param begin
 * @param end
 * @param step
 */
export function range(begin: number, end: number, step: number = 1): NumberRange {
  return new NumberRange(begin, end, step);
}

/**
 * Returns a [`begin`, `end`] [[NumberRange]] with `step`.
 *
 *     for(const value of inclusiveRange(0, 10)) {
 *       console.log(value); // 0, 1, 2, ..., 10
 *     }
 *
 * `end` can be not only finite number but also infinite, and `step` can be negative.
 * @param begin
 * @param end
 * @param step
 */
export function inclusiveRange(begin: number, end: number, step: number = 1): NumberRange {
  return new NumberRange(begin, end, step, { includesBegin: true, includesEnd: true });
}

/**
 * Returns a (`begin`, `end`) [[NumberRange]] with `step`.
 *
 *     for(const value of exclusiveRange(0, 10)) {
 *       console.log(value); // 1, 2, 3, ..., 9
 *     }
 *
 * `end` can be not only finite number but also infinite, and `step` can be negative.
 * @param begin
 * @param end
 * @param step
 */
export function exclusiveRange(begin: number, end: number, step: number = 1): NumberRange {
  return new NumberRange(begin, end, step, { includesBegin: false, includesEnd: false });
}

/**
 * Returns a (`begin`, `end`] [[NumberRange]] with `step`.
 *
 *     for(const value of openClosedRange(0, 10)) {
 *       console.log(value); // 1, 2, 3, ..., 10
 *     }
 *
 * `end` can be not only finite number but also infinite, and `step` can be negative.
 * @param begin
 * @param end
 * @param step
 */
export function openClosedRange(begin: number, end: number, step: number = 1): NumberRange {
  return new NumberRange(begin, end, step, { includesBegin: false, includesEnd: true });
}

/**
 * Same as [[range]].
 * @param begin
 * @param end
 * @param step
 */
export function closedOpenRange(begin: number, end: number, step: number = 1): NumberRange {
  return new NumberRange(begin, end, step, { includesBegin: true, includesEnd: false });
}

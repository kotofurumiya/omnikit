interface RangeOption {
    readonly includesBegin: boolean;
    readonly includesEnd: boolean;
}
/**
 * A sequence of numbers.
 */
declare class NumberRange implements Iterable<number> {
    protected _begin: number;
    protected _end: number;
    protected _step: number;
    protected _includesBegin: boolean;
    protected _includesEnd: boolean;
    constructor(begin: number, end: number, step: number, option?: RangeOption);
    [Symbol.iterator](): Iterator<number>;
    /**
     * Returns the range as an array.
     *
     * Throws an error if the range is infinite.
     */
    toArray(): number[];
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
export declare function range(begin: number, end: number, step?: number): NumberRange;
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
export declare function inclusiveRange(begin: number, end: number, step?: number): NumberRange;
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
export declare function exclusiveRange(begin: number, end: number, step?: number): NumberRange;
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
export declare function openClosedRange(begin: number, end: number, step?: number): NumberRange;
/**
 * Same as [[range]].
 * @param begin
 * @param end
 * @param step
 */
export declare function closedOpenRange(begin: number, end: number, step?: number): NumberRange;
export {};

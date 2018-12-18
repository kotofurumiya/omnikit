/**
 * Clamps the value into from `lower` to `upper`.
 *
 *     const val1 = clamp(100000, 5, 20); // 20
 *     const val2 = clamp(-100, 5, 20); // 5
 *     const val3 = clamp(10, 5, 20); // 10
 *
 * @param value
 * @param lower
 * @param upper
 */
export declare function clamp(value: number, lower: number, upper: number): number;

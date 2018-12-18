/**
 * Random value generator with a seed.
 *
 *     const rand1 = new Random();
 *     const rand2 = new Random(12345); // with seed
 *
 *     console.log(rand1.next());
 *     console.log(rand1.nextInt(1, 10));
 */
export declare class Random {
    private _x;
    private _y;
    private _z;
    private _w;
    constructor(seed?: number);
    /**
     * Returns next random value.
     */
    next(): number;
    /**
     * Returns next random value with the bound from `min` to `max`, which includes `min` and `max`.
     * @param min
     * @param max
     */
    nextInt(min: number, max: number): number;
}

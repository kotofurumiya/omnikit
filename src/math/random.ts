/**
 * Random value generator with a seed.
 *
 *     const rand1 = new Random();
 *     const rand2 = new Random(12345); // with seed
 *
 *     console.log(rand1.next());
 *     console.log(rand1.nextInt(1, 10));
 */
export class Random {
  private _x: number;
  private _y: number;
  private _z: number;
  private _w: number;

  constructor(seed: number = new Date().getTime()) {
    this._x = 123456789;
    this._y = 362436069;
    this._z = 521288629;
    this._w = seed;
  }

  /**
   * Returns next random value.
   */
  next(): number {
    let t: number;

    t = this._x ^ (this._x << 11);
    this._x = this._y;
    this._y = this._z;
    this._z = this._w;
    return (this._w = this._w ^ (this._w >>> 19) ^ (t ^ (t >>> 8)));
  }

  /**
   * Returns next random value with the bound from `min` to `max`, which includes `min` and `max`.
   * @param min
   * @param max
   */
  nextInt(min: number, max: number): number {
    const r = Math.abs(this.next());
    return min + (r % (max + 1 - min));
  }
}

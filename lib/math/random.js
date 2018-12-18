"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Random value generator with a seed.
 *
 *     const rand1 = new Random();
 *     const rand2 = new Random(12345); // with seed
 *
 *     console.log(rand1.next());
 *     console.log(rand1.nextInt(1, 10));
 */
var Random = /** @class */ (function () {
    function Random(seed) {
        if (seed === void 0) { seed = new Date().getTime(); }
        this._x = 123456789;
        this._y = 362436069;
        this._z = 521288629;
        this._w = seed;
    }
    /**
     * Returns next random value.
     */
    Random.prototype.next = function () {
        var t;
        t = this._x ^ (this._x << 11);
        this._x = this._y;
        this._y = this._z;
        this._z = this._w;
        return (this._w = this._w ^ (this._w >>> 19) ^ (t ^ (t >>> 8)));
    };
    /**
     * Returns next random value with the bound from `min` to `max`, which includes `min` and `max`.
     * @param min
     * @param max
     */
    Random.prototype.nextInt = function (min, max) {
        var r = Math.abs(this.next());
        return min + (r % (max + 1 - min));
    };
    return Random;
}());
exports.Random = Random;

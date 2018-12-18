import { isNull, isUndefined } from './condition';

/**
 * An object that represents nullable(undefinable) value.
 *
 *     const opt1 = new Optional<string>(hello);
 *     const opt2 = new Optional();
 */
export class Optional<T> {
  protected _value?: T | null;

  constructor(value?: T | null) {
    this._value = value;
  }

  /**
   * Returns `true` if the object has a value, otherwise returns `false`.
   */
  get isPresent(): boolean {
    return !(isNull(this._value) || isUndefined(this._value));
  }

  /**
   * Returns `true` if the object has no value, otherwise returns `false`.
   */
  get isNotPresent(): boolean {
    return !this.isPresent;
  }

  /**
   * Executes the `func` with the value if the object has a value,
   * and returns new Optional object with the return value of the `func`.
   * If the object has no value, just returns new Optional object without applying the `func`.
   * @param func
   */
  map<U>(func: (value: T) => U): Optional<U> {
    return this.isPresent ? new Optional<U>(func(<T>this._value)) : new Optional<U>(<null | undefined>this._value);
  }

  /**
   * Executes the `func` with the value if the object has a value,
   * and returns the return value of the `func`.
   * If the object has no value, just returns the value which is null or undefined.
   * @param func
   */
  flatMap<U>(func: (value: T) => U): U | null | undefined {
    return this.isPresent ? func(<T>this._value) : <null | undefined>this._value;
  }

  /**
   * Executes the `func` with the value if the object has a value,
   * otherwise do nothing.
   * @param func
   */
  ifPresent(func: (value: T) => any): void {
    if (this.isPresent) {
      func(<T>this._value);
    }
  }

  /**
   * Executes the `func` with the value if the object has no value,
   * otherwise do nothing.
   * @param func
   */
  ifNotPresent(func: () => any): void {
    if (this.isNotPresent) {
      func();
    }
  }

  /**
   * Executes the `func` with the value if the object has a value,
   * otherwise executes elseFunc.
   * @param func
   * @param elseFunc
   */
  ifPresentOrElse(func: (value: T) => any, elseFunc: () => any): void {
    if (this.isPresent) {
      func(<T>this._value);
    } else {
      elseFunc();
    }
  }
}

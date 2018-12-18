/**
 * An object that represents nullable(undefinable) value.
 *
 *     const opt1 = new Optional<string>(hello);
 *     const opt2 = new Optional();
 */
export declare class Optional<T> {
    protected _value?: T | null;
    constructor(value?: T | null);
    /**
     * Returns `true` if the object has a value, otherwise returns `false`.
     */
    readonly isPresent: boolean;
    /**
     * Returns `true` if the object has no value, otherwise returns `false`.
     */
    readonly isNotPresent: boolean;
    /**
     * Executes the `func` with the value if the object has a value,
     * and returns new Optional object with the return value of the `func`.
     * If the object has no value, just returns new Optional object without applying the `func`.
     * @param func
     */
    map<U>(func: (value: T) => U): Optional<U>;
    /**
     * Executes the `func` with the value if the object has a value,
     * and returns the return value of the `func`.
     * If the object has no value, just returns the value which is null or undefined.
     * @param func
     */
    flatMap<U>(func: (value: T) => U): U | null | undefined;
    /**
     * Executes the `func` with the value if the object has a value,
     * otherwise do nothing.
     * @param func
     */
    ifPresent(func: (value: T) => any): void;
    /**
     * Executes the `func` with the value if the object has no value,
     * otherwise do nothing.
     * @param func
     */
    ifNotPresent(func: () => any): void;
    /**
     * Executes the `func` with the value if the object has a value,
     * otherwise executes elseFunc.
     * @param func
     * @param elseFunc
     */
    ifPresentOrElse(func: (value: T) => any, elseFunc: () => any): void;
}

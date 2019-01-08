/**
 * An event emitter which calls registered callback functions named `listener` with an event.
 */
export declare class EventDispatcher {
    protected _listenerMap: Map<string, Function[]>;
    constructor();
    /**
     * Add `listener` to the dispatcher's event named `type`.
     * @param type
     * @param listener
     */
    addEventListener(type: string, listener: Function): void;
    /**
     * Remove the `listener` from the dispatcher.
     *
     * Returns `true` if `listener` is removed, otherwise returns `false`.
     * @param type
     * @param listener
     */
    removeEventListener(type: string, listener: Function): boolean;
    /**
     * Remove all listeners. If `type` is specified, remove all listeners of `type`.
     * @param type
     */
    removeAllEventListeners(type?: string): void;
    /**
     * Calls every listeners registered to `type` event.
     * @param type
     * @param event
     */
    dispatchEvent(type: string, event?: any): void;
}

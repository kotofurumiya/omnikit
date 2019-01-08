/**
 * An event emitter which calls registered callback functions named `listener` with an event.
 */
export class EventDispatcher {
  protected _listenerMap: Map<string, Function[]>;

  constructor() {
    this._listenerMap = new Map();
  }

  /**
   * Add `listener` to the dispatcher's event named `type`.
   * @param type
   * @param listener
   */
  addEventListener(type: string, listener: Function): void {
    if (!this._listenerMap.has(type)) {
      this._listenerMap.set(type, []);
    }

    this._listenerMap.get(type)!.push(listener);
  }

  /**
   * Remove the `listener` from the dispatcher.
   *
   * Returns `true` if `listener` is removed, otherwise returns `false`.
   * @param type
   * @param listener
   */
  removeEventListener(type: string, listener: Function): boolean {
    if (this._listenerMap.has(type)) {
      const cbList = this._listenerMap.get(type) as Function[];
      const index = cbList.indexOf(listener);
      if (index >= 0) {
        cbList.splice(index, 1);
        return true;
      }
    }

    return false;
  }

  /**
   * Remove all listeners. If `type` is specified, remove all listeners of `type`.
   * @param type
   */
  removeAllEventListeners(type?: string): void {
    if (type && this._listenerMap.has(type)) {
      const cbList = this._listenerMap.get(type) as Function[];
      cbList.length = 0;
      return;
    }

    for (const listenerList of this._listenerMap.values()) {
      listenerList.length = 0;
    }
  }

  /**
   * Calls every listeners registered to `type` event.
   * @param type
   * @param event
   */
  dispatchEvent(type: string, event?: any): void {
    const cbList = this._listenerMap.get(type);

    if (cbList) {
      for (const callback of cbList) {
        callback(event);
      }
    }
  }
}

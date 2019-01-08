import { EventDispatcher } from './event_dispatcher';
import Timeout = NodeJS.Timeout;

interface TimerOption {
  readonly once?: boolean;
}

/**
 * A timer which calls callback function on every ticks.
 *
 *     const timer = new Timer(1000); // every 1000ms
 *     timer.addEventListener('tick', ()=> console.log('Hello!');
 *     timer.start();
 *
 * You can create an once timer.
 *
 *     const timer = new Timer(1000, { once: true });
 *     timer.addEventListener('tick', ()=> console.log('Hello!');
 *     timer.start();
 *
 * Note: You should call `addEventListener` before start the timer.
 * Otherwise, the timer may fire tick event without listeners.
 */
export class Timer extends EventDispatcher {
  protected _intervalFunction: Function;
  protected _clearIntervalFunction: Function;
  protected _intervalMs: number;
  protected _timerId: Timeout | null;
  protected _once: boolean;

  constructor(intervalMs: number, option: TimerOption = {}) {
    super();

    this._once = 'once' in option ? option.once! : false;

    if (intervalMs < 4) {
      console.warn(`intervalMs cannot be less than 4ms. ${intervalMs}ms is rounded to 4ms`);
    }

    this._intervalFunction = this._once ? setTimeout : setInterval;
    this._clearIntervalFunction = this._once ? clearTimeout : clearInterval;
    this._intervalMs = intervalMs;
    this._timerId = null;
  }

  /**
   * Starts the timer.
   */
  start(): void {
    if (this._timerId) {
      return;
    }

    this._timerId = this._intervalFunction(() => {
      this.dispatchEvent('tick');
      if (this._once) {
        this.stop();
      }
    }, this._intervalMs);
  }

  /**
   * Stop the timer.
   */
  stop(): void {
    this._clearIntervalFunction(this._timerId);
    this._timerId = null;
  }
}

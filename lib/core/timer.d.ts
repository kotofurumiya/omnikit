/// <reference types="node" />
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
export declare class Timer extends EventDispatcher {
    protected _intervalFunction: Function;
    protected _clearIntervalFunction: Function;
    protected _intervalMs: number;
    protected _timerId: Timeout | null;
    protected _once: boolean;
    constructor(intervalMs: number, option?: TimerOption);
    /**
     * Starts the timer.
     */
    start(): void;
    /**
     * Stop the timer.
     */
    stop(): void;
}
export {};

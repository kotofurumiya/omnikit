import { Timer } from '../../lib/';

jest.useFakeTimers();

describe('Timer', () => {
  test('interval', () => {
    const timer = new Timer(1000);
    const fn = jest.fn();

    timer.addEventListener('tick', fn);
    timer.start();

    jest.advanceTimersByTime(3500);

    expect(fn).toHaveBeenCalledTimes(3);
  });

  test('once', () => {
    const timer = new Timer(1000, { once: true });
    const fn = jest.fn();

    timer.addEventListener('tick', fn);
    timer.start();

    jest.advanceTimersByTime(5000);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('stop', () => {
    const timer = new Timer(1000);
    const fn = jest.fn();

    timer.addEventListener('tick', fn);
    timer.start();

    jest.advanceTimersByTime(3500);

    timer.stop();
    jest.advanceTimersByTime(10000);

    expect(fn).toHaveBeenCalledTimes(3);
  });
});
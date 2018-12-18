import { Optional } from '../../lib/';

describe('Optional', () => {
  test('non-null optional', () => {
    expect(new Optional(100).isPresent).toBeTruthy();
    expect(new Optional(100).isNotPresent).toBeFalsy();
    expect(new Optional<string>('hello').isPresent).toBeTruthy();
    expect(new Optional<string>('hello').isNotPresent).toBeFalsy();
  });

  test('null or undefined optional', () => {
    expect(new Optional().isPresent).toBeFalsy();
    expect(new Optional().isNotPresent).toBeTruthy();
    expect(new Optional(null).isPresent).toBeFalsy();
    expect(new Optional(null).isNotPresent).toBeTruthy();
    expect(new Optional(undefined).isPresent).toBeFalsy();
    expect(new Optional(undefined).isNotPresent).toBeTruthy();
  });

  test('map', () => {
    const presentOpt = new Optional(100);
    const nonPresentOpt = new Optional();

    expect(presentOpt.map((val) => val.toString())).toBeInstanceOf(Optional);
    expect(nonPresentOpt.map((val) => val.toString())).toBeInstanceOf(Optional);
  });

  test('flatMap', () => {
    const presentOpt = new Optional(100);
    const nonPresentOpt = new Optional();

    expect(presentOpt.flatMap((val) => val)).toBe(100);
    expect(nonPresentOpt.flatMap((val) => val)).toBeUndefined();
  });

  test('ifPresent', () => {
    const calledByPresent = jest.fn();
    const calledByNonPresent = jest.fn();

    const presentOpt = new Optional(100);
    presentOpt.ifPresent(calledByPresent);
    expect(calledByPresent.mock.calls.length).toBe(1);
    expect(calledByPresent.mock.calls[0][0]).toBe(100);

    const nonPresentOpt = new Optional();
    nonPresentOpt.ifPresent(calledByNonPresent);
    expect(calledByNonPresent.mock.calls.length).toBe(0);
  });

  test('ifNotPresent', () => {
    const calledByPresent = jest.fn();
    const calledByNonPresent = jest.fn();

    const presentOpt = new Optional(100);
    presentOpt.ifNotPresent(calledByPresent);
    expect(calledByPresent.mock.calls.length).toBe(0);

    const nonPresentOpt = new Optional();
    nonPresentOpt.ifNotPresent(calledByNonPresent);
    expect(calledByNonPresent.mock.calls.length).toBe(1);
  });

  test('ifPresentOrElse', () => {
    const presentOpt = new Optional(100);
    const calledByPresent = jest.fn();
    const notCalledByPresent = jest.fn();

    presentOpt.ifPresentOrElse(calledByPresent, notCalledByPresent);
    expect(calledByPresent.mock.calls.length).toBe(1);
    expect(calledByPresent.mock.calls[0][0]).toBe(100);
    expect(notCalledByPresent.mock.calls.length).toBe(0);

    const nonPresentOpt = new Optional();
    const calledByNonPresent = jest.fn();
    const notCalledByNonPresent = jest.fn();

    nonPresentOpt.ifPresentOrElse(notCalledByNonPresent, calledByNonPresent);
    expect(calledByNonPresent.mock.calls.length).toBe(1);
    expect(notCalledByNonPresent.mock.calls.length).toBe(0);
  });
});
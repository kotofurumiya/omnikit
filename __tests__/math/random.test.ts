import { Random } from '../../lib/';

describe('Random', () => {
  test('seed', () => {
    const rand1 = new Random(12345);
    const rand2 = new Random(12345);

    const randResult1 = [];
    const randResult2 = [];

    for(let i = 0; i < 100; i++) {
      randResult1.push(rand1.next());
      randResult2.push(rand2.next());
    }

    expect(randResult1).toEqual(randResult2);
  });
});
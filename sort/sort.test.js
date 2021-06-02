const isSorted = require('./sort');

describe('sort test', () => {
  test('isSorted([1, 2, 3, 4, 5]) => true', () => {
    expect(isSorted([1, 2, 3, 4, 5])).toBe(true);
  });

  test('isSorted([2, 3, 4, 1, 5]) => false', () => {
    expect(isSorted([2, 3, 4, 1, 5])).toBe(false);
  });

  test('isSorted([2, 3, 4, 1, 5]) => false', () => {
    expect(isSorted([2])).toBe(true);
  });

  test('isSorted([2, 3, 4, 1, 5]) => false', () => {
    expect(isSorted([])).toBe(true);
  });
});

const insertionSort = require('./insertion_sort');

describe('insertion sort test', () => {
  test('insertionSort([2, 4, 5, 1, 3]) => [1, 2, 3, 4, 5]', () => {
    expect(insertionSort([2, 4, 5, 1, 3])).toEqual([1, 2, 3, 4, 5]);
  });

  test('insertionSort([5, 2, 1, 3, 4, 6]) => [1, 2, 3, 4, 5, 6]', () => {
    expect(insertionSort([5, 2, 1, 3, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('insertionSort([3, 1, 0, -1, 4, 2]) => [-1, 0, 1, 2, 3, 4]', () => {
    expect(insertionSort([3, 1, 0, -1, 4, 2])).toEqual([-1, 0, 1, 2, 3, 4]);
  });
});

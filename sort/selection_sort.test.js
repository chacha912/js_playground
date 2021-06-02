const selectionSort = require('./selection_sort');

describe('selection sort test', () => {
  test('selectionSort([2, 4, 5, 1, 3]) => [1, 2, 3, 4, 5]', () => {
    expect(selectionSort([2, 4, 5, 1, 3])).toEqual([1, 2, 3, 4, 5]);
  });

  test('selectionSort([5, 2, 1, 3, 4, 6]) => [1, 2, 3, 4, 5, 6]', () => {
    expect(selectionSort([5, 2, 1, 3, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('selectionSort([3, 1, 0, -1, 4, 2]) => [-1, 0, 1, 2, 3, 4]', () => {
    expect(selectionSort([3, 1, 0, -1, 4, 2])).toEqual([-1, 0, 1, 2, 3, 4]);
  });
});

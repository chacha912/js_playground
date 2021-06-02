const bubbleSort = require('./bubble_sort');

describe('bubble sort test', () => {
  test('bubbleSort([2, 4, 5, 1, 3]) => [1, 2, 3, 4, 5]', () => {
    expect(bubbleSort([2, 4, 5, 1, 3])).toEqual([1, 2, 3, 4, 5]);
  });

  test('bubbleSort([5, 2, 1, 3, 4, 6]) => [1, 2, 3, 4, 5, 6]', () => {
    expect(bubbleSort([5, 2, 1, 3, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('bubbleSort([3, 1, 0, -1, 4, 2]) => [-1, 0, 1, 2, 3, 4]', () => {
    expect(bubbleSort([3, 1, 0, -1, 4, 2])).toEqual([-1, 0, 1, 2, 3, 4]);
  });
});

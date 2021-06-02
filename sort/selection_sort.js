// 선택 정렬을 통해 주어진 배열(array)을 정렬하는 함수를 구현하라.
// 단, 어떠한 빌트인 함수도 사용하지 않고 for 문을 사용하여 구현하여야 한다.

function selectionSort(array) {
  const swap = (array, index1, index2) => {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };

  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) swap(array, minIndex, i);
  }
  return array;
}

module.exports = selectionSort;

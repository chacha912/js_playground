// 삽입 정렬을 통해 주어진 배열(array)을 정렬하는 함수를 구현하라.
// 단, 어떠한 빌트인 함수도 사용하지 않고 for 문을 사용하여 구현하여야 한다.

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    let insertIndex = i - 1;

    for (let j = i - 1; j >= 0; j--) {
      if (key > array[j]) break;
      array[j + 1] = array[j];
      insertIndex -= 1;
    }

    array[insertIndex + 1] = key;
  }
  return array;
}

module.exports = insertionSort;

// 2.1. 정렬 확인
// 주어진 배열(array)이 정렬되어 있다면 true,
// 그렇지 않다면 false를 반환하는 함수를 구현하라.
// 단, 어떠한 빌트인 함수도 사용하지 않고 for 문을 사용하여 구현하여야 한다.

function isSorted(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) return false;
  }
  return true;
}

module.exports = isSorted;

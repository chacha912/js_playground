# 자바스크립트로 정렬 구현하기

## 버블정렬

✔ swap 함수를 따로 만들어놓고 사용하기  
✔ 일반함수로만 사용하는 함수를 만들 때는 `화살표 함수` 사용하기
✔ 함수는 `순수함수`로 만들기

```javascript
function bubbleSort(array) {
  const swap = (array, index1, index2) => {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };

  for (let i = 0; i < array.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return array;
}
```

## 선택정렬

```javascript
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
```

## 삽입정렬

✔ 처음에는 파이썬에서 풀었던 것처럼 for문 안에 while문으로 반복하여 구현

```javascript
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    const key = array[i];
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = key;
  }
  return array;
}
```

✔ for문 안에 for문으로 통일성 주고, 위에서 사용했던 swap 함수 이용해보기 (매번 swap이 일어나기 때문에 성능은 아래방법이 더 좋다.)

```javascript
function insertionSort(array) {
  const swap = (array, index1, index2) => {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };

  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] >= array[j - 1]) break;
      swap(array, j, j - 1);
    }
  }
  return array;
}
```

✔ for문 안에 for문, swap대신 키 지정하기(기존 파이썬 코드처럼)
✔ for 조건문에 `let i = 1` 이렇게 선언해주는 게 익숙해서, 마지막에 인덱스를 사용하기 위해 insertIndex 변수를 따로 만들었었는데 여기서는 코드가 길지 않아 `let j;` 를 for문 위에 선언하고 사용해도 좋을 것 같다.  

```javascript

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (key > array[j]) break;
      array[j + 1] = array[j];
    }
    array[j + 1] = key;
  }
  return array;
}
```

## 느낀점

자바스크립트 이론을 어느 정도 배우고 이제 슬슬 직접 코드를 짜면서 손에 익히는 시간이 왔다. 파이썬을 배우고 알고리즘 문제를 풀 때는 시간복잡도, 공간복잡도를 생각하면서 어떻게 하면 더 간결하고 성능이 좋은 코드를 짤 수 있을까를 고민했더라면, 자바스크립트로 할 때는 가독성과 변수명, 변수 개수 등등 조금 더 클린한 코드를 작성하기 위해서 고민을 하게 되는 것 같다.   
내가 쓰는 코드 한 줄 한 줄마다 더 좋은 방법은 없는지 신중하게 되는게 마치 `git add *`, `git commit -m ~~` 을 남발하다가 git을 배우고 나서 필요한 파일만 add하고 `git commit`으로 커밋메세지를 신중하게 작성하게 됐을 때가 생각난다.

예전에 프로젝트를 할 때, 나중에 리팩토링해야지 하고 우선 동작하게끔 코드를 작성하고 결국 리팩토링을 못해서 아쉬웠던 적이 있다. ~~(처음 만든 프로젝트에 시간도 촉박했지만.. 나중에 꼭 리팩토링 해봐야지)~~ 예전에는 아무생각 없이 마구 변수를 선언해서 썼는데, 지금은 이게 꼭 필요한 변수인지 고민하고 사용한다. 처음 코드를 쓸 때부터 괜찮은(좋은) 코드인가를 생각하면서 작성하려고 노력하는게 중요한 것 같다. 나중에 리팩토링할 수 있지만 처음부터 잘 해 놓으면 리팩토링 과정도 주니까! 누가 봐도 이해하기 쉬운, 가독성 좋은 코드를 쓰는 개발자가 되고 싶다. 
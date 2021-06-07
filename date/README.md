# Date 메서드 연습

### 1. Date 객체를 ‘yyyy-mm-dd’ 형식의 문자열로 변환하기

처음에는 year, month, date를 각각 변수로 지정하고 처리를 했다. 
코드가 조금 길어지더라도 가독성이 좋을 것이라 생각했다.  
혹은 다른 곳에서도 변수를 사용하지 않을까 했지만 여기서는 간단한 함수이므로  
따로 변수를 지정 안하는 것이 더 좋았을 것 같다.  

```javascript
function formattedDate(newDate) {
  const year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let date = newDate.getDate();

  month = month < 10 ? '0' + month : month;
  date = date < 10 ? '0' + date : date;

  return `${year}-${month}-${date}`;
}
```

💡 코드 개선   
- 앞자리에 '0'을 추가하는 기능을 함수로 만들기  
- 위의 함수를 어디서 선언할 것인가? → 함수 안에 바로 선언하면 호출할 때마다 만들어지므로, `클로져`✨ 와 `즉시실행함수`를 사용하여 한번만 만들어지도록 하기

```javascript
const formatDate = (() => {
    const format = n => (n < 10 ? '0' + n : n + '');
    return date => `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(date.getDate())}`;
})();

console.log(formatDate(new Date('2021/07/24'))); // => "2021-07-24"
```

⛔ `toISOString` 메서드 사용시 주의할 점

`toISOString` 메서드는 ISO 포맷의 문자열을 반환하는데  
이때 ISO 포맷은 타임존으로 `UTC 타임존`의 `zero offset`을 사용한다.  
우리나라 시간은 UTC 타임존에 `+09:00` 기준으로 하기 때문에  
예상했던 결과가 나오지 않을 수 있다. 

```javascript
const today = new Date('2021/06/06/03:00');

today.toString();    // -> "Sun Jun 06 2021 03:00:00 GMT+0900 (대한민국 표준시)"
today.toISOString(); // -> "2021-06-05T18:00:00.000Z"
today.toISOString().slice(0, 10); // -> "2021-06-05"
```




### 2. 특정 달의 말일 구하기

입력한 달의 말일 날짜를 직접 계산하는 코드로 작성했었다. 
2월달에는 윤년계산 알고리즘을 이용했다.

```javascript
function getLastDateOfMonth(year, month) {
  let lastDate;

  switch (month) {
    case 0: case 2: case 4: case 6: case 7: case 9: case 11:
      lastDate = 31;
      break;
    case 3: case 4: case 8: case 10:
      lastDate = 30;
      break;
    case 1:
      // 윤년 계산 알고리즘
      // 1. 연도가 4로 나누어떨어지는 해(2000, 2004, 2008, 2012, 2016, 2020...)는 윤년이다.
      // 2. 연도가 4로 나누어떨어지더라도 연도가 100으로 나누어떨어지는 해(2000, 2100, 2200...)는 평년이다.
      // 3. 연도가 400으로 나누어떨어지는 해(2000, 2400, 2800...)는 윤년이다.
      lastDate = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
  }

  return lastDate;
}
```

💡 코드 개선   
- Date 생성자 함수의 3번째 매개변수(날짜)에 0을 전달하면 전월 말일을 가리키는 Date 객체를 반환한다.

```javascript
const getLastDateOfMonth = (year, month) => new Date(year, month + 1, 0).getDate();

console.log(getLastDateOfMonth(2021, 0)); // => 31
```

### 3. 1일의 요일을 나타내는 정수(0 ~ 6) 구하기

```javascript
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

console.log(getFirstDayOfMonth(2021, 0)); // => 5
```

### 4. 말일의 요일을 나타내는 정수(0 ~ 6) 구하기

```javascript
const getLastDayOfMonth = (year, month) => new Date(year, month + 1, 0).getDay();

console.log(getLastDayOfMonth(2021, 0)); // => 0
```

### 5. 두 날짜 사이의 일수 구하기

- Date 생성자 함수로 생성한 Date 객체는 내부적으로 날짜와 시간을 나타내는 정수값을 갖는다. 이 값은 1970년 1월 1일 00:00:00(UTC)을 기점으로 Date 객체가 나타내는 날짜와 시간까지의 밀리초를 나타낸다.    
- `getTime()`을 이용하여 밀리초를 변환할 필요없이 바로 차이값을 계산할 수 있다.   
- 밀리초를 일로 변환하기 위해 `86400000(24h*60m*60s*1000ms)`로 나눈다.  

```javascript
const diffDays = (startDate, endDate) => Math.abs(endDate - startDate) / (24 * 60 * 60 * 1000);

console.log(diffDays(new Date('2021/01/01'), new Date('2021/12/31'))); // => 364
```

### 6. 2개의 Date 객체가 같은 년도/월/날짜를 가리키는지 확인하기

```javascript
const today = new Date('2020/7/24/12:30');
today.toString();     // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toDateString(); // -> Fri Jul 24 2020
today.toTimeString(); // -> 12:30:00 GMT+0900 (대한민국 표준시)
```

같은 년도,월,날짜를 가리키는지만 확인하면 되므로 시간은 달라도 된다.  
'년/월/일' 까지만 문자열로 변환하는 `toDateString`함수로 비교했다.   

```javascript
function isEqualDate(date1, date2) {
  return date1.toDateString() === date2.toDateString();
}
```

💡 코드 개선   
`toDateString`이 어떤 문자열이 반환하는지 명시적으로 확인이 어려우므로  
아래와 같이 코드 작성 시 확실하게 년, 월, 일을 비교함을 알 수 있다. 

```javascript
const isEqualDate = (date1, date2) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

console.log(isEqualDate(new Date('2021/07/24'), new Date('2021/07/24'))); // true
```

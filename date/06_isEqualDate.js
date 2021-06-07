// 2개의 Date 객체가 같은 년도/월/날짜를 가리키는지 확인하기

const isEqualDate = (date1, date2) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

console.log(isEqualDate(new Date('2021/07/24'), new Date('2021/07/24'))); // true
console.log(isEqualDate(new Date('2021/07/24'), new Date('2022/07/2'))); // false
console.log(isEqualDate(new Date('2021/07/24/00:00:00'), new Date('2021/07/24/10:00:00'))); // true

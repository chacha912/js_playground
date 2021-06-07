// Date 객체를 ‘yyyy-mm-dd’ 형식의 문자열로 변환하기

const formatDate = (() => {
  const format = n => (n < 10 ? '0' + n : n + '');
  return date => `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(date.getDate())}`;
})();

console.log(formatDate(new Date('2021/07/24'))); // => "2021-07-24"

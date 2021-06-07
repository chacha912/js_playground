// 2. 특정 프로퍼티 값 추출

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const getValues = key => todos.map(todo => todo[key]);

console.log(getValues('id'));
console.log(getValues('content'));
console.log(getValues('completed'));

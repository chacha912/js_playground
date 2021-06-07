// 1. html 생성

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function render() {
  return todos.reduce(
    (html, { id, content, completed }) =>
      html +
      `<li id="${id}">
          <label><input type="checkbox"${completed ? ' checked' : ''}>${content}</label>
      </li>`,
    ''
  );
}

console.log(render());

const add = require('./add');

// jest 문법
describe('add test', () => {
  test('add(1, 2) => 3', () => {
    expect(add(1, 2)).toBe(5);
  });
});

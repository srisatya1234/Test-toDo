/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("TodoList Test Suite", () => {
  beforeAll(() => {
    const today = new Date();
    const oneDay = 60 * 60 * 24 * 1000;
    [
      {
        title: "poster for ess lab",
        completed: false,
        dueDate: new Date(today.getTime() - 2 * oneDay).toLocaleDateString(
          "en-CA"
        ),
      },
      {
        title: "Hackathon skills learn",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "play volleyball",
        completed: false,
        dueDate: new Date(today.getTime() + 2 * oneDay).toLocaleDateString(
          "en-CA"
        ),
      },
    ].forEach(add);
  });

  test("Need to add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("Need to mark  todo as done", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Need to  retrieve overdue tasks", () => {
    expect(overdue().length).toEqual(1);
  });

  test("Need to  retrieve due today tasks", () => {
    expect(dueToday().length).toEqual(2);
  });

  test("Need to  retrieve due later tasks", () => {
    expect(dueLater().length).toEqual(1);
  });
});

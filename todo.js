/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const result = all.filter(
      (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
    );
    return result;
  };

  const dueToday = () => {
    const result = all.filter(
      (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
    );
    return result;
  };

  const dueLater = () => {
    const result = all.filter(
      (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
    );
    return result;
  };

  const toDisplayableList = (list) => {
    return list
      .map(
        (todo) =>
          `${todo.completed ? "[x]" : "[ ]"} ${todo.title} ${
            todo.dueDate == today ? "" : todo.dueDate
          }`
      )
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;

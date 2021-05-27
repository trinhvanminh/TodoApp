import React from "react";

const Todo = ({ setTodos, todo, todos }) => {
  //Events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const statusHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            status: !item.status
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <div className="todo-item">
        <input
          onChange={statusHandler}
          checked={todo.status}
          type="checkbox"
          id="checkbox"
          className="check-box"
        />
        <li className="todo-item">{todo.text}</li>
      </div>
      <button onClick={deleteHandler} className="del-btn">
        delete
      </button>
    </div>
  );
};
export default Todo;

import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, status: false, id: Math.random() * 1000 }
    ]);
    setInputText("");
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        required
        placeholder="Enter todo name here"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        Add
      </button>
    </form>
  );
};
export default Form;

import React, { useState, useEffect } from "react";
//import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import View from "./components/View";

function App() {
  //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [view, setView] = useState("all");
  const [filteredTodos, setFilterTodos] = useState([]);
  //use effect
  useEffect(() => {
    filterHandler();
  }, [todos, view]);

  const filterHandler = () => {
    switch (view) {
      case "done":
        setFilterTodos(todos.filter((todo) => todo.status === true));
        break;
      case "active":
        setFilterTodos(todos.filter((todo) => todo.status === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
      <View setView={setView} todos={todos} />
    </div>
  );
}

export default App;

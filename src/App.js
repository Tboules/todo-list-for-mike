import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  function updateTodoList(value) {
    setTodoList((oldTodoList) => [...oldTodoList, value]);
  }

  return (
    <div>
      <TodoForm updateListFunction={updateTodoList} />
      <TodoList itemsInTodoList={todoList} />
    </div>
  );
}

export default App;

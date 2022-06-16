import React from "react";

const TodoList = ({ itemsInTodoList }) => {
  return (
    <div>
      <ul>
        {itemsInTodoList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

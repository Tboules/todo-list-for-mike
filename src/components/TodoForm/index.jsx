import React, { useState } from "react";

function TodoForm({ updateListFunction }) {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    updateListFunction(inputValue);
    console.log(inputValue);

    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">create todo</button>
      </form>
    </div>
  );
}

export default TodoForm;

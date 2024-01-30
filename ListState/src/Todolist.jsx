import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]); //non ho chiaro il perchè
  const [newTodo, setNewTodo] = useState("");

  function handleInput(e) {
    let value = e.target.value;
    setNewTodo(value);
  }
  function handleBtn() {
    setTodos((e) => [...e, newTodo]);
    setNewTodo('');
  }
  console.log(todos);
  console.log(newTodo);
  return (
    <div>
        <input name="todos" onChange={handleInput} value={newTodo} type="text" />
         <button onClick={handleBtn}>ADD</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      
    </div>
  );
}

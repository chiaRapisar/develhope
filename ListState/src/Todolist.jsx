import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]); 
  const [newTodo, setNewTodo] = useState("");

  function handleInput(e) {
    let value = e.target.value;
    setNewTodo(value);
  }
  function handleBtn() {
    setTodos((e) => [...e, newTodo]);
    setNewTodo('');
  }
  function handleReset() {
    setTodos([])
  }
  
  function removeInput(i) {
    setTodos((arr)=> arr.filter((tdo, index)=> index !=i))
    
  }
  
  return (
    <div>
        <input name="todos" onChange={handleInput} value={newTodo} type="text" />
         <button onClick={handleBtn}>ADD</button>
         <button onClick={handleReset}>RESET</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo} <button onClick={() => removeInput(index)}>RIMUOVI</button></li>
          
        ))}
      </ul>
      
    </div>
  );
} 
//Non mi è chiaro



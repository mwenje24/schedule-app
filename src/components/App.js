import React, {useState} from 'react';
import '../App.css';
import NewTodo from './NewTodo';
import todo from "./Todo";

function App() {
  const [todoList, setTodoList] = useState(todo)

  return (
    <div>
      <NewTodo  todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}
export default App;

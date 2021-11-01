import React, { useState } from 'react';
import { Todo } from './todo-model';

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [{ id: "t1", text: "Finish the course" }];
  // const textInputRef = useRef<HTMLInputElement>(null);

  // const todoSubmitHandler = (evt: React.FormEvent) => {
  //   evt.preventDefault();
  //   const enteredText = textInputRef.current!.value;
  //   console.log(enteredText);
  //   todos.push({id:"t2", text: enteredText});
  // };

  const todoAddHandler = (text: string) => {
    const todo = {id:Math.random().toString(), text: text};
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} />
    </div>
  );
}

export default App;

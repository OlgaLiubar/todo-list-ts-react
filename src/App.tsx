import React, { useState } from 'react';
import { Todo } from './todo-model';

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    // const todo = {id:Math.random().toString(), text: text};
    // setTodos([todo, ...todos]);
    setTodos(prevTodos => [
      ...prevTodos,
      {id:Math.random().toString(), text: text}
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter((item) => item.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} onDelete={todoDeleteHandler}/>
    </div>
  );
}

export default App;

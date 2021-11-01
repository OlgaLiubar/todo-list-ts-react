import React, { useRef } from "react";

interface newTodoProps {
    onAddTodo: (todoText:string) => void;
  };

const NewTodo: React.FC<newTodoProps> = ({onAddTodo}) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;

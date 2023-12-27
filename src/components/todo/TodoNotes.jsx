import { memo } from "react";
import TodoNote from "./TodoNote";

function TodoNotes({ todos, todosDispatch }) {
  return (
    <div className="grid grid-cols-4 gap-5 w-full items-center p-5">
      {todos.map((item, i) => (
        <div key={i}>
          <TodoNote {...item} todosDispatch={todosDispatch} />
        </div>
      ))}
    </div>
  );
}

export default memo(TodoNotes);

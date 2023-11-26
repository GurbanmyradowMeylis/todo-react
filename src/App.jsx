import { useState } from "react";
import AddTodoNote from "./components/add_todo_note/index";
import TodoNotes from "./components/todo/TodoNotes";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center gap-10">
        <AddTodoNote setTodos={setTodos} todos={todos} id={id} setId={setId} />
        <TodoNotes todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

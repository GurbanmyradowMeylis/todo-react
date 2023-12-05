import { useState } from "react";
import AddTodoNote from "./components/add_todo_note/AddTodoNote";
import TodoNotes from "./components/todo/TodoNotes";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [_, setId] = useState(0);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center gap-10">
        <AddTodoNote setTodos={setTodos} setId={setId} />
        <TodoNotes todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

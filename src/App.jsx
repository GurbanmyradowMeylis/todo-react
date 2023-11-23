import { useState } from "react";
import AddTodo from "./components/add_todo/index";
import TodoNotes from "./components/todo/TodoNotes";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center gap-10">
        <AddTodo setTodos={setTodos} todos={todos} id={id} setId={setId} />
        <TodoNotes todos={todos} />
      </div>
    </div>
  );
}

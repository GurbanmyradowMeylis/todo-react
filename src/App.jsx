import { useState } from "react";
import FormApp from "./components/form";
import Cards from "./components/todo";

export default function App() {
  const [todos, setTodos] = useState(["", ""]);
  return (
    <div className="bg flex items-center justify-center">
      <FormApp setTodos={setTodos} />
      <Cards todo={todos} />
    </div>
  );
}

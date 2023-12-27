import { useReducer, useState } from "react";
import AddTodoNote from "./components/add_todo_note";
import TodoNotes from "./components/todo/TodoNotes";

export default function App() {
  const [todos, todosDispatch] = useReducer(reducer, []);
  const [id, setId] = useState(0);

  function reducer(state, action) {
    console.log(state);
    switch (action.type) {
      case "add-note":
        let id = 0;
        if (state.length > 0) id = state[state.length - 1].id + 1;

        return [
          ...state,
          {
            text: action.value.text,
            id,
            isImportant: action.value.isImportant,
          },
        ];
      case "rendering-note":
        return [
          ...state.slice(0, action.id),
          {
            text: action.text,
            isImportant: action.e.target.checked,
            id: action.id,
          },
          ...state.slice(action.id + 1),
        ];
      case action.type !== "add-note" && action.type !== "rendering-note":
        return state;
    }
    setId((prev) => prev + 1);
  }

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center gap-10">
        <AddTodoNote todoDispatch={todosDispatch} setId={setId} />
        <TodoNotes todos={todos} todosDispatch={todosDispatch} />
      </div>
    </div>
  );
}

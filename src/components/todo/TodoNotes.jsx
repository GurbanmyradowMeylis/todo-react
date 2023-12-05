import TodoNote from "./TodoNote";

function TodoNotes({ todos, setTodos }) {
  return (
    <div className="grid grid-cols-4 gap-5 w-full items-center p-5">
      {todos.map((item, i) => (
        <div key={i}>
          <TodoNote {...item} setTodos={setTodos} />
        </div>
      ))}
    </div>
  );
}

export default TodoNotes;

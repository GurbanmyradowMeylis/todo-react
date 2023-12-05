export default function TodoNote({ text, id, isImportant, setTodos }) {
  function handleChecked(e) {
    setTodos((prev) => {
      return [
        ...prev.slice(0, id),
        {
          text,
          isImportant: e.target.checked,
          id,
        },
        ...prev.slice(id + 1),
      ];
    });
  }

  return (
    <div
      className="rounded"
      style={{
        boxShadow:
          "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      }}
    >
      <div className="flex flex-col gap-8 p-5">
        <div className="flex flex-col justify-between">
          <h1 className="text-gray-500 text-lg">Text: {isImportant && "✅"}</h1>
          <h1 className="text-xl">{text}</h1>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-gray-500 text-lg">Is important:</h1>
          <div className="flex gap-3 items-center">
            <input
              className="w-4 h-4"
              type="checkbox"
              onChange={(e) => handleChecked(e)}
            />
            <span className="text-lg">Is Important</span>
          </div>
        </div>
      </div>
    </div>
  );
}

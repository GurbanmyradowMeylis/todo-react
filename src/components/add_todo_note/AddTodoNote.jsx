import { useCallback, useState } from "react";

export default function AddTodoNote({ setTodos, setId }) {
  const [value, setValue] = useState({
    text: "",
    isImportant: false,
  });

  function handleChange(content, key) {
    setValue({
      ...value,
      [key]: content,
    });
  }

  const handleClick = useCallback(() => {
    setTodos((prev) => {
      let id = 0;
      if (prev.length > 0) id = prev[prev.length - 1].id + 1;

      return [
        ...prev,
        {
          text: value.text,
          id,
          isImportant: value.isImportant,
        },
      ];
    });
    setId((prev) => prev + 1);
  }, [value]);

  return (
    <div className="flex flex-col gap-5 p-5 m-5 rounded">
      <h1 className="text-center text-4xl font-semibold">Add a todo</h1>
      <div className="flex flex-col gap-2">
        <input
          className="border-2 rounded p-1 pl-3 border-black"
          onChange={(e) => handleChange(e.target.value, "text")}
        />
        <div className="flex gap-3 items-center">
          <input
            className="w-4 h-4"
            type="checkbox"
            onChange={(e) => handleChange(e.target.checked, "isImportant")}
          />
          <span className="text-lg">Is Important</span>
        </div>
      </div>
      <button
        className="bg-sky-400 rounded py-2 text-white"
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

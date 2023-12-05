import { useCallback, useState } from "react";
import Title from "./Title";
import Input from "./Input";
import InputCheckbox from "./InputCheckbox";
import Button from "./Button";

export default function AddTodoNote({ setTodos, setId }) {
  const [value, setValue] = useState({
    text: "",
    isImportant: false,
  });
  const handleChange = useCallback((content, key) => {
    setValue((prev) => ({
      ...prev,
      [key]: content,
    }));
  }, []);

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
      <Title />
      <div className="flex flex-col gap-2">
        <Input handleChange={handleChange} />
        <InputCheckbox handleChange={handleChange} />
      </div>
      <Button handleClick={handleClick} />
    </div>
  );
}

import { memo, useCallback, useState } from "react";
import Title from "./Title";
import Input from "./Input";
import InputCheckbox from "./InputCheckbox";
import Button from "./Button";

function AddTodoNote({ todoDispatch, setId }) {
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
    todoDispatch({ type: "add-note", value });
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

export default memo(AddTodoNote);

import { memo } from "react";

function InputCheckbox({ handleChange }) {
  return (
    <div className="flex gap-3 items-center">
      <input
        className="w-4 h-4"
        type="checkbox"
        id="checkbox"
        onChange={(e) => handleChange(e.target.checked, "isImportant")}
      />
      <label htmlFor="checkbox" className="text-lg">
        Is Important
      </label>
    </div>
  );
}

export default memo(InputCheckbox);

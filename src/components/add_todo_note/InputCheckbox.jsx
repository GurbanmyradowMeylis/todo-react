import { memo } from "react";

function InputCheckbox({ handleChange }) {
  return (
    <div className="flex gap-3 items-center">
      <input
        className="w-4 h-4"
        type="checkbox"
        onChange={(e) => handleChange(e.target.checked, "isImportant")}
      />
      <span className="text-lg">Is Important</span>
    </div>
  );
}

export default memo(InputCheckbox);

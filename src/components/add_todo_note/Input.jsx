import { memo } from "react";

function Input({ handleChange }) {
  return (
    <input
      className="border-2 rounded p-1 pl-3 border-black"
      onChange={(e) => handleChange(e.target.value, "text")}
    />
  );
}
export default memo(Input);

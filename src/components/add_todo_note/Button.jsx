import { memo } from "react";

function Button({ handleClick }) {
  return (
    <button
      className="bg-sky-400 rounded py-2 text-white"
      onClick={handleClick}
    >
      Submit
    </button>
  );
}
export default memo(Button);

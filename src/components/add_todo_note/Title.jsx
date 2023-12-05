import { memo } from "react";

function Title() {
  return <h1 className="text-center text-4xl font-semibold">Add a todo</h1>;
}

export default memo(Title);

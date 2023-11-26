import {
  Stack,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";

export default function AddTodoNote({ setTodos, todos, id, setId }) {
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
  return (
    <Stack gap={5}>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Add a todo
      </Typography>
      <Stack gap={2} className="flex flex-col">
        <TextField
          variant="outlined"
          color="primary"
          label="Your todo"
          onChange={(e) => handleChange(e.target.value, "text")}
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => handleChange(e.target.checked, "isImportant")}
            />
          }
          label={"is important?"}
        />
      </Stack>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setTodos([
            ...todos,
            {
              text: value.text,
              id,
              isImportant: value.isImportant,
            },
          ]);
          setId(id + 1);
        }}
      >
        Submit
      </Button>
    </Stack>
  );
}

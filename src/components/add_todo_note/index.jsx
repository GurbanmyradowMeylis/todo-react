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
  const [value, setValue] = useState();
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
          onChange={(e) => setValue(e.target.value)}
        />
        <FormControlLabel control={<Checkbox />} label={"is important?"} />
      </Stack>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setTodos([
            ...todos,
            {
              text: value,
              id,
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

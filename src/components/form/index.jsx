import { Stack, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function FormApp({ setTodos }) {
  const [value, setValue] = useState();
  return (
    <Stack className="bg-[#FEFEFE] rounded-md p-5" gap={5}>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        write a todo
      </Typography>
      <Stack gap={2} className="flex flex-col">
        <TextField
          variant="outlined"
          color="primary"
          label="Your todo"
          multiline
          rows={2}
          onChange={function (e) {
            setValue(e.target.value);
          }}
        />
      </Stack>
      <div className="flex">
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "100%" }}
          onClick={() => {
            setTodos([value]);
          }}
        >
          Submit
        </Button>
      </div>
    </Stack>
  );
}

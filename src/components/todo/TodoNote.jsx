import {
  Card,
  Stack,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

export default function TodoNote({ text, id, isImportant, setTodos }) {
  function handleChecked(e) {
    setTodos((prev) => {
      return [
        ...prev.slice(0, id),
        {
          text,
          isImportant: e.target.checked,
          id,
        },
        ...prev.slice(id + 1),
      ];
    });
  }

  return (
    <Card elevation={6}>
      <Stack gap={5} p={3}>
        <Stack flexDirection={"column"} justifyContent={"space-between"}>
          <Typography fontSize={18} color={"GrayText"}>
            Text: {isImportant && "✅"}
          </Typography>
          <Typography fontSize={20}>{text}</Typography>
        </Stack>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography fontSize={18} color={"GrayText"}>
            Is important:
          </Typography>
          <FormControlLabel
            control={
              <Checkbox checked={isImportant} onChange={handleChecked} />
            }
          />
        </Stack>
      </Stack>
    </Card>
  );
}

import {
  Card,
  Stack,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

export default function TodoNote({ text, id }) {
  return (
    <Card elevation={6}>
      <Stack gap={5} p={3}>
        <Stack flexDirection={"column"} justifyContent={"space-between"}>
          <Typography fontSize={18} color={"GrayText"}>
            Text:
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
          <FormControlLabel control={<Checkbox defaultChecked />} />
        </Stack>
      </Stack>
    </Card>
  );
}

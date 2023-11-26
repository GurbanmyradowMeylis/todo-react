import { Grid } from "@mui/material";
import TodoNote from "./TodoNote";

export default function TodoNotes({ todos, setTodos }) {
  console.log(todos);
  return (
    <Grid
      container
      spacing={5}
      sx={{ width: "100%" }}
      p={5}
      alignItems={"center"}
    >
      {todos.map((item, i) => (
        <Grid key={i} item xs={6} md={4} lg={3}>
          <TodoNote {...item} setTodos={setTodos} />
        </Grid>
      ))}
    </Grid>
  );
}

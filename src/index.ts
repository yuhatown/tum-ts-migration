import express from "express";
import mainRouter from "./controller/main.controller";
import userRouter from "./controller/user.controller";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", mainRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`connected! http://localhost:3000`);
});
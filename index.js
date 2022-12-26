import express from "express";
import mongoose from "mongoose";
import { port, MONGO_URI } from "./config.js";
import postsRouter from "./router/post.js";
import usersRouter from "./router/user.js";
const app = express();
app.use(express.json());
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
const connect = () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(MONGO_URI, {}).then(() => {
      console.log("Connected MongoDB");
    });
  } catch (error) {
    console.error("Couldnt connect");
    process.exit(1);
  }
};
app.use(express.json());
app.listen(port, async () => {
  connect();
  console.log(`Server running at localhost:${port}`);
});

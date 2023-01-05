import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postsRouter from "./router/post.js";
import usersRouter from "./router/user.js";
import dotenv from "dotenv";
const app = express();

app.use(express.json());

dotenv.config();

app.use(cors());

app.use("/users", usersRouter);

app.use("/posts", postsRouter);

const uri = process.env.MONGO_ATLAS_URI || "";
const port = process.env.PORT;

const connect = () => {
  try {
    mongoose.connect(uri, {}).then(() => {
      console.log("Connected to DB");
    });
    mongoose.set("strictQuery", true);
  } catch (error) {
    console.error("Couldnt connect");
    process.exit(1);
  }
};
app.listen(port, async () => {
  connect();
  console.log(`Server running at localhost:${port}`);
});

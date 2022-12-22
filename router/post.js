import express from "express";
import { createPosts, deletePosts, getAllPosts } from "../controller/posts.js";
const postsRouter = express.Router();

postsRouter.route("/").get(getAllPosts).post(createPosts);
postsRouter.route("/:id").delete(deletePosts);

export default postsRouter;

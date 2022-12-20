import express from "express";
import { getAllusers, createUsers, getUserById } from "../controller/users.js";

const router = express.Router();

router.get("/users", getAllusers);
router.post("/users", createUsers);
router.get("/users/:UserId", getUserById);
export default router;

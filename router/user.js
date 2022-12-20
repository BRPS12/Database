import express from "express";
import { getAllusers, createUsers } from "../controller/users.js";

const router = express.Router();

router.get("/users", getAllusers);
router.post("/users", createUsers);

export default router;

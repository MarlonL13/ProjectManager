import { Router } from "express";
import { getUsers, postUser } from "../controllers/userControllers";

const router = Router();

router.get("/", getUsers);
router.post("/", postUser);

export default router;

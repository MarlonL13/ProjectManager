import { Router } from "express";
import { getUser, getUsers, postUser } from "../controllers/userControllers";

const router = Router();

router.get("/", getUsers);
router.get("/:cognitoId", getUser);
router.post("/", postUser);

export default router;

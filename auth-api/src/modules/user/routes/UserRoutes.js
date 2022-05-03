import { Router } from "express";
import checkToken from "../../../config/auth/checkToken.js";
import userController from "../controller/userController.js";

const router = new Router();

router.post("/api/user/auth", userController.getAccessToken);

router.use(checkToken);

router.get("/api/user/email/:email", userController.findByEmail);

export default router;
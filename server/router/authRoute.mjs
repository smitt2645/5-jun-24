import express from "express";
import { AuthClass } from "../controllers/authController.mjs";

const router = express.Router()

router.route("/register").post(AuthClass.Register);
router.route("/login").post(AuthClass.Login);

export default router;
import express from "express";
import { yupValidator } from "../middleware";
import * as authController from "../controllers/auth.controller";
import { yupSignupSchema } from "../validators/auth.validator";

const router = express.Router();

/* POST New User Registration */
router.post(
  "/signup",
  yupValidator("body", yupSignupSchema),
  authController.signUp
);

export { router as default };

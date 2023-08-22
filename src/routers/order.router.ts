import express from "express";
import { validateJWT, yupValidator } from "../middleware";
import * as orderController from "../controllers/order.controller";
import { yupJwtHeader } from "../validators/jwt.validator";

const router = express.Router();

/* GET all orders of an user */
router.get(
  "/get/all",
  yupValidator("headers", yupJwtHeader),
  validateJWT,
  orderController.getOrders
);

/* POST place order with all cart items */
router.post(
  "/place",
  yupValidator("headers", yupJwtHeader),
  validateJWT,
  orderController.placeOrder
);

export { router as default };

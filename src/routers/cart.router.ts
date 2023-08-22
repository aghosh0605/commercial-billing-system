import express from "express";
import { validateJWT, yupValidator } from "../middleware";
import * as cartController from "../controllers/cart.controller";
import { yupAddCart } from "../validators/cart.validator";
import { yupJwtHeader } from "../validators/jwt.validator";

const router = express.Router();

/* GET Add item to cart */
router.get(
  "/get/all",
  yupValidator("headers", yupJwtHeader),
  validateJWT,
  cartController.getCartItems
);

/* POST Add item to cart */
router.post(
  "/add",
  yupValidator("headers", yupJwtHeader),
  validateJWT,
  yupValidator("body", yupAddCart),
  cartController.addCart
);

/* DELETE Delete items from the cart */
router.delete(
  "/delete/all",
  yupValidator("headers", yupJwtHeader),
  validateJWT,
  cartController.deleteCartItems
);

export { router as default };

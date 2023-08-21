import express from "express";

import * as productController from "../controllers/product.controller";
import { yupValidator } from "../middleware";
import { yupAddProduct, yupGetProduct } from "../validators/product.validator";
import { validateJWT } from "../middleware";
import { yupJwtHeader } from "../validators/jwt.validator";

const router = express.Router();

/* GET all products */
router.get(
  "/all/:id",
  yupValidator("params", yupGetProduct),
  productController.getAll
);

/* GET specific product*/
router.get("/specific/:id", productController.getAll);

/* POST Add new product*/
router.post(
  "/add",
  yupValidator("headers", yupJwtHeader),
  validateJWT,
  yupValidator("body", yupAddProduct),
  productController.addProduct
);

/* PATCH Modify specific product*/
router.patch("/modify/:id", productController.getAll);

/* DELETE Remove specific product*/
router.delete("/remove/:id", productController.getAll);

export { router as default };

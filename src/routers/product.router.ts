import express from "express";

import * as productController from "../controllers/product.controller";

const router = express.Router();

/* GET all products */
router.get("/all", productController.getAll);

/* GET specific */
router.get("/specific/:id", productController.getAll);

export { router as default };

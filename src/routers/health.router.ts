import express from "express";

import * as healthController from "../controllers/health.controller";
import { validateJWT } from "../middleware";

const router = express.Router();

/* GET basic healthcheck */
router.get("/", healthController.getSimple);

/* GET detailed healthcheck */
router.get("/debug", validateJWT, healthController.getDetailed);

export { router as default };

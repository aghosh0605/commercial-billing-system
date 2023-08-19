import express from "express";

import * as articlesController from "../controllers/health.controller";

const router = express.Router();

/* GET basic healthcheck */
router.get("/", articlesController.getSimple);

/* GET detailed healthcheck */
router.get("/debug", articlesController.getDetailed);

export { router as default };

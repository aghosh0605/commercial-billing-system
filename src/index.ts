import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import "dotenv/config";

import * as middleware from "./middleware";

import healthRouter from "./routers/health.router";

const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || "production";

const app: Express = express();

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(middleware.httpLogger);

app.get("/api/v1", (req: Request, res: Response) => {
  res.status(200).send("📖 Welcome to Plotline Billing System Backend!");
});

// Main routers

app.use("/api/v1/health", healthRouter);

// Error hanlding middleware

app.use(middleware.errorHandler);

app.use(middleware.notFoundHandler);

const server = app.listen(PORT, () => {
  console.log(`#############################################################
🛡️ Server running on port ${PORT} in ${ENV} environment 🛡️
#############################################################`);
});

export { app as default, server };

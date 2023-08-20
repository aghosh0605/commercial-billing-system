import { Request, Response } from "express";

import logger from "../common/logger";

import * as productService from "../services/product.service";

const getAll = async (req: Request, res: Response) => {
  try {
    const data = await productService.getAll();

    res.status(data.statusCode).send(data.body);
  } catch (e: any) {
    logger.error(e.message);

    res.status(500).send(e.message);
  }
};

export { getAll };

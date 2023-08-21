import { Request, Response } from "express";
import logger from "../common/logger";
import * as addProductService from "../services/addcart.service";

const addCart = async (req: Request, res: Response) => {
  try {
    const data = await addProductService.addCart(req.body, res.locals.user);

    res.status(data.statusCode).send(data.body);
  } catch (e: any) {
    logger.error(e.message);

    res.status(500).send(e.message);
  }
};

export { addCart };

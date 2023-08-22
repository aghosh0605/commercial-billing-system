import { Request, Response } from "express";
import logger from "../common/logger";
import * as addCartService from "../services/addcart.service";
import * as getCartService from "../services/getcart.service";

const addCart = async (req: Request, res: Response) => {
  try {
    const data = await addCartService.addCart(req.body, res.locals.user);

    res.status(data.statusCode).send(data.body);
  } catch (e: any) {
    logger.error(e.message);

    res.status(500).send(e.message);
  }
};

const getCartItems = async (req: Request, res: Response) => {
  try {
    const data = await getCartService.getCartItems(res.locals.user);

    res.status(data.statusCode).send(data.body);
  } catch (e: any) {
    logger.error(e.message);

    res.status(500).send(e.message);
  }
};

export { addCart, getCartItems };

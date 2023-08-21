import { Request, Response } from "express";
import logger from "../common/logger";
import * as getProductService from "../services/getproduct.service";
import * as addProductService from "../services/addproduct.service";

const getAll = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;
    const data = await getProductService.getAll(id);

    res.status(data.statusCode).send(data.body);
  } catch (e: any) {
    logger.error(e.message);

    res.status(500).send(e.message);
  }
};

const addProduct = async (req: Request, res: Response) => {
  try {
    const data = await addProductService.addProduct(req.body);

    res.status(data.statusCode).send(data.body);
  } catch (e: any) {
    logger.error(e.message);

    res.status(500).send(e.message);
  }
};
export { getAll, addProduct };

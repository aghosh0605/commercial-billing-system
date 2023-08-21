import { ServiceAPIResponse } from "../../types/service-response";
import { AppDataSource } from "../data-source";
import { Product } from "../entity/Product";
import { AddProductSchema } from "../validators/product.validator";

const addProduct = async (
  data: AddProductSchema
): Promise<ServiceAPIResponse<undefined>> => {
  /* Create new product here */
  const productsRepository = await AppDataSource.getRepository(Product);
  const product = await productsRepository.findOneBy({ name: data.name });
  if (product) {
    return {
      statusCode: 400,
      body: {
        success: false,
        message: "🛒 Product with that name is already there",
      },
    };
  }
  await productsRepository.save(data);
  return {
    statusCode: 200,
    body: { success: true, message: "🛒 Added the product successfully" },
  };
};

export { addProduct };

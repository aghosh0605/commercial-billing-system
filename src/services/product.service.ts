import { ServiceAPIResponse } from "../../types/service-response";
import { AppDataSource } from "../data-source";
import { CartItem } from "../entity/CartItem";
import { User } from "../entity/User";
import { Product } from "../entity/Product";

const getAll = async (): Promise<ServiceAPIResponse<Object>> => {
  /* fetch data here */
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: {
      id: 1,
    },
  });
  console.log(user);
  const productRepository = AppDataSource.getRepository(Product);
  const product = await productRepository.findOne({
    where: {
      id: 1,
    },
  });
  console.log(product);
  const cartItemRepository = AppDataSource.getRepository(CartItem);
  const item = await cartItemRepository.findOne({
    where: {
      id: 1,
    },
    relations: {
      user: true,
      product: true,
    },
  });
  console.log(item);
  //   if (user && product && item) {
  //     item.product = product;
  //     cartItemRepository.save(item);
  //   }
  return {
    statusCode: 200,
    body: { success: true, message: "🛠️ API v1 working!" },
  };
};

export { getAll };

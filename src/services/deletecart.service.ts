import { ServiceAPIResponse } from "../../types/service-response";
import { AppDataSource } from "../data-source";
import { CartItem } from "../entity/CartItem";
import { User } from "../entity/User";

const deleteCartItems = async (
  user: User
): Promise<ServiceAPIResponse<undefined>> => {
  /* Delete items of your cart here */
  const result = await AppDataSource.getRepository(CartItem).delete({
    user: user,
  });
  console.log(result);
  return {
    statusCode: 200,
    body: {
      success: true,
      message: "🛍️ Deleted all items from cart successfully",
    },
  };
};

export { deleteCartItems };

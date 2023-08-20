import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Relation,
  OneToMany,
} from "typeorm";
import { CartItem } from "./CartItem";
import { OrderItem } from "./OrderItem";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 200,
  })
  name: string;

  @Column()
  price: number;

  @OneToMany(() => CartItem, (cartItem) => cartItem.product)
  cartItems: Relation<CartItem[]>;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
  orderItems: Relation<OrderItem[]>;
}

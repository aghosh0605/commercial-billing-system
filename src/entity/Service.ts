import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Relation,
} from "typeorm";
import { CartItem } from "./CartItem";
import { OrderItem } from "./OrderItem";

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 200,
  })
  name: string;

  @Column()
  price: number;

  @OneToMany(() => CartItem, (cartItem) => cartItem.service)
  cartItems: Relation<CartItem[]>;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.service)
  orderItems: Relation<OrderItem[]>;
}

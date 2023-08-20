import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Relation,
} from "typeorm";
import { CartItem } from "./CartItem";
import { Order } from "./Order";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  username: string;

  @Column({
    length: 50,
  })
  email: string;

  @Column()
  passwordHash: string;

  @OneToMany(() => CartItem, (cartItem) => cartItem.user)
  cartItems: Relation<CartItem[]>;

  @OneToMany(() => Order, (order) => order.user)
  orders: Relation<Order[]>;
}

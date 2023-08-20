import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { User } from "./User";
import { OrderItem } from "./OrderItem";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.orders, { nullable: false })
  user: User;

  @Column()
  totalAmount: number;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, {
    nullable: false,
  })
  orderItems: OrderItem[];
}

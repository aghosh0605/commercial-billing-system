import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";
import { Service } from "./Service";

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.orderItems, { nullable: false })
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderItems)
  product: Product;

  @ManyToOne(() => Service, (service) => service.orderItems)
  service: Service;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  tax: number;
}

import { DataSource } from "typeorm";
import "dotenv/config";
import { CartItem } from "./entity/CartItem";
import { Product } from "./entity/Product";
import { Service } from "./entity/Service";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User, Service, Product, CartItem],
  subscribers: [],
  migrations: [],
});

// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
export const connectDB = async () => {
  await AppDataSource.initialize()
    .then(() => {
      // here you can start to work with your database
      console.log("✅ Databse Connection established");
    })
    .catch((error) =>
      console.log("❌ DB Connection failed with error: " + error)
    );
};
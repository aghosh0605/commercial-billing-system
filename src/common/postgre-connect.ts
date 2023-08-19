import Sequelize from "sequelize";

export const connectDB = async () => {
  const sequelize = new Sequelize.Sequelize(
    "postgres://aghosh0605:LZGtgq70tayBZScphob0cpd9BL57GEhG@dpg-ci67iilph6ekv7t0vl00-a.singapore-postgres.render.com/test_izi6",
    {
      dialect: "postgres",
      dialectOptions: {
        ssl: true,
      },
    }
  );
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

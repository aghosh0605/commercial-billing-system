import { app } from "./app";
import { connectDB } from "./data-source";

const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || "development";

const server = app.listen(PORT, async () => {
  await connectDB();
  console.log(`#############################################################
🛡️ Server running on port ${PORT} in ${ENV} environment 🛡️
#############################################################`);
});

export { server };

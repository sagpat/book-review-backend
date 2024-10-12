import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import sequelize from "./config/db";
import authRoutes from "./routes/authRoutes";
import bookRoutes from "./routes/bookRoutes";
import reviewRoutes from "./routes/reviewRoutes";
import { checkApiKey } from "./middlewares/apikeyValidationMiddleware";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(checkApiKey);
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/reviews", reviewRoutes);

// Sync database and start server
sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Failed to sync database:", err);
  });

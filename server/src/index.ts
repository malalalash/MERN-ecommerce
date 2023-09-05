import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import routes from "./routes/index.js";
dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware //
app.use(cors());
app.use(express.json());

// Routes //
app.use(routes);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on port ${PORT}`);
});

import express from "express";
import dotenv from "dotenv";
import { errorHandler } from "./src/middlewares/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("This is the Backend API");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

// Error handler
app.use(errorHandler);

// Server listening
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

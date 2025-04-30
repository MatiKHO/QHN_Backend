import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandler } from "./src/middlewares/errorHandler.js";

import eventsRoutes from "./src/routes/events.route.js"

dotenv.config();



const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("This is the Backend API");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', eventsRoutes);

// Error handler
app.use(errorHandler);

// Server listening
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

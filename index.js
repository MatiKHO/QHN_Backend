import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandler } from "./src/middlewares/errorHandler.js";

import eventsRoutes from "./src/routes/events.route.js";
import userRoutes from "./src/routes/user.route.js";
import chatRoutes from "./src/routes/chat.route.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173/",
      "http://192.168.68.27:5173",
      "http://192.168.68.27:5174", 
      "https://qhn-frontend.onrender.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("This is the Backend API");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", eventsRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);


// Error handler
app.use(errorHandler);

// Server listening
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

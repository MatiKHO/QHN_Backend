import { Router } from "express";
import { generateChat } from "../controllers/chatController.js";


const router = Router();

router.post("/generate", generateChat);


export default router;
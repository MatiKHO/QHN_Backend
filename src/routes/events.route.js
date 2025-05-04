import { Router } from "express";
import {
  getAllEvents,
  getEventsByTag,
  getEventsById,
  getEventsBySource,
  getEventsByName,
} from "../controllers/eventsController.js";


const router = Router();

router.get("/events", getAllEvents);
router.get("/events/:event_id", getEventsById);
router.get("/eventsByTag", getEventsByTag);
router.get("/eventsBySource", getEventsBySource);
router.get("/eventsByName", getEventsByName);



export default router;


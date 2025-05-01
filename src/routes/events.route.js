import { Router } from "express";
import {
  getEventsByTag,
  getEventsById,
  getEventsBySource,
  getEventsByName,
} from "../controllers/eventsController.js";

const router = Router();

router.get("/events", getAllEvents);
router.get("/events/:event_id", getEventsById); // Get event by ID
router.get("/eventsByTag", getEventsByTag); // Get all events by tag
router.get("/eventsBySource", getEventsBySource); // Get all events by data source
router.get("/eventsByName", getEventsByName); // Get all events by data source

export default router;

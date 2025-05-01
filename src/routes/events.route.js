import { Router } from 'express';
import {
  getAllEvents,
  getEventsByTag,
  getEventsById
} from '../controllers/eventsController.js';

const router = Router();

router.get('/events', getAllEvents);
router.get('/eventsByTag', getEventsByTag);
router.get('/events/:event_id', getEventsById); 

export default router;

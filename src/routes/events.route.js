import { Router } from 'express';
import {
  getAllEvents,
  getEventsByTag,
  getEventsById
} from '../controllers/eventsController.js';
import { getAllEvents, getEventsByTag, getEventsById } from '../controllers/eventsController.js';


const router = Router();

router.get('/events', getAllEvents);
router.get('/eventsByTag', getEventsByTag);
router.get('/events/:event_id', getEventsById); 
router.get('/events', getAllEvents);

export default router;

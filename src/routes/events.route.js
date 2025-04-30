import { Router } from 'express';
import { getEventsByTag, getEventsById } from '../controllers/eventsController.js';


const router = Router();


router.get('/eventsByTag', getEventsByTag); // Get all events by tag
router.get('/events/:event_id', getEventsById); // Get event by ID


export default router;
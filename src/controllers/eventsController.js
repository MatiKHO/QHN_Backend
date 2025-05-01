import prisma from '../prisma/index.js';

export const getAllEvents = async (req, res) => {
  try {
    const events = await prisma.allEvents.findMany({
      where: {
        latitude: {
          not: null,
        },
        longitude: {
          not: null,
        },
      },
    });
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching all events:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getEventsByTag = async (req, res) => {
  try {
    const { tags } = req.query;

    if (!tags) {
      return res.status(400).json({ error: "Tag is required" });
    }

    const events = await prisma.allEvents.findMany({
      where: {
        tags: {
          contains: tags,
        },
      },
    });

    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getEventsById = async (req, res) => {
  try {
    const { event_id } = req.params;

    if (!event_id) {
      return res.status(400).json({ error: "ID is required" });
    }

    const event = await prisma.allEvents.findUnique({
      where: {
        event_id: event_id,
      },
    });
    res.status(200).json(event);
  } catch (error) {
    console.error("Error fetching event by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};




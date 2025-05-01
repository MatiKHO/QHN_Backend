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
    if (!events || events.length === 0) {
      return res.status(404).json({ message: "No events found" });
    }
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

export const getEventsBySource = async (req, res) => {
  try {
    const { data_source } = req.query;

    if (!data_source) {
      return res.status(400).json({ error: "Data source is required" });
    }

    const events = await prisma.allEvents.findMany({
      where: {
        data_source: data_source,
      },
    });

    res.status(200).json(events);

  } catch (error) {
    console.error("Error fetching events by source:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getEventsByName = async (req, res) => {
  try {
    const { name } = req.query;

    if(!name || name.trim() === "") {
      return res.status(400).json({error: "Name is required and cannot be empty."});
    };

    const events = await prisma.allEvents.findMany({
      where: {
        name: {
          startsWith: name,
          mode: 'insensitive', 
        }
      },
      orderBy: {
        start_date: 'desc',
      },
      skip: 0,
      take: 10,
    });

    res.status(200).json(events);



  } catch (error) {
    console.error("Error fetching events by name:", error);
    res.status(500).json({ error: "Internal server error" });
    
  }
}

const express = require("express");
const eventController = require("../controller/EventController");
const router = express.Router();
const authMiddleware = require('../middleware/AuthMiddleware')

router.get("/users/:userId/calendar/:calendarId/events",
  authMiddleware.isAuthenticated,
  eventController.getAllEvents
);

router.post("/users/:userId/calendar/:calendarId/events",
  authMiddleware.isAuthenticated,
  eventController.addEvent
);

router.get("/users/:userId/calendars/:calendarId/events/:eventId",
  authMiddleware.isAuthenticated,
  eventController.getEventById
);

router.put("/users/:userId/calendars/:calendarId/events/:eventId",
  authMiddleware.isAuthenticated,
  eventController.updateEvent
);

router.delete("/users/:userId/calendars/:calendarId/events/:eventId",
  authMiddleware.isAuthenticated,
  eventController.deleteEvent
);

module.exports = router;
const express = require("express");
const calendarController = require("../controller/CalendarController");
const router = express.Router();
const authMiddleware = require('../middleware/AuthMiddleware')

router.get("/users/:userId/calendars",
  authMiddleware.isAuthenticated,
  calendarController.getAllCalendars
);

router.post("/users/:userId/calendars",
  authMiddleware.isAuthenticated,
  calendarController.addCalendar
);

router.get("/users/:userId/calendars/:calendarId",
  authMiddleware.isAuthenticated,
  calendarController.getCalendarById
);

router.put("/users/:userId/calendars/:calendarId",
  authMiddleware.isAuthenticated,
  calendarController.updateCalendar
);

router.delete("/users/:userId/calendars/:calendarId",
  authMiddleware.isAuthenticated,
  calendarController.deleteCalendar
);

module.exports = router;
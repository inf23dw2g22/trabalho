var eventService = require('../service/EventService');

const calendarController = {

    addEvent(req, res) {
        eventService.addEvent(req.body, req.params.userId, req.params.calendarId)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (response) {
                res.status(500).json({ error: 'Error adding event' });
            });
    },

    deleteEvent(req, res) {
        eventService.deleteEvent(req.params.userId, req.params.calendarId, req.params.eventId)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (response) {
                res.status(500).json({ error: 'Error deleting event' });
            });
    },

    getAllEvents(req, res) {
        eventService.getAllEvents(req.params.userId, req.params.calendarId)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (response) {
                res.status(500).json({ error: 'Error getting all events' });
            });
    },

    getEventById(req, res) {
        eventService.getEventById(req.params.userId, req.params.calendarId, req.params.eventId)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (response) {
                res.status(500).json({ error: 'Error getting event by id' });
            });
    },


    updateEvent(req, res) {
        eventService.updateEvent(req.body, req.params.userId, req.params.calendarId, req.params.eventId)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (response) {
                res.status(500).json({ error: 'Error updating event' });
            });
    }
}

module.exports = calendarController;
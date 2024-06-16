var calendarService = require('../service/CalendarService');

const calendarController = {

    addCalendar(req, res) {
        calendarService.addCalendar(req.body, req.params)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (error) {
                res.status(500).json({ error: 'Error adding calendar' });
            });
    },

    deleteCalendar(req, res) {
        calendarService.deleteCalendar(req.params.userId, req.params.calendarId)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (error) {
                res.status(500).json({ error: 'Error deleting calendar' });
            });
    },

    getAllCalendars(req, res) {
        calendarService.getAllCalendars(req.params.userId)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (error) {
                res.status(500).json({ error: 'Error getting all calendars' });
            });
    },

    getCalendarById(req, res) {
        calendarService.getcalendarById(req.params.userId, req.params.calendarId)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (error) {
                res.status(500).json({ error: 'Error getting calendar by id' });
            });
    },

    updateCalendar(req, res) {
        Calendar.updateCalendar(req.body, req.params.userId, req.params.calendarId)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (error) {
                res.status(500).json({ error: 'Error updating calendar' });
            });
    }
}   

module.exports = calendarController;
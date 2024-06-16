const sql = require('../config/db.config');


/**
 * Add a new event
 * Add a new event
 *
 * body Event Create a new event
 * userId Long User identifier
 * calendarId Long Calendar identifier
 * returns Integer
 **/
exports.addEvent = function(body,userId,calendarId) {
    return new Promise(function(resolve, reject) {
      sql.query("INSERT INTO events (description, start_date, end_date, category_id, calendar_id) VALUES (?,?,?,?,?)", [body.description, body.start_date, body.end_date, body.category_id,  calendarId], function(err, res) {
        if (err) {
          reject(err)
        } else { 
          resolve("ID:" + res.insertId)
        }
      })
    })
  }
  
  
  
  /**
   * Deletes a event
   * Delete a event
   *
   * userId Long User identifier
   * calendarId Long Calendar identifier
   * eventId Long Event identifier
   * no response value expected for this operation
   **/
  exports.deleteEvent = function(userId,calendarId,eventId) {
    return new Promise(function(resolve, reject) {
      sql.query("DELETE FROM events WHERE id = ? and calendar_id = ?", [eventId, calendarId], function(err, res) {
        if (err || !res.affectedRows) {
          reject(err)
        } else { 
          resolve ("ID: " + eventId)
        }
      })
    });
  }
  
  
  /**
   * Gets all events
   * Gets all events
   *
   * userId Long User identifier
   * calendarId Long Calendar identifier
   * returns List
   **/
  exports.getAllEvents = function(userId,calendarId) {
    return new Promise(function(resolve, reject) {
      sql.query("Select * FROM events where calendar_id = ? ", [calendarId],  function(err, res) {
        if (err) {
          reject(err)
        } else { 
          resolve (res)
        }
      })
    });
  }
  
  
  /**
   * Find event By ID
   * Find event By ID
   *
   * userId Long User identifier
   * calendarId Long Calendar identifier
   * eventId Long Event identifier
   * returns Event
   **/
  exports.getEventById = function(userId,calendarId,eventId) {
    return new Promise(function(resolve, reject) {
      sql.query("Select * FROM events where id = ? and calendar_id = ?", [eventId, calendarId], function(err, res) {
        if (err) {
          reject(err)
        } else { 
          resolve (res[0])
        }
      })
    });
  }
  
  
  /**
   * Update a event
   * Update a event
   *
   * body Event Update a Event
   * userId Long User identifier
   * calendarId Long Calendar identifier
   * eventId Long Event identifier
   * returns Integer
   **/
  exports.updateEvent = function(body,userId,calendarId,eventId) {
    return new Promise(function(resolve, reject) {
      sql.query("UPDATE events set description = ?, start_date = ?, end_date = ?, category_id = ? where id = ? and calendar_id = ?", [body.description, body.start_date, body.end_date, body.category_id, eventId, calendarId], function(err, res){
        if (err){
          reject(err);
        }
        else{
          resolve("ID:" + eventId)
        }
      });
    });
  }
  
  
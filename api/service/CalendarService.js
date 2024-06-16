const sql = require('../config/db.config');

/**
 * Add a new calendar
 * Add a new calendar
 *
 * body Calendar Add a new calendar
 * userId Long User identifier
 * returns Integer
 **/
exports.addCalendar = function(body,userId) {
    return new Promise(function(resolve, reject) {
      sql.query("INSERT INTO calendars (description, user_id) VALUES (?,?)", [body.description, userId], function(err, res) {
        if (err) {
          reject(err)
        } else { 
          resolve("ID:" + res.insertId)
        }
      })
    })
  }
  
  
  
  /**
   * Deletes a calendar
   * delete a calendar
   *
   * userId Long User identifier
   * calendarId Long Calendar identifier
   * no response value expected for this operation
   **/
  exports.deleteCalendar = function(userId,calendarId) {
    return new Promise(function(resolve, reject) {
      sql.query("DELETE FROM calendars WHERE id = ?", [calendarId], function(err, res) {
        if (err || !res.affectedRows) {
          reject(err)
        } else { 
          resolve ("ID: " + calendarId)
        }
      })
    });
  }
  
  
  /**
   * Gets all calendars
   * Gets all calendars
   *
   * userId Long User identifier
   * returns List
   **/
  exports.getAllCalendars = function(userId) {
    return new Promise(function(resolve, reject) {
      sql.query("Select * FROM calendars where user_id = ? ", [userId],  function(err, res) {
        if (err) {
          reject(err)
        } else { 
          resolve (res)
        }
      })
    });
  }
  
  
  /**
   * Find calendar By ID
   * Find calendar By ID
   *
   * userId Long User identifier
   * calendarId Long Calendar identifier
   * returns Calendar
   **/
  exports.getcalendarById = function(userId,calendarId) {
    return new Promise(function(resolve, reject) {
      sql.query("Select * FROM calendars where id = ? and user_id = ?", [calendarId, userId], function(err, res) {
        if (err) {
          reject(err)
        } else { 
          resolve (res[0])
        }
      })
    });
  }
  
  
  /**
   * Update a calendar
   * Update a calendar
   *
   * body Calendar Update a Calendar
   * userId Long User identifier
   * calendarId Long Calendar identifier
   * returns Integer
   **/
  exports.updateCalendar = function(body,userId,calendarId) {
    return new Promise(function(resolve, reject) {
      sql.query("UPDATE calendars set description = ? where id = ? and user_id = ?", [body.description, calendarId, userId], function(err, res){
        if (err){
          reject(err);
        }
        else{
          resolve("ID:" + calendarId)
        }
      });
    });
  }
const sql = require('../config/db.config');

/**
 * Add a new user
 * Add a new user
 *
 * body User Create a new user
 * returns Integer
 **/
exports.addUser = function(body) {
    return new Promise(function(resolve, reject) {
      sql.query("INSERT INTO users (name, email, status) VALUES (?,?,?)", [body.name, body.email, body.status], function(err, res) {
        if (err) {
          reject(err)
        } else { 
          resolve("ID:" + res.insertId)
        }
      })
    })
  }
  
  
  /**
   * Delete a user
   * Delete a user
   *
   * userId Long User identifier
   * no response value expected for this operation
   **/
  exports.deleteUser = function(userId) {
    return new Promise(function(resolve, reject) {
      sql.query("DELETE FROM users WHERE id = ?", [userId], function(err, res) {
        if (err || !res.affectedRows) {
          reject(err)
        } else { 
          resolve ("ID: " + userId)
        }
      })
    });
  }
  
  
  /**
   * Gets all users
   * Gets all users
   *
   * returns List
   **/
  exports.getAllUsers = function() {
    return new Promise(function(resolve, reject) {
      sql.query("Select * FROM users", function(err, res) {
        if (err) {
          reject(err)
        } else { 
          resolve (res)
        }
      })
    });
  }
  
  
  /**
   * Find user by ID
   * Find user by ID
   *
   * userId Long User identifier
   * returns User
   **/
  exports.getUserById = function(userId) {
    return new Promise(function(resolve, reject) {
      sql.query("Select * FROM users where id = ?", [userId], function(err, res) {
        if (err) {
          reject(err)
        } else { 
          resolve (res[0])
        }
      })
    });
  }
  
  
  /**
   * Update a user
   * Update a user
   *
   * body User Update a User
   * userId Long User identifier
   * returns Integer
   **/
  exports.updateUser = function(body,userId) {
    return new Promise(function(resolve, reject) {
      sql.query("UPDATE users set name = ?, email = ?, status = ? where id = ?", [body.name, body.email, body.status, userId], function(err, res){
        if (err){
          reject(err);
        }
        else{
          resolve("ID:" + userId)
        }
      });
    });
  }
  
  
  
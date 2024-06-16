const sql = require('../config/db.config');

/**
 * Add a new category
 * Add a new category
 *
 * body Category Add a new category
 * userId Long User identifier
 * calendarId Long Calendar identifier
 * returns Integer
 **/
exports.addcategory = function(body,userId,calendarId) {
  return new Promise(function(resolve, reject) {
    sql.query("INSERT INTO categories (description, calendar_id) VALUES (?,?)", [body.description, calendarId], function(err, res) {
      if (err) {
        reject(err)
      } else { 
        resolve("ID:" + res.insertId)
      }
    })
  })
}

/**
 * Deletes a category
 * delete a category
 *
 * userId Long User identifier
 * calendarId Long Calendar identifier
 * categoryId Long Category identifier
 * no response value expected for this operation
 **/
exports.deleteCategory = function(userId,calendarId,categoryId) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM categories WHERE id = ?", [categoryId], function(err, res) {
      if (err || !res.affectedRows) {
        reject(err)
      } else { 
        resolve ("ID: " + categoryId)
      }
    })
  });
}


/**
 * Gets all categories
 * Gets all categories
 *
 * userId Long User identifier
 * calendarId Long Calendar identifier
 * returns List
 **/
exports.getAllCategories = function(userId,calendarId) {
  return new Promise(function(resolve, reject) {
    sql.query("Select * FROM categories where calendar_id = ? ", [calendarId],  function(err, res) {
      if (err) {
        reject(err)
      } else { 
        resolve (res)
      }
    })
  });
}


/**
 * Find category By ID
 * Find category By ID
 *
 * userId Long User identifier
 * calendarId Long Calendar identifier
 * categoryId Long Category identifier
 * returns Category
 **/
exports.getCategoryById = function(userId,calendarId,categoryId) {
  return new Promise(function(resolve, reject) {
    sql.query("Select * FROM categories where calendar_id = ? and id = ?", [calendarId, categoryId], function(err, res) {
      if (err) {
        reject(err)
      } else { 
        resolve (res[0])
      }
    })
  });
}


/**
 * Update a category
 * Update a category
 *
 * body Category Update a category
 * userId Long User identifier
 * calendarId Long Calendar identifier
 * categoryId Long Category identifier
 * returns Integer
 **/
exports.updateCategory = function(body,userId,calendarId,categoryId) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE categories set description = ? where id = ?", [body.description, categoryId], function(err, res){
      if (err){
        reject(err);
      }
      else{
        resolve("ID:" + categoryId)
      }
    });
  });
}



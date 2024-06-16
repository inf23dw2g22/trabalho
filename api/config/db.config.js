var mysql = require('mysql2');
const dotenv = require("dotenv")
const path = require("path");
dotenv.config({
  path: path.resolve(__dirname, '../', `${process.env.NODE_ENV}.env`)
});

var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

connection.connect(function (err) {
    if (err) {
        console.log('Error connecting to the database!');
        throw err;
    }
    console.log('Connection Successful!');
});

module.exports = connection;



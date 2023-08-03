const db = require("../config/db.config.js");
const config = require("../config/config.js");


const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`;
const useDatabaseQuery=`USE ${process.env.DB_NAME}`;
const createFibonacciTableQuery = `
  CREATE TABLE IF NOT EXISTS ${config.database.primarytable} (
    number INT PRIMARY KEY,
    value VARCHAR(255)
  )
`;

function createDBStructures() {
  // Create database
  db.query(createDatabaseQuery, (err, result) => {
    if (err) {
      console.log('Error creating database:', err);
    } else {
      console.log(`Database ${process.env.DB_NAME} created successfully or already exists.`);
      // Once the database is created, use the  db
      useDatabase();
    }
  });
}

function useDatabase() {
    // Create database
    db.query(useDatabaseQuery, (err, result) => {
      if (err) {
        console.log('Error using database:', err);
      } else {
        console.log(`Default schema set to ${process.env.DB_NAME}..`);
        // Once the database is created, create the table
        createFibonacciTable();
      }
    });
  }

function createFibonacciTable() {
  // Create table
  db.query(createFibonacciTableQuery, (err, result) => {
    if (err) {
      console.log("Error creating fibonacci table:", err);
    } else {
      console.log(`${config.database.primarytable} table created successfully!`);
    }
  });
}

module.exports = createDBStructures;
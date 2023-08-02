const db = require("../config/db.config.js");
const config = require("../config/config.js");


const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${config.database.database_name}`;
const useDatabaseQuery=`USE ${config.database.database_name}`;
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
      console.log(`Database ${config.database.database_name} created successfully or already exists.`);
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
        console.log(`Default schema set to ${config.database.database_name}..`);
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
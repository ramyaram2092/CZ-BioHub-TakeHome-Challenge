
const mysql = require('mysql2')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "ramya2092",
multipleStatements: true 
})

module.exports = db;
<<<<<<< HEAD
const mysql = require('mysql');

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "teachers_db"
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("✅ MySQL Connected");
});

module.exports = db;
=======
const mysql = require('mysql');

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "teachers_db"
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("✅ MySQL Connected");
});

module.exports = db;
>>>>>>> b6e62ff7a3ece0c9b0329c7e36aacd6725a6c94e

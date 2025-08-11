// db_setup.js
// This script creates a SQLite database and a users table for login

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('sat_tutor.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )`);
  console.log('Database and users table created.');
});

db.close();

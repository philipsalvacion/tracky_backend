const mysql = require('mysql');
const config = require('./config')
const pool = mysql.createPool(config)

// Connect to MySQL
pool.getConnection((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log(`Connected to "${config.database}" on "${config.host}" server`);
});

module.exports = pool;
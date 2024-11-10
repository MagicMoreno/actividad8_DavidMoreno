
const mysql = require('mysql2');


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'blog',
  port: 3306
});

module.exports = pool.promise();

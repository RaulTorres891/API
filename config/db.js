const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    port:process.env.MYSQL_PORT,
  });

  connection.connect((err) => {
    if (err) {
        console.error('error connecting:', err.stack);
        return;
    }
    console.log('Conexión a la base de datos exitosa!');
  });

  module.exports = connection;
const mysql = require('mysql');

function connectDatabase() {
    const connection = mysql.createConnection({
        host: 'localhost',
      
        port: 3306,
      
        user: 'root',
      
        password: 'chargersrt8!',
        database: 'employeeTracker_DB',
      });
    return connection;
}



module.exports = connectDatabase();
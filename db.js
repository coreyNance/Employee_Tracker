const mysql = require('mysql');
// function connectDatabase() {
//     if (!db) {
//         db = mysql.createConnection(settings);

//         db.connect(function(err){
//             if(!err) {
//                 console.log('Database is connected!');
//             } else {
//                 console.log('Error connecting database!');
//             }
//         });
//     }
//     return db;
// }


function connectDatabase() {
    const connection = mysql.createConnection({
        host: 'localhost',
      
        // Your port; if not 3306
        port: 3306,
      
        // Your username
        user: 'root',
      
        // Your password
        password: 'chargersrt8!',
        database: 'employeeTracker_DB',
      });
    return connection;
}



module.exports = connectDatabase();
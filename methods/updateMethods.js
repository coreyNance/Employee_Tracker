const mysql = require('mysql');
const inquirer = require('inquirer');
const connection = require('../db');
let updateMethods = {};


  updateMethods.updateRole = (oldTitle,newTitle) => {

    console.log("Selecting Department  ...\n")
    connection.query('UPDATE employee_roles SET ? WHERE ?',
    [
     {
        title: newTitle,

    },
    {
        title: oldTitle,
    },
    ],
    (err, res) => {
      if (err) throw err;
  
      console.log(res);
      
    });
  
  };


//   if (chosenItem.highest_bid < parseInt(answer.bid)) {
//     // bid was high enough, so update db, let the user know, and start over
//     connection.query(
//       'UPDATE auctions SET ? WHERE ?',
//       [
//         {
//           highest_bid: answer.bid,
//         },
//         {
//           id: chosenItem.id,
//         },
//       ],
//       (error) => {
//         if (error) throw err;
//         console.log('Bid placed successfully!');
//         start();
//       }
//     );
//   } else {













  module.exports.data = updateMethods;
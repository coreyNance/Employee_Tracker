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


  module.exports.data = updateMethods;
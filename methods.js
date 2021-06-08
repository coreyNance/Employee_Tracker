const mysql = require('mysql');
let inquirer = require('inquirer');
// const employee = require('./employee.js');
let methods = {};

methods.addDepartment = () => {
    // prompt for info about the item being put up for auction
    inquirer
      .prompt([
        {
          name: 'id',
          type: 'input',
          message: 'What is the Department ID?',
        },                                                                          // Working on reqiure statments right now
        {
          name: 'name',
          type: 'input',
          message: 'What is the name of the Department?',
        },
      ])
      .then((answer) => {
        // when finished prompting, insert a new item into the db with that info
        connection.query(
          'INSERT INTO departments SET ?',
          // QUESTION: What does the || 0 do?
          {
            id: answer.id || 0,
            name: answer.name,
          },
          (err) => {
            if (err) throw err;
            console.log('Your auction was created successfully!');
            // re-prompt the user for if they want to bid or post
            // employee.start();
          }
        );
      });
  };

module.exports.data = methods;
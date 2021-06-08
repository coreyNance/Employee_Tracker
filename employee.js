const mysql = require('mysql');
const inquirer = require('inquirer');
const methods = require('./methods.js');


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


  const addDepartment = () => {
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
        connection.end();
      });


  };

  const addRole = () => {
    // prompt for info about the item being put up for auction
    inquirer
      .prompt([
        {
          name: 'title',
          type: 'input',
          message: 'What is the title for this role?',
        },                                                                          // Working on reqiure statments right now
        {
          name: 'salary',
          type: 'input',
          message: 'What is the Salary for this role?',
        },
        {
          name: 'departId',
          type: 'input',
          message: 'What is the department ID?',
        },
      ])
      .then((answer) => {
        // when finished prompting, insert a new item into the db with that info
        connection.query(
          'INSERT INTO employee_roles SET ?',
          // QUESTION: What does the || 0 do?
          {
            title: answer.title,
            salary: answer.salary,
            department_id: answer.departId
          },
          (err) => {
            if (err) throw err;
            console.log('Your auction was created successfully!');
            // re-prompt the user for if they want to bid or post
            // employee.start();
          }
        );
        connection.end();
      });


  };

  const addDepartment = () => {
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
        connection.end();
      });


  };

  

  const start = () => {
    inquirer
      .prompt({
        name: 'start',
        type: 'list',
        message: 'Please Select either Employee Info, Employee Role, or the Department. ',
        choices: ['Info', 'Role', 'Department'],
      })
      .then((response) => {
      console.log(response.start)

      switch(response.start){
        case 'Info':
          console.log("The info case works");
          break;
        case 'Role':
          console.log("The Role case works");
          break;
        case 'Department':
          console.log("The department case works");
            addDepartment();
          break;
        default:
          console.log("Something went wrong");

      }

      
      

      console.log(`Listing on port 3306`);
         
        
      });

      
  };


const addEmployee = () => {
    // prompt for info about the item being put up for auction
    // inquirer
    //   .prompt([
    //     {
    //       name: 'item',
    //       type: 'input',
    //       message: 'What is the item you would like to submit?',
    //     },
    //     {
    //       name: 'category',
    //       type: 'input',
    //       message: 'What category would you like to place your auction in?',
    //     },
    //     {
    //       name: 'startingBid',
    //       type: 'input',
    //       message: 'What would you like your starting bid to be?',
    //       validate(value) {
    //         if (isNaN(value) === false) {
    //           return true;
    //         }
    //         return false;
    //       },
    //     },
    //   ])
    //   .then((answer) => {
    //     // when finished prompting, insert a new item into the db with that info
    //     connection.query(
    //       'INSERT INTO auctions SET ?',
    //       // QUESTION: What does the || 0 do?
    //       {
    //         item_name: answer.item,
    //         category: answer.category,
    //         starting_bid: answer.startingBid || 0,
    //         highest_bid: answer.startingBid || 0,
    //       },
    //       (err) => {
    //         if (err) throw err;
    //         console.log('Your auction was created successfully!');
    //         // re-prompt the user for if they want to bid or post
            start();
      //     }
      //   );
      // });
  };

  addEmployee();


 
  






// module.exports = start;


















//   Build a command-line application that at a minimum allows the user to:

//   * Add departments, roles, employees

//   * View departments, roles, employees

//   * Update employee roles

// Bonus points if you're able to:

//   * Update employee managers

//   * View employees by manager

//   * Delete departments, roles, and employees

//   * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

// We can frame this challenge as follows:
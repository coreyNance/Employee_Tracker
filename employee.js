const mysql = require('mysql');
const inquirer = require('inquirer');
const methods = require('./methods.js');


/* Current status of project.  functions working but all on one file, able to add so far in department, and info.  problem wiht
add role funciton right now.  Need to read about the decemil one. */

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
            
            name: answer.name,
          },
          (err) => {
            if (err) throw err;
            console.log('The department was added successfully!');
            // re-prompt the user for if they want to bid or post
            start();
          }
        );
    
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
            salary: answer.salary || 0,
            department_id: answer.departId
          },
          (err) => {
            if (err) throw err;
            console.log('The role was added successfully!');
            // re-prompt the user for if they want to bid or post
            start();
          }
        );
     
        
      });


  };

  const addEmployee = () => {
    // prompt for info about the item being put up for auction
    inquirer
      .prompt([
        {
          name: 'firstName',
          type: 'input',
          message: 'What is the first name of Employee?',
        },                                                                       
        {
          name: 'lastName',
          type: 'input',
          message: 'What is the last name of the Employee?',
        },
        {
          name: 'manager',
          type: 'input',
          message: 'Is this Employee an manager is so enter manager number if not slip?',
        },
        {
          name: 'roleId',
          type: 'input',
          message: 'What is the ID number for this role?',
        },
       

      ])

      .then((answer) => {
        // when finished prompting, insert a new item into the db with that info
        connection.query(
          'INSERT INTO employees SET ?',
          // QUESTION: What does the || 0 do?
          {
            first_name: answer.firstName,
            last_name: answer.lastName,
            role_id: answer.roleId,
            manager_id: answer.manager || 0
          },
          (err) => {
            if (err) throw err;
            console.log('The employee was added successfully!');
            // re-prompt the user for if they want to bid or post
            start();
          }
        );
        
      });


  };

  

  const start = () => {
    inquirer
      .prompt({
        name: 'start',
        type: 'list',
        message: 'Please Select either Employee Info, Employee Role, or the Department. ',
        choices: ['Info', 'Role', 'Department', 'End'],
      })
      .then((response) => {
      console.log(response.start)

      switch(response.start){
        case 'Info':
          console.log("The info case works");
          addEmployee();
          break;
        case 'Role':
          console.log("The Role case works");
          addRole();
          break;
        case 'Department':
          console.log("The department case works");
            addDepartment();
          break;
        case 'End':
          connection.end();
          break;
        default:
          console.log("Something went wrong");
          start();

      }

      
      

      console.log(`Listing on port 3306`);
         
        
      });

      
  };


connection.connect((err) => {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});



 
  






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
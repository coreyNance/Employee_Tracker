const mysql = require('mysql');
const inquirer = require('inquirer');
const connection = require('../db');
const employee = require('../employee');
let addMethods = {};

addMethods.addEmployee = (firstName, lastName,
    roleId, manager) => {

        connection.query(
          'INSERT INTO employees SET ?',
          {                                                       
            first_name: firstName,
            last_name: lastName,
            role_id: roleId,
            manager_id: manager || 0
          },
          (err) => {
            if (err) throw err;
            console.log('The employee was added successfully!');
          }
        );
};


addMethods.addDepartment = (departName) => {
   
        connection.query(
          'INSERT INTO departments SET ?',
          {
            
            name: departName,                                      
          },
          (err) => {
            if (err) throw err;
            console.log('The department was added successfully!');
            
        }
        );
   
};



addMethods.addRole = (title, salary, departId) => {
   
        connection.query(
          'INSERT INTO employee_roles SET ?',
          {
            title: title,                                 
            salary: salary || 0,
            department_id: departId
          },
          (err) => {
            if (err) throw err;
            console.log('The role was added successfully!');
            
        }
        );
};
        
    


module.exports.data = addMethods;
const mysql = require('mysql');
let inquirer = require('inquirer');
const connection = require('../db');
const employee = require('../employee');
let viewMethods = {};

viewMethods.viewRoles = () => {
  console.log("Selecting all Employee Roles ...\n")
  connection.query('SELECT * FROM employee_roles', (err, res) => {
    if (err) throw err;

  
    console.table(res);
    
  });

};

viewMethods.viewEmployees = () => {
  console.log("Selecting all Employees ...\n")
  connection.query('SELECT * FROM employees', (err, res) => {
    if (err) throw err;

   
    console.table(res);
    
  });
};

viewMethods.viewDepartments = () => {
  connection.query('SELECT * FROM departments', (err, res) => {
    if (err) throw err;

  
    console.table(res);
    
  });
};

viewMethods.viewAll = () => {
  console.log("Selecting all Data from Employee Database ...\n")
  connection.query(`SELECT employee_roles.title, employee_roles.salary, employee_roles.department_id ,
  employees.first_name, employees.last_name, employees.role_id, employees.manager_id
   FROM employees JOIN employee_roles ON employee_roles.id = employees.id`, (err, res) => {
    if (err) throw err;


    console.table(res);
    
  });
 
};

module.exports.data = viewMethods;








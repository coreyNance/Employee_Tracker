const mysql = require('mysql');
const inquirer = require('inquirer');
const connection = require('../db');
let deleteMethods = {};


deleteMethods.deleteAllEmployees = () => {

    console.log("Selecting all Employees  ...\n")
    connection.query('DELETE FROM employees', (err, res) => {
      if (err) throw err;
  
      console.log(res);
      
    });
  
  };

  deleteMethods.deleteEmployee = (employeeNumber) => {

    console.log("Selecting all Employees  ...\n")
    connection.query('DELETE FROM employees WHERE ?',
     {
        id: employeeNumber
    },(err, res) => {
      if (err) throw err;
  
      console.log(res);
      
    });
  
  };



  deleteMethods.deleteAllRoles = () => {

    console.log("Selecting all Employee Roles ...\n")
    connection.query('DELETE FROM employee_roles', (err, res) => {
      if (err) throw err;

      console.log(res);
      
    });
  
  };

  deleteMethods.deleteRole = (roleTitle) => {

    console.log("Selecting Employee Role  ...\n")
    connection.query('DELETE FROM employee_roles WHERE ?',
     {
        title: roleTitle
    },(err, res) => {
      if (err) throw err;
  
      console.log(res);
      
    });
  
  };


  deleteMethods.deleteAllDepartments = () => {

    console.log("Selecting all Departments ...\n")
    connection.query('DELETE FROM departments', (err, res) => {
      if (err) throw err;
  
      console.log(res);
    
    });
  
  };

  deleteMethods.deleteDepartment = (departmentName) => {

    console.log("Selecting Department  ...\n")
    connection.query('DELETE FROM departments WHERE ?',
     {
        name: departmentName

    },(err, res) => {
      if (err) throw err;
  
      console.log(res);
      
    });
  
  };



  module.exports.data = deleteMethods;
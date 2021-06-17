const mysql = require('mysql');
const inquirer = require('inquirer');
const viewMethods = require('./methods/viewMethods');
const addMethods = require('./methods/addMethods');
const deleteMethods = require('./methods/deleteMethods');
const updateMethods = require('./methods/updateMethods')
const cTable = require('console.table');
const connection = require('./db');
let startMethods = {};



  start = () => {

    const startQuestions = [
        
      {
        name: 'start',
        type: 'list',
        message: 'Please Select what you would like to do ',
        choices: ['Add New Employee', 'Add Department', 'Add Role', 'View Employees', 'View Roles',
        'View Departments', 'View All', 'Delete Employees, Roles, or Departments','Update Roles', 'End'],
      },  
  ]

inquirer.prompt(startQuestions)

.then((response) => {

  switch(response.start){
    case 'Add New Employee':
      const employeeQuestions = [
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
        ];
          
        inquirer.prompt(employeeQuestions)
        .then((response) => {
          console.log(response.start)
          console.log("The info case works");
          addMethods.data.addEmployee(response.firstName, response.lastName,
          response.roleId, response.manager);
          start();
        })
      break;


    case 'Add Department':
      const departmentQuestions = [
        {
          name: 'departName',
          type: 'input',
          message: 'What is the name of the Department?',
        },
        ]
          
        inquirer.prompt(departmentQuestions)
        .then((response) => {
        console.log(response);
       
        console.log("The department case works");
        addMethods.data.addDepartment(response.departName);
        start();
      })
      break;

    
    case 'Add Role':
      const roleQuestions = [
      
        {
          name: 'title',
          type: 'input',
          message: 'What is the title for this role?',
        },                                                  
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
        ]
          
        inquirer.prompt(roleQuestions)
        .then((response) => {
        console.log(response)
        console.log("The add role worked");
        addMethods.data.addRole(response.title, response.salary, response.departId);
        start();
        })
        break;


    case 'View Employees':
      viewMethods.data.viewEmployees();
      start()
      break;

    case 'View Roles':
      viewMethods.data.viewRoles();
      start();
      break;

    case 'View Departments':
      viewMethods.data.viewDepartments();
      start();
      break;

    case 'View All':
      viewMethods.data.viewAll();
      start();
      break;
    
    case 'Delete Employees, Roles, or Departments':
      const deleteQuestions = [
        {                                                    
          name: 'delete',
          type: 'list',
          message: 'What would you like to delete?',
          choices: ['Delete All Employees', 'Delete Employee by ID', 'Delete All Roles',
           'Delete Role by title','Delete all departments', 'Delete department by name'],
        },                                                                       
        ];
      
        inquirer.prompt(deleteQuestions)
        .then((response) => {
          console.log(response.delete)
          switch(response.delete) {
            case 'Delete All Employees':
              console.log('delete case works');
              deleteMethods.data.deleteAllEmployees();
              start();
            break;

            case 'Delete Employee by ID':
              const deleteEmployeeQuestion = [
                {                                                    
                  name: 'employeeNumber',
                  type: 'input',
                  message: 'What is the employee ID number you would like to delete?',
                 
                },                                                                       
                ];
              
                inquirer.prompt(deleteEmployeeQuestion)
                .then((response) => {
                  console.log(response.employeeNumber);
                  deleteMethods.data.deleteEmployee(response.employeeNumber);
                  start();
              
                })
              break;

              case 'Delete All Roles':
                console.log('delete roles case works');
                deleteMethods.data.deleteAllRoles();
                start();
              break;

              case 'Delete Role by title':
                    const deleteRoleQuestion = [
                    {                                                    
                        name: 'roleTitle',
                        type: 'input',
                         message: 'What is the title of the role you would like to delete?',
                 
                    },                                                                       
                    ];
              
                inquirer.prompt(deleteRoleQuestion)
                .then((response) => {
                  console.log(response.roleTitle);
                  deleteMethods.data.deleteRole(response.roleTitle);
                  start();
              
                })
              break;

              case 'Delete all departments':
                console.log('delete departments case works');
                deleteMethods.data.deleteAllDepartments();
                start();
              break;

              case 'Delete department by name':
                    const deleteDepartmentQuestion = [
                    {                                                    
                        name: 'departmentName',
                        type: 'input',
                         message: 'What is the name of the department you would like to delete?',
                 
                    },                                                                       
                    ];
              
                inquirer.prompt(deleteDepartmentQuestion)
                .then((response) => {
                  console.log(response.departmentName);
                  deleteMethods.data.deleteDepartment(response.departmentName);
                  start();
              
                })
              break;

              default:
                console.log("Something went wrong");
          }
        

        })
        break;

        case 'Update Roles':
          const updateQuestions = [
            {                                                    
              name: 'update',
              type: 'list',
              message: 'What would you like to update?',
              choices: ['update employee role', 'Delete Employee by ID', 'Delete All Roles',
               'Delete Role by title','Delete all departments', 'Delete department by name'],
            },                                                                       
            ];
          
            inquirer.prompt(updateQuestions)
            .then((response) => {
              console.log(response.update)
              switch(response.update) {
                case 'update employee role':
                  const updateEmployeeRole = [
                    {                                                    
                      name: 'oldRole',
                      type: 'input',
                      message: 'What is the role title to update?',
                     
                    },
                    {
                      name: 'newRole',
                      type: 'input',
                      message: 'What is the new role title?',
                    },

                    ];
                  
                    inquirer.prompt(updateEmployeeRole)
                    .then((response) => {
                      console.log(response.oldRole);
                      updateMethods.data.updateRole(response.oldRole, response.newRole);
                      start();
                  
                    })
                  break;
    
                  default:
                    console.log("Something went wrong");
              }
            
    
            })
            break;
    case 'End':
      connection.end();
      break;
      
    default:
      console.log("Something went wrong");
      start();

  }

});

};



start()




module.exports.data = startMethods;


















//   Build a command-line application that at a minimum allows the user to:

// fix view roles.
//   * Update employee roles

// Bonus points if you're able to:

//   * Update employee managers

//   * View employees by manager

//   * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

// We can frame this challenge as follows:
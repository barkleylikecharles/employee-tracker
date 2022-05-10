const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const { query } = require('express');
// const express = require('express');
// const PORT = process.env.PORT || 3002;
// const app = express();

// Connection to employee_db Database
const connection = mysql.createConnection ({
    host: 'localhost',
    // port: 3002,
    user: 'root',
    password: '',
    database: "employee_DB"
})

connection.connect(function(err){
    if (err) throw err;
    mainMenu();
})
//Start the application with a list of options
function mainMenu() {
    inquirer
        .prompt({
            name: 'menuStart',
            type: 'list',
            message: 'Welcome to the employee database. How would you like to start?',
            choices: [
                'View All Employees',
                'View All Departments',
                "View All Roles",
                "Add Employee",
                "Add Department",
                "Add Role",
                // "Update Role",
                // "Delete Employee",
                "EXIT"
            ]
        }).then(function (answer){
            switch (answer.menuStart) {
                case 'View All Employees':
                    viewEmployees();
                    break;
            
                case "View All Departments":
                    viewDepartment();
                    break;
                
                case "View All Roles":
                    viewRoles();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;
                case "Add Department":
                    addDepartment();
                    break;
            }
        })
};

//See all employees in database
function viewEmployees() {
    var query = `SELECT * FROM employee`;
    connection.query(query, function(err, answer) {
        if (err) throw err;
        console.log(answer.length + ' employees available to view.');
        console.table('All Employees:', answer);
        mainMenu();
    })
};
//All departments in database
function viewDepartment() {
    var query = `SELECT * FROM department`;
    connection.query(query, function(err, answer) {
        if (err) throw err;
        console.table('All Departments:', answer);
        mainMenu();
    })
};
//All roles in database
function viewRoles() {
    var query = `SELECT * FROM role`;
    connection.query(query, function(err, answer) {
        if (err) throw err;
        console.table('All Roles:', answer);
        mainMenu();
    })
};

function addEmployee() {
    inquirer
        .prompt([
            {
            type: "input",
            message: "What is the employee's first name?",
            name: "firstName",
               },
               {
            type: "input",
            message: "What is the employee's last name?",
            name: "lastName"
               },
               {
            type: "list",
            message: "What is the employee's role?",
            choices: ["software engineer",
                    "lead engineer",
                    "accounting manager",
                    "accountant",
                    "sales manager",
                    "salesperson",
                    "general counsel",
                    "associate attorney",
                    "human resources"
                    ],
            name: "addRole"
               },
               {
            type: "input",
            message: "What is the employee's manager id?",
            name: "addMgr"      
            }
        ])
        .then(function (answer) {
            const firstName = answer.firstName;
            const lastName = answer.lastName;
            const addRoleId = answer.addRole;
            const addMgrId = answer.addMgr; 
            const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id)  
                VALUES ("${firstName}, ${lastName}, ${addRoleId}, ${addMgrId}")`;
            connection.query(query, function (err, res) {
                if (err) {
                    throw err;
                }
                console.table(res);
                mainMenu();
                });
            });
}

function addDepartment() {
    var query = `SELECT * FROM department`;
    connection.query (query, function (err, res) {
        if (err) {
            throw err;
        }
        console.log('');
        console.table('Current Departments', query);

    inquirer    
        .prompt ([
           { 
            type: "input",
            message: "What department are you adding?",
            name: "newDept",   
           }
        ]).then(function (answer) {
            connection.query(`INSERT INTO department(department_name) VALUES ( ? )`, answer.newDept)
            mainMenu();
        });
    });
    }

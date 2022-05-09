const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

// Connection to employee_db Database
const connection = mysql.createConnection ({
    host: 'localhost',
    // port: 3000,
    user: 'root',
    password: '',
    database: "employee_DB"
})

connection.connect(function(err){
    if (err) throw err;
    mainMenu();
})

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
            }
        })
};


function viewEmployees() {
    var query = 'SELECT * FROM employee';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.log(res.length + ' employees available to view.');
        console.table('All Employees:', res);
        mainMenu();
    })
};

function viewDepartment() {
    var query = 'SELECT * FROM department';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table('All Departments:', res);
        mainMenu();
    })
};

function viewRoles() {
    var query = 'SELECT * FROM role';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table('All Roles:', res);
        mainMenu();
    })
};
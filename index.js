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
            }
        })
};

function viewEmployees() {
    var query = 'SELECT * FROM employee';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.log(employee.length + 'employees available to view.');
        mainMenu();
    })
}
const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

// Connection to employee_db Database
const connection = mysql.createConnection ({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: '',
    database: "employee_DB"
})

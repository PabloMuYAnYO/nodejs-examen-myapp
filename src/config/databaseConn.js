const mysql = require('mysql2');
const { HOST, USER, PASSWORD, DATABASE } = require('./config');

console.log(HOST);
console.log(USER);
console.log(PASSWORD);
console.log(DATABASE);

const dataConnection = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
});

module.exports = dataConnection;
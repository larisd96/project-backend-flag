const express = require('express');
const mysql = require('mysql2');
const dbConfig = require('./config/mysql-config');

const app = express();
const connection = mysql.createConnection(dbConfig);

app.get('/', (request, response) => response.status(200).send('Olá Mundo'));

app.listen(3333, () => console.log('Server run port 3333'));

const mysql = require('mysql2');
require('dotenv').config();

const dbConfig = {
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
};

const connection = mysql.createConnection(dbConfig);

connection.connect(function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log(' DB conct sucess');
	}
});
module.exports = connection;

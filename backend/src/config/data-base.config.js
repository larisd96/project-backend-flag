const { Sequelize } = require("sequelize");
require('dotenv').config();

const { MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT } =
  process.env;

// Configure your MySQL database connection
const dbConfig = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: "mysql",
  port: MYSQL_PORT,
  define: {
    timestamps: false,
  },
});

// Test the database connection
async function testConnection() {
	try {
	  await dbConfig.authenticate();
	  console.log(
		"Connection to the database has been established successfully."
	  );
	} catch (error) {
	  console.error("Unable to connect to the database:", error);
	}
  }

module.exports = {
	dbConfig,
	testConnection,
  };
  
require("dotenv").config();
const { Sequelize } = require("sequelize");

// Initialize Sequelize with environment variables
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    logging: console.log // Enable SQL logging
  }
);

// Function to test the database connection
async function connectionToDb() {
  try {
    await sequelize.authenticate();
    console.log("Connection to DB successful");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
}

module.exports = { connectionToDb, sequelize };

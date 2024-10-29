const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db'); 

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Ensures id is auto-incremented
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  dueDate: {
    type: DataTypes.DATE
  },
  recurrenceInterval: {
    type: DataTypes.ENUM('daily', 'weekly', 'monthly', 'yearly')
  },
  recurrenceFrequency: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  recurrenceDaysOfWeek: {
    type: DataTypes.JSON // Ensure your DB supports JSON if using this type
  },
  recurrenceNthDay: {
    type: DataTypes.INTEGER
  },
  startDate: {
    type: DataTypes.DATE
  },
  endDate: {
    type: DataTypes.DATE
  }
}, {
  timestamps: true // Includes createdAt and updatedAt fields automatically
});

module.exports = Task;

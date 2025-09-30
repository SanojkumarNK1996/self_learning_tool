const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Assignments = db.pgConn.define('Assignments', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  tags: {
    type: DataTypes.STRING,
  },
  dueDate: {
    type: DataTypes.DATE,
  },
}, { timestamps: true });

module.exports = Assignments;

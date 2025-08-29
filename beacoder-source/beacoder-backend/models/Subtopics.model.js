const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Subtopics = db.pgConn.define('Subtopics', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // topicId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  displayOrder: {
    type: DataTypes.INTEGER,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, { timestamps: true });

module.exports = Subtopics;

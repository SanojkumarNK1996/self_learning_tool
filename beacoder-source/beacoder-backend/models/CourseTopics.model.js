const { DataTypes } = require('sequelize');
const db = require('../config/db');

const CourseTopics = db.pgConn.define('CourseTopics', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // courseId: {
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
  estimatedHours: {
    type: DataTypes.INTEGER,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, { timestamps: true });

module.exports = CourseTopics;

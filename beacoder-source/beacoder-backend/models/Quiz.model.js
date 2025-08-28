const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Quiz = db.pgConn.define('Quiz', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // subtopicId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
  // topicId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
  // courseId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
  tags: {
    type: DataTypes.STRING,
  },
  questionData: {
    type: DataTypes.JSONB,  // JSON format for Qs + options + answer
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, { timestamps: true });

module.exports = Quiz;

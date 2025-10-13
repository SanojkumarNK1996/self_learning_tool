const { DataTypes } = require('sequelize');
const db = require('../config/db');

const AssignmentSubmission = db.pgConn.define('AssignmentSubmission', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  githubUrl: { type: DataTypes.STRING },
  marks: { type: DataTypes.INTEGER },
  tags: { type: DataTypes.JSON },
}, { timestamps: true });

module.exports = AssignmentSubmission;
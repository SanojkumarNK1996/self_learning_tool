const { DataTypes } = require('sequelize');
const db = require('../config/db');

const ProgressTrack = db.pgConn.define('ProgressTrack', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  isCompleted: { type: DataTypes.BOOLEAN, defaultValue: false },
  completedAt: { type: DataTypes.DATE },
  percentage: { type: DataTypes.FLOAT, defaultValue: 0 }
}, { timestamps: true });

module.exports = ProgressTrack;
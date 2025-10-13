const { DataTypes } = require('sequelize');
const db = require('../config/db');

const PairProgramming = db.pgConn.define('PairProgramming', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  date: { type: DataTypes.DATE, allowNull: false },
  tags: { type: DataTypes.JSON },
  status: { type: DataTypes.ENUM('pending', 'accepted', 'rejected'), defaultValue: 'pending' },
  reason: { type: DataTypes.STRING }
}, { timestamps: true });

module.exports = PairProgramming;
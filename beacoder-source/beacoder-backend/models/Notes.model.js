const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Notes = db.pgConn.define('Notes', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  content: { type: DataTypes.TEXT, allowNull: false }
}, { timestamps: true });

module.exports = Notes;

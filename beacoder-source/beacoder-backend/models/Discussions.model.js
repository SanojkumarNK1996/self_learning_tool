const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Discussions = db.pgConn.define('Discussions', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  message: { type: DataTypes.TEXT, allowNull: false },
  tags: { type: DataTypes.JSON },
}, { timestamps: true });

module.exports = Discussions;
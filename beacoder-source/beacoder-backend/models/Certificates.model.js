const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Certificates = db.pgConn.define('Certificates', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  issuedDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { timestamps: true });

module.exports = Certificates;
const { DataTypes } = require('sequelize');
const db = require('../config/db');

const DiscussionReplies = db.pgConn.define('DiscussionReplies', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  message: { type: DataTypes.TEXT, allowNull: false }
}, { timestamps: true });

module.exports = DiscussionReplies;

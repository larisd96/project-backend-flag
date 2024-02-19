const { DataTypes } = require("sequelize");
const { dbConfig } = require("../config/data-base.config");

exports.shopListModel = dbConfig.define("shoplists", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  items: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATEONLY,
    defaultValue: new Date(),
  },
  updated_at: {
    type: DataTypes.DATEONLY,
    defaultValue: new Date(),
  },
});

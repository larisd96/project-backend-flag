const { DataTypes } = require("sequelize");
const { dbConfig } = require("../config/data-base.config");

exports.shopListModel = dbConfig.define("shopList", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
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
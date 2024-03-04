const { DataTypes } = require("sequelize");
const { dbConfig } = require("../config/data-base.config");

const shopListModel = dbConfig.define("shopLists", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("IN_PROGRESS", "COMPLETE"),
    defaultValue: "IN_PROGRESS",
    allowNull: null,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  createdBy: {
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

const shopListItemModel = dbConfig.define("shopListItems", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  shopListId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: shopListModel,
      key: "id",
    },
  },
});

shopListModel.hasMany(shopListItemModel, {
  as: "shopListItems",
  foreignKey: "shopListId",
});

shopListItemModel.belongsTo(shopListModel, {
  foreignKey: "shopListId",
});

module.exports = {
  shopListModel,
  shopListItemModel,
};

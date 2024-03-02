const { DataTypes } = require("sequelize");
const { dbConfig } = require("../config/data-base.config");

const shopListModel = dbConfig.define("shoplists", {
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

const shopListItemModel = dbConfig.define('shoplistitems', {

id: {
  type:DataTypes.UUID,
  primaryKey:true,
  defaultValue: DataTypes.UUIDV4
}, 
title: {
  type: DataTypes.STRING,
  allowNull: false,
},

quantity:{
  type: DataTypes.INTEGER,
  allowNull: false,
},
shopListId:{
type: DataTypes.UUID,
allowNull: false, 
references:{
  model: shopListModel,
  key: 'id',
}
}
})

shopListModel.hasMany(shopListItemModel,{
  as:'shopListItem', foreignKey: 'shopListId'
});

shopListItemModel.belongsTo(shopListModel, {
  foreignKey: 'shopListId'
})

module.exports = {
  shopListModel,
  shopListItemModel
}
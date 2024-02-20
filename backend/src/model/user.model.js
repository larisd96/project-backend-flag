const { DataTypes } = require("sequelize");
const { dbConfig } = require("../config/data-base.config");

exports.userModel = dbConfig.define ("ihomeusers",{
name: {
    type: DataTypes.STRING,
    allowNull: false,
},
email:{
    type: DataTypes.STRING,
    allowNull: true,
},
password: {
    type: DataTypes.STRING,
    allowNull: false
  }

});

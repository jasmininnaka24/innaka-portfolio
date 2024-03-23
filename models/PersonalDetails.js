const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const PersonalDetails = sequelize.define("PersonalDetails", {
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = PersonalDetails;

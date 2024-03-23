const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const AboutMe = sequelize.define("AboutMe", {
  aboutme: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = AboutMe;

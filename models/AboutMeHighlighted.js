const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const AboutMeHighlighted = sequelize.define("AboutMeHighlighted", {
  aboutMeHighlighted: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = AboutMeHighlighted;

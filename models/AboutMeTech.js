const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const AboutMeTech = sequelize.define("AboutMeTech", {
  imageName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = AboutMeTech;

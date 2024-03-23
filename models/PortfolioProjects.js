const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const PortfolioServices = sequelize.define("PortfolioServices", {
  projectTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  projectDesc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  projectLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  githubLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  datePublished: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  imgName: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = PortfolioServices;

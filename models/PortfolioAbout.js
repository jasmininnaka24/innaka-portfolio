const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const PortfolioAbout = sequelize.define("PortfolioAbout", {
  jobRole: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  currentlyPracticing: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  resumeLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

PortfolioAbout.associate = (models) => {
  PortfolioAbout.hasMany(models.AboutMeInParagraph, {
    onDelete: "cascade",
  });
  PortfolioAbout.hasMany(models.AboutMeTech, {
    onDelete: "cascade",
  });
};

module.exports = PortfolioAbout;

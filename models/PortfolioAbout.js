const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const PortfolioAbout = sequelize.define("PortfolioAbout", {
  resumeLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

PortfolioAbout.associate = (models) => {
  PortfolioAbout.hasMany(models.AboutMe, {
    onDelete: "cascade",
  });
  PortfolioAbout.hasMany(models.AboutMeHighlighted, {
    onDelete: "cascade",
  });
  PortfolioAbout.hasMany(models.AboutMeTech, {
    onDelete: "cascade",
  });
};

module.exports = PortfolioAbout;

const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const AboutMeInParagraph = sequelize.define("AboutMeInParagraph", {
  paragraph: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PortfolioAboutId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

AboutMeInParagraph.associate = (models) => {
  AboutMeInParagraph.belongsTo(models.PortfolioAbout, {
    foreignKey: {
      name: "PortfolioAboutId",
      allowNull: true,
      onDelete: "cascade",
    },
  });
};

module.exports = AboutMeInParagraph;

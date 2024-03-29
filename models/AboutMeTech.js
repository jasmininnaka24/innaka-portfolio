const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const AboutMeTech = sequelize.define("AboutMeTech", {
  imageName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PortfolioAboutId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

AboutMeTech.associate = (models) => {
  AboutMeTech.belongsTo(models.PortfolioAbout, {
    foreignKey: {
      name: "PortfolioAboutId",
      allowNull: true,
      onDelete: "cascade",
    },
  });
};

module.exports = AboutMeTech;

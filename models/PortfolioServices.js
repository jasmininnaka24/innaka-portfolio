const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const PortfolioServices = sequelize.define("PortfolioServices", {
  serviceName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  serviceDesc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  serviceImgName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Project Category
PortfolioServices.associate = (models) => {
  PortfolioServices.hasMany(models.PortfolioProjects, {
    onDelete: "cascade",
  });
};

module.exports = PortfolioServices;

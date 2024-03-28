const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const PortfolioProjects = sequelize.define("PortfolioProjects", {
  projectTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  projectDesc: {
    type: DataTypes.TEXT,
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
    type: DataTypes.STRING,
    allowNull: false,
  },
  projectCategory: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

PortfolioProjects.associate = (models) => {
  PortfolioProjects.belongsTo(models.PortfolioServices, {
    foreignKey: {
      name: "ProjectCategory",
      allowNull: true,
      onDelete: "cascade",
    },
  });
  PortfolioProjects.hasMany(models.PortfolioServices, {
    onDelete: "cascade",
  });
  PortfolioProjects.hasMany(models.ProjectTechs, {
    onDelete: "cascade",
  });
};

module.exports = PortfolioProjects;

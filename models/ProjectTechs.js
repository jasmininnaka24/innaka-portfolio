const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const ProjectTechs = sequelize.define("ProjectTechs", {
  projectTool: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PortfolioProjectsId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

ProjectTechs.associate = (models) => {
  ProjectTechs.belongsTo(models.PortfolioProjects, {
    foreignKey: {
      name: "PortfolioProjectsId",
      allowNull: true,
      onDelete: "cascade",
    },
  });
};

module.exports = ProjectTechs;

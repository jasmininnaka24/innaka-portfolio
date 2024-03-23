const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const ProjectTechs = sequelize.define("ProjectTechs", {
  projectTool: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

ProjectTechs.associate = (models) => {
  ProjectTechs.hasMany(models.PortfolioProjects, {
    onDelete: "cascade",
  });
};

module.exports = ProjectTechs;

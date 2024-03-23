const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const QualificationExperience = sequelize.define("QualificationExperience", {
  jobTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jobDesc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jobStarted: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  jobEnded: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = QualificationExperience;

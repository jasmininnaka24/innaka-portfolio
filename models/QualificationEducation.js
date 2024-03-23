const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const QualificationEducation = sequelize.define("QualificationEducation", {
  schoolName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  programTaken: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  schoolStarted: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  schoolEnded: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = QualificationEducation;

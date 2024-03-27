const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const PersonalDetails = sequelize.define("PersonalDetails", {
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  interest: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  approach: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

PersonalDetails.associate = (models) => {
  PersonalDetails.hasMany(models.PersonalDetailsSocialLinks, {
    onDelete: "cascade",
  });
};

module.exports = PersonalDetails;

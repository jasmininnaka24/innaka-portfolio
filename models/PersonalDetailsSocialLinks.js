const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const PersonalDetailsSocialLinks = sequelize.define(
  "PersonalDetailsSocialLinks",
  {
    highlightedWord: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

PersonalDetailsSocialLinks.associate = (models) => {
  PersonalDetailsSocialLinks.hasMany(models.PersonalDetails, {
    onDelete: "cascade",
  });
};

module.exports = PersonalDetailsSocialLinks;

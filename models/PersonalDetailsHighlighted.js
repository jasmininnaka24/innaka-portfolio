const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const PersonalDetailsHighlighted = sequelize.define(
  "PersonalDetailsHighlighted",
  {
    socialLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    socialLabel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

PersonalDetailsHighlighted.associate = (models) => {
  PersonalDetailsHighlighted.hasMany(models.PersonalDetails, {
    onDelete: "cascade",
  });
};

module.exports = PersonalDetailsHighlighted;

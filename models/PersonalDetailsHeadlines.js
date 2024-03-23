const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const PersonalDetailsHeadlines = sequelize.define("PersonalDetailsHeadlines", {
  headline: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

PersonalDetailsHeadlines.associate = (models) => {
  PersonalDetailsHeadlines.hasMany(models.PersonalDetails, {
    onDelete: "cascade",
  });
};

module.exports = PersonalDetailsHeadlines;

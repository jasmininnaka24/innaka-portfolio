const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const PersonalDetailsSocialLinks = sequelize.define(
  "PersonalDetailsSocialLinks",
  {
    platform: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    label: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PersonalDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }
);
PersonalDetailsSocialLinks.associate = (models) => {
  PersonalDetailsSocialLinks.belongsTo(models.PersonalDetails, {
    foreignKey: {
      name: "PersonalDetailsId",
      allowNull: true,
      onDelete: "cascade",
    },
  });
};

module.exports = PersonalDetailsSocialLinks;

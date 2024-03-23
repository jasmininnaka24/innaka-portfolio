const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const QualificationCredentials = sequelize.define("QualificationCredentials", {
  credentialImgName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = QualificationCredentials;

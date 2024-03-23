// setup.js

const sequelize = require("./utils/sequelize");

// models
require("./models/AboutMe");
require("./models/AboutMeHighlighted");
require("./models/AboutMeTech");
require("./models/PersonalDetails");
require("./models/PersonalDetailsHeadlines");
require("./models/PersonalDetailsHighlighted");
require("./models/PersonalDetailsSocialLinks");
require("./models/PortfolioAbout");
require("./models/PortfolioProjects");
require("./models/PortfolioServices");
require("./models/ProjectTechs");
require("./models/QualificationCredentials");
require("./models/QualificationEducation");
require("./models/QualificationExperience");

async function setup() {
  try {
    // Connect to the database
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Synchronize models (create tables if they don't exist)
    await sequelize.sync({ alter: true });

    console.log("Tables synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing tables:", error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
}

setup();

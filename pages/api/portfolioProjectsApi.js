import { query } from "@/app/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const portfolioProjects = await query({
      query: "SELECT * FROM portfolioprojects",
      values: [],
    });

    res.status(200).json({ data: portfolioProjects });
  }

  if (req.method === "POST") {
    const projectTitle = req.body.projectTitle;
    const projectDesc = req.body.projectDesc;
    const projectLink = req.body.projectLink;
    const githubLink = req.body.githubLink;
    const datePublished = req.body.datePublished;
    const imgName = req.body.imgName;
    const projectCategory = req.body.projectCategory;

    try {
      const savePortfolioProjects = await query({
        query: `INSERT INTO portfolioprojects (projectTitle, projectDesc, projectLink, githubLink, datePublished, imgName, projectCategory, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
        values: [
          projectTitle,
          projectDesc,
          projectLink,
          githubLink,
          datePublished,
          imgName,
          projectCategory,
        ],
      });

      if (savePortfolioProjects && savePortfolioProjects.insertId) {
        const portfolioProjects = {
          project_information_project_title: savePortfolioProjects.insertId,
          project_information_project_desc: projectTitle,
          project_information_project_link: projectDesc,
          project_information_github_link: githubLink,
          project_information_date_published: datePublished,
          project_information_img_name: imgName,
          project_information_project_category: projectCategory,
        };
        res.status(200).json({ message: "Success", data: portfolioProjects });
      } else {
        res.status(500).json({
          message: "Error occurred while saving project information",
        });
      }
    } catch (error) {
      console.error("Error inserting project information:", error);
      res
        .status(500)
        .json({ message: "Error occurred while saving project information" });
    }
  }

  if (req.method === "PUT") {
    const id = req.body.id;
    const projectTitle = req.body.projectTitle;
    const projectDesc = req.body.projectDesc;
    const projectLink = req.body.projectLink;
    const githubLink = req.body.githubLink;
    const datePublished = req.body.datePublished;
    const imgName = req.body.imgName;
    const projectCategory = req.body.projectCategory;

    try {
      const updatePortfolioProjects = await query({
        query: `UPDATE portfolioprojects SET projectTitle = ?, projectDesc = ?,  projectLink = ?, githubLink = ?, datePublished = ?,  imgName = ?, projectCategory = ? WHERE id = ?`,
        values: [projectTitle, projectDesc, projectLink, id],
      });

      if (updatePortfolioProjects && updatePortfolioProjects.affectedRows) {
        const portfolioProjects = {
          project_information_project_title: updatePortfolioProjects.insertId,
          project_information_project_desc: projectTitle,
          project_information_project_link: projectDesc,
          project_information_github_link: githubLink,
          project_information_date_published: datePublished,
          project_information_img_name: imgName,
          project_information_project_category: projectCategory,
        };
        res.status(200).json({ message: "Success", data: portfolioProjects });
      } else {
        res.status(500).json({
          message: "Error occurred while updating project information",
        });
      }
    } catch (error) {
      console.error("Error updating project information:", error);
      res.status(500).json({
        message: "Error occurred while updating project information",
      });
    }
  }

  if (req.method === "DELETE") {
    const id = req.body.id;

    try {
      const deletePortfolioProjects = await query({
        query: "DELETE FROM portfolioprojects WHERE id = ?",
        values: [id],
      });

      if (deletePortfolioProjects && deletePortfolioProjects.affectedRows) {
        res.status(200).json({ message: "Successfully deleted" });
      } else {
        res
          .status(500)
          .json({ message: "Error occurred while deleting portfolio service" });
      }
    } catch (error) {
      console.error("Error deleting portfolio service:", error);
      res
        .status(500)
        .json({ message: "Error occurred while deleting portfolio service" });
    }
  }
}

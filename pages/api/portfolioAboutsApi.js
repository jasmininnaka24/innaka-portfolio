import { query } from "@/app/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const portfolioAbouts = await query({
      query: "SELECT * FROM portfolioabouts",
      values: [],
    });

    res.status(200).json({ data: portfolioAbouts });
  }

  if (req.method === "POST") {
    const jobRole = req.body.jobRole;
    const currentlyPracticing = req.body.currentlyPracticing;
    const resumeLink = req.body.resumeLink;

    try {
      const savePortfolioAbouts = await query({
        query: `INSERT INTO portfolioabouts (jobRole, currentlyPracticing, resumeLink, createdAt, updatedAt) VALUES (?, ?, ?, NOW(), NOW())`,
        values: [jobRole, currentlyPracticing, resumeLink],
      });

      if (savePortfolioAbouts && savePortfolioAbouts.insertId) {
        const portfolioAbouts = {
          about_information_id: savePortfolioAbouts.insertId,
          about_information_job_role: jobRole,
          about_information_currently_practicing: currentlyPracticing,
          about_information_resume_link: resumeLink,
        };
        res.status(200).json({ message: "Success", data: portfolioAbouts });
      } else {
        res
          .status(500)
          .json({ message: "Error occurred while saving about information" });
      }
    } catch (error) {
      console.error("Error inserting about information:", error);
      res
        .status(500)
        .json({ message: "Error occurred while saving about information" });
    }
  }

  if (req.method === "PUT") {
    const id = req.body.id;
    const jobRole = req.body.jobRole;
    const currentlyPracticing = req.body.currentlyPracticing;
    const resumeLink = req.body.resumeLink;

    try {
      const updatePortfolioAbouts = await query({
        query: `UPDATE portfolioabouts SET jobRole = ?, currentlyPracticing = ?,  resumeLink = ? WHERE id = ?`,
        values: [jobRole, currentlyPracticing, resumeLink, id],
      });

      if (updatePortfolioAbouts && updatePortfolioAbouts.affectedRows) {
        const portfolioAbouts = {
          about_information_id: id,
          about_information_job_role: jobRole,
          about_information_currently_practicing: currentlyPracticing,
          about_information_resume_link: resumeLink,
        };
        res.status(200).json({ message: "Success", data: portfolioAbouts });
      } else {
        res
          .status(500)
          .json({ message: "Error occurred while updating about information" });
      }
    } catch (error) {
      console.error("Error updating about information:", error);
      res
        .status(500)
        .json({ message: "Error occurred while updating about information" });
    }
  }
}

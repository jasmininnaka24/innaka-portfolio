import { query } from "@/app/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const portfolioAboutsParagraph = await query({
      query: "SELECT * FROM aboutmeinparagraphs",
      values: [],
    });

    res.status(200).json({ data: portfolioAboutsParagraph });
  }

  if (req.method === "POST") {
    const paragraph = req.body.paragraph;
    const PortfolioAboutId = req.body.PortfolioAboutId;

    try {
      const savePortfolioAboutsParagraph = await query({
        query: `INSERT INTO aboutmeinparagraphs (paragraph, PortfolioAboutId, createdAt, updatedAt) VALUES (?, ?, NOW(), NOW())`,
        values: [paragraph, PortfolioAboutId],
      });

      if (
        savePortfolioAboutsParagraph &&
        savePortfolioAboutsParagraph.insertId
      ) {
        const portfolioAboutsParagraph = {
          about_information_id: savePortfolioAboutsParagraph.insertId,
          about_information_job_role: paragraph,
          about_information_currently_practicing: PortfolioAboutId,
        };
        res
          .status(200)
          .json({ message: "Success", data: portfolioAboutsParagraph });
      } else {
        res
          .status(500)
          .json({ message: "Error occurred while saving about paragraphs" });
      }
    } catch (error) {
      console.error("Error inserting about paragraphs:", error);
      res
        .status(500)
        .json({ message: "Error occurred while saving about paragraphs" });
    }
  }

  if (req.method === "PUT") {
    const id = req.body.id;
    const paragraph = req.body.paragraph;
    const PortfolioAboutId = req.body.PortfolioAboutId;

    try {
      const updatePortfolioAboutsParagraph = await query({
        query: `UPDATE aboutmeinparagraphs SET paragraph = ?, PortfolioAboutId = ? WHERE id = ?`,
        values: [paragraph, PortfolioAboutId, id],
      });

      if (
        updatePortfolioAboutsParagraph &&
        updatePortfolioAboutsParagraph.affectedRows
      ) {
        const portfolioAboutsParagraph = {
          about_information_id: id,
          about_information_job_role: paragraph,
          about_information_currently_practicing: PortfolioAboutId,
        };
        res
          .status(200)
          .json({ message: "Success", data: portfolioAboutsParagraph });
      } else {
        res
          .status(500)
          .json({ message: "Error occurred while updating about paragraphs" });
      }
    } catch (error) {
      console.error("Error updating about paragraphs:", error);
      res
        .status(500)
        .json({ message: "Error occurred while updating about paragraphs" });
    }
  }
}

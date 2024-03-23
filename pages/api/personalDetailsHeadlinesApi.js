import { query } from "@/app/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const headlines = await query({
      query: "SELECT * FROM personaldetailsheadlines",
      values: [],
    });

    res.status(200).json({ data: headlines });
  }

  if (req.method === "POST") {
    const headline = req.body.headline;

    try {
      const saveHeadlines = await query({
        query: `INSERT INTO personaldetailsheadlines (headline, createdAt, updatedAt) VALUES (?, ?, NOW(), NOW())`,
        values: [headline],
      });

      if (saveHeadlines && saveHeadlines.insertId) {
        const savedHeadlines = {
          personal_details_id: saveHeadlines.insertId,
          personal_details_headline: headline,
        };
        res.status(200).json({ message: "Success", data: savedHeadlines });
      } else {
        res
          .status(500)
          .json({ message: "Error occurred while saving headlines" });
      }
    } catch (error) {
      console.error("Error inserting headlines:", error);
      res
        .status(500)
        .json({ message: "Error occurred while saving headlines" });
    }
  }

  if (req.method === "PUT") {
    const id = req.body.id;
    const headline = req.body.headline;

    try {
      const updatePersonalDetails = await query({
        query: `UPDATE personaldetailsheadlines SET headline = ? WHERE id = ?`,
        values: [headline, id],
      });

      if (updatePersonalDetails && updatePersonalDetails.affectedRows) {
        const headlines = {
          personal_details_id: id,
          personal_details_headline: headline,
        };
        res.status(200).json({ message: "Success", data: headlines });
      } else {
        res
          .status(500)
          .json({ message: "Error occurred while updating headlines" });
      }
    } catch (error) {
      console.error("Error updating headlines:", error);
      res
        .status(500)
        .json({ message: "Error occurred while updating headlines" });
    }
  }

  if (req.method === "DELETE") {
    const id = req.body.id;

    try {
      const deleteHeadlines = await query({
        query: "DELETE FROM personaldetailsheadlines WHERE id = ?",
        values: [id],
      });

      if (deleteHeadlines && deleteHeadlines.affectedRows) {
        res.status(200).json({ message: "Successfully deleted" });
      } else {
        res
          .status(500)
          .json({ message: "Error occurred while deleting headlines" });
      }
    } catch (error) {
      console.error("Error deleting headlines:", error);
      res
        .status(500)
        .json({ message: "Error occurred while deleting headlines" });
    }
  }
}

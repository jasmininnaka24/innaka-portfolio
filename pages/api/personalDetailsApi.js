import { query } from "@/app/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const personalDetails = await query({
      query: "SELECT * FROM personaldetails",
      values: [],
    });

    res.status(200).json({ data: personalDetails });
  }

  if (req.method === "POST") {
    const fullname = req.body.fullname;
    const email = req.body.email;

    try {
      const savePersonalDetails = await query({
        query: `INSERT INTO personaldetails (fullname, email, createdAt, updatedAt) VALUES (?, ?, NOW(), NOW())`,
        values: [fullname, email],
      });

      if (savePersonalDetails && savePersonalDetails.insertId) {
        const personalDetails = {
          personal_details_id: savePersonalDetails.insertId,
          personal_details_fullname: fullname,
          personal_details_email: email,
        };
        res.status(200).json({ message: "Success", data: personalDetails });
      } else {
        res
          .status(500)
          .json({ message: "Error occurred while saving personal details" });
      }
    } catch (error) {
      console.error("Error inserting personal details:", error);
      res
        .status(500)
        .json({ message: "Error occurred while saving personal details" });
    }
  }

  if (req.method === "PUT") {
    const id = req.body.id;
    const fullname = req.body.fullname;
    const email = req.body.email;

    try {
      const updatePersonalDetails = await query({
        query: `UPDATE personaldetails SET fullname = ?, email = ? WHERE id = ?`,
        values: [fullname, email, id],
      });

      if (updatePersonalDetails && updatePersonalDetails.affectedRows) {
        const personalDetails = {
          personal_details_id: id,
          personal_details_fullname: fullname,
          personal_details_email: email,
        };
        res.status(200).json({ message: "Success", data: personalDetails });
      } else {
        res
          .status(500)
          .json({ message: "Error occurred while updating personal details" });
      }
    } catch (error) {
      console.error("Error updating personal details:", error);
      res
        .status(500)
        .json({ message: "Error occurred while updating personal details" });
    }
  }

  if (req.method === "DELETE") {
    const id = req.body.id;

    try {
      const deletePersonalDetails = await query({
        query: "DELETE FROM personaldetails WHERE id = ?",
        values: [id],
      });

      if (deletePersonalDetails && deletePersonalDetails.affectedRows) {
        res.status(200).json({ message: "Successfully deleted" });
      } else {
        res
          .status(500)
          .json({ message: "Error occurred while deleting personal details" });
      }
    } catch (error) {
      console.error("Error deleting personal details:", error);
      res
        .status(500)
        .json({ message: "Error occurred while deleting personal details" });
    }
  }
}

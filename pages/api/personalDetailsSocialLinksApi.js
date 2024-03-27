import { query } from "@/app/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const socialLinks = await query({
      query: "SELECT * FROM personaldetailssociallinks",
      values: [],
    });

    res.status(200).json({ data: socialLinks });
  }

  if (req.method === "POST") {
    const platform = req.body.platform;
    const link = req.body.link;
    const label = req.body.label;
    const PersonalDetailsId = req.body.PersonalDetailsId;

    try {
      const saveSocialLinks = await query({
        query: `INSERT INTO personaldetailssociallinks (platform, link, label, PersonalDetailsId, createdAt, updatedAt) VALUES (?, ?, ?, ?, NOW(), NOW())`,
        values: [platform, link, label, PersonalDetailsId],
      });

      if (saveSocialLinks && saveSocialLinks.insertId) {
        const socialLinks = {
          personal_details_id: saveSocialLinks.insertId,
          personal_details_platform: platform,
          personal_details_link: link,
          personal_details_label: label,
          personal_details_PersonalDetailsId: PersonalDetailsId,
        };
        res.status(200).json({ message: "Success", data: socialLinks });
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
    const platform = req.body.platform;
    const link = req.body.link;
    const label = req.body.label;
    const PersonalDetailsId = req.body.PersonalDetailsId;

    try {
      const updateSocialLinks = await query({
        query: `UPDATE personaldetailssociallinks SET platform = ?, link = ?,  label = ?, PersonalDetailsId = ? WHERE id = ?`,
        values: [platform, link, label, PersonalDetailsId, id],
      });

      if (updateSocialLinks && updateSocialLinks.affectedRows) {
        const socialLinks = {
          personal_details_id: id,
          personal_details_platform: platform,
          personal_details_link: link,
          personal_details_label: label,
          personal_details_PersonalDetailsId: PersonalDetailsId,
        };
        res.status(200).json({ message: "Success", data: socialLinks });
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
}

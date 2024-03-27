import { query } from "@/app/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const portfolioServices = await query({
      query: "SELECT * FROM portfolioservices",
      values: [],
    });

    res.status(200).json({ data: portfolioServices });
  }

  if (req.method === "POST") {
    const serviceName = req.body.serviceName;
    const serviceDesc = req.body.serviceDesc;
    const serviceImgName = req.body.serviceImgName;

    try {
      const savePortfolioServices = await query({
        query: `INSERT INTO portfolioservices (serviceName, serviceDesc, serviceImgName, createdAt, updatedAt) VALUES (?, ?, ?, NOW(), NOW())`,
        values: [serviceName, serviceDesc, serviceImgName],
      });

      if (savePortfolioServices && savePortfolioServices.insertId) {
        const portfolioServices = {
          services_information_id: savePortfolioServices.insertId,
          services_information_job_role: serviceName,
          services_information_currently_practicing: serviceDesc,
          services_information_resume_link: serviceImgName,
        };
        res.status(200).json({ message: "Success", data: portfolioServices });
      } else {
        res.status(500).json({
          message: "Error occurred while saving services information",
        });
      }
    } catch (error) {
      console.error("Error inserting services information:", error);
      res
        .status(500)
        .json({ message: "Error occurred while saving services information" });
    }
  }

  if (req.method === "PUT") {
    const id = req.body.id;
    const serviceName = req.body.serviceName;
    const serviceDesc = req.body.serviceDesc;
    const serviceImgName = req.body.serviceImgName;

    try {
      const updatePortfolioServices = await query({
        query: `UPDATE portfolioservices SET serviceName = ?, serviceDesc = ?,  serviceImgName = ? WHERE id = ?`,
        values: [serviceName, serviceDesc, serviceImgName, id],
      });

      if (updatePortfolioServices && updatePortfolioServices.affectedRows) {
        const portfolioServices = {
          services_information_id: id,
          services_information_job_role: serviceName,
          services_information_currently_practicing: serviceDesc,
          services_information_resume_link: serviceImgName,
        };
        res.status(200).json({ message: "Success", data: portfolioServices });
      } else {
        res.status(500).json({
          message: "Error occurred while updating services information",
        });
      }
    } catch (error) {
      console.error("Error updating services information:", error);
      res.status(500).json({
        message: "Error occurred while updating services information",
      });
    }
  }

  if (req.method === "DELETE") {
    const id = req.body.id;

    try {
      const deletePortfolioServices = await query({
        query: "DELETE FROM portfolioservices WHERE id = ?",
        values: [id],
      });

      if (deletePortfolioServices && deletePortfolioServices.affectedRows) {
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

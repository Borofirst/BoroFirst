import express from "express";
import upload from "../utils/multer.js";
import submitCareerApplication from "../controller/career.controller.js";



const careerRoutes = express.Router();

// Submit career application
careerRoutes.post(
  "/apply",
  upload.single("resume"),
  submitCareerApplication
);

export default careerRoutes;
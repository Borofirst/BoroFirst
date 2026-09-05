import "dotenv/config";
// dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./db/db.js";
import router from "./Router/router.contact.rout.js";
import routerPartner from "./Router/router.become.partner.js";
import careerRoutes from "./Router/router.career.js";


const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// Routes

app.use("/api/contact", router);
app.use("/api/partner", routerPartner);
app.use("/api/career", careerRoutes);

// Health check

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "BoroFirst API is running",
  });
});

app.use((error, req, res, next) => {
  console.error("Server Error:", error);

  if (error.message?.includes("Only PDF")) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }

  if (error.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({
      success: false,
      message: "Resume size must be 5MB or less.",
    });
  }

  return res.status(500).json({
    success: false,
    message: "Something went wrong.",
  });
});



// 404

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});


// Error handler

app.use((error, req, res, next) => {
  console.error(error);

  res.status(500).json({
    success: false,
    message: "Something went wrong. Please try again later.",
  });
});


const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
};

startServer();


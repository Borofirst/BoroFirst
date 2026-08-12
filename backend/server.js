import "dotenv/config";
// dotenv.config();
// console.log("EMAIL_USER:", process.env.EMAIL_USER);
// console.log(
//   "EMAIL_PASSWORD:",
//   process.env.EMAIL_PASSWORD ? "LOADED" : "MISSING"
// );
// console.log(
//   "CONTACT_RECEIVER_EMAIL:",
//   process.env.CONTACT_RECEIVER_EMAIL
// );
import express from "express";
import cors from "cors";
import connectDB from "./db/db.js";
import router from "./Router/router.contact.rout.js";


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


// Health check

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "BoroFirst API is running",
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
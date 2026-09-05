import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDirectory = path.join(process.cwd(), "uploads");

// Create uploads folder if it doesn't exist
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, {
    recursive: true,
  });
}

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },

  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);

    const uniqueName = `resume-${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${extension}`;
    cb(null, uniqueName);
  },
});

// Allowed file types
const allowedMimeTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const allowedExtensions = [".pdf", ".doc", ".docx"];

// File filter
const fileFilter = (req, file, cb) => {
  const extension = path
    .extname(file.originalname)
    .toLowerCase();

  const validMimeType = allowedMimeTypes.includes(file.mimetype);
  const validExtension = allowedExtensions.includes(extension);

  if (validMimeType && validExtension) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only PDF, DOC, and DOCX resume files are allowed."
      )
    );
  }
};

// Multer configuration
const upload = multer({
  storage,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },

  fileFilter,
});

export default upload;
import fs from "fs/promises";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

  

const submitCareerApplication = async (req, res) => {
  let resumePath = null;

  try {
    const {
      fullName,
      email,
      phone,
      department,
      position,
      message,
    } = req.body;

    // -----------------------------------------
    // Resume path
    // -----------------------------------------

    resumePath = req.file?.path || null;

    // -----------------------------------------
    // Validation
    // -----------------------------------------

    if (!fullName?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Full name is required.",
      });
    }

    if (!email?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Email address is required.",
      });
    }

    if (!phone?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Phone number is required.",
      });
    }

    if (!department?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Department is required.",
      });
    }

    if (!position?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Position is required.",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume is required.",
      });
    }

    // -----------------------------------------
    // Email subject
    // -----------------------------------------

    const subject = `New Career Application - ${fullName}`;

    // -----------------------------------------
    // Email body
    // -----------------------------------------

    const emailText = `
BOROFIRST - NEW CAREER APPLICATION
===================================

Candidate Information

Full Name:
${fullName}

Email:
${email}

Phone:
${phone}

Preferred Department:
${department}

Position:
${position}

Message:
${message || "No message provided."}

===================================

Resume:
${req.file.originalname}

This application was submitted through the BOROFIRST careers website.
`;

    // -----------------------------------------
    // Send email
    // -----------------------------------------

    await transporter.sendMail({
      from: `"BOROFIRST Careers" <${process.env.EMAIL_USER}>`,

      to: process.env.CONTACT_RECEIVER_EMAIL,

      replyTo: email,

      subject,

      text: emailText,

      attachments: [
        {
          filename: req.file.originalname,
          path: req.file.path,
          contentType: req.file.mimetype,
        },
      ],
    });



    // -----------------------------------------
    // Delete temporary resume
    // -----------------------------------------
    if (resumePath) {
      await fs.unlink(resumePath).catch(() => {});
    }

    // -----------------------------------------
    // Success response
    // -----------------------------------------

    return res.status(200).json({
      success: true,
      message: "Application submitted successfully.",
    });
  } catch (error) {
    console.error(
      "Career application error:",
      error
    );

    // -----------------------------------------
    // Delete uploaded file if email failed
    // -----------------------------------------

    if (resumePath) {
      await fs.unlink(resumePath).catch(() => {});
    }

    return res.status(500).json({
      success: false,
      message:
        "Unable to submit application. Please try again later.",
    });
  }
};

export default submitCareerApplication;
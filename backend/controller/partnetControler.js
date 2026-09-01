
import {sendNotification} from "../utils/sendEmail.js";
import partnerRequest from "../models/becomPartner.js";

export const createPartnerRequest = async (req, res, next) => {
  try {
    const {
      fullName,
      company,
      email,
      phone,
      partnershipType,
      message,
    } = req.body;
  
    if (
      !fullName ||
      !company ||
      !email ||
      !phone ||
      !partnershipType ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }
   

    const data = await partnerRequest.create({
      fullName,
      company,
      email,
      phone,
      partnershipType,
      message,
    });

    try {
       sendNotification("partner", data);
    } catch (emailError) {
      console.error(
        "Email notification failed:",
        emailError.message
      );
    }

    return res.status(201).json({
      success: true,
      message:
        "Your partnership request has been submitted successfully.",
      data: {
        id: partnerRequest._id,
      },
    });
  } catch (error) {
    next(error);
  }
};


import Contact from "../models/Contact.js";
import { sendContactNotification } from "../utils/sendEmail.js";

export const createContact = async (req, res, next) => {
  try {
    const {
      name,
      email,
      phone,
      city,
      loanType,
      loanAmount,
      purpose,
      message,
    } = req.body;
    console.log(req.body);

    // Basic validation
    if (
      !name ||
      !email ||
      !phone ||
      !city ||
      !loanType ||
      !loanAmount ||
      !purpose
    ) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required fields.",
      });
    }

    // Indian mobile validation
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid 10-digit mobile number.",
      });
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // Save enquiry
    const contact = await Contact.create({
      name,
      email,
      phone,
      city,
      loanType,
      loanAmount,
      purpose,
      message,
    });
   
    // contact.save(); 

    // Send notification email
    try {
     const responce = await sendContactNotification(contact);
    } catch (emailError) {
      console.error("Email notification failed:", emailError.message);

      // We don't fail the customer request because
      // the enquiry has already been safely stored.
    }

    return res.status(201).json({
      success: true,
      message:
        "Your request has been submitted successfully. Our team will contact you shortly.",
      data: {
        id: contact._id,
      },
    });
  } catch (error) {
    next(error);
  }
};
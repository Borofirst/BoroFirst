import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    loanType: {
      type: String,
      required: true,
      trim: true,
    },

    loanAmount: {
      type: String,
      required: true,
      trim: true,
    },

    purpose: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500,
    },

    message: {
      type: String,
      trim: true,
      maxlength: 2000,
      default: "",
    },

    status: {
      type: String,
      enum: ["new", "contacted", "in-progress", "closed"],
      default: "new",
    },

    source: {
      type: String,
      default: "website-contact-form",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Contact", contactSchema);
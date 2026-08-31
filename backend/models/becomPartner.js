import mongoose from "mongoose";


const partnerRequestSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    company: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 150,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 150,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please provide a valid email address",
      ],
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 20,
    },

    partnershipType: {
      type: String,
      required: true,
      enum: [
        "Bank",
        "NBFC",
        "Financial Institution",
        "Fintech",
        "Insurance",
        "Other",
      ],
    },

    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 2000,
    },

    status: {
      type: String,
      enum: [
        "new",
        "contacted",
        "in-progress",
        "approved",
        "rejected",
      ],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);


export default mongoose.model( "PartnerRequest", partnerRequestSchema)
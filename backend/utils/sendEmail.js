import nodemailer from "nodemailer";

const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    throw new Error("Email credentials are missing");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

// ✅ ADD VERIFICATION HERE
createTransporter().verify((error, success) => {
  if (error) {
    console.error("❌ SMTP VERIFY ERROR:", error);
  } else {
    console.log("✅ SMTP SERVER READY:", success);
  }
});

export const sendContactNotification = async (contact) => {
  // console.log("EMAIL_USER:", process.env.EMAIL_USER);
  // console.log("EMAIL_PASSWORD exists:", Boolean(process.env.EMAIL_PASSWORD));
  // console.log("CONTACT_RECEIVER_EMAIL:", process.env.CONTACT_RECEIVER_EMAIL);

  const mailOptions = {
    from: `"BoroFirst Website" <${process.env.EMAIL_USER}>`,
    to: process.env.CONTACT_RECEIVER_EMAIL,

    subject: `New Loan Enquiry - ${contact.loanType}`,

    html: `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto;">

        <h2 style="color:#10B981;">
          New Customer Enquiry
        </h2>

        <p>
          A new enquiry has been submitted through the BoroFirst website.
        </p>

        <hr />

        <h3>Customer Information</h3>

        <p>
          <strong>Name:</strong> ${contact.name}
        </p>

        <p>
          <strong>Email:</strong> ${contact.email}
        </p>

        <p>
          <strong>Phone:</strong> ${contact.phone}
        </p>

        <p>
          <strong>City:</strong> ${contact.city}
        </p>

        <h3>Loan Information</h3>

        <p>
          <strong>Loan Type:</strong> ${contact.loanType}
        </p>

        <p>
          <strong>Loan Amount:</strong> ${contact.loanAmount}
        </p>

        <p>
          <strong>Purpose:</strong> ${contact.purpose}
        </p>

        <p>
          <strong>Message:</strong> ${contact.message || "Not provided"}
        </p>

        <hr />

        <p style="color:#666;">
          Submitted through the BoroFirst website.
        </p>

      </div>
    `,
  };

  try {
    const result = await createTransporter().sendMail(mailOptions);

    console.log("Email sent successfully:", result.messageId, result.response);

    return result;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};

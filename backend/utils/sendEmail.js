// import nodemailer from "nodemailer";

// const createTransporter = () => {
//   if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
//     throw new Error("Email credentials are missing");
//   }

//   return nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });
// };

// // ✅ ADD VERIFICATION HERE
// createTransporter().verify((error, success) => {
//   if (error) {
//     console.error("❌ SMTP VERIFY ERROR:", error);
//   } else {
//     console.log("✅ SMTP SERVER READY:", success);
//   }
// });

// export const sendContactNotification = async (contact) => {
//   console.log("EMAIL_USER:", process.env.EMAIL_USER);
//   console.log("EMAIL_PASSWORD exists:", Boolean(process.env.EMAIL_PASSWORD));
//   console.log("CONTACT_RECEIVER_EMAIL:", process.env.CONTACT_RECEIVER_EMAIL);

//   const mailOptions = {
//     from: `"BoroFirst Website" <${process.env.EMAIL_USER}>`,
//     to: process.env.CONTACT_RECEIVER_EMAIL,

//     subject: `New Loan Enquiry - ${contact.loanType}`,

//     html: `
//       <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto;">

//         <h2 style="color:#10B981;">
//           New Customer Enquiry
//         </h2>

//         <p>
//           A new enquiry has been submitted through the BoroFirst website.
//         </p>

//         <hr />

//         <h3>Customer Information</h3>

//         <p>
//           <strong>Name:</strong> ${contact.name}
//         </p>

//         <p>
//           <strong>Email:</strong> ${contact.email}
//         </p>

//         <p>
//           <strong>Phone:</strong> ${contact.phone}
//         </p>

//         <p>
//           <strong>City:</strong> ${contact.city}
//         </p>

//         <h3>Loan Information</h3>

//         <p>
//           <strong>Loan Type:</strong> ${contact.loanType}
//         </p>

//         <p>
//           <strong>Loan Amount:</strong> ${contact.loanAmount}
//         </p>

//         <p>
//           <strong>Purpose:</strong> ${contact.purpose}
//         </p>

//         <p>
//           <strong>Message:</strong> ${contact.message || "Not provided"}
//         </p>

//         <hr />

//         <p style="color:#666;">
//           Submitted through the BoroFirst website.
//         </p>

//       </div>
//     `,
//   };

//   try {
//     const result = await createTransporter().sendMail(mailOptions);

//     console.log("Email sent successfully:", result.messageId, result.response);

//     return result;
//   } catch (error) {
//     console.error("Email sending failed:", error);
//     throw error;
//   }
// };


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

// Verify SMTP connection once when the server starts
const verifyEmailConnection = async () => {
  try {
    const transporter = createTransporter();

    await transporter.verify();

    console.log("✅ SMTP SERVER READY");
  } catch (error) {
    console.error("❌ SMTP VERIFY ERROR:", error.message);
  }
};

verifyEmailConnection();

/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
*/

const escapeHtml = (value = "") => {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const getReceiverEmail = (type) => {
  if (type === "contact") {
    return process.env.CONTACT_RECEIVER_EMAIL;
  }

  if (type === "partner") {
    return (
      process.env.PARTNER_NOTIFICATION_EMAIL ||
      process.env.CONTACT_RECEIVER_EMAIL
    );
  }

  throw new Error(`Unsupported email notification type: ${type}`);
};

/*
|--------------------------------------------------------------------------
| Contact Email
|--------------------------------------------------------------------------
*/

const buildContactEmail = (contact) => {
  return {
    subject: `New Loan Enquiry - ${escapeHtml(contact.loanType)}`,

    html: `
      <div style="
        font-family: Arial, sans-serif;
        max-width: 700px;
        margin: 0 auto;
        background: #ffffff;
        color: #1e293b;
      ">

        <div style="
          background: linear-gradient(135deg, #186A07, #0B2578);
          padding: 28px;
          border-radius: 14px 14px 0 0;
          color: white;
        ">
          <h2 style="margin:0;">
            New Customer Enquiry
          </h2>

          <p style="
            margin:8px 0 0;
            opacity:0.85;
            font-size:14px;
          ">
            BoroFirst Website
          </p>
        </div>

        <div style="
          padding: 30px;
          border: 1px solid #e2e8f0;
          border-top: none;
          border-radius: 0 0 14px 14px;
        ">

          <p style="color:#64748b;">
            A new loan enquiry has been submitted through
            the BoroFirst website.
          </p>

          <h3 style="color:#0f172a;">
            Customer Information
          </h3>

          <p>
            <strong>Name:</strong>
            ${escapeHtml(contact.name)}
          </p>

          <p>
            <strong>Email:</strong>
            ${escapeHtml(contact.email)}
          </p>

          <p>
            <strong>Phone:</strong>
            ${escapeHtml(contact.phone)}
          </p>

          <p>
            <strong>City:</strong>
            ${escapeHtml(contact.city)}
          </p>

          <hr style="
            border:none;
            border-top:1px solid #e2e8f0;
            margin:25px 0;
          " />

          <h3 style="color:#0f172a;">
            Loan Information
          </h3>

          <p>
            <strong>Loan Type:</strong>
            ${escapeHtml(contact.loanType)}
          </p>

          <p>
            <strong>Loan Amount:</strong>
            ${escapeHtml(contact.loanAmount)}
          </p>

          <p>
            <strong>Purpose:</strong>
            ${escapeHtml(contact.purpose)}
          </p>

          <p>
            <strong>Message:</strong>
            ${escapeHtml(contact.message || "Not provided")}
          </p>

          <hr style="
            border:none;
            border-top:1px solid #e2e8f0;
            margin:25px 0;
          " />

          <p style="
            color:#94a3b8;
            font-size:12px;
          ">
            Submitted through the BoroFirst website.
          </p>

        </div>
      </div>
    `,
  };
};

/*
|--------------------------------------------------------------------------
| Become a Partner Email
|--------------------------------------------------------------------------
*/

const buildPartnerEmail = (partner) => {
  return {
    subject: `New Partnership Request - ${escapeHtml(
      partner.company
    )}`,

    html: `
      <div style="
        font-family: Arial, sans-serif;
        max-width: 700px;
        margin: 0 auto;
        background: #ffffff;
        color: #1e293b;
      ">

        <div style="
          background: linear-gradient(135deg, #186A07, #0B2578);
          padding: 28px;
          border-radius: 14px 14px 0 0;
          color: white;
        ">

          <h2 style="margin:0;">
            New Partnership Request
          </h2>

          <p style="
            margin:8px 0 0;
            opacity:0.85;
            font-size:14px;
          ">
            BoroFirst Partner Network
          </p>

        </div>

        <div style="
          padding: 30px;
          border: 1px solid #e2e8f0;
          border-top: none;
          border-radius: 0 0 14px 14px;
        ">

          <p style="color:#64748b;">
            A new organization has submitted a partnership
            request through the BoroFirst website.
          </p>

          <h3 style="color:#0f172a;">
            Partner Information
          </h3>

          <p>
            <strong>Full Name:</strong>
            ${escapeHtml(partner.fullName)}
          </p>

          <p>
            <strong>Company / Organization:</strong>
            ${escapeHtml(partner.company)}
          </p>

          <p>
            <strong>Business Email:</strong>
            ${escapeHtml(partner.email)}
          </p>

          <p>
            <strong>Phone Number:</strong>
            ${escapeHtml(partner.phone)}
          </p>

          <p>
            <strong>Partnership Type:</strong>
            ${escapeHtml(partner.partnershipType)}
          </p>

          <hr style="
            border:none;
            border-top:1px solid #e2e8f0;
            margin:25px 0;
          " />

          <h3 style="color:#0f172a;">
            Partnership Message
          </h3>

          <div style="
            background:#f8fafc;
            padding:18px;
            border-radius:10px;
            border:1px solid #e2e8f0;
            line-height:1.7;
            color:#475569;
          ">
            ${escapeHtml(
              partner.message || "Not provided"
            )}
          </div>

          <hr style="
            border:none;
            border-top:1px solid #e2e8f0;
            margin:25px 0;
          " />

          <p style="
            color:#94a3b8;
            font-size:12px;
          ">
            Submitted through the BoroFirst Become a Partner section.
          </p>

        </div>
      </div>
    `,
  };
};

/*
|--------------------------------------------------------------------------
| Reusable Notification Function
|--------------------------------------------------------------------------
*/

export const sendNotification = async (type, data) => {
   console.log(data);
  console.log(`📨 Preparing ${type} notification...`);
  console.log("EMAIL_USER:", process.env.EMAIL_USER);

  console.log(
    "EMAIL_PASSWORD exists:",
    Boolean(process.env.EMAIL_PASSWORD)
  );
  console.log(data);
  const receiverEmail = getReceiverEmail(type);

  console.log(
    "Notification receiver:",
    receiverEmail
  );

  if (!receiverEmail) {
    throw new Error(
      `Receiver email is missing for ${type} notification`
    );
  }

  let emailContent;

  switch (type) {
    case "contact":
      emailContent = buildContactEmail(data);
      break;

    case "partner":
      emailContent = buildPartnerEmail(data);
      break;

    default:
      throw new Error(
        `Unsupported notification type: ${type}`
      );
  }

  const mailOptions = {
    from: `"BoroFirst Website" <${process.env.EMAIL_USER}>`,
    to: receiverEmail,

    subject: emailContent.subject,

    html: emailContent.html,

    replyTo: data.email || process.env.EMAIL_USER,
  };

  try {
    const transporter = createTransporter();

    const result = await transporter.sendMail(
      mailOptions
    );

    console.log(
      "✅ Email sent successfully:",
      result.messageId
    );

    return result;
  } catch (error) {
    console.error(
      "❌ Email sending failed:",
      error.message
    );

    throw error;
  }
};
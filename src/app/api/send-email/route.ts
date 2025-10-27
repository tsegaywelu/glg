import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const GMAIL_USER = process.env.GMAIL_USER || "welutsegay56@gmail.com";
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || "axcmpfjsugvjytaa";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD,
  },
});

const formatBooleanFields = (obj: Record<string, any>) => {
  return (
    Object.keys(obj)
      .filter((key) => typeof obj[key] === "boolean")
      .map((key) => (obj[key] ? key : null))
      .filter(Boolean)
      .join(", ") || "N/A"
  );
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.contact?.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const contactInfo = body.contact;
    const devNeeds = body.developmentNeeds;
    const devStatus = body.developmentStatus;
    const planningStatus = body.planningStatus;

    const emailContent = `
Hi Steven,<br>

You have a new request for consultation:<br>

<strong>Contact information</strong>
<ul>
  <li>Company name: ${contactInfo.company || "N/A"}</li>
  <li>Contact person: ${contactInfo.contactPerson || "N/A"}</li>
  <li>E-mail: ${contactInfo.email}</li>
</ul>

<strong>Development needs</strong>
<ul>
  <li>${formatBooleanFields(devNeeds)}</li>
</ul>

<strong>Development status</strong>
<ul>
  <li>${formatBooleanFields(devStatus)}</li>
</ul>

<strong>Budget</strong>
<ul>
  <li>${body.budget || "N/A"}</li>
</ul>

<strong>Project completion</strong>
<ul>
  <li>${body.projectDeadline || "N/A"}</li>
</ul>

<strong>Planning status</strong>
<ul>
  <li>${formatBooleanFields(planningStatus)}</li>
</ul>

<strong>Requirements</strong>
<ul>
  <li>${body.requirements || "N/A"}</li>
</ul>

<strong>Project overview</strong>
<ul>
  <li>${body.projectOverview || "N/A"}</li>
</ul>

<strong>Preferred language</strong>
<ul>
  <li>${body.preferredLanguages || "N/A"}</li>
</ul>
`;

    const mailOptions = {
      from: body.contact.email,
      to: GMAIL_USER,
      subject: "Request for Consultation",
      html: emailContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

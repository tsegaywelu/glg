import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
  throw new Error("GMAIL_USER and GMAIL_APP_PASSWORD must be set in .env");
}

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
안녕하세요, Steven님.<br><br>

새로운 상담 요청이 접수되었습니다:<br><br>

<strong>연락처 정보</strong>
<ul>
  <li>회사명: ${contactInfo.company || "N/A"}</li>
  <li>담당자: ${contactInfo.contactPerson || "N/A"}</li>
  <li>이메일: ${contactInfo.email}</li>
</ul>

<strong>개발 필요</strong>
<ul>
  <li>${formatBooleanFields(devNeeds) || "제공되지 않음"}</li>
</ul>

<strong>개발 상태</strong>
<ul>
  <li>${formatBooleanFields(devStatus) || "제공되지 않음"}</li>
</ul>

<strong>예산</strong>
<ul>
  <li>${body.budget || "제공되지 않음"}</li>
</ul>

<strong>프로젝트 완료 예정일</strong>
<ul>
  <li>${body.projectDeadline || "제공되지 않음"}</li>
</ul>

<strong>기획 상태</strong>
<ul>
  <li>${formatBooleanFields(planningStatus) || "제공되지 않음"}</li>
</ul>

<strong>요구사항</strong>
<ul>
  <li>${body.requirements || "제공되지 않음"}</li>
</ul>

<strong>프로젝트 개요</strong>
<ul>
  <li>${body.projectOverview || "제공되지 않음"}</li>
</ul>

<strong>선호 언어</strong>
<ul>
  <li>${body.preferredLanguages || "제공되지 않음"}</li>
</ul>
`;

    const mailOptions = {
      from: body.contact.email,
      to: GMAIL_USER,
      subject: "상담 요청",
      html: emailContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validate environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      throw new Error("Email configuration is missing");
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content for the full form (EstimationCard)
    const getEmailContent = (data: any) => {
      // Check if it's from EstimationCard (has contact info) or Question component
      const hasContactInfo = data.contact && data.contact.email;

      if (hasContactInfo) {
        // Email template for EstimationCard (full form)
        return `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
              .header { background: #FF7B00; color: white; padding: 30px 20px; text-align: center; }
              .header h1 { margin: 0; font-size: 24px; }
              .header p { margin: 10px 0 0 0; opacity: 0.9; }
              .content { padding: 30px; }
              .section { margin-bottom: 25px; padding: 20px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #FF7B00; }
              .section h2 { margin: 0 0 15px 0; font-size: 18px; color: #FF7B00; }
              .info-row { display: flex; margin-bottom: 8px; padding: 5px 0; }
              .label { font-weight: bold; color: #555; min-width: 120px; }
              .value { flex: 1; }
              .checkmark { color: #28a745; font-weight: bold; }
              .cross { color: #dc3545; }
              .footer { text-align: center; padding: 20px; background: #f1f1f1; color: #666; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🛠️ 새로운 상담 요청</h1>
                <p>웹사이트를 통해 새로운 상담 요청이 접수되었습니다.</p>
              </div>
              
              <div class="content">
                <!-- Contact Information -->
                <div class="section">
                  <h2>📞 연락처 정보</h2>
                  <div class="info-row">
                    <span class="label">회사명:</span>
                    <span class="value">${
                      data.contact.company || "미입력"
                    }</span>
                  </div>
                  <div class="info-row">
                    <span class="label">담당자:</span>
                    <span class="value">${
                      data.contact.contactPerson || "미입력"
                    }</span>
                  </div>
                  <div class="info-row">
                    <span class="label">이메일:</span>
                    <span class="value">${data.contact.email}</span>
                  </div>
                </div>

                <!-- Development Needs -->
                <div class="section">
                  <h2>🚀 개발 필요 항목</h2>
                  <div class="info-row">
                    <span class="label">홈페이지:</span>
                    <span class="value ${
                      data.developmentNeeds.homepage ? "checkmark" : "cross"
                    }">${
          data.developmentNeeds.homepage ? "✓ 선택됨" : "✗ 선택안됨"
        }</span>
                  </div>
                  <div class="info-row">
                    <span class="label">모바일 앱:</span>
                    <span class="value ${
                      data.developmentNeeds.mobileApp ? "checkmark" : "cross"
                    }">${
          data.developmentNeeds.mobileApp ? "✓ 선택됨" : "✗ 선택안됨"
        }</span>
                  </div>
                  <div class="info-row">
                    <span class="label">웹 서비스/플랫폼:</span>
                    <span class="value ${
                      data.developmentNeeds.webService ? "checkmark" : "cross"
                    }">${
          data.developmentNeeds.webService ? "✓ 선택됨" : "✗ 선택안됨"
        }</span>
                  </div>
                </div>

                <!-- Development Status -->
                <div class="section">
                  <h2>📊 개발 현황</h2>
                  <div class="info-row">
                    <span class="label">신규 개발:</span>
                    <span class="value ${
                      data.developmentStatus.newDevelopment
                        ? "checkmark"
                        : "cross"
                    }">${
          data.developmentStatus.newDevelopment ? "✓ 선택됨" : "✗ 선택안됨"
        }</span>
                  </div>
                  <div class="info-row">
                    <span class="label">유지보수/리뉴얼:</span>
                    <span class="value ${
                      data.developmentStatus.maintenance ? "checkmark" : "cross"
                    }">${
          data.developmentStatus.maintenance ? "✓ 선택됨" : "✗ 선택안됨"
        }</span>
                  </div>
                </div>

                <!-- Budget -->
                <div class="section">
                  <h2>💰 예산</h2>
                  <div class="info-row">
                    <span class="label">예산:</span>
                    <span class="value">${data.budget || "미입력"}</span>
                  </div>
                </div>

                <!-- Additional Information -->
                ${
                  data.projectDeadline
                    ? `
                <div class="section">
                  <h2>📅 프로젝트 마감일</h2>
                  <div class="info-row">
                    <span class="label">마감일:</span>
                    <span class="value">${data.projectDeadline}</span>
                  </div>
                </div>
                `
                    : ""
                }

                ${
                  data.planningStatus
                    ? `
                <div class="section">
                  <h2>📋 기획 현황</h2>
                  <div class="info-row">
                    <span class="label">아이디어만 있음:</span>
                    <span class="value ${
                      data.planningStatus.onlyIdea ? "checkmark" : "cross"
                    }">${
                        data.planningStatus.onlyIdea ? "✓ 선택됨" : "✗ 선택안됨"
                      }</span>
                  </div>
                  <div class="info-row">
                    <span class="label">기본 요구사항 정리됨:</span>
                    <span class="value ${
                      data.planningStatus.basicRequirements
                        ? "checkmark"
                        : "cross"
                    }">${
                        data.planningStatus.basicRequirements
                          ? "✓ 선택됨"
                          : "✗ 선택안됨"
                      }</span>
                  </div>
                  <div class="info-row">
                    <span class="label">상세 문서 보유:</span>
                    <span class="value ${
                      data.planningStatus.detailedDocuments
                        ? "checkmark"
                        : "cross"
                    }">${
                        data.planningStatus.detailedDocuments
                          ? "✓ 선택됨"
                          : "✗ 선택안됨"
                      }</span>
                  </div>
                </div>
                `
                    : ""
                }

                ${
                  data.requirements
                    ? `
                <div class="section">
                  <h2>🎯 요구사항</h2>
                  <div style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0;">
                    <p style="margin: 0; white-space: pre-line;">${data.requirements}</p>
                  </div>
                </div>
                `
                    : ""
                }

                ${
                  data.projectOverview
                    ? `
                <div class="section">
                  <h2>📝 프로젝트 개요</h2>
                  <div style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0;">
                    <p style="margin: 0; white-space: pre-line;">${data.projectOverview}</p>
                  </div>
                </div>
                `
                    : ""
                }

                ${
                  data.preferredLanguages
                    ? `
                <div class="section">
                  <h2>💻 선호 언어/기술</h2>
                  <div style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0;">
                    <p style="margin: 0; white-space: pre-line;">${data.preferredLanguages}</p>
                  </div>
                </div>
                `
                    : ""
                }
              </div>

              <div class="footer">
                <p>이 메일은 웹사이트 상담 요청 시스템에서 자동으로 발송되었습니다.</p>
                <p>© ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
              </div>
            </div>
          </body>
          </html>
        `;
      } else {
        // Email template for Question component (quick form)
        return `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
              .header { background: #FF7B00; color: white; padding: 30px 20px; text-align: center; }
              .header h1 { margin: 0; font-size: 24px; }
              .header p { margin: 10px 0 0 0; opacity: 0.9; }
              .content { padding: 30px; }
              .section { margin-bottom: 25px; padding: 20px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #FF7B00; }
              .section h2 { margin: 0 0 15px 0; font-size: 18px; color: #FF7B00; }
              .info-row { display: flex; margin-bottom: 8px; padding: 5px 0; }
              .label { font-weight: bold; color: #555; min-width: 140px; }
              .value { flex: 1; }
              .checkmark { color: #28a745; font-weight: bold; }
              .cross { color: #dc3545; }
              .footer { text-align: center; padding: 20px; background: #f1f1f1; color: #666; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>⚡ 빠른 상담 요청</h1>
                <p>웹사이트를 통해 빠른 상담 요청이 접수되었습니다.</p>
              </div>
              
              <div class="content">
                <!-- Development Needs -->
                <div class="section">
                  <h2>🚀 개발 필요 항목</h2>
                  <div class="info-row">
                    <span class="label">홈페이지:</span>
                    <span class="value ${
                      data.developmentNeeds.homepage ? "checkmark" : "cross"
                    }">${
          data.developmentNeeds.homepage ? "✓ 선택됨" : "✗ 선택안됨"
        }</span>
                  </div>
                  <div class="info-row">
                    <span class="label">모바일 앱:</span>
                    <span class="value ${
                      data.developmentNeeds.mobileApp ? "checkmark" : "cross"
                    }">${
          data.developmentNeeds.mobileApp ? "✓ 선택됨" : "✗ 선택안됨"
        }</span>
                  </div>
                  <div class="info-row">
                    <span class="label">웹 서비스/플랫폼:</span>
                    <span class="value ${
                      data.developmentNeeds.webService ? "checkmark" : "cross"
                    }">${
          data.developmentNeeds.webService ? "✓ 선택됨" : "✗ 선택안됨"
        }</span>
                  </div>
                </div>

                <!-- Development Status -->
                <div class="section">
                  <h2>📊 개발 현황</h2>
                  <div class="info-row">
                    <span class="label">신규 개발:</span>
                    <span class="value ${
                      data.developmentStatus.newDevelopment
                        ? "checkmark"
                        : "cross"
                    }">${
          data.developmentStatus.newDevelopment ? "✓ 선택됨" : "✗ 선택안됨"
        }</span>
                  </div>
                  <div class="info-row">
                    <span class="label">유지보수/리뉴얼:</span>
                    <span class="value ${
                      data.developmentStatus.maintenance ? "checkmark" : "cross"
                    }">${
          data.developmentStatus.maintenance ? "✓ 선택됨" : "✗ 선택안됨"
        }</span>
                  </div>
                </div>

                <!-- Budget -->
                <div class="section">
                  <h2>💰 예산</h2>
                  <div class="info-row">
                    <span class="label">예산:</span>
                    <span class="value">${data.budget || "미입력"}</span>
                  </div>
                </div>
              </div>

              <div class="footer">
                <p>이 메일은 웹사이트 빠른 상담 요청 시스템에서 자동으로 발송되었습니다.</p>
                <p>© ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
              </div>
            </div>
          </body>
          </html>
        `;
      }
    };

    // Determine sender information
    const hasContactInfo = formData.contact && formData.contact.email;
    const senderName = formData.contact?.contactPerson
      ? `${formData.contact.contactPerson} (상담 요청)`
      : "웹사이트 상담 요청";

    const senderEmail = hasContactInfo
      ? formData.contact.email
      : process.env.GMAIL_USER;

    // Send email
    await transporter.sendMail({
      from: {
        name: senderName,
        address: process.env.GMAIL_USER, // Always send from your Gmail account
      },
      to: process.env.GMAIL_USER, // Send to your business email
      replyTo: hasContactInfo ? formData.contact.email : undefined,
      subject: `새로운 상담 요청 - ${
        hasContactInfo ? "상담 신청" : "빠른 상담"
      }`,
      html: getEmailContent(formData),
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}

"use client";

import { useState } from "react";
import WhiteInput from "../components/BaseComponents/QuestionCard/WiteInput";
import CeckBoxSelection from "../components/UI/CeckBoxSelection";
import GiveMeQuestion from "../components/UI/GiveMeQuestion";
import QuestionWithCheckBox from "../components/UI/QuestionWithCheckBox";
import TextArea from "../components/UI/TextArea";
import { FormData } from "../Type";
const EstimationCard = () => {
  const Button1Texts = ["기획", "디자인", "개발", "배포"];
  const Button2Texts = [
    "iOS앱",
    "안드로이드 앱",
    "기획",
    "디자인",
    "개발",
    "배포",
  ];
  const Button3Texts = [
    "관리자 페이지",
    "iOS앱",
    "안드로이드 앱",
    "기획",
    "디자인",
    "개발",
    "배포",
  ];

  const [ShowAllQestions, setShowAllQuestions] = useState(false);
  const [formData, setFormData] = useState({
    // Q1: Contact Information
    companyName: "",
    contactPerson: "",
    email: "",

    // Q2: Development Type (mutually exclusive)
    developmentType: {
      homepage: false,
      mobileApp: false,
      webService: false,
    },

    developmentStatus: {
      newDevelopment: false,
      maintenance: false,
    },
    budget: "",
    projectDeadline: "",

    planningStatus: {
      onlyIdea: false,
      basicRequirements: false,
      detailedDocuments: false,
    },
    requirements: "",
    projectOverview: "",
    preferredLanguages: "",
  });
  const handleTextInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  // Single handler for radio-like groups (mutually exclusive)
  const handleRadioGroupChange = <T extends object>(
    group: keyof FormData,
    field: keyof T
  ) => {
    setFormData((prev) => ({
      ...prev,
      [group]: Object.keys(prev[group] as T).reduce(
        (acc, key) => ({
          ...acc,
          [key]: key === field,
        }),
        {} as T
      ),
    }));
  };

  const handleDevelopmentTypeChange = (
    type: keyof typeof formData.developmentType
  ) => {
    setFormData((prev) => {
      const currentState = prev.developmentType;

      if (type === "homepage") {
        // Toggle homepage independently
        return {
          ...prev,
          developmentType: {
            ...currentState,
            homepage: !currentState.homepage,
          },
        };
      } else if (type === "mobileApp") {
        // Select mobileApp, deselect webService
        return {
          ...prev,
          developmentType: {
            ...currentState,
            mobileApp: !currentState.mobileApp,
            webService:
              currentState.webService && !currentState.mobileApp
                ? false
                : currentState.webService,
          },
        };
      } else if (type === "webService") {
        // Select webService, deselect mobileApp
        return {
          ...prev,
          developmentType: {
            ...currentState,
            webService: !currentState.webService,
            mobileApp:
              currentState.mobileApp && !currentState.webService
                ? false
                : currentState.mobileApp,
          },
        };
      }

      return prev;
    });
  };
  // Handler for Q3: Development Status (radio buttons - mutually exclusive)
  const handleDevelopmentStatusChange = (
    type: keyof typeof formData.developmentStatus
  ) => {
    setFormData((prev) => ({
      ...prev,
      developmentStatus: {
        newDevelopment: type === "newDevelopment",
        maintenance: type === "maintenance",
      },
    }));
  };

  const handleSubmit = () => {
    // Prepare data for email
    const submissionData = {
      contact: {
        company: formData.companyName,
        contactPerson: formData.contactPerson,
        email: formData.email,
      },
      developmentNeeds: {
        homepage: formData.developmentType.homepage,
        mobileApp: formData.developmentType.mobileApp,
        webService: formData.developmentType.webService,
      },
      developmentStatus: {
        newDevelopment: formData.developmentStatus.newDevelopment,
        maintenance: formData.developmentStatus.maintenance,
      },
      budget: formData.budget
        ? `W${parseInt(formData.budget).toLocaleString()}`
        : "Not specified",
      projectDeadline: formData.projectDeadline,
      planningStatus: {
        onlyIdea: formData.planningStatus.onlyIdea,
        basicRequirements: formData.planningStatus.basicRequirements,
        detailedDocuments: formData.planningStatus.detailedDocuments,
      },
      requirements: formData.requirements,
      projectOverview: formData.projectOverview,
      preferredLanguages: formData.preferredLanguages,
    };

    console.log("Form Submission Data:", submissionData);

    alert("상담 신청이 완료되었습니다! 곧 연락드리겠습니다.");
  };
  return (
    <div className="py-[5rem] space-y-[2.5rem]">
      <div className=" flex flex-col items-center justify-center gap-y-4">
        <div className="text-5 font-normal text-white">
          {" "}
          Glitch 진짜 괜찮을까? 아직 고민이라면
        </div>
        <div className="font-bold text-[2rem]">
          <span className="text-primary block md:inline">3일간 무료로 </span>
          <span className="text-white">경험하고 결정하세요.</span>
        </div>
      </div>

      <div className="bg-white ">
        <div className="bg-[#FF7B00] py-[0.75rem] mx-auto text-[0.875rem] font-normal text-center whitespace-nowrap overflow-hidden">
          내용 작성이 어렵다면 가능한 만큼만 작성해주세요. 내용 확인 후 석박
          출신 IT 매니저가 전화로 친절하게 상담해드릴게요!
        </div>
        <div className="p-[2.5rem] space-y-[5rem]">
          {/* Qestions Section */}
          <div className=" space-y-[2.5rem]">
            <div className="space-y-[2rem]">
              <GiveMeQuestion
                QuestionNmeber="Q1"
                QuestionText="상담 받을 연락처를 입력해주세요."
              />
              <div>
                <WhiteInput
                  id="first"
                  label="회사명"
                  placeholder="회사명 입력"
                  value={formData.companyName}
                  onChange={(value) =>
                    handleTextInputChange("companyName", value)
                  }
                />
              </div>
              <div>
                <WhiteInput
                  id="second"
                  label="담당자"
                  placeholder="성함 입력"
                  value={formData.contactPerson}
                  onChange={(value) =>
                    handleTextInputChange("contactPerson", value)
                  }
                />
              </div>
              <div>
                <WhiteInput
                  id="third"
                  label="이메일"
                  placeholder="이메일 입력"
                  value={formData.email}
                  onChange={(value) => handleTextInputChange("email", value)}
                />
              </div>
            </div>
            <div className="space-y-[2rem]">
              <GiveMeQuestion
                QuestionNmeber="Q2"
                QuestionText="개발하려는 것이 어떤건가요?"
              />
              <div className="flex flex-col gap-y-[1.25rem] md:flex-row md:justify-between lg:pr-16 ">
                <CeckBoxSelection
                  ButtonTexts={Button1Texts}
                  titel="홈페이지"
                  Totalwon="평균 : 400만원~"
                  QuestionNumber="Question1"
                  isSelected={formData.developmentType.homepage}
                  onToggle={() => handleDevelopmentTypeChange("homepage")}
                />
                <CeckBoxSelection
                  ButtonTexts={Button2Texts}
                  titel="아이폰 앱, 안드로이드 앱"
                  Totalwon="평균 : 1,600만원~"
                  QuestionNumber="Question2"
                  isSelected={formData.developmentType.mobileApp}
                  onToggle={() => handleDevelopmentTypeChange("mobileApp")}
                />
                <CeckBoxSelection
                  ButtonTexts={Button3Texts}
                  titel="앱/웹 서비스, 플랫폼"
                  Totalwon="평균 : 4,000만원~"
                  QuestionNumber="Question3"
                  isSelected={formData.developmentType.webService}
                  onToggle={() => handleDevelopmentTypeChange("webService")}
                />
              </div>
            </div>
            <div className="space-y-[2rem]">
              <GiveMeQuestion
                QuestionNmeber="Q3"
                QuestionText="기존에 개발 된 것이 있나요?"
              />
              <div className="space-y-[1.25rem] md:space-y-[0rem] md:flex md:justify-between md:items-center lg:pr-16 ">
                <QuestionWithCheckBox
                  QuestionText="신규 개발"
                  checked={formData.developmentStatus.newDevelopment}
                  onChange={() =>
                    handleDevelopmentStatusChange("newDevelopment")
                  }
                />
                <QuestionWithCheckBox
                  QuestionText="유지보수 / 리뉴얼"
                  checked={formData.developmentStatus.maintenance}
                  onChange={() => handleDevelopmentStatusChange("maintenance")}
                />
                <div className="w-1/5"></div>
              </div>
            </div>
            <div className="space-y-[2rem]">
              <GiveMeQuestion
                QuestionNmeber="Q4"
                QuestionText="정해진 예산은 어느정도인가요?"
              />
              <div>
                <WhiteInput
                  placeholder="숫자만 입력"
                  label="만원"
                  id="budget"
                  value={formData.budget}
                  onChange={(value) =>
                    handleTextInputChange(
                      "budget",
                      value.replace(/[^0-9]/g, "")
                    )
                  }
                />
              </div>
            </div>
            {/* if show all Question */}
            {ShowAllQestions && (
              <div className="space-y-[5rem]">
                <div className="space-y-[2rem]">
                  <GiveMeQuestion
                    QuestionNmeber="Q5"
                    QuestionText="과업은 언제까지 완료해야하나요?"
                    NoStar
                  />
                  <div>
                    <WhiteInput
                      placeholder="12월 31일"
                      id="deadline"
                      value={formData.projectDeadline}
                      onChange={(value) =>
                        handleTextInputChange("projectDeadline", value)
                      }
                    />
                  </div>
                </div>
                <div className="space-y-[2rem]">
                  <GiveMeQuestion
                    QuestionNmeber="Q6"
                    QuestionText="현재 기획 상태는 어떤가요?"
                    NoStar
                  />
                  <div className="space-y-[1.25rem] md:space-y-[0rem] md:flex md:justify-between md:items-center lg:pr-16 ">
                    <QuestionWithCheckBox
                      QuestionText="아이디어만 있음"
                      checked={formData.planningStatus.onlyIdea}
                      onChange={() =>
                        handleRadioGroupChange("planningStatus", "onlyIdea")
                      }
                    />
                    <QuestionWithCheckBox
                      QuestionText="필요한 내용이 간단히 정리됨"
                      checked={formData.planningStatus.basicRequirements}
                      onChange={() =>
                        handleRadioGroupChange(
                          "planningStatus",
                          "basicRequirements"
                        )
                      }
                    />
                    <QuestionWithCheckBox
                      QuestionText="상세한 문서 보유"
                      checked={formData.planningStatus.detailedDocuments}
                      onChange={() =>
                        handleRadioGroupChange(
                          "planningStatus",
                          "detailedDocuments"
                        )
                      }
                    />
                  </div>
                </div>
                <div className="space-y-[2rem]">
                  <GiveMeQuestion
                    QuestionNmeber="Q7"
                    QuestionText="필요하신 내용을 작성해주세요."
                    NoStar
                  />
                  <TextArea
                    numOfrow={4}
                    placeholder={`- 현재 앱을 개발하다가 중단된 상태입니다.
                                 - 백엔드 개발은 완료된 상태이며, 남은 작업을 저희 앱 개발자와 함께 진행해주실 업체를 찾고 있습니다.`}
                    value={formData.requirements}
                    onChange={(value) =>
                      handleTextInputChange("requirements", value)
                    }
                  />
                </div>
                <div className="space-y-[2rem]">
                  <GiveMeQuestion
                    QuestionNmeber="Q8"
                    QuestionText="프로젝트 소개"
                    NoStar
                  />
                  <TextArea
                    numOfrow={8}
                    placeholder={`- 게임/애니메이션 굿즈 창작자들을 위한 전자결제, 거래 플랫폼입니다.
                                    - 기능은 아래와 같습니다.
                                    • 구글, 애플, 카카오, 네이버 로그인 연동
                                    • 네이버 지도 연동
                                    • PG 연동
                                    - 가장 최신의 기획문서는 OOO, 디자인 파일은 OOO에서 보실 수 있습니다.`}
                    value={formData.projectOverview}
                    onChange={(value) =>
                      handleTextInputChange("projectOverview", value)
                    }
                  />
                </div>
                <div className="space-y-[2rem]">
                  <GiveMeQuestion
                    QuestionNmeber="Q9"
                    QuestionText="사용 희망 언어"
                    NoStar
                  />
                  <TextArea
                    numOfrow={6}
                    placeholder={`- Flutter
                                    - NestJS
                                    - Typescript
                                    - NextJS`}
                    value={formData.preferredLanguages}
                    onChange={(value) =>
                      handleTextInputChange("preferredLanguages", value)
                    }
                  />
                </div>
              </div>
            )}
          </div>
          {/* buttons section */}

          {ShowAllQestions ? (
            <div>
              <button className="text-white text-[1rem] font-bold bg-primary py-[1rem] px-[1.5rem] rounded-full">
                상담 신청
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-x-[1rem]">
              <button className="text-white text-[1rem] font-bold bg-primary py-[1rem] px-[1.5rem] rounded-full">
                여기까지 작성 후 상담받기
              </button>
              <button
                className="bg-white px-[1.5rem] py-[1rem] border-[0.125rem] border-primary text-[1rem] font-bold text-primary rounded-full"
                onClick={() => setShowAllQuestions(true)}
              >
                다음
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EstimationCard;

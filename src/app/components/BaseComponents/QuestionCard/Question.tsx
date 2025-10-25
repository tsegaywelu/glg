"use client";

import { useState } from "react";
import CeckBoxSelection from "../../UI/CeckBoxSelection";
import GiveMeQuestion from "../../UI/GiveMeQuestion";
import QuestionWithCheckBox from "../../UI/QuestionWithCheckBox";
import QestionHeader from "./QestionHeader";
import QR from "./QR";
import WhiteInput from "./WiteInput";
import { FormData } from "../../../Type";
const Question = () => {
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
  const [formData, setFormData] = useState({
    // Q1: Development Type (mutually exclusive)
    developmentType: {
      homepage: false,
      mobileApp: false,
      webService: false,
    },
    // Q2: Development Status (radio buttons)
    developmentStatus: {
      newDevelopment: false,
      maintenance: false,
    },
    // Q3: Budget
    budget: "",
  });

  const handleTextInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
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

  return (
    <div className="  py-[5rem] space-y-10">
      <QestionHeader />
      <div className=" w-full flex  flex-col items-center md:flex-row md:items-start md:justify-center gap-10 ">
        <div className="bg-white  p-10 space-y-[2.5rem] ">
          {/* <GiveMeQuestion QuestionNmeber="" QuestionText="" /> */}
          {/* <Button ButtonText="" /> */}
          <div className="space-y-[2.5rem]">
            <div className="space-y-[2rem]">
              <GiveMeQuestion
                QuestionNmeber="Q1"
                QuestionText="개발하려는 것이 어떤건가요?"
              />
              <div className="flex flex-col gap-y-[1.25rem]  ">
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
                QuestionNmeber="Q2"
                QuestionText="기존에 개발 된 것이 있나요?"
              />
              <div className="space-y-[1.25rem]">
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
              </div>
            </div>
            <div className="space-y-[2rem]">
              <GiveMeQuestion
                QuestionNmeber="Q3"
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
          </div>
          <button className="text-white text-[1rem] font-bold bg-primary py-[1rem] px-[1.5rem] rounded-full">
            빠른 상담받기
          </button>
        </div>
        <QR />
      </div>
    </div>
  );
};

export default Question;

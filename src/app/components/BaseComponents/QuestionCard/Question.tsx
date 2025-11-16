"use client";

import { useEffect, useState } from "react";
import CeckBoxSelection from "../../UI/CeckBoxSelection";
import GiveMeQuestion from "../../UI/GiveMeQuestion";
import QuestionWithCheckBox from "../../UI/QuestionWithCheckBox";
import QestionHeader from "./QestionHeader";
import QR from "./QR";
import WhiteInput from "./WiteInput";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
// import { showToast } from "../../toastComponents/showToast";

const Question = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const searchParams = useSearchParams();

  const Button1Texts = [t("planning"), t("design"), t("dev"), t("deployment")];
  const Button2Texts = [
    t("ios_app"),
    t("android_app"),
    t("planning"),
    t("design"),
    t("dev"),
    t("deployment"),
  ];
  const Button3Texts = [
    t("admin_dashboard"),
    t("ios_app"),
    t("android_app"),
    t("planning"),
    t("design"),
    t("dev"),
    t("deployment"),
  ];

  const [formData, setFormData] = useState({
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
        return {
          ...prev,
          developmentType: {
            ...currentState,
            homepage: !currentState.homepage,
          },
        };
      } else if (type === "mobileApp") {
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

  const handleNavigation = () => {
    const hasDevType =
      formData.developmentType.homepage ||
      formData.developmentType.mobileApp ||
      formData.developmentType.webService;

    const hasDevStatus =
      formData.developmentStatus.newDevelopment ||
      formData.developmentStatus.maintenance;
    const currentParams = new URLSearchParams(window.location.search);

    router.push(`/estimation?${currentParams.toString()}`);
  };
  useEffect(() => {
    if (!searchParams) return;

    const types = searchParams.getAll("type");
    const status = searchParams.get("status");
    const budget = searchParams.get("budget");

    setFormData((prev) => ({
      developmentType: {
        homepage: types.includes("homepage"),
        mobileApp: types.includes("mobileApp"),
        webService: types.includes("webService"),
      },
      developmentStatus: {
        newDevelopment: status === "new",
        maintenance: status === "maint",
      },
      budget: budget || prev.budget,
    }));
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams();

    // Add development types
    if (formData.developmentType.homepage) params.append("type", "homepage");
    if (formData.developmentType.mobileApp) params.append("type", "mobileApp");
    if (formData.developmentType.webService)
      params.append("type", "webService");

    // Add development status (single selection)
    if (formData.developmentStatus.newDevelopment) {
      params.set("status", "new");
    } else if (formData.developmentStatus.maintenance) {
      params.set("status", "maint");
    }

    // Add budget
    if (formData.budget) {
      params.set("budget", formData.budget);
    }

    // Update URL without page reload
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(
      { ...window.history.state, formData },
      "",
      newUrl
    );
    window.dispatchEvent(new Event("params-changed"));

  }, [formData]);

  const appCheck =
    formData.developmentType.mobileApp ||
    formData.developmentType.webService ||
    formData.developmentType.homepage;
  const Jobtype =
    formData.developmentStatus.newDevelopment ||
    formData.developmentStatus.maintenance;
  const ButtonValidation = formData.budget && appCheck && Jobtype;

  return (
    <div className=" w-full  py-[5rem] space-y-10">
      <QestionHeader />
      <div className=" w-full  lg:max-w-[57.1875rem] mx-auto flex  flex-col items-center lg:flex-row lg:items-start lg:justify-center gap-10 ">
        <div className="w-full bg-white p-10 space-y-[2.5rem] ">
          <div className="space-y-[2.5rem]">
            <div className="space-y-[2rem]">
              <GiveMeQuestion
                QuestionNmeber="Q1"
                QuestionText={t("developing_what")}
              />
              <div className="flex flex-col gap-y-[1.25rem]  ">
                <CeckBoxSelection
                  ButtonTexts={Button1Texts}
                  titel={t("website")}
                  Totalwon={t("website_price")}
                  QuestionNumber="Question1"
                  isSelected={formData.developmentType.homepage}
                  onToggle={() => handleDevelopmentTypeChange("homepage")}
                />
                <CeckBoxSelection
                  ButtonTexts={Button2Texts}
                  titel={t("ios_android_app")}
                  Totalwon={t("ios_android_app_price")}
                  QuestionNumber="Question2"
                  isSelected={formData.developmentType.mobileApp}
                  onToggle={() => handleDevelopmentTypeChange("mobileApp")}
                />
                <CeckBoxSelection
                  ButtonTexts={Button3Texts}
                  titel={t("app_web_service")}
                  Totalwon={t("app_web_service_price")}
                  QuestionNumber="Question3"
                  isSelected={formData.developmentType.webService}
                  onToggle={() => handleDevelopmentTypeChange("webService")}
                />
              </div>
            </div>
            <div className="space-y-[2rem]">
              <GiveMeQuestion
                QuestionNmeber="Q2"
                QuestionText={t("dev_status")}
              />
              <div className="space-y-[1.25rem]">
                <QuestionWithCheckBox
                  QuestionText={t("new_dev")}
                  checked={formData.developmentStatus.newDevelopment}
                  onChange={() =>
                    handleDevelopmentStatusChange("newDevelopment")
                  }
                />
                <QuestionWithCheckBox
                  QuestionText={t("maintenance_redesign")}
                  checked={formData.developmentStatus.maintenance}
                  onChange={() => handleDevelopmentStatusChange("maintenance")}
                />
              </div>
            </div>
            <div className="space-y-[2rem]  ">
              <GiveMeQuestion
                QuestionNmeber="Q3"
                QuestionText={t("budget_range")}
              />
              <div>
                <WhiteInput
                  placeholder={t("num_only")}
                  label={t("units")}
                  id="budget"
                  value={formData.budget}
                  onChange={(value) =>
                    handleTextInputChange(
                      "budget",
                      value.replace(/[^0-9]/g, "")
                    )
                  }
                  QuestionComponent
                  reverselabel
                />
              </div>
            </div>
          </div>
          <button
            className="  text-white text-[1rem] font-bold bg-primary py-[1rem] px-[1.5rem] rounded-full leading-[1.125rem] cursor-pointer"
            onClick={handleNavigation}
            // disabled={!ButtonValidation}
          >
            {t("get_consultation")}
          </button>
        </div>
        <QR />
      </div>
    </div>
  );
};

export default Question;

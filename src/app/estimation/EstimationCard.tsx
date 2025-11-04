"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import WhiteInput from "../components/BaseComponents/QuestionCard/WiteInput";
import CeckBoxSelection from "../components/UI/CeckBoxSelection";
import GiveMeQuestion from "../components/UI/GiveMeQuestion";
import QuestionWithCheckBox from "../components/UI/QuestionWithCheckBox";
import TextArea from "../components/UI/TextArea";
import { FormData } from "../Type";
import { useTranslation } from "react-i18next";
import { showToast } from "../components/toastComponents/showToast";
import QestionHeader from "../components/BaseComponents/QuestionCard/QestionHeader";

const EstimationCard = () => {
  const { t } = useTranslation();
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
  const searchParams = useSearchParams();
  const [ShowAllQestions, setShowAllQuestions] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const types = searchParams.getAll("type");
      const status = searchParams.get("status");
      const budget = searchParams.get("budget") || "";

      setFormData((prev) => ({
        ...prev,
        developmentType: {
          homepage: types.includes("homepage"),
          mobileApp: types.includes("mobileApp"),
          webService: types.includes("webService"),
        },
        developmentStatus: {
          newDevelopment: status === "new",
          maintenance: status === "maint",
        },
        budget,
      }));
    }
  }, [searchParams]);

  const handleTextInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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

  const appCheck =
    formData.developmentType.mobileApp ||
    formData.developmentType.webService ||
    formData.developmentType.homepage;
  const Jobtype =
    formData.developmentStatus.newDevelopment ||
    formData.developmentStatus.maintenance;
  const ButtonValidation =
    formData.companyName &&
    formData.contactPerson &&
    formData.email &&
    formData.budget &&
    appCheck &&
    Jobtype;

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

  const handleSubmit = async () => {
    const hasDevType =
      formData.developmentType.homepage ||
      formData.developmentType.mobileApp ||
      formData.developmentType.webService;

    const hasDevStatus =
      formData.developmentStatus.newDevelopment ||
      formData.developmentStatus.maintenance;

    if (!hasDevType || !hasDevStatus || !formData.budget) {
      showToast("error", <div>{t("request_consultation")}</div>);
      return;
    }

    setIsSubmitting(true);

    const submissionData = {
      contact: {
        company: formData.companyName,
        contactPerson: formData.contactPerson,
        email: formData.email,
      },
      developmentNeeds: {
        homepage: formData.developmentType.homepage
          ? "Home page"
          : "제공되지 않음",
        mobileApp: formData.developmentType.mobileApp
          ? "Mobile App"
          : "제공되지 않음",
        webService: formData.developmentType.webService
          ? "Web Service"
          : "제공되지 않음",
      },
      developmentStatus: {
        newDevelopment: formData.developmentStatus.newDevelopment
          ? "New Development"
          : "제공되지 않음",
        maintenance: formData.developmentStatus.maintenance
          ? "Maintenance"
          : "제공되지 않음",
      },
      budget: formData.budget
        ? `원${parseInt(formData.budget).toLocaleString()}`
        : "미입력",
      projectDeadline: formData.projectDeadline,
      planningStatus: {
        onlyIdea: formData.planningStatus.onlyIdea
          ? "Only Idea"
          : "제공되지 않음",
        basicRequirements: formData.planningStatus.basicRequirements
          ? "Basic Requirements"
          : "제공되지 않음",
        detailedDocuments: formData.planningStatus.detailedDocuments?"":"",
      },
      requirements: formData.requirements,
      projectOverview: formData.projectOverview,
      preferredLanguages: formData.preferredLanguages,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });
      const result = await response.json();
      if (response.ok) {
        showToast(
          "success",
          <div>
            <div>{t("inquiry_sent").split("영업일 기준 2일 내")[0]}</div>
            <div>{t("inquiry_sent").split("영업일 기준 2일 내")[1]}</div>
          </div>
        );
        setFormData({
          companyName: "",
          contactPerson: "",
          email: "",
          developmentType: {
            homepage: false,
            mobileApp: false,
            webService: false,
          },
          developmentStatus: { newDevelopment: false, maintenance: false },
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
      } else {
        throw new Error(result.error || "Unknown error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      showToast(
        "error",
        <div>
          <div>{t("inquiry_failed").split("steven@sweech.io")[0]}</div>
          <div>steven@sweech.io로 문의해주세요.</div>
        </div>
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-[5rem] space-y-[2.5rem]">
      <div className=" flex flex-col items-center justify-center gap-y-4">
        {/* <div className="text-5 font-normal text-white">
          {t("still_wondering")}
        </div> */}
        {/* <div className="font-bold text-[2rem]">
          <span className="text-primary block md:inline">
            {t("free_trial").split("</o>")[0].replace("<o>", "")}
          </span>
          <span className="text-white">{t("free_trial").split("</o>")[1]}</span>
        </div> */}
        <QestionHeader />
      </div>

      <div className="bg-white ">
        <div
          className="bg-[#FF7B00] py-[0.75rem] mx-auto text-[0.875rem] font-normal text-center whitespace-nowrap overflow-hidden"
          dangerouslySetInnerHTML={{ __html: t("difficult_to_fill_out") }}
        />
        <div className="p-[2.5rem] space-y-[5rem]">
          <div className=" space-y-[2.5rem]">
            <div className="space-y-[2rem]">
              <GiveMeQuestion
                QuestionNmeber="Q1"
                QuestionText={t("contact_info")}
              />
              <div>
                <WhiteInput
                  id="first"
                  label={t("company_name")}
                  placeholder={t("company_name_placeholer")}
                  value={formData.companyName}
                  onChange={(value) =>
                    handleTextInputChange("companyName", value)
                  }
                />
              </div>
              <div>
                <WhiteInput
                  id="second"
                  label={t("contact_person")}
                  placeholder={t("contact_person_placeholder")}
                  value={formData.contactPerson}
                  onChange={(value) =>
                    handleTextInputChange("contactPerson", value)
                  }
                />
              </div>
              <div>
                <WhiteInput
                  id="third"
                  label={t("email")}
                  placeholder={t("email_placeholder")}
                  value={formData.email}
                  onChange={(value) => handleTextInputChange("email", value)}
                />
              </div>
            </div>
            <div className="space-y-[2rem]">
              <GiveMeQuestion
                QuestionNmeber="Q2"
                QuestionText={t("developing_what")}
              />
              <div className="flex flex-col gap-y-[1.25rem] md:grid xl:grid-cols-3  ">
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
                QuestionNmeber="Q3"
                QuestionText={t("dev_status")}
              />
              <div className="space-y-[1.25rem] xl:space-y-[0rem] xl:grid xl:grid-cols-3  ">
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
            <div className="space-y-[2rem]">
              <GiveMeQuestion
                QuestionNmeber="Q4"
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
                  reverselabel
                />
              </div>
            </div>

            {ShowAllQestions && (
              <div className="space-y-[5rem]">
                <div className="space-y-[2rem]">
                  <GiveMeQuestion
                    QuestionNmeber="Q5"
                    QuestionText={t("project_completion")}
                    NoStar
                  />
                  <div>
                    <WhiteInput
                      placeholder={t("date_placeholder")}
                      id="deadline"
                      value={formData.projectDeadline}
                      onChange={(value) =>
                        handleTextInputChange("projectDeadline", value)
                      }
                      reverselabel
                    />
                  </div>
                </div>
                <div className="space-y-[2rem]">
                  <GiveMeQuestion
                    QuestionNmeber="Q6"
                    QuestionText={t("current_planning_status")}
                    NoStar
                  />
                  <div className="space-y-[1.25rem] xl:space-y-[0rem] xl:grid xl:grid-cols-3 ">
                    <QuestionWithCheckBox
                      QuestionText={t("idea")}
                      checked={formData.planningStatus.onlyIdea}
                      onChange={() =>
                        handleRadioGroupChange("planningStatus", "onlyIdea")
                      }
                    />
                    <QuestionWithCheckBox
                      QuestionText={t("basic_req_outlined")}
                      checked={formData.planningStatus.basicRequirements}
                      onChange={() =>
                        handleRadioGroupChange(
                          "planningStatus",
                          "basicRequirements"
                        )
                      }
                    />
                    <QuestionWithCheckBox
                      QuestionText={t("detailed_doc_available")}
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
                    QuestionText={t("describe_req")}
                    NoStar
                  />
                  <TextArea
                    numOfrow={4}
                    placeholder={`- ${t("req_placeholder_one")}\n- ${t(
                      "req_placeholder_two"
                    )}`}
                    value={formData.requirements}
                    onChange={(value) =>
                      handleTextInputChange("requirements", value)
                    }
                  />
                </div>
                <div className="space-y-[2rem]">
                  <GiveMeQuestion
                    QuestionNmeber="Q8"
                    QuestionText={t("project_overview")}
                    NoStar
                  />
                  <TextArea
                    numOfrow={8}
                    placeholder={`- ${t("overview_placeholder_one")}\n - ${t(
                      "overview_placeholder_two"
                    )}\n• ${t("overview_placeholder_three")}\n• ${t(
                      "overview_placeholder_four"
                    )}\n• ${t("overview_placeholder_five")}\n - ${t(
                      "overview_placeholder_six"
                    )}`}
                    value={formData.projectOverview}
                    onChange={(value) =>
                      handleTextInputChange("projectOverview", value)
                    }
                  />
                </div>
                <div className="space-y-[2rem]">
                  <GiveMeQuestion
                    QuestionNmeber="Q9"
                    QuestionText={t("preferred_langs")}
                    NoStar
                  />
                  <TextArea
                    numOfrow={6}
                    placeholder={`-Flutter\n- NestJS\n- Typescript\n- NextJS`}
                    value={formData.preferredLanguages}
                    onChange={(value) =>
                      handleTextInputChange("preferredLanguages", value)
                    }
                  />
                </div>
              </div>
            )}
          </div>

          {ShowAllQestions ? (
            <div>
              <button
                className="text-white disabled:opacity-20 text-[1rem] font-bold bg-primary py-[1rem] px-[1.5rem] rounded-full"
                onClick={handleSubmit}
                disabled={isSubmitting || !ButtonValidation}
              >
                {t("request_consultation")}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-x-[1rem]">
              <button
                className="text-white disabled:opacity-[30%]  text-[1rem] font-bold bg-primary py-[1rem] px-[1.5rem] rounded-full"
                onClick={handleSubmit}
                disabled={isSubmitting || !ButtonValidation}
              >
                {t("request_consultation_ext")}
              </button>
              <button
                className="bg-white px-[1.5rem] py-[1rem] border-[0.125rem] border-primary text-[1rem] font-bold text-primary rounded-full"
                onClick={() => setShowAllQuestions(true)}
              >
                {t("next")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EstimationCard;

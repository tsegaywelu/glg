"use client";

import { useMemo, useState } from "react";
import Input from "../components/BaseComponents/Input";
import CheckIcon from "../components/Icons/CheckIcon";
import { useTranslation } from "react-i18next";

const PriceCard = () => {
  const { t } = useTranslation();

  const rates = {
    planner: 300000,
    designer: 300000,
    webDev: 120000,
    mobileDev: 120000,
    backendDev: 120000,
    infraDev: 350000,
  };

  const [days, setDays] = useState({
    planner: "",
    designer: "",
    webDev: "",
    mobileDev: "",
    backendDev: "",
    infraDev: "",
  });

  const handleDaysChange = (role: keyof typeof days, value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    setDays((prev) => ({
      ...prev,
      [role]: numericValue,
    }));
  };

  const { laborCost, techFee, total } = useMemo(() => {
    const labor =
      (Number(days.planner) || 0) * rates.planner +
      (Number(days.designer) || 0) * rates.designer +
      (Number(days.webDev) || 0) * rates.webDev +
      (Number(days.mobileDev) || 0) * rates.mobileDev +
      (Number(days.backendDev) || 0) * rates.backendDev +
      (Number(days.infraDev) || 0) * rates.infraDev;

    const tech = Math.round(labor * 0.3);
    return {
      laborCost: labor.toLocaleString(),
      techFee: tech.toLocaleString(),
      total: (labor + tech).toLocaleString(),
    };
  }, [days]);

  return (
    <div className=" py-[5rem] space-y-[5rem] max-w-[59.1875rem] mx-auto ">
      <div className="space-y-[1rem]">
        <div className="text-[1.25rem] font-normal text-white text-center">
          <div>
            {t("reasonable_pricing").split("퀄리티는 최상으로")[0].trim()}
          </div>
          {/* <div>퀄리티는 최상으로</div> */}
        </div>
        <div className="text-white text-[2rem] font-bold text-center">
          <div>{t("contract_basis").split("<o>")[0].trim()}</div>
          <div className="text-primary">
            {t("contract_basis").split("<o>")[1]?.split("</o>")[0] || ""}
            <span className="text-white">
              {t("contract_basis").split("</o>")[1]?.trim() || ""}
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-[3.25rem]">
        <div className="space-y-[1rem]">
          <div className="flex justify-between items-start ">
            <div className="flex flex-col gap-y-2 ">
              <div className="flex items-center gap-x-10 md:gap-x-4">
                <div>
                  <CheckIcon checked={days.planner !== ""} />
                </div>
                <div className="flex flex-col gap-y-[0.75rem]">
                  <p className="text-[1.25rem] text-white font-normal">
                    {t("planner")}
                  </p>
                  <p className="md:hidden text-[0.75rem] font-normal text-white">
                    {t("daily_cost")}
                  </p>
                </div>
              </div>
              <p className=" hidden md:block text-[0.75rem] font-normal text-[#71717A]">
                {t("planner_desc")}
              </p>
            </div>
            <div className="flex gap-x-[5rem]  items-end ">
              <div className="text-[1.25rem] font-normal text-white hidden lg:block">
                {t("daily_cost")}
              </div>
              <div>
                <Input
                  placeholder={t("num_only")}
                  label={t("days")}
                  id="inputpriece1"
                  value={days.planner}
                  onChange={(value) =>
                    handleDaysChange("planner", value.replace(/[^0-9]/g, ""))
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start ">
            <div className="flex flex-col gap-y-2 ">
              <div className="flex items-center gap-x-10 md:gap-x-4">
                <div>
                  <CheckIcon checked={days.designer !== ""} />
                </div>
                <div className="flex flex-col gap-y-[0.75rem]">
                  <p className="text-[1.25rem] text-white font-normal">
                    {t("designer")}
                  </p>
                  <p className="md:hidden text-[0.75rem] font-normal text-white">
                    {t("daily_cost")}
                  </p>
                </div>
              </div>
              <p className=" hidden md:block text-[0.75rem] font-normal text-[#71717A]">
                {t("designer_desc")}
              </p>
            </div>
            <div className="flex gap-x-[5rem]  items-end ">
              <div className="text-[1.25rem] font-normal text-white hidden lg:block">
                {t("daily_cost")}
              </div>
              <div>
                <Input
                  placeholder={t("num_only")}
                  label={t("days")}
                  id="inputpriece2"
                  value={days.designer}
                  onChange={(value) =>
                    handleDaysChange("designer", value.replace(/[^0-9]/g, ""))
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start ">
            <div className="flex flex-col gap-y-2 ">
              <div className="flex items-center gap-x-10 md:gap-x-4">
                <div>
                  <CheckIcon checked={days.webDev !== ""} />
                </div>
                <div className="flex flex-col gap-y-[0.75rem]">
                  <p className="text-[1.25rem] text-white font-normal">
                    {t("web_dev")}
                  </p>
                  <p className="md:hidden text-[0.75rem] font-normal text-white">
                    120,000원~ / 일
                  </p>
                </div>
              </div>
              <p className=" hidden md:block text-[0.75rem] font-normal text-[#71717A]">
                {t("web_dev_desc")}
              </p>
            </div>
            <div className="flex gap-x-[5rem]  items-end ">
              <div className="text-[1.25rem] font-normal text-white hidden lg:block">
                120,000원~ / 일
              </div>
              <div>
                <Input
                  placeholder={t("num_only")}
                  label={t("days")}
                  id="inputpriece3"
                  value={days.webDev}
                  onChange={(value) =>
                    handleDaysChange("webDev", value.replace(/[^0-9]/g, ""))
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start ">
            <div className="flex flex-col gap-y-2 ">
              <div className="flex items-center gap-x-10 md:gap-x-4">
                <div>
                  <CheckIcon checked={days.mobileDev !== ""} />
                </div>
                <div className="flex flex-col gap-y-[0.75rem]">
                  <p className="text-[1.25rem] text-white font-normal">
                    {t("app_dev")}
                  </p>
                  <p className="md:hidden text-[0.75rem] font-normal text-white">
                    120,000원~ / 일
                  </p>
                </div>
              </div>
              <p className=" hidden md:block text-[0.75rem] font-normal text-[#71717A]">
                {t("app_dev_desc")}
              </p>
            </div>
            <div className="flex gap-x-[5rem]  items-end ">
              <div className="text-[1.25rem] font-normal text-white hidden lg:block">
                120,000원~ / 일
              </div>
              <div>
                <Input
                  placeholder={t("num_only")}
                  label={t("days")}
                  id="inputpriece4"
                  value={days.mobileDev}
                  onChange={(value) =>
                    handleDaysChange("mobileDev", value.replace(/[^0-9]/g, ""))
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start ">
            <div className="flex flex-col gap-y-2 ">
              <div className="flex items-center gap-x-10 md:gap-x-4">
                <div>
                  <CheckIcon checked={days.backendDev !== ""} />
                </div>
                <div className="flex flex-col gap-y-[0.75rem]">
                  <p className="text-[1.25rem] text-white font-normal">
                    {t("backend_dev")}
                  </p>
                  <p className="md:hidden text-[0.75rem] font-normal text-white">
                    120,000원~ / 일
                  </p>
                </div>
              </div>
              <p className=" hidden md:block text-[0.75rem] font-normal text-[#71717A]">
                {t("backend_dev_desc")}
              </p>
            </div>
            <div className="flex gap-x-[5rem]  items-end ">
              <div className="text-[1.25rem] font-normal text-white hidden lg:block">
                120,000원~ / 일
              </div>
              <div>
                <Input
                  placeholder={t("num_only")}
                  label={t("days")}
                  id="inputpriece5"
                  value={days.backendDev}
                  onChange={(value) =>
                    handleDaysChange("backendDev", value.replace(/[^0-9]/g, ""))
                  }
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-start ">
            <div className="flex flex-col gap-y-2 ">
              <div className="flex items-center gap-x-10 md:gap-x-4">
                <div>
                  <CheckIcon checked={days.infraDev !== ""} />
                </div>
                <div className="flex flex-col gap-y-[0.75rem]">
                  <p className="text-[1.25rem] text-white font-normal">
                    {t("infra_engineer")}
                  </p>
                  <p className="md:hidden text-[0.75rem] font-normal text-white">
                    350,000원 / 일
                  </p>
                </div>
              </div>
              <p className=" hidden md:block text-[0.75rem] font-normal text-[#71717A]">
                {t("infra_engineer_desc")}
              </p>
            </div>
            <div className="flex gap-x-[5rem]  items-end ">
              <div className="text-[1.25rem] font-normal text-white hidden lg:block">
                350,000원 / 일
              </div>
              <div>
                <Input
                  placeholder={t("num_only")}
                  label={t("days")}
                  id="inputpriece6"
                  value={days.infraDev}
                  onChange={(value) =>
                    handleDaysChange("infraDev", value.replace(/[^0-9]/g, ""))
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-y-[1.25rem]">
          <div className=" flex justify-between items-center ">
            <div className="text-[1.25rem] font-normal text-white">
              {t("labor_cost")}
            </div>
            <div className="text-[1.25rem] font-bold text-white">
              {laborCost}원
            </div>
          </div>
          <div className=" flex justify-between items-center ">
            <div className="text-[1.25rem] font-normal text-white">
              {t("technical_fee")}
            </div>
            <div className="text-[1.25rem] font-bold text-white">
              {techFee}원
            </div>
          </div>
          <div className=" flex justify-between items-center ">
            <div className="text-[1.25rem] font-normal text-white">
              {t("vat")}
            </div>
            <div className="text-[1.25rem] font-bold text-white">{total}원</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;

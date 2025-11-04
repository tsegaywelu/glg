"use client";

import { useTranslation } from "react-i18next";

const HeaderCard3 = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 ">
      <p className="text-[1.25rem] text-[#FFFFFF] font-normal text-center">
        {t("meticulous_pms")}
      </p>
      <div className="text-[2rem] font-bold text-white text-center">
        <span className="md:block">{t("structured_planning_comm")}</span>
      </div>
    </div>
  );
};

export default HeaderCard3;

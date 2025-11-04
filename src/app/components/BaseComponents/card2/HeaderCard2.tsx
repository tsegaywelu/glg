"use client";

import { useTranslation } from "react-i18next";

const HeaderCard2 = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 ">
      <p className="text-[1.25rem] text-[#FFFFFF] font-normal text-center">
        {t("best_devs")}
      </p>
      <div className="text-[2rem] font-bold text-white text-center">
        <span className="md:block">{t("client_portfolio")}</span>
      </div>
    </div>
  );
};

export default HeaderCard2;

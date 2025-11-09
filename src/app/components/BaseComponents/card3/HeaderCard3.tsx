"use client";

import { Trans, useTranslation } from "react-i18next";

const HeaderCard3 = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 ">
      <p className="text-[1.25rem] text-[#FFFFFF] font-normal text-center leading-[1.4375rem]">
        {t("meticulous_pms")}
      </p>
      <div className="text-[2rem] font-bold text-white text-center leading-[2.3125rem]">
        <span className="">
          <Trans
            i18nKey="structured_planning_comm"
            components={{
              br: <br />,
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default HeaderCard3;

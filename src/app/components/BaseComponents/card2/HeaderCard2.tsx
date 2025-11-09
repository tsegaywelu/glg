"use client";

import { Trans, useTranslation } from "react-i18next";

const HeaderCard2 = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 ">
      <p className="text-[1.25rem] text-[#FFFFFF] font-normal text-center leading-[1.4375rem]">
        {t("best_devs")}
      </p>
      <div className="text-[2rem] font-bold text-white text-center leading-[2.3125rem] ">
        <Trans
          i18nKey="client_portfolio"
          components={{
            br: <br className="block mt-[2.3125rem] md:mt-0 " />,
          }}
        />
      </div>
    </div>
  );
};

export default HeaderCard2;

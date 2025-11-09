"use client";

import Question from "../components/BaseComponents/QuestionCard/Question";

import Header from "../components/OneTimeComponents/Header";
import PriceCard from "./PriceCard";
import { useTranslation } from "react-i18next";

const page = () => {
  const { t } = useTranslation();
  return (
    <div className="overflow-y-auto bg-[#09090B] text-white">
      <div>
        <div
          className="bg-[#FF7B00] py-[0.75rem] mx-auto text-[0.875rem]  text-center leading-[1rem]"
          dangerouslySetInnerHTML={{ __html: t("inquire") }}
        />
      </div>
      <div className="px-10 md:px-[5rem] 2xl:px-[10rem]">
        <PriceCard />
        <Question />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default page;

"use client";

import Card1 from "./components/BaseComponents/card1/Card1";
import Card2 from "./components/BaseComponents/card2/Card2";
import Card3 from "./components/BaseComponents/card3/Card3";
import Card4 from "./components/BaseComponents/card4/Card4";
import Question from "./components/BaseComponents/QuestionCard/Question";
import HeroSection from "./components/OneTimeComponents/HeroSection";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="overflow-y-auto bg-[#09090B] text-white">
      <main className="flex flex-col   ">
        <div>
          <div
            className="bg-[#FF7B00] py-[0.75rem] mx-auto text-[0.875rem]  text-center leading-[1rem]"
            dangerouslySetInnerHTML={{ __html: t("inquire") }}
          />
        </div>
        <HeroSection />
      </main>
      <div className="px-[5rem] 2xl:px-[10rem] max-w-[108rem] mx-auto">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Question />
      </div>
    </div>
  );
}

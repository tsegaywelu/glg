"use client";

import { Suspense } from "react";
// import Footer from "../components/OneTimeComponents/Footer";
import Header from "../components/OneTimeComponents/Header";
import EstimationCard from "./EstimationCard";

import { useTranslation } from "react-i18next";

const page = () => {
  const { t } = useTranslation();
  return (
    <div className="overflow-y-auto bg-[#09090B]">
      <div>
        <div
          className="bg-[#FF7B00] py-[0.75rem] mx-auto text-[0.875rem]  text-center font-normal"
          dangerouslySetInnerHTML={{ __html: t("inquire") }}
        />
      </div>
      <div className="px-10 md:px-[5rem] 2xl:px-[10rem]">
        {/* <EstimationCard /> */}
        <Suspense
          fallback={
            <div className="text-center text-white py-10">
              Loading estimation...
            </div>
          }
        >
          <EstimationCard />
        </Suspense>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default page;

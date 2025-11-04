// const QestionHeader = () => {
//   return (
//     <div className="flex flex-col items-center ">
//       <h1 className="font-normal text-5 text-white text-center">
//         Glitch 진짜 괜찮을까? 아직 고민이라면
//       </h1>
//       <p className="font-bold text-[2rem]">
//         {" "}
//         <span className="text-primary">3일간 무료로 </span>{" "}
//         <span className="text-white">경험하고 결정하세요.</span>
//       </p>
//     </div>
//   );
// };

// export default QestionHeader;

"use client";

import { useTranslation } from "react-i18next";

const QestionHeader = () => {
  const { t } = useTranslation();

  // Extract parts from "free_trial": "<o>3일간 무료로</o> 경험하고 결정하세요."
  const freeTrialText = t("free_trial");
  const primaryPart = freeTrialText.split("<o>")[1]?.split("</o>")[0] || "";
  const whitePart =
    freeTrialText.split("</o>")[1] || freeTrialText.split("<o>")[0] || "";

  return (
    <div className="flex flex-col items-center ">
      <h1 className="font-normal text-5 text-white text-center">
        {t("still_wondering")}
      </h1>

      <p className="font-bold text-[2rem]">
        <span className="text-white"> {freeTrialText.split("<o>")[0]}</span>
        <span className="text-primary">{primaryPart}</span>
        <span className="text-white">{whitePart}</span>
      </p>
    </div>
  );
};

export default QestionHeader;

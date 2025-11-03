// const HeaderCard4 = () => {
//   return (
//     <div className="space-y-4 ">
//       <p className="text-[1.25rem] text-[#FFFFFF] font-normal text-center">
//         앱부터 홈페이지, 관리자 페이지, 하드웨어까지
//       </p>
//       <div className="text-[2rem] font-bold text-white text-center">
//         <span className="md:block">필요한 개발이 무엇이든</span>
//         <span className="md:block">
//           최고의 개발자들이 함께할 준비가 되어있어요
//         </span>
//       </div>
//     </div>
//   );
// };

// export default HeaderCard4;
"use client";

import { useTranslation } from "react-i18next";

const HeaderCard4 = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 ">
      <p className="text-[1.25rem] text-[#FFFFFF] font-normal text-center">
        {t("apps_websites_hardware")}
      </p>
      <div className="text-[2rem] font-bold text-white text-center">
        <span className="md:block">{t("any_dev_type_first")}</span>
        <span className="md:block">{t("any_dev_type_second")}</span>
      </div>
    </div>
  );
};

export default HeaderCard4;

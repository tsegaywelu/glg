import BodyCard1 from "./BodyCard1";
import HeaderCard1 from "./HeaderCard1";
// import UnionSVG from "../../Icons/Union.svg";
import UnionIcon from "../../Icons/Union";
import { useTranslation } from "react-i18next";
const Card1 = () => {
  const { t } = useTranslation();
  return (
    <div className="py-[5rem] space-y-[5rem] ">
      <div className="bg-foreground-strong flex justify-center  ">
        <div className="flex flex-col items-center gap-y-4 text-center  mx-auto ">
          <h1 className="text-[1.25rem] text-white font-normal">
            {t("until_now")}
          </h1>
          {/* <div className="flex items-center justify-center gap-x-[0.62rem] flex-wrap text-white  text-[2rem] text-center ">
            <div>왜 고민하고 있었나요?</div>
            <img
              src="/images/tempLogo.png"
              alt="Logo"
              className="h-[1.75rem] w-[6.9375rem]"
            />
            <div>면 쉬웠을텐데요!</div>
          </div> */}
          <div className="flex items-center justify-center gap-x-[0.62rem] flex-wrap text-white  text-[2rem] text-center font-bold ">
            <div>{t("easy_with_glitch").split("<img>")[0]}</div>
            <img
              src="/images/tempLogo.png"
              alt="Logo"
              className="h-[1.75rem] w-[6.9375rem]"
            />
            <div className="font-extrabold">
              {t("easy_with_glitch").split("</img>")[1] ||
                t("easy_with_glitch").split("<img>")[1]?.split("</img>")[0]}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2.5rem] items-stretch content-stretch ">
        <div className="w-full flex flex-col items-center h-full ">
          <div className="w-full flex-1">
            <HeaderCard1
              textColor="#9FA9FF"
              borderColor="#AFB7FF"
              buttonText="공공기관 E사 "
              bodyText={
                <div className="text-center w-full  text-ellipsis line-clamp-2">
                  <span className="text-[1.25rem] font-normal text-[#FFFFFF] text-center whitespace-nowrap truncate">
                    이 기능은 핵심이라 꼭 필요 한데
                  </span>
                  <span className="block text-[1.25rem] font-bold text-[#FFFFFF] text-center ">
                    개발비가 부담스러워요 😅
                  </span>
                </div>
              }
            />
          </div>
          <UnionIcon
            className="w-[0.75rem] min-h-[2.375rem] h-[2rem] "
            textColor="#AFB7FF"
          />
          <div className="w-full flex-1 h-full">
            <BodyCard1
              ImageURL="/images/card1Images/frame11.png"
              borderColor="#AFB7FF"
              Texts={
                <div className="">
                  나한테만 집중하는 개발자와 PM을
                  <span className="text-primary">
                    월 260만원~의 합리적인 금액
                  </span>
                  으로 이용해보세요.
                </div>
              }
              backgroundColor="#AFB7FF29"
              DonotExpand
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center  h-full ">
          <div className="w-full flex-1">
            <HeaderCard1
              textColor="#FFAFFC"
              borderColor="#FFAFFC"
              buttonText="170만 유저 서비스 J사"
              bodyText={
                <div className="text-center text-ellipsis line-clamp-2">
                  <span className="text-[1.25rem] font-normal text-[#FFFFFF] text-center">
                    개발자가
                  </span>
                  <span className="text-[1.25rem] font-normal text-[#FFFFFF] text-center">
                    일을 잘 하고
                  </span>
                  <span className=" text-[1.25rem] font-bold text-[#FFFFFF] text-center ">
                    있는지,문제는 없는지
                  </span>
                  <span className="text-[1.25rem] font-normal text-[#FFFFFF] text-center">
                    너무 궁금해요!
                  </span>
                </div>
              }
              // headerText="개발자가 일을 잘 하고 있는지,"
            />
          </div>
          <UnionIcon
            className="w-[0.75rem] h-[2.375rem] "
            textColor="#FFAFFC"
          />
          <div className="w-full flex-1 h-full">
            <BodyCard1
              ImageURL="/images/card1Images/frame21.png"
              borderColor="#FFAFFC"
              Texts={
                <div className="">
                  실시간 모니터링 기능으로 개발자의
                  <span className="text-primary">
                    개발 참여 시간, 코드 퀄리티를 매일 모니터링/보고
                  </span>
                  하고 있어요.
                </div>
              }
              backgroundColor="#FFAFFC29"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center h-full ">
          <div className="w-full flex-1">
            <HeaderCard1
              textColor="#FFB8AF"
              borderColor="#FFB8AF"
              buttonText="해외기업 B사"
              bodyText={
                <div className="w-full text-ellipsis line-clamp-2 ">
                  <span className="text-[1.25rem] font-normal text-[#FFFFFF] text-center  ">
                    개발 속도가 너무 느린거 같아요
                  </span>
                  <span className=" text-[1.25rem] font-bold text-[#FFFFFF] text-center  ">
                    어떻게 빨리 할 수 없을까요 😭
                  </span>
                </div>
              }
            />
          </div>
          <UnionIcon
            className="w-[0.75rem] h-[2.375rem] "
            textColor="#FFB8AF"
          />
          <div className="w-full  h-full flex-1">
            <BodyCard1
              ImageURL="/images/card1Images/frame31.png"
              borderColor="#FFB8AF29"
              Texts={
                <div className="">
                  전담 PM과 AI 기획자가 실시간으로 개발자를 전담마크해
                  <span className="text-primary">
                    개발자의 업무 효율을 극대화
                  </span>
                  하고 있어요.
                </div>
              }
              backgroundColor="#FFB8AF29"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;

// import BodyCard1 from "./BodyCard1";
// import HeaderCard1 from "./HeaderCard1";
// import UnionIcon from "../../Icons/Union";
// import { useTranslation } from "react-i18next";

// const Card1 = () => {
//   const { t } = useTranslation();

//   return (
//     <div className="  py-[5rem] space-y-[5rem] ">
//       <div className="bg-foreground-strong flex justify-center  ">
//         <div className="flex flex-col items-center gap-y-4 text-center  mx-auto ">
//           <h1 className="text-[1.25rem] text-white font-normal">
//             {t("until_now")}
//           </h1>
//           <div className="flex items-center justify-center gap-x-[0.62rem] flex-wrap text-white  text-[2rem] text-center ">
//             <div>{t("easy_with_glitch").split("<img>")[0]}</div>
//             <img
//               src="/images/tempLogo.png"
//               alt="Logo"
//               className="h-[1.75rem] w-[6.9375rem]"
//             />
//             <div>
//               {t("easy_with_glitch").split("</img>")[1] ||
//                 t("easy_with_glitch").split("<img>")[1]?.split("</img>")[0]}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2.5rem] items-stretch content-stretch ">
//         <div className="w-full flex flex-col items-center h-full ">
//           <div className="w-full flex-1">
//             <HeaderCard1
//               textColor="#9FA9FF"
//               borderColor="#AFB7FF"
//               buttonText={t("public_inst")}
//               bodyText={
//                 <div className="text-center w-full  text-ellipsis line-clamp-2">
//                   <span className="text-[1.25rem] font-normal text-[#FFFFFF] text-center whitespace-nowrap">
//                     {t("public_inst_sub")
//                       .replace(/<b>/g, "")
//                       .replace(/<\/b>/g, "")
//                       .replace(/…/g, "")
//                       .split("😅")[0]
//                       .trim()}
//                   </span>
//                   <span className="block text-[1.25rem] font-bold text-[#FFFFFF] text-center ">
//                     {t("public_inst_sub").match(/<b>(.*?)<\/b>/)?.[1] || ""} 😅
//                   </span>
//                 </div>
//               }
//             />
//           </div>
//           <UnionIcon
//             className="w-[0.75rem] min-h-[2.375rem] h-[2rem] "
//             textColor="#AFB7FF"
//           />
//           <div className="w-full flex-1 h-full">
//             <BodyCard1
//               ImageURL="/images/card1Images/frame11.png"
//               borderColor="#AFB7FF"
//               Texts={
//                 <div className="">
//                   {t("public_inst_body").split("<o>")[0]}
//                   <span className="text-primary">
//                     {t("public_inst_body").split("<o>")[1]?.split("</o>")[0] ||
//                       ""}
//                   </span>
//                   {t("public_inst_body").split("</o>")[1] || ""}
//                 </div>
//               }
//               backgroundColor="#AFB7FF29"
//               DonotExpand
//             />
//           </div>
//         </div>
//         <div className="w-full flex flex-col items-center  h-full ">
//           <div className="w-full flex-1">
//             <HeaderCard1
//               textColor="#FFAFFC"
//               borderColor="#FFAFFC"
//               buttonText={t("company_j")}
//               bodyText={
//                 <div className="text-center text-ellipsis line-clamp-2">
//                   <span className="text-[1.25rem] font-normal text-[#FFFFFF] text-center">
//                     {t("company_j_sub").split("<b>")[0].trim()}
//                   </span>
//                   <span className="text-[1.25rem] font-normal text-[#FFFFFF] text-center">
//                     {t("company_j_sub")
//                       .split("<b>")[1]
//                       ?.split("</b>")[0]
//                       .split("또는")[0]
//                       .trim()}
//                   </span>
//                   <span className=" text-[1.25rem] font-bold text-[#FFFFFF] text-center ">
//                     {t("company_j_sub")
//                       .match(/<b>(.*?)<\/b>/)?.[1]
//                       ?.split("또는")[1]
//                       ?.trim() ||
//                       t("company_j_sub").match(/<b>(.*?)<\/b>/)?.[1] ||
//                       ""}
//                   </span>
//                   <span className="text-[1.25rem] font-normal text-[#FFFFFF] text-center">
//                     {t("company_j_sub").split("</b>")[1]?.trim() || ""}
//                   </span>
//                 </div>
//               }
//             />
//           </div>
//           <UnionIcon
//             className="w-[0.75rem] h-[2.375rem] "
//             textColor="#FFAFFC"
//           />
//           <div className="w-full flex-1 h-full">
//             <BodyCard1
//               ImageURL="/images/card1Images/frame21.png"
//               borderColor="#FFAFFC"
//               Texts={
//                 <div className="">
//                   {t("company_j_body").split("<o>")[0]}
//                   <span className="text-primary">
//                     {t("company_j_body").split("<o>")[1]?.split("</o>")[0] ||
//                       ""}
//                   </span>
//                   {t("company_j_body").split("</o>")[1] || ""}
//                 </div>
//               }
//               backgroundColor="#FFAFFC29"
//             />
//           </div>
//         </div>

//         <div className="w-full flex flex-col items-center h-full ">
//           <div className="w-full flex-1">
//             <HeaderCard1
//               textColor="#FFB8AF"
//               borderColor="#FFB8AF"
//               buttonText={t("overseas_company")}
//               bodyText={
//                 <div className="w-full text-ellipsis line-clamp-2 ">
//                   <span className="text-[1.25rem] font-normal text-[#FFFFFF] text-center  ">
//                     {t("overseas_company_sub")
//                       .replace(/<b>/g, "")
//                       .replace(/<\/b>/g, "")
//                       .split("😭")[0]
//                       .trim()}
//                   </span>
//                   <span className=" text-[1.25rem] font-bold text-[#FFFFFF] text-center  ">
//                     {t("overseas_company_sub").match(/<b>(.*?)<\/b>/)?.[1] ||
//                       ""}{" "}
//                     😭
//                   </span>
//                 </div>
//               }
//             />
//           </div>
//           <UnionIcon
//             className="w-[0.75rem] h-[2.375rem] "
//             textColor="#FFB8AF"
//           />
//           <div className="w-full  h-full flex-1">
//             <BodyCard1
//               ImageURL="/images/card1Images/frame31.png"
//               borderColor="#FFB8AF29"
//               Texts={
//                 <div className="">
//                   {t("overseas_company_body").split("<o>")[0]}
//                   <span className="text-primary">
//                     {t("overseas_company_body")
//                       .split("<o>")[1]
//                       ?.split("</o>")[0] || ""}
//                   </span>
//                   {t("overseas_company_body").split("</o>")[1] || ""}
//                 </div>
//               }
//               backgroundColor="#FFB8AF29"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card1;

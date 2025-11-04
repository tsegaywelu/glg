// import Image from "next/image";
// import Link from "next/link";

// const Footer = () => {
//   const FirstText = [
//     { text: "개발 외주", link: "/" },
//     { text: "요금 정책", link: "/price" },
//     {
//       text: "서비스 소개서",
//       link: "http://localhost:3000/pdf/portfolio.pdf",
//       newTab: true,
//     },
//     {
//       text: "외주 꿀팁",
//       link: "https://blog.naver.com/NBlogTop.naver?blogId=glitch-ai",
//       newTab: true,
//     },
//   ];
//   const SecondText = [
//     { text: "Sherry Boothhub", link: "https://sherry.gg", newTab: true },
//     {
//       text: "서비스 소개서",
//       link: "http://localhost:3000/pdf/sherry.pdf",
//       newTab: true,
//     },
//   ];
//   const ThereedText = [
//     "대표이사 : 유동률",
//     "본사 : 대구광역시 동구 장등로 76 407호",
//     "연구소 : 대구광역시 동구 장등로 76 307호",
//     "사업자등록번호 : 887-86-03669",
//     "통신판매업신고 : 2025-대구동구-0769",
//   ];

//   return (
//     <footer className=" font-pretendard  py-[5rem]   space-y-[5rem]">
//       <div className="flex flex-col gap-y-[5rem] md:flex-row md:justify-between ">
//         <div className="flex flex-col gap-[1.5rem]">
//           <div className="flex flex-col gap-[0.75rem]">
//             <div className="flex gap-2">
//               {" "}
//               <Image
//                 src="/images/footerImages/phone.png"
//                 alt="logo"
//                 width={24}
//                 height={24}
//                 className="w-[1.5rem] h-[1.5rem]"
//               />{" "}
//               <p className="font-semibold text-5 text-white">고객 문의</p>
//             </div>
//             <p className="font-semibold text-[1.75rem] text-white">
//               053-247-2345
//             </p>
//           </div>
//           <div className="flex gap-[1.19rem] ">
//             <div className="text-white font-normal text-[1.25rem]">
//               10:00 - 21:00
//             </div>
//             <div className="text-[#71717A] font-normal text-[1.25rem]">
//               주말, 공휴일 제외
//             </div>
//           </div>
//           <div className="text-white font-normal text-5">help@sweech.io</div>
//         </div>
//         <div className="flex gap-[2.44rem] ">
//           <div className="flex flex-col gap-4 ">
//             <Image
//               src="/images/tempLogo.png"
//               width={79}
//               height={20}
//               alt="logo"
//               className="w-[4.9375rem] h-[1.25rem]"
//             />
//             {FirstText.map((text, index) => {
//               return text.newTab ? (
//                 <a
//                   href={text.link}
//                   target="_blank"
//                   className="flex gap-4 items-center"
//                   key={index}
//                 >
//                   <p className="text-[1.25rem] text-[#71717A] font-normal">
//                     {text.text}
//                   </p>
//                   <Image
//                     src="/images/footerImages/BigArrow.png"
//                     width={8}
//                     height={14}
//                     alt="logo"
//                     className="w-[0.5rem] h-[0.875rem]"
//                   />
//                 </a>
//               ) : (
//                 <Link
//                   href={text.link}
//                   className="flex gap-4 items-center"
//                   key={index}
//                 >
//                   <p className="text-[1.25rem] text-[#71717A] font-normal">
//                     {text.text}
//                   </p>
//                   <Image
//                     src="/images/footerImages/BigArrow.png"
//                     width={8}
//                     height={14}
//                     alt="logo"
//                     className="w-[0.5rem] h-[0.875rem]"
//                   />
//                 </Link>
//               );
//             })}
//           </div>

//           <div className="flex flex-col gap-4">
//             <Image
//               src="/images/footerImages/sherry.png"
//               width={79}
//               height={20}
//               alt="logo"
//               className="w-[6.4489rem] h-[1.5rem]"
//             />
//             {SecondText.map((text, index) => {
//               return (
//                 <a
//                   href={text.link}
//                   target="_blank"
//                   className="flex gap-4 items-center"
//                   key={index}
//                 >
//                   <p className="text-[1.25rem] text-[#71717A] font-normal">
//                     {text.text}
//                   </p>
//                   <Image
//                     src="/images/footerImages/BigArrow.png"
//                     width={8}
//                     height={14}
//                     alt="logo"
//                     className="w-[0.5rem] h-[0.875rem]"
//                   />
//                 </a>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col gap-y-[1.25rem]">
//         <div className="font-semibold text-[1.5rem] text-white">
//           스위치 주식회사
//         </div>
//         <div className="flex flex-col gap-y-[1.25rem] xl:flex-row">
//           {ThereedText.map((text, index) => (
//             <div key={index} className="flex xl:items-center xl:justify-center">
//               <span className="font-light text-[1rem] text-white">{text}</span>
//               {index < FirstText.length && (
//                 <span className="px-[1.25rem] text-[1.25rem] font-normal hidden xl:inline-block">
//                   |
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="font-light text-[1rem] text-white">
//           © 2024 Sweech Inc.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";

// export default function Header() {
//   const { t, i18n } = useTranslation();
//   const currentLang = i18n.language === "ko" ? "KR" : "EN";
//   const pathName = usePathname();

//   const toggleLanguage = () => {
//     i18n.changeLanguage(i18n.language === "ko" ? "en" : "ko");
//   };
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.classList.add("no-scroll");
//     } else {
//       document.body.classList.remove("no-scroll");
//     }

//     // Cleanup on unmount
//     return () => {
//       document.body.classList.remove("no-scroll");
//     };
//   }, [isMenuOpen]);
//   const navItems = [
//     { name: t("outsourcing"), href: "/" },
//     { name: "요금 정책", href: "/price" },
//     { name: "서비스 소개서", href: "/pdf/portfolio.pdf", newTab: true },
//     {
//       name: "외주 꿀팁",
//       href: "https://blog.naver.com/NBlogTop.naver?blogId=glitch-ai",
//       newTab: true,
//     },
//   ];

//   return (
//     <div>
//       <div className="bg-[#09090B] text-white font-semibold font-pretendard px-[5rem] py-[1.81rem]">
//         {/* main header */}
//         <div className="w-full container mx-auto flex  items-center justify-between   ">
//           <Link href="/" className="flex items-center  cursor-pointer ">
//             <img
//               src="/images/tempLogo.png"
//               alt="Logo"
//               className="h-[2rem] w-[7.875rem]"
//             />
//           </Link>

//           {/* desktop nav */}
//           <div className=" flex items-center   gap-x-[2.5rem] ">
//             <nav className="hidden xl:flex items-center gap-x-[2.5rem] w-full ">
//               {navItems.map((item) =>
//                 item.newTab ? (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={` ${
//                       item.href === pathName ? "text-primary" : "text-white"
//                     } hover:text-[#FF7B00] transition-colors text-[1.25rem] font-semibold`}
//                   >
//                     {item.name}
//                   </a>
//                 ) : (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className={` ${
//                       item.href === pathName ? "text-primary" : "text-white"
//                     } hover:text-[#FF7B00] transition-colors text-[1.25rem] font-semibold`}
//                   >
//                     {item.name}
//                   </a>
//                 )
//               )}

//               <div
//                 className=" bg-white w-[4.375rem] h-[2.5rem] rounded-full flex gap-x-1 px-[0.44rem] py-[0.38rem]  cursor-pointer"
//                 onClick={toggleLanguage}
//               >
//                 <button>
//                   <Image
//                     src="/images/Rotate.png"
//                     alt="rotate"
//                     width={24}
//                     height={24}
//                     className={`w-[1.5rem] h-[1.5rem] cursor-pointer transform transition-transform duration-300 ease-in-out ${
//                       currentLang === "KR" ? "rotate-180 " : ""
//                     }`}
//                   />
//                 </button>
//                 <button>
//                   <Image
//                     src={
//                       currentLang === "KR"
//                         ? "/images/English.png"
//                         : "/images/Korea.png"
//                     }
//                     alt="Translate"
//                     width={28}
//                     height={28}
//                     className="w-[1.75rem] h-[1.75rem] cursor-pointer"
//                   />
//                 </button>
//               </div>
//             </nav>
//             <Link
//               href="/estimation"
//               className={`px-[1.5rem] py-[0.75rem] border-[0.125rem] border-[#FF7B00]
//             whitespace-nowrap text-[1rem]
//             font-bold rounded-full  hover:text-primary
//             ${pathName === "/estimation" ? "text-primary" : "text-white"}`}
//             >
//               3초만에 견적받기
//             </Link>

//             {/* mobile menu button */}
//             <button
//               className="xl:hidden flex flex-col space-y-1 z-50 "
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               <span
//                 className={`block w-6 h-0.5 bg-white transition-transform ${
//                   isMenuOpen ? "rotate-45 translate-y-1.5" : ""
//                 }`}
//               ></span>
//               <span
//                 className={`block w-6 h-0.5 bg-white transition-opacity ${
//                   isMenuOpen ? "opacity-0" : ""
//                 }`}
//               ></span>
//               <span
//                 className={`block w-6 h-0.5 bg-white transition-transform ${
//                   isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
//                 }`}
//               ></span>
//               {/* <Image
//                 src="/Hamburger.png"
//                 alt="Hamburger"
//                 width={40}
//                 height={40}
//                 className="w-[2.5rem] h-[2.5rem] cursor-pointer"
//               /> */}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* mobile menu overlay */}
//       {isMenuOpen && (
//         <div className="h-fit fixed inset-0 bg-[#09090B] z-40 xl:hidden mt-24 pt-26 space-y-[80px] font-pretendard ">
//           <div className="flex flex-col items-center justify-center space-y-[5rem] font-semibold ">
//             <nav className="flex flex-col space-y-[5rem] text-white items-center justify-center">
//               {navItems.map((item, index) =>
//                 item.newTab ? (
//                   <a
//                     key={index}
//                     href={item.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={` ${
//                       item.href === pathName ? "text-primary" : "text-white"
//                     } text-[20px] hover:text-primary transition-colors`}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item.name}
//                   </a>
//                 ) : (
//                   <a
//                     key={index}
//                     href={item.href}
//                     className={` ${
//                       item.href === pathName ? "text-primary" : "text-white"
//                     } text-[20px] hover:text-primary transition-colors`}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item.name}
//                   </a>
//                 )
//               )}
//             </nav>

//             <div className=" bg-white w-[70px] h-[40px] rounded-full flex gap-x-[4px] px-[7.5px] py-[6.5px]  cursor-pointer">
//               <button>
//                 <Image
//                   src="/images/Rotate.png"
//                   alt="rotate"
//                   width={24}
//                   height={24}
//                   className={`w-[24px] h-[24px] cursor-pointer transform transition-transform duration-300 ease-in-out ${
//                     currentLang === "KR" ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               <button onClick={toggleLanguage}>
//                 <Image
//                   src={
//                     currentLang === "KR"
//                       ? "/images/English.png"
//                       : "/images/Korea.png"
//                   }
//                   alt="Translate"
//                   width={28}
//                   height={28}
//                   className="w-[28px] h-[28px] cursor-pointer"
//                 />
//               </button>
//             </div>
//           </div>
//           <div className="bg-[#FF7B00] py-[0.75rem] mx-auto text-[0.875rem] font-bold text-center">
//             <span className="font normal">지금 문의하면</span>
//             <span className="font-bold"> 개발자 3일 무료</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import WhiteInput from "../components/BaseComponents/QuestionCard/WiteInput";
// import CeckBoxSelection from "../components/UI/CeckBoxSelection";
// import GiveMeQuestion from "../components/UI/GiveMeQuestion";
// import QuestionWithCheckBox from "../components/UI/QuestionWithCheckBox";
// import TextArea from "../components/UI/TextArea";
// import { FormData } from "../Type";
// import { showToast } from "../components/toastComponents/showToast";
// const EstimationCard = () => {
//   const Button1Texts = ["기획", "디자인", "개발", "배포"];
//   const Button2Texts = [
//     "iOS앱",
//     "안드로이드 앱",
//     "기획",
//     "디자인",
//     "개발",
//     "배포",
//   ];
//   const Button3Texts = [
//     "관리자 페이지",
//     "iOS앱",
//     "안드로이드 앱",
//     "기획",
//     "디자인",
//     "개발",
//     "배포",
//   ];
//   const searchParams = useSearchParams();
//   const [ShowAllQestions, setShowAllQuestions] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     // Q1: Contact Information
//     companyName: "",
//     contactPerson: "",
//     email: "",

//     // Q2: Development Type (mutually exclusive)
//     developmentType: {
//       homepage: false,
//       mobileApp: false,
//       webService: false,
//     },

//     developmentStatus: {
//       newDevelopment: false,
//       maintenance: false,
//     },
//     budget: "",
//     projectDeadline: "",

//     planningStatus: {
//       onlyIdea: false,
//       basicRequirements: false,
//       detailedDocuments: false,
//     },
//     requirements: "",
//     projectOverview: "",
//     preferredLanguages: "",
//   });
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const types = searchParams.getAll("type");
//       const status = searchParams.get("status");
//       const budget = searchParams.get("budget") || "";

//       setFormData((prev) => ({
//         ...prev,
//         developmentType: {
//           homepage: types.includes("homepage"),
//           mobileApp: types.includes("mobileApp"),
//           webService: types.includes("webService"),
//         },
//         developmentStatus: {
//           newDevelopment: status === "new",
//           maintenance: status === "maint",
//         },
//         budget,
//       }));
//     }
//   }, [searchParams]);
//   const handleTextInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };
//   // Single handler for radio-like groups (mutually exclusive)
//   const handleRadioGroupChange = <T extends object>(
//     group: keyof FormData,
//     field: keyof T
//   ) => {
//     setFormData((prev) => ({
//       ...prev,
//       [group]: Object.keys(prev[group] as T).reduce(
//         (acc, key) => ({
//           ...acc,
//           [key]: key === field,
//         }),
//         {} as T
//       ),
//     }));
//   };

//   const handleDevelopmentTypeChange = (
//     type: keyof typeof formData.developmentType
//   ) => {
//     setFormData((prev) => {
//       const currentState = prev.developmentType;

//       if (type === "homepage") {
//         // Toggle homepage independently
//         return {
//           ...prev,
//           developmentType: {
//             ...currentState,
//             homepage: !currentState.homepage,
//           },
//         };
//       } else if (type === "mobileApp") {
//         // Select mobileApp, deselect webService
//         return {
//           ...prev,
//           developmentType: {
//             ...currentState,
//             mobileApp: !currentState.mobileApp,
//             webService:
//               currentState.webService && !currentState.mobileApp
//                 ? false
//                 : currentState.webService,
//           },
//         };
//       } else if (type === "webService") {
//         // Select webService, deselect mobileApp
//         return {
//           ...prev,
//           developmentType: {
//             ...currentState,
//             webService: !currentState.webService,
//             mobileApp:
//               currentState.mobileApp && !currentState.webService
//                 ? false
//                 : currentState.mobileApp,
//           },
//         };
//       }

//       return prev;
//     });
//   };
//   const appCheck =
//     formData.developmentType.mobileApp ||
//     formData.developmentType.webService ||
//     formData.developmentType.homepage;
//   const Jobtype =
//     formData.developmentStatus.newDevelopment ||
//     formData.developmentStatus.maintenance;
//   const ButtonValidation =
//     formData.companyName &&
//     formData.contactPerson &&
//     formData.email &&
//     formData.budget &&
//     appCheck &&
//     Jobtype;
//   // Handler for Q3: Development Status (radio buttons - mutually exclusive)
//   const handleDevelopmentStatusChange = (
//     type: keyof typeof formData.developmentStatus
//   ) => {
//     setFormData((prev) => ({
//       ...prev,
//       developmentStatus: {
//         newDevelopment: type === "newDevelopment",
//         maintenance: type === "maintenance",
//       },
//     }));
//   };

//   const handleSubmit = async () => {
//     // Basic validation
//     // Validation: at least one development type must be selected
//     const hasDevType =
//       formData.developmentType.homepage ||
//       formData.developmentType.mobileApp ||
//       formData.developmentType.webService;

//     // Validation: development status must be selected
//     const hasDevStatus =
//       formData.developmentStatus.newDevelopment ||
//       formData.developmentStatus.maintenance;

//     // Validation: budget is required
//     if (!hasDevType || !hasDevStatus || !formData.budget) {
//       showToast("error", <div>"Please fill all forms"</div>);
//       return;
//     }

//     setIsSubmitting(true);

//     // Prepare data for email
//     const submissionData = {
//       contact: {
//         company: formData.companyName,
//         contactPerson: formData.contactPerson,
//         email: formData.email,
//       },
//       developmentNeeds: {
//         homepage: formData.developmentType.homepage,
//         mobileApp: formData.developmentType.mobileApp,
//         webService: formData.developmentType.webService,
//       },
//       developmentStatus: {
//         newDevelopment: formData.developmentStatus.newDevelopment,
//         maintenance: formData.developmentStatus.maintenance,
//       },
//       budget: formData.budget
//         ? `W${parseInt(formData.budget).toLocaleString()}`
//         : "미입력",
//       projectDeadline: formData.projectDeadline,
//       planningStatus: {
//         onlyIdea: formData.planningStatus.onlyIdea,
//         basicRequirements: formData.planningStatus.basicRequirements,
//         detailedDocuments: formData.planningStatus.detailedDocuments,
//       },
//       requirements: formData.requirements,
//       projectOverview: formData.projectOverview,
//       preferredLanguages: formData.preferredLanguages,
//     };

//     try {
//       const response = await fetch("/api/send-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(submissionData),
//       });
//       const result = await response.json();
//       if (response.ok) {
//         showToast(
//           "success",
//           <div>
//             {/* <div>견적 발송에 실패했습니다.</div>
//             <div>steven@sweech.io로 문의해주세요.</div> */}

//             <div> 견적 문의가 발송되었습니다. 영업일 기준 2일 내</div>
//             <div>담당자가 연락드릴 예정입니다.</div>
//           </div>
//         );
//         setFormData({
//           companyName: "",
//           contactPerson: "",
//           email: "",
//           developmentType: {
//             homepage: false,
//             mobileApp: false,
//             webService: false,
//           },
//           developmentStatus: { newDevelopment: false, maintenance: false },
//           budget: "",
//           projectDeadline: "",
//           planningStatus: {
//             onlyIdea: false,
//             basicRequirements: false,
//             detailedDocuments: false,
//           },
//           requirements: "",
//           projectOverview: "",
//           preferredLanguages: "",
//         });
//       } else {
//         throw new Error(result.error || "Unknown error");
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       showToast(
//         "error",
//         <div>
//           <div>견적 발송에 실패했습니다.</div>
//           <div>steven@sweech.io로 문의해주세요.</div>

//           {/* <div> 견적 문의가 발송되었습니다. 영업일 기준 2일 내</div>
//         <div>담당자가 연락드릴 예정입니다.</div> */}
//         </div>
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   return (
//     <div className="py-[5rem] space-y-[2.5rem]">
//       <div className=" flex flex-col items-center justify-center gap-y-4">
//         <div className="text-5 font-normal text-white">
//           {" "}
//           Glitch 진짜 괜찮을까? 아직 고민이라면
//         </div>
//         <div className="font-bold text-[2rem]">
//           <span className="text-primary block md:inline">3일간 무료로 </span>
//           <span className="text-white">경험하고 결정하세요.</span>
//         </div>
//       </div>

//       <div className="bg-white ">
//         <div className="bg-[#FF7B00] py-[0.75rem] mx-auto text-[0.875rem] font-normal text-center whitespace-nowrap overflow-hidden">
//           내용 작성이 어렵다면 가능한 만큼만 작성해주세요. 내용 확인 후 석박
//           출신 IT 매니저가 전화로 친절하게 상담해드릴게요!
//         </div>
//         <div className="p-[2.5rem] space-y-[5rem]">
//           {/* Qestions Section */}
//           <div className=" space-y-[2.5rem]">
//             <div className="space-y-[2rem]">
//               <GiveMeQuestion
//                 QuestionNmeber="Q1"
//                 QuestionText="상담 받을 연락처를 입력해주세요."
//               />
//               <div>
//                 <WhiteInput
//                   id="first"
//                   label="회사명"
//                   placeholder="회사명 입력"
//                   value={formData.companyName}
//                   onChange={(value) =>
//                     handleTextInputChange("companyName", value)
//                   }
//                 />
//               </div>
//               <div>
//                 <WhiteInput
//                   id="second"
//                   label="담당자"
//                   placeholder="성함 입력"
//                   value={formData.contactPerson}
//                   onChange={(value) =>
//                     handleTextInputChange("contactPerson", value)
//                   }
//                 />
//               </div>
//               <div>
//                 <WhiteInput
//                   id="third"
//                   label="이메일"
//                   placeholder="이메일 입력"
//                   value={formData.email}
//                   onChange={(value) => handleTextInputChange("email", value)}
//                 />
//               </div>
//             </div>
//             <div className="space-y-[2rem]">
//               <GiveMeQuestion
//                 QuestionNmeber="Q2"
//                 QuestionText="개발하려는 것이 어떤건가요?"
//               />
//               <div className="flex flex-col gap-y-[1.25rem] md:grid xl:grid-cols-3  ">
//                 <CeckBoxSelection
//                   ButtonTexts={Button1Texts}
//                   titel="홈페이지"
//                   Totalwon="평균 : 400만원~"
//                   QuestionNumber="Question1"
//                   isSelected={formData.developmentType.homepage}
//                   onToggle={() => handleDevelopmentTypeChange("homepage")}
//                 />
//                 <CeckBoxSelection
//                   ButtonTexts={Button2Texts}
//                   titel="아이폰 앱, 안드로이드 앱"
//                   Totalwon="평균 : 1,600만원~"
//                   QuestionNumber="Question2"
//                   isSelected={formData.developmentType.mobileApp}
//                   onToggle={() => handleDevelopmentTypeChange("mobileApp")}
//                 />
//                 <CeckBoxSelection
//                   ButtonTexts={Button3Texts}
//                   titel="앱/웹 서비스, 플랫폼"
//                   Totalwon="평균 : 4,000만원~"
//                   QuestionNumber="Question3"
//                   isSelected={formData.developmentType.webService}
//                   onToggle={() => handleDevelopmentTypeChange("webService")}
//                 />
//               </div>
//             </div>
//             <div className="space-y-[2rem]">
//               <GiveMeQuestion
//                 QuestionNmeber="Q3"
//                 QuestionText="기존에 개발 된 것이 있나요?"
//               />
//               <div className="space-y-[1.25rem] xl:space-y-[0rem] xl:grid xl:grid-cols-3  ">
//                 <QuestionWithCheckBox
//                   QuestionText="신규 개발"
//                   checked={formData.developmentStatus.newDevelopment}
//                   onChange={() =>
//                     handleDevelopmentStatusChange("newDevelopment")
//                   }
//                 />
//                 <QuestionWithCheckBox
//                   QuestionText="유지보수 / 리뉴얼"
//                   checked={formData.developmentStatus.maintenance}
//                   onChange={() => handleDevelopmentStatusChange("maintenance")}
//                 />
//               </div>
//             </div>
//             <div className="space-y-[2rem]">
//               <GiveMeQuestion
//                 QuestionNmeber="Q4"
//                 QuestionText="정해진 예산은 어느정도인가요?"
//               />
//               <div>
//                 <WhiteInput
//                   placeholder="숫자만 입력"
//                   label="만원"
//                   id="budget"
//                   value={formData.budget}
//                   onChange={(value) =>
//                     handleTextInputChange(
//                       "budget",
//                       value.replace(/[^0-9]/g, "")
//                     )
//                   }
//                 />
//               </div>
//             </div>
//             {/* if show all Question */}
//             {ShowAllQestions && (
//               <div className="space-y-[5rem]">
//                 <div className="space-y-[2rem]">
//                   <GiveMeQuestion
//                     QuestionNmeber="Q5"
//                     QuestionText="과업은 언제까지 완료해야하나요?"
//                     NoStar
//                   />
//                   <div>
//                     <WhiteInput
//                       placeholder="12월 31일"
//                       id="deadline"
//                       value={formData.projectDeadline}
//                       onChange={(value) =>
//                         handleTextInputChange("projectDeadline", value)
//                       }
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-[2rem]">
//                   <GiveMeQuestion
//                     QuestionNmeber="Q6"
//                     QuestionText="현재 기획 상태는 어떤가요?"
//                     NoStar
//                   />
//                   <div className="space-y-[1.25rem] xl:space-y-[0rem] xl:grid xl:grid-cols-3 ">
//                     <QuestionWithCheckBox
//                       QuestionText="아이디어만 있음"
//                       checked={formData.planningStatus.onlyIdea}
//                       onChange={() =>
//                         handleRadioGroupChange("planningStatus", "onlyIdea")
//                       }
//                     />
//                     <QuestionWithCheckBox
//                       QuestionText="필요한 내용이 간단히 정리됨"
//                       checked={formData.planningStatus.basicRequirements}
//                       onChange={() =>
//                         handleRadioGroupChange(
//                           "planningStatus",
//                           "basicRequirements"
//                         )
//                       }
//                     />
//                     <QuestionWithCheckBox
//                       QuestionText="상세한 문서 보유"
//                       checked={formData.planningStatus.detailedDocuments}
//                       onChange={() =>
//                         handleRadioGroupChange(
//                           "planningStatus",
//                           "detailedDocuments"
//                         )
//                       }
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-[2rem]">
//                   <GiveMeQuestion
//                     QuestionNmeber="Q7"
//                     QuestionText="필요하신 내용을 작성해주세요."
//                     NoStar
//                   />
//                   <TextArea
//                     numOfrow={4}
//                     placeholder={`- 현재 앱을 개발하다가 중단된 상태입니다.
//                                  - 백엔드 개발은 완료된 상태이며, 남은 작업을 저희 앱 개발자와 함께 진행해주실 업체를 찾고 있습니다.`}
//                     value={formData.requirements}
//                     onChange={(value) =>
//                       handleTextInputChange("requirements", value)
//                     }
//                   />
//                 </div>
//                 <div className="space-y-[2rem]">
//                   <GiveMeQuestion
//                     QuestionNmeber="Q8"
//                     QuestionText="프로젝트 소개"
//                     NoStar
//                   />
//                   <TextArea
//                     numOfrow={8}
//                     placeholder={`- 게임/애니메이션 굿즈 창작자들을 위한 전자결제, 거래 플랫폼입니다.
//                                     - 기능은 아래와 같습니다.
//                                     • 구글, 애플, 카카오, 네이버 로그인 연동
//                                     • 네이버 지도 연동
//                                     • PG 연동
//                                     - 가장 최신의 기획문서는 OOO, 디자인 파일은 OOO에서 보실 수 있습니다.`}
//                     value={formData.projectOverview}
//                     onChange={(value) =>
//                       handleTextInputChange("projectOverview", value)
//                     }
//                   />
//                 </div>
//                 <div className="space-y-[2rem]">
//                   <GiveMeQuestion
//                     QuestionNmeber="Q9"
//                     QuestionText="사용 희망 언어"
//                     NoStar
//                   />
//                   <TextArea
//                     numOfrow={6}
//                     placeholder={`-Flutter
//                                     - NestJS
//                                     - Typescript
//                                     - NextJS`}
//                     value={formData.preferredLanguages}
//                     onChange={(value) =>
//                       handleTextInputChange("preferredLanguages", value)
//                     }
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//           {/* buttons section */}

//           {ShowAllQestions ? (
//             <div>
//               <button
//                 className="text-white disabled:opacity-20 text-[1rem] font-bold bg-primary py-[1rem] px-[1.5rem] rounded-full"
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//               >
//                 상담 신청
//               </button>
//             </div>
//           ) : (
//             <div className="flex items-center gap-x-[1rem]">
//               <button
//                 className="text-white disabled:opacity-[30%]  text-[1rem] font-bold bg-primary py-[1rem] px-[1.5rem] rounded-full"
//                 onClick={handleSubmit}
//                 disabled={isSubmitting || !ButtonValidation}
//               >
//                 여기까지 작성 후 상담받기
//               </button>
//               <button
//                 className="bg-white px-[1.5rem] py-[1rem] border-[0.125rem] border-primary text-[1rem] font-bold text-primary rounded-full"
//                 onClick={() => setShowAllQuestions(true)}
//               >
//                 다음
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EstimationCard;

// "use client";
// import { useMemo, useState } from "react";
// import Input from "../components/BaseComponents/Input";
// import CheckIcon from "../components/Icons/CheckIcon";
// // import { showToast } from "../components/toastComponents/showToast";
// const PriceCard = () => {
//   const rates = {
//     planner: 300000,
//     designer: 300000,
//     webDev: 120000,
//     mobileDev: 120000,
//     backendDev: 120000,
//     infraDev: 350000,
//   };

//   const [days, setDays] = useState({
//     planner: "",
//     designer: "",
//     webDev: "",
//     mobileDev: "",
//     backendDev: "",
//     infraDev: "",
//   });
//   const handleDaysChange = (role: keyof typeof days, value: string) => {
//     // Allow only digits
//     const numericValue = value.replace(/[^0-9]/g, "");
//     setDays((prev) => ({
//       ...prev,
//       [role]: numericValue,
//     }));
//   };
//   // Compute costs using useMemo for performance
//   const { laborCost, techFee, total } = useMemo(() => {
//     const labor =
//       (Number(days.planner) || 0) * rates.planner +
//       (Number(days.designer) || 0) * rates.designer +
//       (Number(days.webDev) || 0) * rates.webDev +
//       (Number(days.mobileDev) || 0) * rates.mobileDev +
//       (Number(days.backendDev) || 0) * rates.backendDev +
//       (Number(days.infraDev) || 0) * rates.infraDev;

//     const tech = Math.round(labor * 0.3);
//     return {
//       laborCost: labor.toLocaleString(),
//       techFee: tech.toLocaleString(),
//       total: (labor + tech).toLocaleString(),
//     };
//   }, [days]);
//   // const showText = () => {
//   //   console.log("I am runing");

//   //   showToast(
//   //     "error",
//   //     <div>
//   //       <div>견적 발송에 실패했습니다.</div>
//   //       <div>steven@sweech.io로 문의해주세요.</div>

//   //       {/* <div> 견적 문의가 발송되었습니다. 영업일 기준 2일 내</div>
//   //       <div>담당자가 연락드릴 예정입니다.</div> */}
//   //     </div>
//   //   );
//   // };
//   return (
//     <div className=" py-[5rem] space-y-[5rem] max-w-[57.1875rem] mx-auto ">
//       <div className="space-y-[1rem]">
//         <div className="text-5 font-normal text-white text-center">
//           <div>서비스 금액은 합리적이게</div>
//           <div>퀄리티는 최상으로</div>
//         </div>
//         <div className="text-white text-[2rem] font-bold text-center">
//           <div> 대기업 프로젝트에 참여한 인력을</div>
//           <div className="text-primary">기간제로, 합리적인 금액으로</div>
//           <div>이용할 수 있어요.</div>
//         </div>
//       </div>
//       <div className="space-y-[3.25rem]">
//         <div className="space-y-[1rem]">
//           <div className="flex justify-between items-start ">
//             <div className="flex flex-col gap-y-2 ">
//               <div className="flex items-center gap-x-10 md:gap-x-4">
//                 <div>
//                   <CheckIcon checked={days.planner !== ""} />
//                 </div>
//                 <div className="flex flex-col gap-y-[0.75rem]">
//                   <p className="text-[1.25rem] text-white font-normal">
//                     기획자
//                   </p>
//                   <p className="md:hidden text-[0.75rem] font-normal text-white">
//                     300,000원 / 일
//                   </p>
//                 </div>
//               </div>
//               <p className=" hidden md:block text-[0.75rem] font-normal text-[#71717A]">
//                 각 상황별 기획을 꼼꼼하게 봐드려요.
//               </p>
//             </div>
//             <div className="flex gap-x-[5rem]  items-end ">
//               <div className="text-[1.25rem] font-normal text-white hidden lg:block">
//                 300,000원 / 일
//               </div>
//               <div>
//                 <Input
//                   placeholder="숫자만 입력"
//                   label="일"
//                   id="inputpriece1"
//                   value={days.planner}
//                   onChange={(value) =>
//                     handleDaysChange("planner", value.replace(/[^0-9]/g, ""))
//                   }
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-between items-start ">
//             <div className="flex flex-col gap-y-2 ">
//               <div className="flex items-center gap-x-10 md:gap-x-4">
//                 <div>
//                   <CheckIcon checked={days.designer !== ""} />
//                 </div>
//                 <div className="flex flex-col gap-y-[0.75rem]">
//                   <p className="text-[1.25rem] text-white font-normal">
//                     디자이너
//                   </p>
//                   <p className="md:hidden text-[0.75rem] font-normal text-white">
//                     300,000원 / 일
//                   </p>
//                 </div>
//               </div>
//               <p className=" hidden md:block text-[0.75rem] font-normal text-[#71717A]">
//                 국내 유명 대기업 프로젝트를 진행한 디자이너가 참여해요.
//               </p>
//             </div>
//             <div className="flex gap-x-[5rem]  items-end ">
//               <div className="text-[1.25rem] font-normal text-white hidden lg:block">
//                 300,000원 / 일
//               </div>
//               <div>
//                 <Input
//                   placeholder="숫자만 입력"
//                   label="일"
//                   id="inputpriece2"
//                   value={days.designer}
//                   onChange={(value) =>
//                     handleDaysChange("designer", value.replace(/[^0-9]/g, ""))
//                   }
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-between items-start ">
//             <div className="flex flex-col gap-y-2 ">
//               <div className="flex items-center gap-x-10 md:gap-x-4">
//                 <div>
//                   <CheckIcon checked={days.webDev !== ""} />
//                 </div>
//                 <div className="flex flex-col gap-y-[0.75rem]">
//                   <p className="text-[1.25rem] text-white font-normal">
//                     웹(홈페이지) 개발자
//                   </p>
//                   <p className="md:hidden text-[0.75rem] font-normal text-white">
//                     120,000원~ / 일
//                   </p>
//                 </div>
//               </div>
//               <p className=" hidden md:block text-[0.75rem] font-normal text-[#71717A]">
//                 7년차 + 해외 법인 개발자와 PM이 참여해요.
//               </p>
//             </div>
//             <div className="flex gap-x-[5rem]  items-end ">
//               <div className="text-[1.25rem] font-normal text-white hidden lg:block">
//                 120,000원~ / 일
//               </div>
//               <div>
//                 <Input
//                   placeholder="숫자만 입력"
//                   label="일"
//                   id="inputpriece3"
//                   value={days.webDev}
//                   onChange={(value) =>
//                     handleDaysChange("webDev", value.replace(/[^0-9]/g, ""))
//                   }
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-between items-start ">
//             <div className="flex flex-col gap-y-2 ">
//               <div className="flex items-center gap-x-10 md:gap-x-4">
//                 <div>
//                   <CheckIcon checked={days.mobileDev !== ""} />
//                 </div>
//                 <div className="flex flex-col gap-y-[0.75rem]">
//                   <p className="text-[1.25rem] text-white font-normal">
//                     iOS/Android 앱 개발자
//                   </p>
//                   <p className="md:hidden text-[0.75rem] font-normal text-white">
//                     120,000원~ / 일
//                   </p>
//                 </div>
//               </div>
//               <p className=" hidden md:block text-[0.75rem] font-normal text-[#71717A]">
//                 7년차 + 해외 법인 개발자와 PM이 참여해요.
//               </p>
//             </div>
//             <div className="flex gap-x-[5rem]  items-end ">
//               <div className="text-[1.25rem] font-normal text-white hidden lg:block">
//                 120,000원~ / 일
//               </div>
//               <div>
//                 <Input
//                   placeholder="숫자만 입력"
//                   label="일"
//                   id="inputpriece4"
//                   value={days.mobileDev}
//                   onChange={(value) =>
//                     handleDaysChange("mobileDev", value.replace(/[^0-9]/g, ""))
//                   }
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-between items-start ">
//             <div className="flex flex-col gap-y-2 ">
//               <div className="flex items-center gap-x-10 md:gap-x-4">
//                 <div>
//                   <CheckIcon checked={days.backendDev !== ""} />
//                 </div>
//                 <div className="flex flex-col gap-y-[0.75rem]">
//                   <p className="text-[1.25rem] text-white font-normal">
//                     백엔드 개발자
//                   </p>
//                   <p className="md:hidden text-[0.75rem] font-normal text-white">
//                     120,000원~ / 일
//                   </p>
//                 </div>
//               </div>
//               <p className=" hidden md:block text-[0.75rem] font-normal text-[#71717A]">
//                 7년차 + 해외 법인 개발자와 PM이 참여해요.
//               </p>
//             </div>
//             <div className="flex gap-x-[5rem]  items-end ">
//               <div className="text-[1.25rem] font-normal text-white hidden lg:block">
//                 120,000원~ / 일
//               </div>
//               <div>
//                 <Input
//                   placeholder="숫자만 입력"
//                   label="일"
//                   id="inputpriece5"
//                   value={days.backendDev}
//                   onChange={(value) =>
//                     handleDaysChange("backendDev", value.replace(/[^0-9]/g, ""))
//                   }
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-between items-start ">
//             <div className="flex flex-col gap-y-2 ">
//               <div className="flex items-center gap-x-10 md:gap-x-4">
//                 <div>
//                   <CheckIcon checked={days.infraDev !== ""} />
//                 </div>
//                 <div className="flex flex-col gap-y-[0.75rem]">
//                   <p className="text-[1.25rem] text-white font-normal">
//                     인프라(서버) 개발자
//                   </p>
//                   <p className="md:hidden text-[0.75rem] font-normal text-white">
//                     350,000원 / 일
//                   </p>
//                 </div>
//               </div>
//               <p className=" hidden md:block text-[0.75rem] font-normal text-[#71717A]">
//                 Kubernetes 서버 기술을 활용해서 복잡한 대규모 시스템을
//                 운영해야할 경우 선택해주세요.
//               </p>
//             </div>
//             <div className="flex gap-x-[5rem]  items-end ">
//               <div className="text-[1.25rem] font-normal text-white hidden lg:block">
//                 350,000원 / 일
//               </div>
//               <div>
//                 <Input
//                   placeholder="숫자만 입력"
//                   label="일"
//                   id="inputpriece6"
//                   value={days.infraDev}
//                   onChange={(value) =>
//                     handleDaysChange("infraDev", value.replace(/[^0-9]/g, ""))
//                   }
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col justify-center gap-y-[1.25rem]">
//           <div className=" flex justify-between items-center ">
//             <div className="text-[1.25rem] font-normal text-white">
//               인건비 예상
//             </div>
//             <div className="text-[1.25rem] font-bold text-white">
//               {laborCost}원
//             </div>
//           </div>
//           <div className=" flex justify-between items-center ">
//             <div className="text-[1.25rem] font-normal text-white">
//               기술비 예상(인건비의 30%)
//             </div>
//             <div className="text-[1.25rem] font-bold text-white">
//               {/* //I will display valu here */}
//               {techFee}원
//             </div>
//           </div>
//           <div className=" flex justify-between items-center ">
//             <div className="text-[1.25rem] font-normal text-white">
//               총계(부가세 별도)
//             </div>
//             <div className="text-[1.25rem] font-bold text-white">
//               {/* //I will display valu here */}
//               {total}원
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PriceCard;
// import Link from "next/link";
// import ImageCard from "../BaseComponents/ImageCard";

// export default function HeroSection() {
//   const Imagelogs = [
//     {
//       src: "/images/companyLogos/Logo2.png",
//       alt: "Image 2",
//       link: "https://example.com/image2",
//       width: 217,
//       height: 24,
//       className: "object-fill w-[13.5625rem] h-[1.5rem]",
//     },
//     {
//       src: "/images/companyLogos/Logo1.png",
//       alt: "Image 1",
//       link: "https://example.com/image1",

//       width: 135,
//       height: 32,
//       className: "object-fill w-[8.4375rem] h-[2rem]",
//     },

//     {
//       src: "/images/companyLogos/Logo3.png",
//       alt: "Image 3",
//       link: "https://example.com/image3",
//       width: 134,
//       height: 24,
//       className: "object-fill w-[8.375rem] h-[1.5rem]",
//     },
//     {
//       src: "/images/companyLogos/Logo4.png",
//       alt: "Image 4",
//       link: "https://example.com/image4",
//       width: 114,
//       height: 32,
//       className: "object-fill  w-[7.125rem] h-[2rem]",
//     },
//     {
//       src: "/images/companyLogos/Logo55.png",
//       alt: "Image 5",
//       link: "https://example.com/image5",
//       width: 114,
//       height: 32,
//       className: "object-fill  w-[7.3816rem] h-[2rem]",
//     },

//     {
//       src: "/images/companyLogos/Logo6.png",
//       alt: "Image 2",
//       link: "https://example.com/image2",
//       width: 42,
//       height: 32,
//       className: "object-contain w-[2.625rem] h-[2rem]",
//     },
//     {
//       src: "/images/companyLogos/Logo7.png",
//       alt: "Image 3",
//       link: "https://example.com/image3",
//       width: 116,
//       height: 32,
//       className: " obeject-fill w-[2.625rem] h-[2rem]",
//     },
//     {
//       src: "/images/companyLogos/Logo8.png",
//       alt: "Image 4",
//       link: "https://example.com/image4",
//       width: 120,
//       height: 24,
//       className: "object-contain w-[7.5rem] h-[1.5rem]",
//     },
//     {
//       src: "/images/companyLogos/Logo9.png",

//       alt: "Image 1",
//       link: "https://example.com/image1",
//       width: 95,
//       height: 32,
//       className: "object-contain w-[5.9375rem] h-[2rem]",
//     },
//     {
//       src: "/images/companyLogos/Logo10.png",
//       alt: "Image 2",
//       link: "https://example.com/image2",
//       width: 24,
//       height: 32,
//       className: "object-contain w-[1.5rem] h-[2rem]",
//     },
//     {
//       src: "/images/companyLogos/Logo11.png",
//       alt: "Image 3",
//       link: "https://example.com/image3",
//       width: 165,
//       height: 24,
//       className: "object-contain w-[10.3125rem] h-[1.5rem] ",
//     },
//     {
//       src: "/images/companyLogos/Logo12.png",
//       alt: "Image 4",
//       link: "https://example.com/image4",
//       width: 29,
//       height: 32,
//       className: "object-contain w-[1.8125rem] h-[2rem]",
//     },

//     {
//       src: "/images/companyLogos/Logo13.png",
//       alt: "Image 1",
//       link: "https://example.com/image1",
//       width: 33,
//       height: 32,
//       className: "object-contain w-[2.0625rem] h-[2rem]",
//     },
//     {
//       src: "/images/companyLogos/Logo14.png",
//       alt: "Image 2",
//       link: "https://example.com/image2",
//       width: 43,
//       height: 32,
//       className: "object-contain w-[2.6875rem] h-[2rem]",
//     },
//     {
//       src: "/images/companyLogos/Logo15.png",
//       alt: "Image 3",
//       link: "https://example.com/image3",
//       width: 112,
//       height: 32,
//       className: "object-contain w-[7rem] h-[2rem]",
//     },
//     {
//       src: "/images/companyLogos/Logo16.png",
//       alt: "Image 4",
//       link: "https://example.com/image4",
//       width: 190,
//       height: 32,
//       className: "object-contain w-[11.875rem] h-[2rem]",
//     },

//     {
//       src: "/images/companyLogos/Logo17.png",
//       alt: "Image 1",
//       link: "https://example.com/image1",
//       width: 32,
//       height: 32,
//       className: "object-contain w-[2rem] h-[2rem]",
//     },
//     {
//       src: "/images/companyLogos/Logo18.png",
//       alt: "Image 2",
//       link: "https://example.com/image2",
//       width: 32,
//       height: 32,
//       className: "object-contain w-[2rem] h-[2rem]",
//     },
//     {
//       src: "/images/companyLogos/Logo19.png",
//       alt: "Image 3",
//       link: "https://example.com/image3",
//       width: 107,
//       height: 32,
//       className: "object-contain w-[6.6875rem] h-[2rem]",
//     },
//     {
//       src: "/images/companyLogos/Logo20.png",
//       alt: "Image 4",
//       link: "https://example.com/image4",
//       width: 272,
//       height: 32,
//       className: "object-contain w-[17.25rem] h-[2rem]",
//     },
//     {
//       src: "/images/companyLogos/Logo21.png",
//       alt: "Image 4",
//       link: "https://example.com/image4",
//       width: 36,
//       height: 32,
//       className: "object-contain h-[2rem] w-[2.25rem]",
//     },
//   ];
//   return (
//     <div className=" dotted-bg-simple w-full h-full flex-1 flex flex-col items-center gap-y-[6.66rem] pt-[11rem]">
//       <section className=" flex items-center justify-center flex-1 px-[5rem]  ">
//         <div className="space-y-4 ">
//           <div className="space-y-[2rem]">
//             <div className="text-[1.25rem] text-[#71717A] text-center font-normal">
//               대기업, 관공서, 해외 에서도
//             </div>
//             <div className="text-[#FFFFFF] font-bold text-[2rem] text-center ">
//               깜깜이 외주는 이제 그만
//             </div>
//           </div>
//           <div className="space-y-10">
//             <div className="text-[2rem] font-normal text-[#fff] text-center">
//               옆에 있는 것처럼 진행 과정을 쉽게 확인하면서 외주 맡기세요
//             </div>
//             <div className="flex justify-center ">
//               <Link
//                 href={"/estimation"}
//                 className="text-[1rem] bg-[#FF7B00] px-6 py-4 rounded-full text-white font-bold"
//               >
//                 3초만에 견적받기
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="bg-[#FFFFFF99] overflow-hidden py-[1.75rem]  w-full relative">
//         <div className="  flex items-center animate-scroll gap-x-[3.25rem]  whitespace-nowrap  ">
//           {Imagelogs.map((image, index) => (
//             <Link
//               key={index}
//               href={image.link.trim()}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <ImageCard
//                 src={image.src}
//                 alt={image.alt}
//                 link={image.link}
//                 width={image.width}
//                 height={image.height}
//                 className={image.className}
//               />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";

// import { useState } from "react";
// import CeckBoxSelection from "../../UI/CeckBoxSelection";
// import GiveMeQuestion from "../../UI/GiveMeQuestion";
// import QuestionWithCheckBox from "../../UI/QuestionWithCheckBox";
// import QestionHeader from "./QestionHeader";
// import QR from "./QR";
// import WhiteInput from "./WiteInput";
// // import { FormData } from "../../../Type";
// import { useRouter } from "next/navigation";
// import { showToast } from "../../toastComponents/showToast";
// const Question = () => {
//   const router = useRouter();
//   const Button1Texts = ["기획", "디자인", "개발", "배포"];
//   const Button2Texts = [
//     "iOS앱",
//     "안드로이드 앱",
//     "기획",
//     "디자인",
//     "개발",
//     "배포",
//   ];
//   const Button3Texts = [
//     "관리자 페이지",
//     "iOS앱",
//     "안드로이드 앱",
//     "기획",
//     "디자인",
//     "개발",
//     "배포",
//   ];
//   const [formData, setFormData] = useState({
//     // Q1: Development Type (mutually exclusive)
//     developmentType: {
//       homepage: false,
//       mobileApp: false,
//       webService: false,
//     },
//     // Q2: Development Status (radio buttons)
//     developmentStatus: {
//       newDevelopment: false,
//       maintenance: false,
//     },
//     // Q3: Budget
//     budget: "",
//   });

//   const handleTextInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleDevelopmentTypeChange = (
//     type: keyof typeof formData.developmentType
//   ) => {
//     setFormData((prev) => {
//       const currentState = prev.developmentType;

//       if (type === "homepage") {
//         // Toggle homepage independently
//         return {
//           ...prev,
//           developmentType: {
//             ...currentState,
//             homepage: !currentState.homepage,
//           },
//         };
//       } else if (type === "mobileApp") {
//         // Select mobileApp, deselect webService
//         return {
//           ...prev,
//           developmentType: {
//             ...currentState,
//             mobileApp: !currentState.mobileApp,
//             webService:
//               currentState.webService && !currentState.mobileApp
//                 ? false
//                 : currentState.webService,
//           },
//         };
//       } else if (type === "webService") {
//         // Select webService, deselect mobileApp
//         return {
//           ...prev,
//           developmentType: {
//             ...currentState,
//             webService: !currentState.webService,
//             mobileApp:
//               currentState.mobileApp && !currentState.webService
//                 ? false
//                 : currentState.mobileApp,
//           },
//         };
//       }

//       return prev;
//     });
//   };

//   // Handler for Q3: Development Status (radio buttons - mutually exclusive)
//   const handleDevelopmentStatusChange = (
//     type: keyof typeof formData.developmentStatus
//   ) => {
//     setFormData((prev) => ({
//       ...prev,
//       developmentStatus: {
//         newDevelopment: type === "newDevelopment",
//         maintenance: type === "maintenance",
//       },
//     }));
//   };

//   const handleNavigation = () => {
//     const params = new URLSearchParams();
//     // Validation: at least one development type must be selected
//     const hasDevType =
//       formData.developmentType.homepage ||
//       formData.developmentType.mobileApp ||
//       formData.developmentType.webService;

//     // Validation: development status must be selected
//     const hasDevStatus =
//       formData.developmentStatus.newDevelopment ||
//       formData.developmentStatus.maintenance;

//     // Validation: budget is required
//     if (!hasDevType || !hasDevStatus || !formData.budget) {
//       showToast("error", <div>"Please fill all forms"</div>);
//       return;
//     }

//     // Q1: Development Type (can be multiple)
//     if (formData.developmentType.homepage) params.append("type", "homepage");
//     if (formData.developmentType.mobileApp) params.append("type", "mobileApp");
//     if (formData.developmentType.webService)
//       params.append("type", "webService");

//     // Q2: Development Status (mutually exclusive)
//     if (formData.developmentStatus.newDevelopment) {
//       params.set("status", "new");
//     } else if (formData.developmentStatus.maintenance) {
//       params.set("status", "maint");
//     }

//     // Q3: Budget (only if not empty)
//     if (formData.budget) {
//       params.set("budget", formData.budget);
//     }

//     router.push(`/estimation?${params.toString()}`);
//   };
//   const appCheck =
//     formData.developmentType.mobileApp ||
//     formData.developmentType.webService ||
//     formData.developmentType.homepage;
//   const Jobtype =
//     formData.developmentStatus.newDevelopment ||
//     formData.developmentStatus.maintenance;
//   const ButtonValidation = formData.budget && appCheck && Jobtype;
//   return (
//     <div className=" w-full  py-[5rem] space-y-10">
//       <QestionHeader />
//       <div className=" w-full  lg:max-w-[59.1875rem] mx-auto flex  flex-col items-center lg:flex-row lg:items-start lg:justify-center gap-10 ">
//         <div className="w-full bg-white p-10 space-y-[2.5rem] ">
//           {/* <GiveMeQuestion QuestionNmeber="" QuestionText="" /> */}
//           {/* <Button ButtonText="" /> */}
//           <div className="space-y-[2.5rem]">
//             <div className="space-y-[2rem]">
//               <GiveMeQuestion
//                 QuestionNmeber="Q1"
//                 QuestionText="개발하려는 것이 어떤건가요?"
//               />
//               <div className="flex flex-col gap-y-[1.25rem]  ">
//                 <CeckBoxSelection
//                   ButtonTexts={Button1Texts}
//                   titel="홈페이지"
//                   Totalwon="평균 : 400만원~"
//                   QuestionNumber="Question1"
//                   isSelected={formData.developmentType.homepage}
//                   onToggle={() => handleDevelopmentTypeChange("homepage")}
//                 />
//                 <CeckBoxSelection
//                   ButtonTexts={Button2Texts}
//                   titel="아이폰 앱, 안드로이드 앱"
//                   Totalwon="평균 : 1,600만원~"
//                   QuestionNumber="Question2"
//                   isSelected={formData.developmentType.mobileApp}
//                   onToggle={() => handleDevelopmentTypeChange("mobileApp")}
//                 />
//                 <CeckBoxSelection
//                   ButtonTexts={Button3Texts}
//                   titel="앱/웹 서비스, 플랫폼"
//                   Totalwon="평균 : 4,000만원~"
//                   QuestionNumber="Question3"
//                   isSelected={formData.developmentType.webService}
//                   onToggle={() => handleDevelopmentTypeChange("webService")}
//                 />
//               </div>
//             </div>
//             <div className="space-y-[2rem]">
//               <GiveMeQuestion
//                 QuestionNmeber="Q2"
//                 QuestionText="기존에 개발 된 것이 있나요?"
//               />
//               <div className="space-y-[1.25rem]">
//                 <QuestionWithCheckBox
//                   QuestionText="신규 개발"
//                   checked={formData.developmentStatus.newDevelopment}
//                   onChange={() =>
//                     handleDevelopmentStatusChange("newDevelopment")
//                   }
//                 />
//                 <QuestionWithCheckBox
//                   QuestionText="유지보수 / 리뉴얼"
//                   checked={formData.developmentStatus.maintenance}
//                   onChange={() => handleDevelopmentStatusChange("maintenance")}
//                 />
//               </div>
//             </div>
//             <div className="space-y-[2rem] ">
//               <GiveMeQuestion
//                 QuestionNmeber="Q3"
//                 QuestionText="정해진 예산은 어느정도인가요?"
//               />
//               <div>
//                 <WhiteInput
//                   placeholder="숫자만 입력"
//                   label="만원"
//                   id="budget"
//                   value={formData.budget}
//                   onChange={(value) =>
//                     handleTextInputChange(
//                       "budget",
//                       value.replace(/[^0-9]/g, "")
//                     )
//                   }
//                   QuestionComponent
//                 />
//               </div>
//             </div>
//           </div>
//           <button
//             className=" disabled:opacity-[30%] text-white text-[1rem] font-bold bg-primary py-[1rem] px-[1.5rem] rounded-full"
//             onClick={handleNavigation}
//             disabled={!ButtonValidation}
//           >
//             빠른 상담받기
//           </button>
//         </div>
//         <QR />
//       </div>
//     </div>
//   );
// };

// export default Question;

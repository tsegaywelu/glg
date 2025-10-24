import localFont from "next/font/local";

export const nexonFont = localFont({
  src: [
    {
      path: "../fonts/nexon/NEXON-Lv1-Gothic-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/nexon/NEXON-Lv1-Gothic-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/nexon/NEXON-Lv1-Gothic-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nexon",
});

export const pretendardFont = localFont({
  src: [
    { path: "../fonts/pretendard/Pretendard-Light.ttf", weight: "300" },
    { path: "../fonts/pretendard/Pretendard-Regular.ttf", weight: "400" },
    { path: "../fonts/pretendard/Pretendard-Medium.ttf", weight: "500" },
    { path: "../fonts/pretendard/Pretendard-SemiBold.ttf", weight: "600" },
    { path: "../fonts/pretendard/Pretendard-Bold.ttf", weight: "700" },
  ],
  variable: "--font-pretendard",
});

import "@ckeditor/ckeditor5-theme-lark/theme/index.css";
import type { Metadata } from "next";
import { nexonFont, pretendardFont } from "./fonts";
import "./globals.css";
import ToastProvider from "./components/toastComponents/ToastProvider";
import I18nProvider from "./I18nProvider";
import Footer from "./components/OneTimeComponents/Footer";
import Header from "./components/OneTimeComponents/Header";
export const metadata: Metadata = {
  title: "Glitch",
  description: "Glitch static Project",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={`${nexonFont.variable} ${pretendardFont.variable} antialiased font-nexon`}
      >
        <Header />
        <I18nProvider>
          {children}
          <div className="px-[5rem] 2xl:px-[10rem]">
            <Footer />
          </div>
          <ToastProvider />
        </I18nProvider>
      </body>
    </html>
  );
}

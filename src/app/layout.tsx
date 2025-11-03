import "@ckeditor/ckeditor5-theme-lark/theme/index.css";
import type { Metadata } from "next";
import { nexonFont, pretendardFont } from "./fonts";
import "./globals.css";
import ToastProvider from "./components/toastComponents/ToastProvider";
import I18nProvider from "./I18nProvider";
// import "../i18n";
export const metadata: Metadata = {
  title: "Glitch Project",
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
        <I18nProvider>
          {children}
          <ToastProvider />
        </I18nProvider>
      </body>
    </html>
  );
}

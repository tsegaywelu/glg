import type { Metadata } from "next";
import { nexonFont, pretendardFont } from "./fonts";
import "./globals.css";
export const metadata: Metadata = {
  title: "Glitch Project",
  description: "Glitch static Project",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={`${nexonFont.variable} ${pretendardFont.variable} antialiased font-nexon`}
      >
        {children}
      </body>
    </html>
  );
}

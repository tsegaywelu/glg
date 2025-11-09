"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const searchParams = useSearchParams();

  const currentLang = i18n.language === "ko" ? "KR" : "EN";
  const pathName = usePathname();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ko" ? "en" : "ko");
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);
  const paramsString = searchParams?.toString();
  const navItems = [
    { name: t("outsourcing"), href: paramsString ? `/?${paramsString}` : "/" },
    {
      name: t("pricing"),
      href: paramsString ? `/price?${paramsString}` : "/price",
    },
    { name: t("brochure"), href: "/pdf/portfolio.pdf", newTab: true },
    {
      name: t("tips"),
      href: "https://blog.naver.com/NBlogTop.naver?blogId=glitch-ai",
      newTab: true,
    },
  ];

  return (
    <div className="w-full">
      <div className=" text-white font-semibold font-pretendard  py-[1.81rem]">
        {/* main header */}
        <div className="w-full  mx-auto flex  items-center justify-between  ">
          <Link href="/" className="flex items-center  cursor-pointer ">
            <Image
              src="/images/tempLogo.png"
              alt="Logo"
              width={126}
              height={32}
              className="h-[2rem] w-[7.875rem]"
              quality={80}
              // placeholder="blur"
            />
          </Link>

          {/* desktop nav */}
          <div className=" flex items-center   gap-x-[2.5rem]  ">
            <nav className="hidden xl:flex items-center gap-x-[2.5rem] w-full leading-[1.5rem] ">
              {navItems.map((item) =>
                item.newTab ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={` ${
                      item.href === pathName ? "text-primary" : "text-white"
                    } hover:text-[#FF7B00] transition-colors text-[1.25rem] font-semibold`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={` ${
                      item.href === pathName ? "text-primary" : "text-white"
                    } hover:text-[#FF7B00] transition-colors text-[1.25rem] font-semibold`}
                  >
                    {item.name}
                  </Link>
                )
              )}

              <div
                className=" bg-white w-[4.375rem] h-[2.5rem] rounded-full flex gap-x-1 px-[0.44rem] py-[0.38rem]  cursor-pointer"
                onClick={toggleLanguage}
              >
                <button>
                  <Image
                    src="/images/Rotate.png"
                    alt="rotate"
                    width={24}
                    height={24}
                    className={`w-[1.5rem] h-[1.5rem] cursor-pointer transform transition-transform duration-300 ease-in-out ${
                      currentLang === "KR" ? "rotate-180 " : ""
                    }`}
                    quality={80}
                    // placeholder="blur"
                  />
                </button>
                <button>
                  <Image
                    src={
                      currentLang === "KR"
                        ? "/images/Korea.png"
                        : "/images/English.png"
                    }
                    alt="Translate"
                    width={28}
                    height={28}
                    className="w-[1.75rem] h-[1.75rem] cursor-pointer"
                    quality={80}
                    // placeholder="blur"
                  />
                </button>
              </div>
            </nav>
            <Link
              href="/estimation"
              className={`px-[1.5rem] py-[0.75rem] border-[0.125rem] border-[#FF7B00]  leading-[1.125rem]
            whitespace-nowrap text-[1rem] 
            font-bold rounded-full  hover:text-primary
            ${pathName === "/estimation" ? "text-primary" : "text-white"}`}
            >
              {t("get_quote")}
            </Link>

            {/* mobile menu button */}
            <button
              className="xl:hidden flex flex-col space-y-1 z-50 "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-transform ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu overlay */}

      <div
        className={`h-fit fixed inset-0 bg-[#09090B] z-40 xl:hidden mt-24 pt-26 space-y-[80px] font-pretendard transition-all duration-1000 ease-in-out
        ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-[5rem] font-semibold ">
          <nav className="flex flex-col space-y-[5rem] text-white items-center justify-center leading-[1.5rem]">
            {navItems.map((item, index) =>
              item.newTab ? (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={` ${
                    item.href === pathName ? "text-primary" : "text-white"
                  } text-[20px] hover:text-primary transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className={` ${
                    item.href === pathName ? "text-primary" : "text-white"
                  } text-[20px] hover:text-primary transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <div className=" bg-white w-[70px] h-[40px] rounded-full flex gap-x-[4px] px-[7.5px] py-[6.5px]  cursor-pointer">
            <button>
              <Image
                src="/images/Rotate.png"
                alt="rotate"
                width={24}
                height={24}
                className={`w-[24px] h-[24px] cursor-pointer transform transition-transform duration-300 ease-in-out ${
                  currentLang === "KR" ? "rotate-180" : ""
                }`}
                quality={80}
                // placeholder="blur"
              />
            </button>
            <button onClick={toggleLanguage}>
              <Image
                src={
                  currentLang === "KR"
                    ? "/images/Korea.png"
                    : "/images/English.png"
                }
                alt="Translate"
                width={28}
                height={28}
                className="w-[28px] h-[28px] cursor-pointer"
                quality={80}
                // placeholder="blur"
              />
            </button>
          </div>
        </div>
        {/* <div className="bg-[#FF7B00] py-[0.75rem] mx-auto text-[0.875rem] font-bold text-center">
            <span>{t("inquire")}</span>
          </div> */}
        <div
          className="bg-[#FF7B00] py-[0.75rem] mx-auto text-[0.875rem]  text-center"
          dangerouslySetInnerHTML={{ __html: t("inquire") }}
        />
      </div>
    </div>
  );
}

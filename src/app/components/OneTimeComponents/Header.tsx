"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathName = usePathname();
  const [Language, setLanguage] = useState("KR");
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "KR" ? "EN" : "KR"));
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
  const navItems = [
    { name: "개발 외주", href: "/" },
    { name: "요금 정책", href: "/price" },
    { name: "서비스 소개서", href: "/pdf/portfolio.pdf" },
    {
      name: "외주 꿀팁",
      href: "https://blog.naver.com/NBlogTop.naver?blogId=glitch-ai",
      DontAppend: true,
    },
  ];

  return (
    <div>
      <div className="bg-[#09090B] text-white font-semibold font-pretendard px-[5rem] py-[1.81rem]">
        {/* main header */}
        <div className="w-full container mx-auto flex  items-center justify-between   ">
          <Link href="/" className="flex items-center  cursor-pointer ">
            <img
              src="/images/tempLogo.png"
              alt="Logo"
              className="h-[2rem] w-[7.875rem]"
            />
          </Link>

          {/* desktop nav */}
          <div className=" flex items-center   gap-x-[2.5rem] ">
            <nav className="hidden xl:flex items-center gap-x-[2.5rem] w-full ">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={` ${
                    item.href === pathName ? "text-primary" : "text-white"
                  } hover:text-[#FF7B00] transition-colors text-[1.25rem] font-semibold`}
                >
                  {item.name}
                </a>
              ))}

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
                      Language === "KR" ? "rotate-180 " : ""
                    }`}
                  />
                </button>
                <button>
                  <Image
                    src={
                      Language === "KR"
                        ? "/images/English.png"
                        : "/images/Korea.png"
                    }
                    alt="Translate"
                    width={28}
                    height={28}
                    className="w-[1.75rem] h-[1.75rem] cursor-pointer"
                  />
                </button>
              </div>
            </nav>
            <Link
              href="/estimation"
              className={`px-[1.5rem] py-[0.75rem] border-[0.125rem] border-[#FF7B00] 
            whitespace-nowrap text-[1rem] 
            font-bold rounded-full  hover:text-primary
            ${pathName === "/estimation" ? "text-primary" : "text-white"}`}
            >
              3초만에 견적받기
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
              {/* <Image
                src="/Hamburger.png"
                alt="Hamburger"
                width={40}
                height={40}
                className="w-[2.5rem] h-[2.5rem] cursor-pointer"
              /> */}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#09090B] z-40 xl:hidden mt-20 pt-20 flex flex-col items-center space-y-[5rem]">
          <nav className="flex flex-col space-y-[5rem] text-white">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={` ${
                  item.href === pathName ? "text-primary" : "text-white"
                } text-lg hover:text-primary transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className=" bg-white w-[4.375rem] h-[2.5rem] rounded-full flex gap-x-1 px-[0.44rem] py-[0.38rem]  cursor-pointer">
            <button>
              <Image
                src="/images/Rotate.png"
                alt="rotate"
                width={24}
                height={24}
                className={`w-[1.5rem] h-[1.5rem] cursor-pointer transform transition-transform duration-300 ease-in-out ${
                  Language === "KR" ? "rotate-180" : ""
                }`}
              />
            </button>
            <button onClick={toggleLanguage}>
              <Image
                src={
                  Language === "KR"
                    ? "/images/English.png"
                    : "/images/Korea.png"
                }
                alt="Translate"
                width={28}
                height={28}
                className="w-[1.75rem] h-[1.75rem] cursor-pointer"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

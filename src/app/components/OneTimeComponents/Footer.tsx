"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const FirstText = [
    { text: t("outsourcing"), link: "/" },
    { text: t("pricing"), link: "/price" },
    {
      text: t("brochure"),
      link: "/pdf/portfolio.pdf",
      newTab: true,
    },
    {
      text: t("tips"),
      link: "https://blog.naver.com/NBlogTop.naver?blogId=glitch-ai",
      newTab: true,
    },
  ];
  const SecondText = [
    { text: t("sweech_co_ltd"), link: "https://sherry.gg", newTab: true },
    {
      text: t("brochure"),
      link: "/pdf/sherry.pdf",
      newTab: true,
    },
  ];
  const ThereedText = [
    t("ceo"),
    t("hq"),
    t("research_lab"),
    t("business_registration_number"),
    t("mail_order_business_registration"),
  ];

  return (
    <footer className=" font-pretendard  py-[5rem]   space-y-[5rem]">
      <div className="flex flex-col gap-y-[5rem] md:flex-row md:justify-between ">
        <div className="flex flex-col gap-[1.5rem]">
          <div className="flex flex-col gap-[0.75rem]">
            <div className="flex gap-2">
              {" "}
              <Image
                src="/images/footerImages/phone.png"
                alt="logo"
                width={24}
                height={24}
                className="w-[1.5rem] h-[1.5rem]"
              />{" "}
              <p className="font-semibold text-5 text-white">
                {t("customer_inquiries")}
              </p>
            </div>
            <a
              href="tel:+972532472345"
              className="font-semibold text-[1.75rem] text-white"
            >
              053-247-2345
            </a>
          </div>
          <div className="flex gap-[1.19rem] ">
            <div className="text-white font-normal text-[1.25rem]">
              10:00 - 21:00
            </div>
            <div className="text-[#71717A] font-normal text-[1.25rem]">
              {t("days_off")}
            </div>
          </div>
          <a
            href="mailto:help@sweech.io"
            className="text-white font-normal text-5"
          >
            help@sweech.io
          </a>
        </div>
        <div className="flex gap-[2.44rem] ">
          <div className="flex flex-col gap-4 ">
            <Image
              src="/images/tempLogo.png"
              width={79}
              height={20}
              alt="logo"
              className="w-[4.9375rem] h-[1.25rem]"
            />
            {FirstText.map((text, index) => {
              return text.newTab ? (
                <a
                  href={text.link}
                  target="_blank"
                  className="flex gap-4 items-center"
                  key={index}
                >
                  <p className="text-[1.25rem] text-[#71717A] font-normal">
                    {text.text}
                  </p>
                  <Image
                    src="/images/footerImages/BigArrow.png"
                    width={8}
                    height={14}
                    alt="logo"
                    className="w-[0.5rem] h-[0.875rem]"
                  />
                </a>
              ) : (
                <Link
                  href={text.link}
                  className="flex gap-4 items-center"
                  key={index}
                >
                  <p className="text-[1.25rem] text-[#71717A] font-normal">
                    {text.text}
                  </p>
                  <Image
                    src="/images/footerImages/BigArrow.png"
                    width={8}
                    height={14}
                    alt="logo"
                    className="w-[0.5rem] h-[0.875rem]"
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-4">
            <Image
              src="/images/footerImages/sherry.png"
              width={79}
              height={20}
              alt="logo"
              className="w-[6.4489rem] h-[1.5rem]"
            />
            {SecondText.map((text, index) => {
              return (
                <a
                  href={text.link}
                  target="_blank"
                  className="flex gap-4 items-center"
                  key={index}
                >
                  <p className="text-[1.25rem] text-[#71717A] font-normal">
                    {text.text}
                  </p>
                  <Image
                    src="/images/footerImages/BigArrow.png"
                    width={8}
                    height={14}
                    alt="logo"
                    className="w-[0.5rem] h-[0.875rem]"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[1.25rem]">
        <div className="font-semibold text-[1.5rem] text-white">
          {t("sweech_co_ltd")}
        </div>
        <div className="flex flex-col gap-y-[1.25rem] xl:flex-row">
          {ThereedText.map((text, index) => (
            <div key={index} className="flex xl:items-center xl:justify-center">
              <span className="font-light text-[1rem] text-white">{text}</span>
              {index < ThereedText.length - 1 && (
                <span className="px-[1.25rem] text-[1.25rem] font-normal hidden xl:inline-block">
                  |
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="font-light text-[1rem] text-white">
          © 2025 Sweech Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

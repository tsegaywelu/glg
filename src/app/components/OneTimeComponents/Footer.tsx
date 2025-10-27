import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const FirstText = [
    { text: "개발 외주", link: "/" },
    { text: "요금 정책", link: "/price" },
    { text: "서비스 소개서", link: "/pdf/portfolio.pdf" },
    {
      text: "외주 꿀팁",
      link: "https://blog.naver.com/NBlogTop.naver?blogId=glitch-ai",
    },
  ];
  const SecondText = [
    { text: "Sherry Boothhub", link: "https://sherry.gg" },
    { text: "서비스 소개서", link: "https://sherryboothhub.com" },
  ];
  const ThereedText = [
    "대표이사 : 유동률",
    "본사 : 대구광역시 동구 장등로 76 407호",
    "연구소 : 대구광역시 동구 장등로 76 307호",
    "사업자등록번호 : 887-86-03669",
    "통신판매업신고 : 2025-대구동구-0769",
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
              <p className="font-semibold text-5 text-white">고객 문의</p>
            </div>
            <p className="font-semibold text-[1.75rem] text-white">
              053-247-2345
            </p>
          </div>
          <div className="flex gap-[1.19rem] ">
            <div className="text-white font-normal text-[1.25rem]">
              10:00 - 21:00
            </div>
            <div className="text-[#71717A] font-normal text-[1.25rem]">
              주말, 공휴일 제외
            </div>
          </div>
          <div className="text-white font-normal text-5">help@sweech.io</div>
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
              return (
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
          스위치 주식회사
        </div>
        <div className="flex flex-col gap-y-[1.25rem] md:flex-row">
          {ThereedText.map((text, index) => (
            <div key={index} className="flex md:items-center md:justify-center">
              <span className="font-light text-[1rem] text-white">{text}</span>
              {index < FirstText.length && (
                <span className="px-[1.25rem] text-[1.25rem] font-normal hidden md:inline-block">
                  |
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="font-light text-[1rem] text-white">
          © 2024 Sweech Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

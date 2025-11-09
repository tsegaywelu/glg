"use client";

import Link from "next/link";
import ImageCard from "../BaseComponents/ImageCard";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  const Imagelogs = [
    {
      src: "/images/companyLogos/Logo2.png",
      alt: "Image 2",
      link: "https://example.com/image2",
      width: 217,
      height: 24,
      className: "object-fill w-[13.5625rem] h-[1.5rem]",
    },
    {
      src: "/images/companyLogos/Logo1.png",
      alt: "Image 1",
      link: "https://example.com/image1",

      width: 135,
      height: 32,
      className: "object-fill w-[8.4375rem] h-[2rem]",
    },

    {
      src: "/images/companyLogos/Logo3.png",
      alt: "Image 3",
      link: "https://example.com/image3",
      width: 134,
      height: 24,
      className: "object-fill w-[8.375rem] h-[1.5rem]",
    },
    {
      src: "/images/companyLogos/Logo4.png",
      alt: "Image 4",
      link: "https://example.com/image4",
      width: 114,
      height: 32,
      className: "object-fill  w-[7.125rem] h-[2rem]",
    },
    {
      src: "/images/companyLogos/Logo55.png",
      alt: "Image 5",
      link: "https://example.com/image5",
      width: 114,
      height: 32,
      className: "object-fill  w-[7.3816rem] h-[2rem]",
    },

    {
      src: "/images/companyLogos/Logo6.png",
      alt: "Image 2",
      link: "https://example.com/image2",
      width: 42,
      height: 32,
      className: "object-contain w-[2.625rem] h-[2rem]",
    },
    {
      src: "/images/companyLogos/Logo7.png",
      alt: "Image 3",
      link: "https://example.com/image3",
      width: 116,
      height: 32,
      className: " obeject-fill w-[2.625rem] h-[2rem]",
    },
    {
      src: "/images/companyLogos/Logo8.png",
      alt: "Image 4",
      link: "https://example.com/image4",
      width: 120,
      height: 24,
      className: "object-contain w-[7.5rem] h-[1.5rem]",
    },
    {
      src: "/images/companyLogos/Logo9.png",

      alt: "Image 1",
      link: "https://example.com/image1",
      width: 95,
      height: 32,
      className: "object-contain w-[5.9375rem] h-[2rem]",
    },
    {
      src: "/images/companyLogos/Logo10.png",
      alt: "Image 2",
      link: "https://example.com/image2",
      width: 24,
      height: 32,
      className: "object-contain w-[1.5rem] h-[2rem]",
    },
    {
      src: "/images/companyLogos/Logo11.png",
      alt: "Image 3",
      link: "https://example.com/image3",
      width: 165,
      height: 24,
      className: "object-contain w-[10.3125rem] h-[1.5rem] ",
    },
    {
      src: "/images/companyLogos/Logo12.png",
      alt: "Image 4",
      link: "https://example.com/image4",
      width: 29,
      height: 32,
      className: "object-contain w-[1.8125rem] h-[2rem]",
    },

    {
      src: "/images/companyLogos/Logo13.png",
      alt: "Image 1",
      link: "https://example.com/image1",
      width: 33,
      height: 32,
      className: "object-contain w-[2.0625rem] h-[2rem]",
    },
    {
      src: "/images/companyLogos/Logo14.png",
      alt: "Image 2",
      link: "https://example.com/image2",
      width: 43,
      height: 32,
      className: "object-contain w-[2.6875rem] h-[2rem]",
    },
    {
      src: "/images/companyLogos/Logo15.png",
      alt: "Image 3",
      link: "https://example.com/image3",
      width: 112,
      height: 32,
      className: "object-contain w-[7rem] h-[2rem]",
    },
    {
      src: "/images/companyLogos/Logo16.png",
      alt: "Image 4",
      link: "https://example.com/image4",
      width: 190,
      height: 32,
      className: "object-contain w-[11.875rem] h-[2rem]",
    },

    {
      src: "/images/companyLogos/Logo17.png",
      alt: "Image 1",
      link: "https://example.com/image1",
      width: 32,
      height: 32,
      className: "object-contain w-[2rem] h-[2rem]",
    },
    {
      src: "/images/companyLogos/Logo18.png",
      alt: "Image 2",
      link: "https://example.com/image2",
      width: 32,
      height: 32,
      className: "object-contain w-[2rem] h-[2rem]",
    },
    {
      src: "/images/companyLogos/Logo19.png",
      alt: "Image 3",
      link: "https://example.com/image3",
      width: 107,
      height: 32,
      className: "object-contain w-[6.6875rem] h-[2rem]",
    },
    {
      src: "/images/companyLogos/Logo20.png",
      alt: "Image 4",
      link: "https://example.com/image4",
      width: 272,
      height: 32,
      className: "object-contain w-[17.25rem] h-[2rem]",
    },
    {
      src: "/images/companyLogos/Logo21.png",
      alt: "Image 4",
      link: "https://example.com/image4",
      width: 36,
      height: 32,
      className: "object-contain h-[2rem] w-[2.25rem]",
    },
  ];

  return (
    <div className=" dotted-bg-simple w-full h-full flex-1 flex flex-col items-center gap-y-[6.66rem] pt-[11rem]">
      <section className=" flex items-center justify-center flex-1 px-[5rem]  ">
        <div className="space-y-4 ">
          <div className="space-y-[2rem]">
            <div className="text-[1.25rem] text-[#71717A] text-center font-normal leading-[1.4375rem]">
              {t("for_who")}
            </div>
            <div className="text-[#FFFFFF] font-bold text-[2rem] text-center leading-[2.3125rem]">
              {t("blind_outsourcing")}
            </div>
          </div>
          <div className="space-y-10">
            <div className="text-[2rem] font-normal text-[#fff] text-center leading-[2.3125rem] whitespace-pre-line">
              {t("full_visibility")}
            </div>
            <div className="flex justify-center ">
              <Link
                href={"/estimation"}
                className="text-[1rem] bg-[#FF7B00] px-[1.5rem] py-[0.75rem] rounded-full text-white font-bold leading-[1.125rem]"
              >
                {t("get_quote")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#FFFFFF99] overflow-hidden py-[1.5rem] w-full relative">
        <div className="flex items-center animate-scroll gap-x-[3.25rem] whitespace-nowrap">
          {/* First set of images */}
          {Imagelogs.map((image, index) => (
            <div
              key={`set1-${index}`}
              // href={image.link.trim()}
              // target="_blank"
              // rel="noopener noreferrer"
            >
              <ImageCard
                src={image.src}
                alt={image.alt}
                link={image.link}
                width={image.width}
                height={image.height}
                className={image.className}
              />
            </div>
          ))}

          {/* Duplicate set for infinite scroll */}
          {Imagelogs.map((image, index) => (
            <div
              key={`set2-${index}`}
              // href={image.link.trim()}
              // target="_blank"
              // rel="noopener noreferrer"
            >
              <ImageCard
                src={image.src}
                alt={image.alt}
                link={image.link}
                width={image.width}
                height={image.height}
                className={image.className}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

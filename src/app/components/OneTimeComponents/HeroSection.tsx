import Link from "next/link";
import ImageCard from "../BaseComponents/ImageCard";
import Image from "next/image";

export default function HeroSection() {
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
      src1: "/images/companyLogos/Logo5.png",
      src2: "/images/companyLogos/Logo51.png",
      alt: "Image 1",
      link: "https://example.com/image1",
      width: 116,
      height: 32,
      className: "object-contain  w-[7.268rem] h-[2rem]",
      TwoImages: true,
    },
    {
      src: "/images/companyLogos/Logo6.png",
      alt: "Image 2",
      link: "https://example.com/image2",
      width: 116,
      height: 32,
      className: " obeject-fill w-[2.625rem] h-[2rem]",
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
      width: 100,
      height: 100,
      className: "object-contain",
    },
    {
      src: "/images/companyLogos/Logo9.png",

      alt: "Image 1",
      link: "https://example.com/image1",
      width: 100,
      height: 100,
      className: "object-contain",
    },
    {
      src: "/images/companyLogos/Logo10.png",
      alt: "Image 2",
      link: "https://example.com/image2",
      width: 100,
      height: 100,
      className: "object-contain",
    },
    {
      src: "/images/companyLogos/Logo11.png",
      alt: "Image 3",
      link: "https://example.com/image3",
      width: 100,
      height: 100,
      className: "object-contain",
    },
    {
      src: "/images/companyLogos/Logo12.png",
      alt: "Image 4",
      link: "https://example.com/image4",
      width: 100,
      height: 100,
      className: "object-contain",
    },

    {
      src: "/images/companyLogos/Logo13.png",
      alt: "Image 1",
      link: "https://example.com/image1",
      width: 100,
      height: 100,
      className: "object-contain",
    },
    {
      src: "/images/companyLogos/Logo14.png",
      alt: "Image 2",
      link: "https://example.com/image2",
      width: 100,
      height: 100,
      className: "object-contain",
    },
    {
      src: "/images/companyLogos/Logo15.png",
      alt: "Image 3",
      link: "https://example.com/image3",
      width: 100,
      height: 100,
      className: "object-contain",
    },
    {
      src: "/images/companyLogos/Logo16.png",
      alt: "Image 4",
      link: "https://example.com/image4",
      width: 100,
      height: 100,
      className: "object-contain",
    },

    {
      src: "/images/companyLogos/Logo17.png",
      alt: "Image 1",
      link: "https://example.com/image1",
      width: 100,
      height: 100,
      className: "object-contain",
    },
    {
      src: "/images/companyLogos/Logo18.png",
      alt: "Image 2",
      link: "https://example.com/image2",
      width: 100,
      height: 100,
      className: "object-contain",
    },
    {
      src: "/images/companyLogos/Logo19.png",
      alt: "Image 3",
      link: "https://example.com/image3",
      width: 100,
      height: 100,
      className: "object-contain",
    },
    {
      src: "/images/companyLogos/Logo20.png",
      alt: "Image 4",
      link: "https://example.com/image4",
      width: 100,
      height: 100,
      className: "object-contain",
    },
  ];
  return (
    <div className="dotted-bg-simple w-full h-full flex-1 flex flex-col items-center justify-between  bg-gradient-to-b from-black via-[#0a0a1a] to-[#0f0c3d]">
      <section className=" flex items-center justify-center flex-1 ">
        <div className="space-y-4 ">
          <div className="space-y-[2rem]">
            <div className="text-[1.25rem] text-[#71717A] text-center font-normal">
              대기업, 관공서, 해외 에서도
            </div>
            <div className="text-[#FFFFFF] font-bold text-[2rem] text-center ">
              깜깜이 외주는 이제 그만
            </div>
          </div>
          <div className="space-y-10">
            <div className="text-[2rem] font-normal text-[#fff] text-center">
              옆에 있는 것처럼 진행 과정을 쉽게 확인하면서 외주 맡기세요
            </div>
            <div className="flex justify-center ">
              <button className="text-[1rem] bg-[#FF7B00] px-6 py-4 rounded-full">
                3초만에 견적받기
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#FFFFFF99] overflow-hidden flex items-center gap-x-[3.25rem] py-[1.75rem] w-full">
        {Imagelogs.map((image, index) =>
          image.TwoImages ? (
            <Link
              key={index}
              href={image.link.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-x-0 "
            >
              {image.src1 && (
                <Image
                  src={image.src1}
                  alt={`${image.alt} - 1`}
                  width={image.width}
                  height={image.height}
                  className={image.className}
                />
              )}
              {/* {image.src2 && (
                <Image
                  src={image.src2}
                  alt={`${image.alt} - 2`}
                  width={image.width}
                  height={image.height}
                  className={image.className}
                />
              )} */}
            </Link>
          ) : image.src ? (
            <Link
              key={index}
              href={image.link.trim()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageCard
                src={image.src}
                alt={image.alt}
                link={image.link}
                width={image.width}
                height={image.height}
                className={image.className}
              />
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
}

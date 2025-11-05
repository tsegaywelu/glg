"use client";

import Image from "next/image";
import BodyCard3 from "./BodyCard3";
import HeaderCard3 from "./HeaderCard3";
import { useTranslation } from "react-i18next";

const Card3 = () => {
  const { t } = useTranslation();

  const AllImages = [
    {
      src: "/images/card3Images/frame1.png",
      borderColor: "#FFD9B5",
      Texts: t("reduce_comm_costs"),
      backgroundColor: "#FFD8B31F",
    },
    {
      src: "/images/card3Images/frame2.png",
      borderColor: "#FF9D42",
      Texts: t("automatic_content_tracking"),
      backgroundColor: "#FFE0C333",
    },
    {
      src: "/images/card3Images/frame3.png",
      borderColor: "#FF7B00",
      Texts: t("break_goals_down"),
      backgroundColor: "#FF7B001F",
    },
  ];

  return (
    <div className="  py-[5rem] space-y-[5rem] ">
      <HeaderCard3 />
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-[5.5rem]">
        {AllImages.map((image, index) => (
          <div key={index} className="relative">
            <BodyCard3
              ImageURL={image.src}
              Texts={image.Texts}
              borderColor={image.borderColor}
              backgroundColor={image.backgroundColor}
            />

            {index !== AllImages.length - 1 && (
              <>
                <div className="flex lg:hidden absolute -bottom-[2.75rem] left-1/2 transform -translate-x-1/2">
                  <Image
                    src="/images/card3Images/Arrow.png"
                    alt="arrow"
                    width={14}
                    height={14}
                    className="w-[0.875rem] h-[0.875rem] rotate-90 object-contain"
                  />
                </div>

                <div className="hidden lg:flex items-center justify-center absolute top-1/2 -right-[2.75rem] transform -translate-y-1/2">
                  <Image
                    src="/images/card3Images/Arrow.png"
                    alt="arrow"
                    width={14}
                    height={14}
                    className="w-[0.875rem] h-[0.875rem] object-contain"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card3;

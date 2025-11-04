import BodyCard2 from "./BodyCard2";
import HeaderCard2 from "./HeaderCard2";
import { useTranslation } from "react-i18next";

const AllImages = [
  {
    src: "/images/card2Images/fame1.png",
    backgroundColor: "#EAFFF8",
    buttonBackground: "#008F5E",
    ButtonTextKey: "h_insurance",
  },
  {
    src: "/images/card2Images/frame2.png",
    backgroundColor: "#F8D7C2",
    buttonBackground: "#EF8845",
    ButtonTextKey: "school_alert",
  },
  {
    src: "/images/card2Images/frame3.png",
    backgroundColor: "#F5F5F5",
    buttonBackground: "#010101",
    ButtonTextKey: "h_motor",
  },
  {
    src: "/images/card2Images/frame4.png",
    backgroundColor: "#FFF3F4",
    buttonBackground: "#FF3A4B",
    ButtonTextKey: "credit_info",
  },
  {
    src: "/images/card2Images/frame5.png",
    backgroundColor: "#FFF9F0",
    buttonBackground: "#F3971A",
    ButtonTextKey: "bellboy",
  },
  {
    src: "/images/card2Images/fame1.png",
    backgroundColor: "#FFF5F5",
    buttonBackground: "#CD121F",
    ButtonTextKey: "s_pro",
  },
];

const Card2 = () => {
  const { t } = useTranslation();

  return (
    <div className="  py-[5rem] space-y-[5rem] ">
      <HeaderCard2 />
      <div className="space-y-[2.5rem]">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-5">
          {AllImages.map((image, index) => (
            <BodyCard2
              key={index}
              ImageURL={image.src}
              buttonText={t(image.ButtonTextKey)}
              MYClassName={image.backgroundColor}
              buttonBackground={image.buttonBackground}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href="/pdf/portfolio.pdf"
            download
            className="px-[1.5rem] py-[0.75rem] border-[0.125rem] border-primary rounded-full text-[1rem] font-bold text-white"
          >
            {t("see_more_portfolios")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card2;

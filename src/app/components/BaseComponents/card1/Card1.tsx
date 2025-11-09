import BodyCard1 from "./BodyCard1";
import HeaderCard1 from "./HeaderCard1";
import UnionIcon from "../../Icons/Union";
import { Trans, useTranslation } from "react-i18next";
import Image from "next/image";

const Card1 = () => {
  const { t } = useTranslation();

  return (
    <div className="  py-[5rem] space-y-[5rem] ">
      <div className="bg-foreground-strong flex justify-center  ">
        <div className="flex flex-col items-center gap-y-4 text-center  mx-auto ">
          <h1 className="text-[1.25rem] text-white font-normal leading-[1.4375rem]">
            {t("until_now")}
          </h1>
          <div className="flex items-center justify-center  flex-wrap text-white  text-[2rem] text-center font-bold ">
            <div className="leading-[2.3125rem]">
              {t("easy_with_glitch").split("<img>")[0]}
            </div>
            <Image
              src="/images/tempLogo.png"
              alt="Logo"
              width={111}
              height={28}
              className="h-[1.75rem] w-[6.9375rem] mx-[0.62rem]"
            />
            <div className="leading-[2.3125rem]">
              {t("easy_with_glitch").split("</img>")[1] ||
                t("easy_with_glitch").split("<img>")[1]?.split("</img>")[0]}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 min-[1408px]:grid-cols-3 gap-[2.5rem] items-stretch content-stretch ">
        <div className="w-full flex flex-col items-center h-full ">
          <div className="w-full flex-1">
            <HeaderCard1
              textColor="#9FA9FF"
              borderColor="#AFB7FF"
              buttonText={t("public_inst")}
              bodyText={
                <div className="text-center w-full  text-[1.25rem] font-normal text-[#FFFFFF] ">
                  <Trans
                    i18nKey="public_inst_sub"
                    components={{
                      br: <br />,
                      b: <span className="font-bold" />,
                    }}
                  />
                </div>
              }
            />
          </div>
          <UnionIcon
            className="w-[0.75rem] min-h-[2.375rem] h-[2rem] "
            textColor="#AFB7FF"
          />
          <div className="w-full flex-1 h-full">
            <BodyCard1
              ImageURL="/images/card1Images/frame11.png"
              borderColor="#AFB7FF"
              Texts={
                <div className="">
                  <Trans
                    i18nKey="public_inst_body"
                    components={{
                      br: <br />,
                      b: <span className="font-bold" />,
                      o: <span className="text-primary font-bold" />,
                    }}
                  />
                </div>
              }
              backgroundColor="#AFB7FF29"
              DonotExpand
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center  h-full ">
          <div className="w-full flex-1">
            <HeaderCard1
              textColor="#FFAFFC"
              borderColor="#FFAFFC"
              buttonText={t("company_j")}
              bodyText={
                <div className="text-center text-[1.25rem] font-normal text-[#FFFFFF]">
                  <Trans
                    i18nKey="company_j_sub"
                    components={{
                      br: <br />,
                      b: <span className=" font-bold" />,
                    }}
                  />
                </div>
              }
            />
          </div>
          <UnionIcon
            className="w-[0.75rem] h-[2.375rem] "
            textColor="#FFAFFC"
          />
          <div className="w-full flex-1 h-full">
            <BodyCard1
              ImageURL="/images/card1Images/frame21.png"
              borderColor="#FFAFFC"
              Texts={
                <div className="">
                  <Trans
                    i18nKey="company_j_body"
                    components={{
                      br: <br />,
                      b: <span className="font-bold" />,
                      o: <span className="text-primary font-bold" />,
                    }}
                  />
                </div>
              }
              backgroundColor="#FFAFFC29"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center h-full ">
          <div className="w-full flex-1">
            <HeaderCard1
              textColor="#FFB8AF"
              borderColor="#FFB8AF"
              buttonText={t("overseas_company")}
              bodyText={
                <div className="w-full text-[1.25rem] font-normal text-[#FFFFFF] text-center  ">
                  <Trans
                    i18nKey="overseas_company_sub"
                    components={{
                      br: <br />,
                      b: <span className=" font-bold" />,
                    }}
                  />
                </div>
              }
            />
          </div>
          <UnionIcon
            className="w-[0.75rem] h-[2.375rem] "
            textColor="#FFB8AF"
          />
          <div className="w-full  h-full flex-1">
            <BodyCard1
              ImageURL="/images/card1Images/frame31.png"
              borderColor="#FFB8AF"
              Texts={
                <div className="">
                  <Trans
                    i18nKey="overseas_company_body"
                    components={{
                      br: <br />,
                      b: <span className="font-bold" />,
                      o: <span className="text-primary font-bold" />,
                    }}
                  />
                </div>
              }
              backgroundColor="#FFB8AF29"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;

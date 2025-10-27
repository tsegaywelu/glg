import { ReactNode } from "react";

type headerProps = {
  textColor: string;
  borderColor?: string;
  buttonText: string;
  // headerText: string;
  bodyText: ReactNode;
};
const HeaderCard1 = ({
  textColor,
  borderColor,
  buttonText,
  // headerText,
  bodyText,
}: headerProps) => {
  return (
    <div
      className={`w-full bg-[#1E1E1E] px-[2.5rem] py-[2rem] flex flex-col items-center  gap-y-[1.25rem] border rounded-[0.125rem]`}
      style={{ borderColor: borderColor }}
    >
      <div
        className={` px-4 py-2 rounded-full border-[0.125rem] text-[1.25rem]  `}
        style={{ color: textColor, borderColor: textColor }}
      >
        {buttonText}
      </div>
      <div className="text-center">
        {/* <span className="text-[1.25rem] font-normal text-[#FFFFFF] text-center">
          {headerText}
        </span>
        <span className="block text-[1.25rem] font-bold text-[#FFFFFF] text-center ">
          {" "}
          {bodyText}
        </span> */}
        {bodyText}
      </div>
    </div>
  );
};

export default HeaderCard1;

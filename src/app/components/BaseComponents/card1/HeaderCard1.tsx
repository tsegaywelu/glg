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
      className={`w-full  bg-[#1E1E1E] px-[2.5rem] py-[2rem] flex flex-col items-center  gap-y-[1.25rem] border rounded-[0.125rem]`}
      style={{ borderColor: borderColor }}
    >
      <div
        className={` px-[1rem] py-[0.5rem] rounded-full border-[0.125rem] text-[0.75rem]  whitespace-nowrap font-bold leading-[0.875rem]`}
        style={{ color: textColor, borderColor: textColor }}
      >
        {buttonText}
      </div>
      <div className="text-center  w-full leading-[1.4375rem] md:line-clamp-2">
        {bodyText}
      </div>
    </div>
  );
};

export default HeaderCard1;

// type BodyCard1Props = { ImageURL: string; Text: string };

import { ReactNode } from "react";

// const BodyCard1 = ({ ImageURL, Text }: BodyCard1Props) => {
//   return (
//     <div className="  ">
//       <img src={ImageURL} alt="" />
//     </div>
//   );
// };

// export default BodyCard1;

type bodyPrpoststype = {
  Texts: ReactNode;
  ImageURL: string;
  borderColor: string;
  backgroundColor?: string;
};

const BodyCard1 = ({
  Texts,
  ImageURL,
  borderColor,
  backgroundColor,
}: bodyPrpoststype) => {
  // w-[23.1875rem] h-[23.75rem]
  return (
    <div
      className=" px-[2.5rem] py-[2rem] space-y-5 border rounded-[0.125rem] flex flex-col items-center"
      style={{ borderColor, backgroundColor }}
    >
      <img
        src={ImageURL}
        alt="Image preview"
        className="object-contain w-[18.7708rem] h-[15.625rem]"
      />
      <div className="  text-[1.25rem] font-normal  text-center">{Texts}</div>
    </div>
  );
};

export default BodyCard1;

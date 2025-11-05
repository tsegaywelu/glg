import Image from "next/image";
import { ReactNode } from "react";

type bodyPrpoststype = {
  Texts: ReactNode;
  ImageURL: string;
  borderColor: string;
  backgroundColor?: string;
  DonotExpand?: boolean;
};

const BodyCard1 = ({
  Texts,
  ImageURL,
  borderColor,
  backgroundColor,
  DonotExpand,
}: bodyPrpoststype) => {
  // w-[23.1875rem] h-[23.75rem]
  return (
    <div
      className=" px-[2.5rem] py-[2rem] space-y-5 border rounded-[0.125rem] flex flex-col items-center overflow-clip"
      style={{ borderColor, backgroundColor }}
    >
      <Image
        src={ImageURL}
        alt="Image preview"
        width={250} // required
        height={250} // required
        className="object-cover w-full h-[15.625rem]"
      />

      <div className="w-full text-[1.25rem] font-normal text-center overflow-hidden text-ellipsis line-clamp-3 ">
        {Texts}
      </div>
    </div>
  );
};

export default BodyCard1;

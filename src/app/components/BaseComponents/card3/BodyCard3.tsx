import Image from "next/image";

type bodyPrpoststype = {
  Texts: string;
  ImageURL: string;
  borderColor: string;
  backgroundColor?: string;
};

const BodyCard3 = ({
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
      <Image
        src={ImageURL}
        alt="Image preview"
        width={800}
        height={250}
        className="object-cover w-full h-[15.625rem]"
      />
      <div className="  text-[1.25rem] font-normal text-white text-center md:line-clamp-3 leading-[1.4375rem]">
        {Texts}
      </div>
    </div>
  );
};

export default BodyCard3;

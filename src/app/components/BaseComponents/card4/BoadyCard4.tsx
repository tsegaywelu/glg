import Image from "next/image";

type BoadyCard4Props = {
  ImageUrl: string;
  Texts: string;
};

const BoadyCard4 = ({ ImageUrl, Texts }: BoadyCard4Props) => {
  return (
    <div className=" space-y-5 flex flex-col items-center border border-[#FFD9B5] bg-[#FFD8B31F] rounded-[0.125rem] ">
      <Image
        src={ImageUrl}
        alt="Image"
        width={236}
        height={236}
        className="w-[14.7625rem] h-[14.7625rem] object-fill"
      />
      <div className="w-full max-w-[14.7625rem] pb-[1.3rem] text-[1.25rem] text-start   font-normal text-white whitespace-nowrap truncate leading-[1.4375rem]">
        {Texts}
      </div>
    </div>
  );
};

export default BoadyCard4;

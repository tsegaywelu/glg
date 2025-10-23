type BoadyCard4Props = {
  ImageUrl: string;
  Texts: string;
};

const BoadyCard4 = ({ ImageUrl, Texts }: BoadyCard4Props) => {
  return (
    <div className=" space-y-5 flex flex-col items-center border border-[#FFD9B5] bg-[#FFD8B31F] rounded-[0.125rem] ">
      <img
        src={ImageUrl}
        alt="Image"
        className="w-[14.7625rem] h-[14.7625rem] object-fill "
      />
      <div className="px-[1.25rem] pb-[1.3rem] text-[1.25rem] font-normal text-white">
        {Texts}
      </div>
    </div>
  );
};

export default BoadyCard4;

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
      <img
        src={ImageURL}
        alt="Image preview"
        className="object-fit w-full h-[15.625rem]"
      />
      <div className="  text-[1.25rem] font-normal text-white text-center line-clamp-3">
        {Texts}
      </div>
    </div>
  );
};

export default BodyCard3;

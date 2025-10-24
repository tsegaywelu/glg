type BodyCard1Props = {
  ImageURL: string;
  buttonText?: string;
  MYClassName: string;
  buttonBackground: string;
};

const BodyCard2 = ({
  ImageURL,
  buttonText,
  MYClassName,
  buttonBackground,
}: BodyCard1Props) => {
  return (
    <div
      className={`   flex flex-col items-center gap-y-[0.75rem] rounded-[0.125rem] py-[0.92rem] `}
      style={{ backgroundColor: MYClassName }}
    >
      <img
        src={ImageURL}
        alt="Image preview"
        className="object-contain w-[25.1667rem] h-[13.375rem]"
      />
      <div
        className="font-semibold font-pretendard text-white text-[0.75rem] px-2.5 py-0.5 rounded-md"
        style={{
          background: buttonBackground,
        }}
      >
        {buttonText}
      </div>
    </div>
  );
};

export default BodyCard2;

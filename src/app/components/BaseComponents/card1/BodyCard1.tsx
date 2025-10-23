type BodyCard1Props = { ImageURL: string };

const BodyCard1 = ({ ImageURL }: BodyCard1Props) => {
  return (
    <div className="xl:w-[23.7708rem]  ">
      <img src={ImageURL} alt="" />
    </div>
  );
};

export default BodyCard1;

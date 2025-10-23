const QestionHeader = () => {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="font-normal text-5 text-white text-center">
        Glitch 진짜 괜찮을까? 아직 고민이라면
      </h1>
      <p className="font-bold text-[2rem]">
        {" "}
        <span className="text-primary">3일간 무료로 </span>{" "}
        <span className="text-white">경험하고 결정하세요.</span>
      </p>
    </div>
  );
};

export default QestionHeader;

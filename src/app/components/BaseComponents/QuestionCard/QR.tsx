import Image from "next/image";

const QR = () => {
  return (
    <div className="">
      <Image
        src="/images/card4Images/QR.png"
        alt="QR Code"
        width={150}
        height={150}
        className=" w-[29.8125rem] h-[34.3236rem] md:w-[22.5rem] md:h-[25.9046rem]"
      />
    </div>
  );
};

export default QR;

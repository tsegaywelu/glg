import Image from "next/image";

const QR = () => {
  return (
    <div className="w-full">
      <Image
        src="/images/card4Images/QR.png"
        alt="QR Code"
        width={150}
        height={150}
        className=" w-full h-[34.3236rem] lg:w-[22.5rem] lg:h-[25.9046rem]"
      />
    </div>
  );
};

export default QR;

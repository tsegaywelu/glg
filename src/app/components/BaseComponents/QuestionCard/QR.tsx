import Image from "next/image";
import BorderComponent from "./BorderComponent";

const QR = () => {
  const row1Texts = ["QTY", "DESC", "AMT"];
  const row2Texts = [
    "1",
    "비즈니스 컨설팅",
    "FREE",
    "1",
    "데모 서비스 3일 개발/제공",
    "FREE",
    "1",
    "Glitch 3일 이용권",
    "FREE",
  ];
  return (
    <div className="relative w-full">
      <div className="w-full bg-white min-h-[25.9046rem] pt-[1.12rem] px-[0.89rem] relative ">
        {/* /top part */}

        <div className="space-y-[0.94rem]">
          <div className="flex items-center justify-center gap-[1rem] ">
            <Image
              src="/images/whiteLogo.png"
              alt="LOGO"
              width={74}
              height={19}
              className=" w-[4.625rem] h-[1.1875rem]"
              quality={80}
            />
            <div className="font-normal text-[1rem] text-[#000000] leading-[1.125rem]">
              외주 개발 서비스
            </div>
          </div>
          <BorderComponent />
        </div>
        {/* time part */}
        <div className="space-y-[0.42rem] mt-[0.93rem]">
          <div className=" leading-[0.5625rem] text-[0.5rem] font-normal text-[#000]">
            <span>2025/8/23</span>
            <span>8:39:18 PM</span>
          </div>
          <div className="leading-[0.5625rem] text-[0.5rem] font-normal text-[#000]">
            BN : 887-86-03669
          </div>
        </div>
        <div className="mt-[0.86rem] ">
          <div className="grid grid-cols-[1fr_6fr_1fr] gap-[0.69rem]">
            {row1Texts.map((text, index) => (
              <div
                key={index}
                className="text-[#000] font-normal text-[0.75rem]"
              >
                {text}
              </div>
            ))}
            <div className="col-span-3 py-[0.75rem]">
              <BorderComponent />
            </div>
            {row2Texts.map((text, index) => (
              <div
                key={index}
                className="text-[#000] font-normal text-[0.75rem]"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[1.44rem] pb-5">
          <div className="flex items-center justify-end gap-[0.72rem] font-bold text-[0.75rem] text-[#000]">
            <p>AMOUNT</p>
            <p>0원</p>
          </div>
          <div className=" pb-[0.62rem] pt-[0.4rem]">
            <BorderComponent />
          </div>
          <div className="flex items-start justify-between">
            <p className="text-[0.5rem] font-normal text-[#000]">
              ** THANK YOU **{" "}
            </p>
            <Image
              src="/images/QR1.png"
              alt="QR"
              width={150}
              height={150}
              className=" w-[9.6875rem] h-[9.6875rem]"
              quality={80}
            />
          </div>
        </div>
      </div>
      {/* PERFORATED TEAR-OFF EDGE */}
      <div className="absolute bottom-0 left-0 right-0 h-[1rem] pointer-events-none bg-black">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
        repeating-linear-gradient(
          to right,
          transparent,
          transparent 0.25rem,
        
        ),
        radial-gradient(circle at 50% 50%, transparent 0.125rem, #ffffff 0.1875rem)
      `,
            backgroundSize: "1rem 100%, 0.625rem 0.375rem",
            backgroundPosition: "0 0, 0.125rem 0.375rem",
            backgroundRepeat: "repeat-x, repeat-x",
          }}
        />
      </div>
    </div>
  ); 
};

export default QR;

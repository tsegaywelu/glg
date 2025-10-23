import BodyCard1 from "./BodyCard1";
import HeaderCard1 from "./HeaderCard1";

const Card1 = () => {
  return (
    <div className=" px-10 md:px-[5rem] lg:px-[15rem] py-[5rem] space-y-[5rem] ">
      <div className="bg-foreground-strong flex justify-center  ">
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="text-[1.25rem] text-white font-normal">
            지금까지 외주 맡기면서
          </h1>
          <div className="flex items-center gap-x-[0.62rem] flex-wrap text-white  text-[2rem] ">
            <div>왜 고민하고 있었나요?</div>
            <img
              src="/images/tempLogo.png"
              alt="Logo"
              className="h-[1.75rem] w-[6.9375rem]"
            />
            <div>면 쉬웠을텐데요!</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5  ">
        <div className="w-full flex flex-col items-center space-y-[2rem]">
          <HeaderCard1
            textColor="#9FA9FF"
            borderColor="#AFB7FF"
            buttonText="공공기관 E사 "
            bodyText={
              <div className="text-center">
                <span className="text-[1.25rem] font-normal text-[#FFFFFF] text-center">
                  이 기능은 핵심이라 꼭 필요 한데...
                </span>
                <span className="block text-[1.25rem] font-bold text-[#FFFFFF] text-center ">
                  개발비가 부담스러워요 😅
                </span>
              </div>
            }
          />
          <BodyCard1 ImageURL="/images/card1Images/frame1.png" />
        </div>
        <div className="w-full flex flex-col items-center space-y-[2rem] ">
          <HeaderCard1
            textColor="#FFAFFC"
            borderColor="#FFAFFC"
            buttonText="170만 유저 서비스 J사"
            bodyText={
              <div className="text-center">
                <span className="text-[1.25rem] font-normal text-[#FFFFFF] text-center">
                  개발자가
                </span>
                <span className="text-[1.25rem] font-normal text-[#FFFFFF] text-center">
                  일을 잘 하고
                </span>
                <span className=" text-[1.25rem] font-bold text-[#FFFFFF] text-center ">
                  있는지,문제는 없는지
                </span>
                <span className="text-[1.25rem] font-normal text-[#FFFFFF] text-center">
                  너무 궁금해요!
                </span>
              </div>
            }
            // headerText="개발자가 일을 잘 하고 있는지,"
          />
          <BodyCard1 ImageURL="/images/card1Images/frame2.png" />
        </div>

        <div className="w-full flex flex-col items-center space-y-[2rem]">
          <HeaderCard1
            textColor="#FFB8AF"
            borderColor="#FFB8AF"
            buttonText="해외기업 B사"
            bodyText={
              <div>
                <span className="text-[1.25rem] font-normal text-[#FFFFFF] text-center">
                  개발 속도가 너무 느린거 같아요...
                </span>
                <span className="block text-[1.25rem] font-bold text-[#FFFFFF] text-center ">
                  어떻게 빨리 할 수 없을까요 😭
                </span>
              </div>
            }
          />
          <BodyCard1 ImageURL="/images/card1Images/frame3.png" />
        </div>
      </div>
    </div>
  );
};

export default Card1;

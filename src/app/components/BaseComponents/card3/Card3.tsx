import BodyCard3 from "./BodyCard3";
import HeaderCard3 from "./HeaderCard3";

const AllImages = [
  {
    src: "/images/card3Images/frame1.png",

    borderColor: "#FFD9B5",
    Texts: "개발자 입장에서 디자인을 정리해소통 비용을 340% 절감",
    backgroundColor: "#FFD8B31F",
  },
  {
    src: "/images/card3Images/frame2.png",

    borderColor: "#FF9D42",
    Texts: "카카오톡, Slack 등 메신저로 자동 내용 트래킹 및 업무 보고",
    backgroundColor: "#FFE0C333",
  },
  {
    src: "/images/card3Images/frame3.png",

    borderColor: "#FF7B00",
    Texts: "날짜별로 목표를 쪼개어 일정내에 프로젝트가 완료되도록 관리",
    backgroundColor: "#FF7B001F",
  },
];
const Card3 = () => {
  return (
    <div className=" px-10 md:px-[5rem] lg:px-[15rem] py-[5rem] space-y-[5rem] ">
      <HeaderCard3 />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5.5rem]">
        {AllImages.map((image, index) => (
          <div key={index} className="relative">
            <BodyCard3
              ImageURL={image.src}
              Texts={image.Texts}
              borderColor={image.borderColor}
              backgroundColor={image.backgroundColor}
            />

            {index !== AllImages.length - 1 && (
              <>
                <div className="flex md:hidden absolute -bottom-[2.75rem] left-1/2 transform -translate-x-1/2">
                  <img
                    src="/images/card3Images/Arrow.png"
                    alt="arrow"
                    className="w-[0.875rem] h-[0.875rem] rotate-90"
                  />
                </div>

                <div className="hidden md:flex items-center justify-center absolute top-1/2 -right-[2.75rem] transform -translate-y-1/2">
                  <img
                    src="/images/card3Images/Arrow.png"
                    alt="arrow"
                    className="w-[0.875rem] h-[0.875rem]"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card3;

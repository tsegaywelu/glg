import BodyCard2 from "./BodyCard2";
import HeaderCard2 from "./HeaderCard2";

const AllImages = [
  {
    src: "/images/card2Images/fame1.png",
    backgroundColor: "#EAFFF8",
    buttonBackground: "#008F5E",
    ButtonText: "H 보험사 직원용 서비스",
  },
  {
    src: "/images/card2Images/frame2.png",
    backgroundColor: "#F8D7C2",
    buttonBackground: "#EF8845",
    ButtonText: "일 100만 등교/하교 알림 서비스",
  },
  {
    src: "/images/card2Images/frame3.png",
    backgroundColor: "#F5F5F5",
    buttonBackground: "#010101",
    ButtonText: "자동차 회사 H사 홈페이지",
  },
  {
    src: "/images/card2Images/frame4.png",
    backgroundColor: "#FFF3F4",
    buttonBackground: "#FF3A4B",
    ButtonText: "신용정보회사 전자계약, 본인확인 서비스",
  },
  {
    src: "/images/card2Images/frame5.png",
    backgroundColor: "#FFF9F0",
    buttonBackground: "#F3971A",
    ButtonText: "호주 배달서비스 Bellboy",
  },
  {
    src: "/images/card2Images/fame1.png",
    backgroundColor: "#FFF5F5",
    buttonBackground: "#CD121F",
    ButtonText: "프로야구 S구단 공식 팬 서비스",
  },
];

const Card2 = () => {
  return (
    <div className="  py-[5rem] space-y-[5rem] ">
      <HeaderCard2 />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {AllImages.map((ImageURL, index) => (
          <BodyCard2
            key={index}
            ImageURL={ImageURL.src}
            buttonText={ImageURL.ButtonText}
            MYClassName={ImageURL.backgroundColor}
            buttonBackground={ImageURL.buttonBackground}
          />
        ))}
      </div>
    </div>
  );
};

export default Card2;

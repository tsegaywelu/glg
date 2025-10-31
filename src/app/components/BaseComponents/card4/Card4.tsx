import BoadyCard4 from "./BoadyCard4";
import HeaderCard4 from "./HeaderCard4";

const AllImages = [
  {
    src: "/images/card4Images/frame1.png",
    Texts: "중개·매칭 플랫폼",
  },
  {
    src: "/images/card4Images/frame2.png",
    Texts: "LMS·강의 플랫폼",
  },
  {
    src: "/images/card4Images/frame3.png",
    Texts: "관제·모니터링",
  },
  {
    src: "/images/card4Images/frame4.png",
    Texts: "IoT·블루투스",
  },
  {
    src: "/images/card4Images/fram5.png",
    Texts: "ERP·CRM",
  },
  {
    src: "/images/card4Images/frame6.png",
    Texts: "하드웨어·PCB",
  },
  {
    src: "/images/card4Images/fram7.png",
    Texts: "AI·LLM·GPT 연동",
  },
  {
    src: "/images/card4Images/fram8.png",
    Texts: "자사몰·결제 서비스",
  },
  {
    src: "/images/card4Images/frame9.png",
    Texts: "랜딩페이지·홈페이지",
  },
  {
    src: "/images/card4Images/frame10.png",
    Texts: "병원·헬스케어",
  },
];

const Card4 = () => {
  return (
    <div className="  py-[5rem] space-y-[5rem] ">
      <HeaderCard4 />
      {/* md:grid-cols-3 */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-10">
        {AllImages.map((image, index) => (
          <div key={index} className="relative">
            <BoadyCard4 ImageUrl={image.src} Texts={image.Texts} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card4;

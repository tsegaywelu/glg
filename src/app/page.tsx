// app/page.tsx

import Card1 from "./components/BaseComponents/card1/Card1";
import Card2 from "./components/BaseComponents/card2/Card2";
import Card3 from "./components/BaseComponents/card3/Card3";
import Card4 from "./components/BaseComponents/card4/Card4";
import Question from "./components/BaseComponents/QuestionCard/Question";
import Footer from "./components/OneTimeComponents/Footer";
import Header from "./components/OneTimeComponents/Header";
import HeroSection from "./components/OneTimeComponents/HeroSection";

export default function Home() {
  return (
    <div className="overflow-y-auto bg-[#09090B]">
      <main className="flex flex-col   ">
        <div>
          <Header />
          <div className="bg-[#FF7B00] py-[0.75rem] mx-auto text-[0.875rem] font-bold text-center">
            <span className="font normal">지금 문의하면</span>
            <span className="font-bold"> 개발자 3일 무료</span>
          </div>
        </div>
        <HeroSection />
      </main>
      <div className="px-[5rem] 2xl:px-[15rem] max-w-[108rem] mx-auto">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Question />
      </div>
      <div className="px-[5rem] 2xl:px-[15rem]">
        <Footer />
      </div>
    </div>
  );
}

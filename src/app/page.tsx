// app/page.tsx

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh bg-[#09090B] ">
      <div>
        <Header />
        <div className="bg-[#FF7B00] py-[0.75rem] mx-auto text-[0.875rem] font-bold text-center">
          지금 문의하면 개발자 3일 무료
        </div>
      </div>
      <HeroSection />
    </main>
  );
}

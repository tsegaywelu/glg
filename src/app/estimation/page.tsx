import Footer from "../components/OneTimeComponents/Footer";
import Header from "../components/OneTimeComponents/Header";
import EstimationCard from "./EstimationCard";

const page = () => {
  return (
    <div className="overflow-y-auto bg-[#09090B]">
      <div>
        <Header />
        <div className="bg-[#FF7B00] py-[0.75rem] mx-auto text-[0.875rem] font-bold text-center">
          <span className="font-normal">지금 문의하면</span>{" "}
          <span className="font-bold">3일간 서비스 무료</span>
        </div>
      </div>
      <div className="px-10 md:px-[5rem] 2xl:px-[15rem]">
        <EstimationCard />
        <Footer />
      </div>
    </div>
  );
};

export default page;

import Header from "../components/OneTimeComponents/Header";
import PriceCard from "./PriceCard";

const page = () => {
  return (
    <div className="overflow-y-auto bg-[#09090B]">
      <div>
        <Header />
        <div className="bg-[#FF7B00] py-[0.75rem] mx-auto text-[0.875rem] font-bold text-center">
          지금 문의하면 개발자 3일 무료
        </div>
      </div>
      <PriceCard />
    </div>
  );
};

export default page;

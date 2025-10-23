import QestionHeader from "./QestionHeader";
import QR from "./QR";

const Question = () => {
  return (
    <div className=" px-10 md:px-[5rem] lg:px-[15rem] py-[5rem] space-y-10">
      <QestionHeader />
      <div className=" w-full flex  flex-col items-center md:flex-row md:items-start md:justify-center gap-10 ">
        <div className="bg-white min-w-[29.8125rem] h-[68.875rem] md:w-[30.1875rem] md:h-[68.875rem] p-10"></div>
        <QR />
      </div>
    </div>
  );
};

export default Question;

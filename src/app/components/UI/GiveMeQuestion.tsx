type GiveMeQuestionProps = {
  QuestionNmeber: string;
  QuestionText: string;
  NoStar?: boolean;
};

const GiveMeQuestion = ({
  QuestionNmeber,
  QuestionText,
  NoStar,
}: GiveMeQuestionProps) => {
  return (
    <div className="space-y-1">
      <div className="font-bold text-[1.5rem] text-[#000000]">
        {QuestionNmeber}{" "}
      </div>
      <div className="text-[1.25rem] font-normal text-[#000]">
        {QuestionText} {!NoStar && <span className="text-primary">*</span>}
      </div>
    </div>
  );
};

export default GiveMeQuestion;

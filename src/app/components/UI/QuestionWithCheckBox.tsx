import CheckIcon from "../Icons/CheckIcon";

type QuestionProp = {
  QuestionText: string;
};
const QuestionWithCheckBox = ({ QuestionText }: QuestionProp) => {
  return (
    <div className="flex items-center gap-x-3 text-5 font-normal text-[#000]">
      <CheckIcon /> <div>{QuestionText}</div>
    </div>
  );
};

export default QuestionWithCheckBox;

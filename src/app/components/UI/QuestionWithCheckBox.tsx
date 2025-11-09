import CheckIcon from "../Icons/CheckIcon";

type QuestionProp = {
  QuestionText: string;
  checked: boolean;
  onChange: () => void;
};
const QuestionWithCheckBox = ({
  QuestionText,
  checked,
  onChange,
}: QuestionProp) => {
  return (
    <div
      className="flex items-center gap-x-3 text-5 font-normal text-[#000]"
      onClick={onChange}
    >
      <CheckIcon checked={checked} />{" "}
      <div className="text-[1.25rem] leading-[1.4375rem]">{QuestionText}</div>
    </div>
  );
};

export default QuestionWithCheckBox;

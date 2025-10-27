import CheckIcon from "../Icons/CheckIcon";
import Button from "./Button";

type ButtonProps = {
  ButtonTexts: string[];
  titel: string;
  Totalwon: string;
  QuestionNumber: string;
  isSelected: boolean;
  onToggle: () => void;
};
const CeckBoxSelection = ({
  ButtonTexts,
  titel,
  Totalwon,
  QuestionNumber,
  isSelected,
  onToggle,
}: ButtonProps) => {
  // Handler for checkbox selections in CeckBoxSelection components
  const handleOptionSelect = (
    questionNumber: string,
    selectedItems: string[]
  ) => {
    console.log(`Question ${questionNumber} selected:`, selectedItems);
  };
  return (
    <div
      className="flex items-center gap-[1.25rem] cursor-pointer"
      onClick={onToggle}
    >
      <CheckIcon checked={isSelected} />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-y-1  ">
          <p className="text-[1.25rem] font-bold text-[#000]">{titel}</p>
          <p className="text-[1rem] font-normal text-[#000]">{Totalwon}~</p>
        </div>
        <div className="flex gap-x-3 cursor-pointer">
          {QuestionNumber === "Question1" &&
            ButtonTexts.map((text, index) => (
              <Button key={index} ButtonText={text} />
            ))}

          {QuestionNumber === "Question2" && (
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-3">
                {ButtonTexts.slice(0, 2).map((text, index) => (
                  <Button key={index} ButtonText={text} />
                ))}
              </div>
              <div className="flex gap-x-3">
                {ButtonTexts.slice(2, 6).map((text, index) => (
                  <Button key={index} ButtonText={text} />
                ))}
              </div>
            </div>
          )}
          {QuestionNumber === "Question3" && (
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-3">
                {ButtonTexts.slice(0, 3).map((text, index) => (
                  <Button key={index} ButtonText={text} />
                ))}
              </div>
              <div className="flex gap-x-3">
                {ButtonTexts.slice(3, 7).map((text, index) => (
                  <Button key={index} ButtonText={text} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CeckBoxSelection;

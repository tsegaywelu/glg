"use client";
import { useTranslation } from "react-i18next";
type InputProps = {
  placeholder?: string;
  label?: string;
  type?: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  QuestionComponent?: boolean;
  reverselabel?: boolean;
};

const WhiteInput = ({
  placeholder,
  label,
  type,
  id,
  reverselabel,
  value,
  onChange,
  QuestionComponent,
}: InputProps) => {
  const { i18n } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;

    const numericValue = inputValue.replace(/,/g, "");

    if (numericValue === "") {
      onChange("");
      return;
    }

    if (/^\d+$/.test(numericValue)) {
      const formatted = Number(numericValue).toLocaleString();
      onChange(formatted);
    } else {
      onChange(inputValue);
    }
  };

  return (
    <div
      className={`${
        reverselabel
          ? "flex items-center gap-x-[0.25rem] font-pretendard"
          : `grid  ${
              i18n.language === "ko"
                ? "grid-cols-[5rem_1fr]"
                : "grid-cols-[12rem_1fr]"
            }  items-center font-pretendard`
      }`}
    >
      {!reverselabel && (
        <label
          htmlFor={id}
          className={
            "font-semibold text-[1.25rem]   text-[#09090B] leading-[1rem]"
          }
        >
          {label}
        </label>
      )}

      <input
        type={type || "text"}
        id={id}
        className={`font-semibold text-[1.25rem]  border-b-[0.125rem] border-primary leading-[1rem]
          pb-3 pt-2 focus:outline-none  text-center
        placeholder:text-[#09090B] placeholder:opacity-[30%] text-[#09090B]
        ${
          QuestionComponent ? "max-w-[12.375rem]" : "w-full text-start md:w-fit"
        }`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {reverselabel && (
        <label
          htmlFor={id}
          className={
            "font-semibold text-[1.25rem] md:text-[1.25rem]  text-[#09090B] leading-[1rem]"
          }
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default WhiteInput;

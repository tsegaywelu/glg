type InputProps = {
  placeholder?: string;
  label: string;
  type?: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
};

const Input = ({
  placeholder,
  label,
  type,
  id,
  value,
  onChange,
}: InputProps) => {
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
    <div className="flex items-center gap-x-[0.25rem] font-pretendard">
      <input
        value={value}
        onChange={handleChange}
        type={type || "text"}
        id={id}
        className=" max-w-[12.375rem] font-semibold text-[1.25rem]  border-b-[0.125rem] border-primary pb-3 pt-2 focus:outline-none  text-center
        placeholder:text-[#fff] placeholder:opacity-[30%] text-[#fff] leading-[1rem]"
        placeholder={placeholder}
      />
      <label
        htmlFor={id}
        className="font-semibold text-[1.25rem]  text-white  leading-[1rem]"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;

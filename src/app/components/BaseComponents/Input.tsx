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
    onChange(event.target.value);
  };
  return (
    <div className="flex items-end gap-x-[0.25rem] font-pretendard">
      <input
        value={value}
        onChange={handleChange}
        type={type || "text"}
        id={id}
        className=" max-w-[11.375rem] font-semibold text-[1.25rem]  border-b-[0.125rem] border-primary pb-3 pt-2 focus:outline-none  text-center
        placeholder:text-[#fff] placeholder:opacity-[30%] text-[#fff]"
        placeholder={placeholder}
      />
      <label
        htmlFor={id}
        className="font-semibold text-[1.25rem] md:text-[1rem]  text-white"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;

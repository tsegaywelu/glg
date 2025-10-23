type InputProps = {
  placeholder?: string;
  label: string;
  type?: string;
  id: string;
};

const Input = ({ placeholder, label, type, id }: InputProps) => {
  return (
    <div className="flex items-end gap-x-[0.25rem]">
      <input
        type={type || "text"}
        id={id}
        className="font-semibold text-[1.25rem] font-pretendared border-b-[0.125rem] border-primary pb-3 pt-2 focus:outline-none max-w-[4.5rem] md:min-w-[10.25rem] text-center"
        placeholder={placeholder}
      />
      <label
        htmlFor={id}
        className="font-semibold text-[1.25rem] md:text-[1rem] font-pretendared text-white"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;

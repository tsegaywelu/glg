type InputProps = {
  placeholder?: string;
  label?: string;
  type?: string;
  id: string;
};

const WhiteInput = ({ placeholder, label, type, id }: InputProps) => {
  return (
    <div className="flex items-end gap-x-[0.25rem] font-pretendard  ">
      <input
        type={type || "text"}
        id={id}
        className="font-semibold text-[1.25rem]  border-b-[0.125rem] border-primary pb-3 pt-2 focus:outline-none max-w-[4.5rem] md:min-w-[10.25rem] text-center
        placeholder:text-[#09090B] placeholder:opacity-[30%] text-[#09090B]"
        placeholder={placeholder}
      />
      <label
        htmlFor={id}
        className="font-semibold text-[1.25rem] md:text-[1rem]  text-[#09090B]"
      >
        {label}
      </label>
    </div>
  );
};

export default WhiteInput;

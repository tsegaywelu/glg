type TextAreaProps = {
  placeholder: string;
  numOfrow: number;
};

const TextArea = ({ placeholder, numOfrow }: TextAreaProps) => {
  return (
    <div className="w-full">
      <textarea
        rows={numOfrow}
        placeholder={placeholder}
        className="w-full border border-[#E4E4E7] rounded-md p-[1.5rem] text-5 font-normal text-[#000] placeholder:text-[#E4E4E7] resize-none outline-none focus:border-black whitespace-pre-line"
      ></textarea>
    </div>
  );
};

export default TextArea;

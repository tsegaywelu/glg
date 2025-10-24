type ButtonProps = {
  ButtonText: string;
};

const Button = ({ ButtonText }: ButtonProps) => {
  return (
    <button className="text-primary  text-[1rem] font-semibold border-primary border-[0.0625rem] rounded-md py-2 px-3">
      {ButtonText}
    </button>
  );
};

export default Button;

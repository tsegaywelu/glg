import Image from "next/image";
interface ToastIndicatorProps {
  type: "success" | "error";
}
const ToastIndicator = ({ type }: ToastIndicatorProps) => (
  <div
    style={{
      backgroundColor: type === "success" ? "#FF7B00" : "#BA3741",

      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Image
      src="/images/sendIcon.png"
      alt="icon"
      width={13.33}
      height={13.33}
      className="w-[13.33px] h-[13.33px]"
    />
  </div>
);

export default ToastIndicator;

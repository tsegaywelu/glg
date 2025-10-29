import ToastIndicator from "./ToastIndicator";
import { ReactNode } from "react";

interface CustomToastProps {
  type: "success" | "error";
  message: ReactNode;
}

const CustomToast = ({ type, message }: CustomToastProps) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      background: type === "success" ? "#FF7B00" : "#BA3741",
      color: "#545454",
      borderRadius: "8px",
      // boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
      minWidth: "20.875rem",
      minHeight: "2.5rem",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        flex: 1,
        padding: "12px 16px",
        display: "flex",
        // flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "16px",
      }}
    >
      <ToastIndicator type={type} />
      <div className="text-[0.875rem] text-[#fff] font-pretendard font-medium">
        {message}
      </div>
    </div>
  </div>
);

export default CustomToast;

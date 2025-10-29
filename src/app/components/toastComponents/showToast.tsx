import { toast } from "react-toastify";
import CustomToast from "./CustomToast";
import { ReactNode } from "react";

export const showToast = (type: "success" | "error", message: ReactNode) => {
  toast(<CustomToast type={type} message={message} />, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    closeButton: false,
  });
};

"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = () => (
  <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar
    newestOnTop={false}
    closeButton={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    toastStyle={{
      padding: 0,
      margin: "0 2.5rem 2.5rem 0",
      backgroundColor: "transparent",
      boxShadow: "none",
      overflow: "visible",
    }}
  />
);

export default ToastProvider;

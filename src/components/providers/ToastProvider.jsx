"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: {
          background: "#123524",
          color: "#EFE3C2",
          fontFamily: "var(--font-sans)",
          fontSize: "0.875rem",
          borderRadius: "0.5rem",
          padding: "10px 16px",
        },
        success: {
          iconTheme: {
            primary: "#85A947",
            secondary: "#EFE3C2",
          },
        },
        error: {
          iconTheme: {
            primary: "#dc2626",
            secondary: "#EFE3C2",
          },
        },
      }}
    />
  );
}

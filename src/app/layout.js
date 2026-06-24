import "./globals.css";
import { fontDisplay, fontSans } from "./fonts";
import Navbar from "@/components/shared/Navbar";
import ToastProvider from "@/components/providers/ToastProvider";

export const metadata = {
  title: "BookSpace",
  description: "A Place To Find All Your Desired eBooks.",
};

export const viewport = {
  themeColor: "#123524",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-parchment text-ink font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <ToastProvider />
        
      </body>
    </html>
  );
}
import "./globals.css";
import { fontDisplay, fontSans } from "./fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ToastProvider from "@/components/providers/ToastProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { AuthProvider } from "@/lib/authContext";

export const metadata = {
  title: "BookSpace",
  description: "A Place To Find All Your Desired eBooks.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-parchment font-sans text-ink antialiased dark:bg-ink dark:text-parchment">
        <ThemeProvider>
          <AuthProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ToastProvider />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

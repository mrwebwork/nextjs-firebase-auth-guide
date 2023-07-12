import "./globals.css";

import { Montserrat } from "next/font/google";

import { Toaster } from "react-hot-toast";

import { AuthContextProvider } from "@/context/AuthContext";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js & Firebase Auth",
  description: " Next.js & Firebase Authentication Tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <AuthContextProvider>{children}</AuthContextProvider>
        <Toaster />
      </body>
    </html>
  );
}

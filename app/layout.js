import "./globals.css";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Firebase Next.js Auth",
  description: "Firebase & Next.js Authentication Tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>{children}</body>
    </html>
  );
}

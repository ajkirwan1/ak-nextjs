import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "A&K Fullstack Development %s ",
    default: "A&K Fullstack Development",
  },
  keywords: [
    "Development",
    "Professional",
    "UK",
    "Creative studio",
    "Graphic-design",
    "Backend",
    "Frontend",
    "Fullstack",
  ],
  description: "Page",
  authors: [{ name: "Adam" }, { name: "Kasia" }],
  creator: "Kasia Kruk",
  publisher: "Kasia Kruk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

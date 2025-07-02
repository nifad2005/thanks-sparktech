import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/wraper/Navbar";
import Footer from "./components/wraper/Footer";

export const metadata: Metadata = {
  title: "Thanks sparktech!",
  description: "A heartfelt thank you to sparktech for their support and contributions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased `}>
        <div className="min-w-screen ">
          <Navbar/>
          <div className="py-1 ">
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}

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
      <body className={`antialiased min-w-screen ring-4`}>
        <div className="min-w-screen ring-2">
          <Navbar/>
          <main className="container  ring-2 p-4">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}

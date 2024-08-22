import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/portal/navbar";
import Footer from "./ui/portal/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brooklyn College Computer Science Club",
  description: "Computer Science Club at Brooklyn College",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-landing bg-fixed bg-cover relative">
      <body>
        <Providers>
          <Header />
          <div className="h-screen max-h-screen w-screen flex flex-col relative">
            <div className="absolute h-screen inset-0 bg-black opacity-50 z-10"></div>
            <div className="min-h-screen z-20">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

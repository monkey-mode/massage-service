import NavBar from "@/components/NavBar";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const montserrat = Montserrat({
  subsets: ["latin"]
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.className} bg-landing bg-fixed bg-cover relative`}
    >
      <body>
        <Providers>
          <NavBar />
          <div className="h-screen max-h-screen w-screen flex flex-col relative">
            <div className="absolute h-screen inset-0 bg-black opacity-50 z-10"></div>
            <div className="min-h-screen z-20 w-screen">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

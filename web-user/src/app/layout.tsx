"use client";
import NavBar from "@/components/NavBar";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.css";
import { Providers } from "./providers";
import { Spinner } from "@nextui-org/react";

const montserrat = Montserrat({
  subsets: ["latin"]
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // if (!mounted) return <Spinner label="Loading..." color="default" />;
  return (
    <html
      lang="en"
      className={`${montserrat.className} bg-landing bg-fixed bg-cover`}
    >
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

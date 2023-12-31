import "@/styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import React from "react";
import Header from "@/components/header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default RootLayout;

import React from "react";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import ClientOnly from "@/components/clientOnly/clientOnly";
import Navbar from "@/components/navbar/navbar";
import RegisterModal from "@/components/modal/signupform";
import LoginModal from "@/components/modal/loginform";
import getCurrentUser from "../actions/getCurrentUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <LoginModal />
          <RegisterModal />
          {/* @ts-ignore */}
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;

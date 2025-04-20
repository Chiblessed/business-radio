'use client';

import { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from '@/../../src/component/Navbar/page';
import Footer from "@/../../src/component/Footer/page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const monts = Montserrat({
  variable: "--font-monts",
  subsets: ["latin"],
});

const queryClient = new QueryClient();

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${monts.variable} antialiased`}>
        <Navbar />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}

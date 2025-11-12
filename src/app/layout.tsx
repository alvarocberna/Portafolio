import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import './page.module.css';
import {Navbar} from "../shared";
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Álvaro Cañete Portafolio",
  description: "Portafolio profesional desarrollador web Álvaro Cañete Berna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}

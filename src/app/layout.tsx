import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik_80s_Fade, Rubik_Glitch_Pop } from "next/font/google";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik80sFade = Rubik_80s_Fade({
  weight: "400",
  variable: "--font-R80F"
});

const rubikGlitchPop = Rubik_Glitch_Pop({
  weight: "400",
  variable: "--font-RGP"
});

export const metadata: Metadata = {
  title: "5Stygian",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik80sFade.variable} ${rubikGlitchPop.variable} antialiased`}
      >
        <main className="w-screen h-full text-[#ebebeb] bg-zinc-950">{children}</main>
      </body>
    </html>
  );
}

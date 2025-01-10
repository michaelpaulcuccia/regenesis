"use client";
import { UserProvider } from "context/UserContext";
import useHideNav from "hooks/useHider";
import NavBar from "@components/ui/NavBar";
import PageContainer from "@components/ui/PageContainer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hideNav = useHideNav();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
          <PageContainer>
            {hideNav && <NavBar />}
            {children}
          </PageContainer>
        </UserProvider>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header/Header'
import Main from './components/Main/Main'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WhiskerWisdom",
  description: "Fascinating cat facts with style",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header></Header>
        <Main>{children}</Main>
        
      </body>
    </html>
  );
}

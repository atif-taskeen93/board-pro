import { Inter } from "next/font/google";
import AppHeader from "./components/header";
import AppFooter from "./components/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Board Pro | Home",
  description: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        <main>
          {children}
        </main>
        <AppFooter />
      </body>
    </html>
  );
}

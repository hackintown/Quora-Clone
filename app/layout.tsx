// RootLayout.tsx
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Home from "./page";
import Slidebar from "@/components/Slidebar/Slidebar";
import ReduxProvider from "@/components/ReduxProvider/Provider";
import UserLogin from "@/components/Auth/UserLogin";
import RootLayoutClient from "@/layouts/RootLayoutClient";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

interface Props {
  user: any;
  children: React.ReactNode;
}
export default function RootLayout({ user, children }: Props) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-gray-100">
        <ReduxProvider>
          <Header />
          <div className="flex max-w-[1100px] mx-auto px-2 py-4">
            <Slidebar />
            {children}
            <div className=""></div>
          </div>
          <UserLogin />
        </ReduxProvider>
      </body>
    </html>
  );
}

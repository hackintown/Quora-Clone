// RootLayout.tsx
import { Poppins } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider/Provider";

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
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

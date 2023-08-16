import "./globals.css";
import { Montserrat } from "next/font/google";

import { EdenAIContextProvider } from "@/context/EdenAIContext";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "InspirEden",
  description: "Get inspired by the best of Eden",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <EdenAIContextProvider>{children}</EdenAIContextProvider>
      </body>
    </html>
  );
}

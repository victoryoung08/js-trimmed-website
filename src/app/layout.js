import { DM_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const font = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-black text-white  md:max-w-92`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
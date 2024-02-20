import { DM_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const font = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-black text-white relative`}>
        <div className="fixed w-[300px] h-[300px] rounded-[50%] blur-[170px] opacity-70 bg-primary z-[1] md:w-[450px] md:h-[450px] md:blur-[300px]"></div>
        <div className="fixed w-[300px] h-[300px] rounded-[50%] blur-[200px] opacity-70 bg-secondary z-[1] bottom-0 right-[-50px]"></div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

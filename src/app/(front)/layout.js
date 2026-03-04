import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { languages, translations } from "@/i18n/translations";

export const metadata = {
  title: "TikTok Video Download – Watermark Free | TikTok Downloader Pakistan",
  description: "Download TikTok videos without watermark in HD. Free TikTok to MP4 & MP3. No app, no account needed.",
  icons: { icon: "/tiktok-favicon.webp" },
  robots: { index: true, follow: true },
};

function getLangFromPathname(pathname) {
  if (!pathname) return "en";
  const parts = pathname.split("/").filter(Boolean);
  const firstPart = parts[0];
  const isLang = languages.some(l => l.code === firstPart);
  return isLang ? firstPart : "en";
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tiktok-favicon.webp" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
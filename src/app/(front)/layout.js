import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "BeeTV APK v4.5.6 Download Latest Version (Official Website 2026)",
  description:
    "Download BeeTV APK v4.5.6 latest version free for Android and FireStick. Official website 2026. Watch HD movies, TV shows, live channels — no subscription, no registration required.",

  icons: {
    icon: "/beetv-favicon.webp",
    apple: "/beetv-favicon.webp",
    shortcut: "/beetv-favicon.webp",
  },

  verification: {
    google: "google14442414ffaf2b79",
  },

  openGraph: {
    title: "BeeTV APK v4.5.6 Download Latest Version – Official Website 2026",
    description:
      "Download BeeTV APK v4.5.6 free for Android and FireStick. Watch HD movies and TV shows for free. No subscription, no sign-up required.",
    url: "https://beetv.click",
    siteName: "BeeTV APK — Official Website",
    images: [
      {
        url: "https://beetv.click/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BeeTV APK v4.5.6 – Free Movies & TV Shows Streaming App",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BeeTV APK v4.5.6 Download – Free Streaming App 2026",
    description:
      "Watch HD movies and TV shows free on Android & FireStick. Download BeeTV APK v4.5.6 latest version — no subscription needed.",
    images: ["https://beetv.click/og-image.jpg"],
  },

  alternates: {
    canonical: "https://beetv.click/",
  },

  keywords: [
    "beetv apk",
    "beetv apk download",
    "beetv apk v4.5.6",
    "beetv latest version",
    "beetv apk 2026",
    "beetv official website",
    "beetv free download",
    "beetv for android",
    "beetv firestick",
    "beetv apk latest version",
    "free movie app android",
    "free streaming app firestick",
    "beetv apk download 2026",
    "free movies tv shows apk",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/beetv-favicon.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/beetv-favicon.webp" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
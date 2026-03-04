"use client";

import { usePathname } from "next/navigation";
import { languages } from "@/i18n/translations";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();

  const pathParts = (pathname || "").split("/").filter(Boolean);
  const detectedCode = languages.find(l => l.code === pathParts[0])?.code || "en";

  return (
    <>
      <Navbar lang={detectedCode} />
      {children}
      <Footer lang={detectedCode} />
    </>
  );
}
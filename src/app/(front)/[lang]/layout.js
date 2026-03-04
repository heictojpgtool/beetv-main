import { translations } from "@/i18n/translations";
import { notFound } from "next/navigation";

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  if (!translations[lang]) notFound();
  return <>{children}</>;
}
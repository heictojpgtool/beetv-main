import { languages, translations } from "@/i18n/translations";
import DownloaderHero from "@/components/downloader/DownloaderHero";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return languages
    .filter(l => l.code !== "en")
    .map(l => ({ lang: l.code }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = translations[lang];
  if (!t) return {};

  const langObj = languages.find(l => l.code === lang);

  return {
    title: t.seoTitle,
    description: t.seoDesc,
    alternates: {
      canonical: `https://yourdomain.com/${lang}`,
      languages: Object.fromEntries(
        languages.map(l => [
          l.code === "en" ? "en" : l.code,
          l.code === "en" ? "https://yourdomain.com/" : `https://yourdomain.com/${l.code}`
        ])
      ),
    },
    openGraph: {
      title: t.seoTitle,
      description: t.seoDesc,
      url: `https://yourdomain.com/${lang}`,
      locale: lang,
    },
  };
}

export default async function LangPage({ params }) {
  const { lang } = await params;

  if (!translations[lang]) {
    notFound();
  }

  return <DownloaderHero lang={lang} />;
}
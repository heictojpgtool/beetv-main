"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { languages } from "@/i18n/translations";
import "./navbar.css";

export default function Navbar({ lang = "en" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const router = useRouter();

  const currentLang = languages.find(l => l.code === lang) || languages[0];

  const storiesHref = lang === "en" ? "/tiktok-stories" : `/${lang}/tiktok-stories`;
  const mp3Href = lang === "en" ? "/tiktok-mp3" : `/${lang}/tiktok-mp3`;

  const handleLangSelect = (selectedLang) => {
    setLangOpen(false);
    setMenuOpen(false);
    if (selectedLang.code === "en") {
      router.push("/");
    } else {
      router.push(`/${selectedLang.code}`);
    }
  };

  return (
    <header className="nb-header">
      <div className="nb-inner">

        <Link href={lang === "en" ? "/" : `/${lang}`} className="nb-logo">
          <div className="nb-logo-icon">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="#5b3df5"/>
              <path d="M16 7L16 22M10 16L16 22L22 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 25H22" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="nb-logo-text">TIKDOWN</span>
        </Link>

        <nav className="nb-nav">
          <Link href={storiesHref} className="nb-nav-link">
            Download TikTok Stories
          </Link>
          <Link href={mp3Href} className="nb-nav-link">
            Download TikTok MP3
          </Link>
        </nav>

        <div className="nb-right">
          <div className="nb-lang-wrap">
            <button className="nb-lang-btn" onClick={() => setLangOpen(!langOpen)}>
              <span>{currentLang.flag} {currentLang.name}</span>
              <span className="nb-lang-arrow">{langOpen ? "∧" : "∨"}</span>
            </button>

            {langOpen && (
              <div className="nb-lang-dropdown">
                {languages.map((l) => (
                  <div
                    key={l.code}
                    className={`nb-lang-item ${l.code === lang ? "active" : ""}`}
                    onClick={() => handleLangSelect(l)}
                  >
                    <span>{l.flag}</span>
                    <span>{l.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="nb-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>

      </div>

      {menuOpen && (
        <div className="nb-mobile-menu">
          <Link href={storiesHref} className="nb-mobile-link" onClick={() => setMenuOpen(false)}>
            Download TikTok Stories
          </Link>
          <Link href={mp3Href} className="nb-mobile-link" onClick={() => setMenuOpen(false)}>
            Download TikTok MP3
          </Link>
          <div className="nb-mobile-lang">
            <p className="nb-mobile-lang-title">🌐 Select Language</p>
            <div className="nb-mobile-lang-grid">
              {languages.map((l) => (
                <div
                  key={l.code}
                  className={`nb-mobile-lang-item ${l.code === lang ? "active" : ""}`}
                  onClick={() => handleLangSelect(l)}
                >
                  {l.flag} {l.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
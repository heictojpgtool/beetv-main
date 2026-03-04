"use client";

import { useState } from "react";
import { translations } from "@/i18n/translations";
import "./downloader.css";

export default function DownloaderHero({ lang = "en" }) {
  const t = translations[lang] || translations["en"];

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      setError("");
      setResult(null);
    } catch {
      setError("Clipboard access denied. Please paste manually.");
    }
  };

  const handleDownload = async () => {
    const trimmed = url.trim();
    if (!trimmed) { setError(t.errorEmpty); return; }
    if (!trimmed.includes("tiktok.com")) { setError(t.errorInvalid); return; }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const apiUrl = `https://www.tikwm.com/api/?url=${encodeURIComponent(trimmed)}&hd=1`;
      const res = await fetch(apiUrl);
      const json = await res.json();

      if (!json || json.code !== 0 || !json.data) {
        throw new Error(t.errorNotFound);
      }

      const d = json.data;
      setResult({
        title: d.title || "",
        author: d.author?.unique_id || d.author?.nickname || "",
        cover: d.cover || d.origin_cover || "",
        hdVideo: d.hdplay || d.play || "",
        withWatermark: d.wmplay || "",
        music: d.music || "",
      });
    } catch (e) {
      setError(e.message || t.errorGeneral);
    } finally {
      setLoading(false);
    }
  };

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
    <>
      <section className="tt-hero" dir={lang === "ar" ? "rtl" : "ltr"}>
        <h1 className="tt-title">{t.heroTitle}</h1>

        <div className="tt-box">
          <input
            type="text"
            placeholder={t.placeholder}
            value={url}
            onChange={(e) => { setUrl(e.target.value); setError(""); setResult(null); }}
            onKeyDown={(e) => e.key === "Enter" && handleDownload()}
            className="tt-input"
          />
          <button className="tt-paste" onClick={handlePaste}>{t.pasteBtn}</button>
          <button className="tt-download" onClick={handleDownload} disabled={loading}>
            {loading ? t.loadingText : t.downloadBtn}
          </button>
        </div>

        {error && <p className="tt-error">⚠ {error}</p>}

        {result && (
          <div className="tt-result-card">
            <div className="tt-result-inner">
              {result.cover && (
                <div className="tt-thumb-wrap">
                  <img src={result.cover} alt="thumbnail" className="tt-thumb" />
                  <span className="tt-play-badge">▶</span>
                </div>
              )}
              <div className="tt-result-meta">
                {result.author && <p className="tt-author">@{result.author}</p>}
                {result.title && <p className="tt-video-title">{result.title}</p>}
                <p className="tt-ready-text">{t.readyText}</p>
              </div>
            </div>
            <div className="tt-links">
              {result.hdVideo && (
                <a href={result.hdVideo} target="_blank" rel="noopener noreferrer" className="tt-btn tt-btn--hd" download>{t.btnHD}</a>
              )}
              {result.withWatermark && (
                <a href={result.withWatermark} target="_blank" rel="noopener noreferrer" className="tt-btn tt-btn--wm" download>{t.btnWM}</a>
              )}
              {result.music && (
                <a href={result.music} target="_blank" rel="noopener noreferrer" className="tt-btn tt-btn--audio" download>{t.btnAudio}</a>
              )}
            </div>
          </div>
        )}

        <div className="tt-quick-feats">
          <div className="tt-qfeat"><strong>{t.feat1Title}</strong><span>{t.feat1Desc}</span></div>
          <div className="tt-qfeat"><strong>{t.feat2Title}</strong><span>{t.feat2Desc}</span></div>
          <div className="tt-qfeat"><strong>{t.feat3Title}</strong><span>{t.feat3Desc}</span></div>
        </div>
      </section>

      <section className="tt-how-section" dir={lang === "ar" ? "rtl" : "ltr"}>
        <div className="tt-container">
          <h2 className="tt-how-title">{t.howTitle}</h2>
          <p className="tt-how-desc">{t.howDesc}</p>
          <p className="tt-italic-label">{t.howLabel}</p>
          <div className="tt-arrow">↓</div>
          <div className="tt-steps-card">
            <h3>{t.stepsTitle}</h3>
            <div className="tt-step-item">
              <span className="tt-step-big-num">1</span>
              <div><strong>{t.step1Title}</strong><p>{t.step1Desc}</p></div>
            </div>
            <div className="tt-step-item">
              <span className="tt-step-big-num">2</span>
              <div><strong>{t.step2Title}</strong><p>{t.step2Desc}</p></div>
            </div>
            <div className="tt-step-item">
              <span className="tt-step-big-num">3</span>
              <div><strong>{t.step3Title}</strong><p>{t.step3Desc}</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="tt-faq-section" dir={lang === "ar" ? "rtl" : "ltr"}>
        <div className="tt-container">
          <h2 className="tt-faq-title">{t.faqTitle}</h2>
          <div className="tt-faq-list">
            {t.faqs.map((faq, i) => (
              <div key={i} className={`tt-faq-item ${openFaq === i ? "open" : ""}`} onClick={() => toggleFaq(i)}>
                <div className="tt-faq-q">
                  <span>{faq.q}</span>
                  <span className="tt-faq-arrow">{openFaq === i ? "∧" : "∨"}</span>
                </div>
                {openFaq === i && <div className="tt-faq-a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="tt-seo-section" dir={lang === "ar" ? "rtl" : "ltr"}>
        <div className="tt-container">
          <h2>{t.seoH2}</h2>
          <p>{t.seoP1}</p>
          <p>{t.seoP2}</p>
        </div>
      </section>
    </>
  );
}
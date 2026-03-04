"use client";

import { useState } from "react";
import "../downloader/downloader.css";

const FAQS = [
  {
    q: "How do I download TikTok Stories?",
    a: "Copy the link of any TikTok Story, paste it in the input field above, and click Download. Your story will be ready in seconds without any watermark."
  },
  {
    q: "Are TikTok Stories different from regular TikTok videos?",
    a: "Yes, TikTok Stories disappear after 24 hours. Our tool lets you save them before they expire — in full quality, without watermark."
  },
  {
    q: "Is it free to download TikTok Stories?",
    a: "Yes, completely free. No account needed, no payment, no limits. Save as many TikTok Stories as you want."
  },
  {
    q: "Can I download TikTok Stories on mobile?",
    a: "Yes! Open TikTok, tap Share on the Story, copy the link, open this page in your mobile browser, paste and download."
  },
  {
    q: "Where are downloaded stories saved?",
    a: "Stories are saved to your device's default download folder — Gallery on Android, Photos/Files on iPhone, Downloads folder on PC."
  },
  {
    q: "Can I download Stories from private accounts?",
    a: "No, only Stories from public TikTok accounts can be downloaded. Private account content is protected."
  },
];

export default function TikTokStoriesPage() {
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
    if (!trimmed) { setError("Please enter a TikTok Story link."); return; }
    if (!trimmed.includes("tiktok.com")) { setError("Please enter a valid TikTok link."); return; }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const apiUrl = `https://www.tikwm.com/api/?url=${encodeURIComponent(trimmed)}&hd=1`;
      const res = await fetch(apiUrl);
      const json = await res.json();

      if (!json || json.code !== 0 || !json.data) {
        throw new Error(json?.msg || "Story not found. Please check the link and try again.");
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
      setError(e.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
    <>
      {/* HERO */}
      <section className="tt-hero">
        <h1 className="tt-title">TikTok Stories Downloader</h1>

        <div className="tt-box">
          <input
            type="text"
            placeholder="Insert a TikTok Story link here"
            value={url}
            onChange={(e) => { setUrl(e.target.value); setError(""); setResult(null); }}
            onKeyDown={(e) => e.key === "Enter" && handleDownload()}
            className="tt-input"
          />
          <button className="tt-paste" onClick={handlePaste}>📋 Paste</button>
          <button className="tt-download" onClick={handleDownload} disabled={loading}>
            {loading ? "Loading..." : "Download"}
          </button>
        </div>

        {error && <p className="tt-error">⚠ {error}</p>}
        {loading && <p className="tt-loading">⏳ Fetching story...</p>}

        {result && (
          <div className="tt-result-card">
            <div className="tt-result-inner">
              {result.cover && (
                <div className="tt-thumb-wrap">
                  <img src={result.cover} alt="Story thumbnail" className="tt-thumb" />
                  <span className="tt-play-badge">▶</span>
                </div>
              )}
              <div className="tt-result-meta">
                {result.author && <p className="tt-author">@{result.author}</p>}
                {result.title && <p className="tt-video-title">{result.title}</p>}
                <p className="tt-ready-text">✅ Ready! Choose your download format:</p>
              </div>
            </div>
            <div className="tt-links">
              {result.hdVideo && (
                <a href={result.hdVideo} target="_blank" rel="noopener noreferrer" className="tt-btn tt-btn--hd" download>
                  ⬇ HD (No Watermark)
                </a>
              )}
              {result.withWatermark && (
                <a href={result.withWatermark} target="_blank" rel="noopener noreferrer" className="tt-btn tt-btn--wm" download>
                  ⬇ With Watermark
                </a>
              )}
              {result.music && (
                <a href={result.music} target="_blank" rel="noopener noreferrer" className="tt-btn tt-btn--audio" download>
                  🎵 Audio Only
                </a>
              )}
            </div>
          </div>
        )}

        <div className="tt-quick-feats">
          <div className="tt-qfeat">
            <strong>Save Before Expiry</strong>
            <span>TikTok Stories vanish in 24 hours. Save them before it's too late.</span>
          </div>
          <div className="tt-qfeat">
            <strong>No Watermark!</strong>
            <span>Download TikTok Stories in clean MP4 without any TT logo.</span>
          </div>
          <div className="tt-qfeat">
            <strong>HD Quality</strong>
            <span>Save TikTok Stories in the highest available resolution.</span>
          </div>
        </div>
      </section>

      {/* HOW TO */}
      <section className="tt-how-section">
        <div className="tt-container">
          <h2 className="tt-how-title">Download TikTok Stories Online</h2>
          <p className="tt-how-desc">
            Our free TikTok Stories downloader lets you save any TikTok Story before it disappears. Download in HD quality without watermark — works on Android, iPhone, and PC. No app or account required.
          </p>

          <p className="tt-italic-label">Here's how it's done:</p>
          <div className="tt-arrow">↓</div>

          <div className="tt-steps-card">
            <h3>How to download TikTok Stories without watermark?</h3>
            <div className="tt-step-item">
              <span className="tt-step-big-num">1</span>
              <div>
                <strong>Find a TikTok Story</strong>
                <p>Open TikTok and go to the profile of the account whose Story you want to save. Tap the Story to open it.</p>
              </div>
            </div>
            <div className="tt-step-item">
              <span className="tt-step-big-num">2</span>
              <div>
                <strong>Copy the Link</strong>
                <p>Tap the Share button and select "Copy link." The Story URL will be copied to your clipboard.</p>
              </div>
            </div>
            <div className="tt-step-item">
              <span className="tt-step-big-num">3</span>
              <div>
                <strong>Download the Story</strong>
                <p>Paste the link in the field above and click "Download." Your story will be ready in seconds — clean, HD, no watermark.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ICON FEATURES */}
      <section className="tt-icon-feats">
        <div className="tt-container">
          <div className="tt-icon-grid">
            <div className="tt-icon-card">
              <div className="tt-icon-svg">
                <svg viewBox="0 0 64 64" fill="none"><path d="M32 14C32 14 18 22 18 34C18 41.7 24.3 48 32 48C39.7 48 46 41.7 46 34C46 22 32 14 32 14Z" stroke="#5b3df5" strokeWidth="3"/><path d="M32 34V24" stroke="#5b3df5" strokeWidth="3" strokeLinecap="round"/></svg>
              </div>
              <p>Save TikTok Stories before they expire in 24 hours.</p>
            </div>
            <div className="tt-icon-card">
              <div className="tt-icon-svg">
                <svg viewBox="0 0 64 64" fill="none"><rect x="14" y="14" width="36" height="36" rx="4" stroke="#5b3df5" strokeWidth="3"/><path d="M40 20L44 24L36 32" stroke="#5b3df5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p>Download TikTok Stories for free in unlimited amount.</p>
            </div>
            <div className="tt-icon-card">
              <div className="tt-icon-svg">
                <svg viewBox="0 0 64 64" fill="none"><rect x="10" y="12" width="44" height="32" rx="3" stroke="#5b3df5" strokeWidth="3"/><path d="M26 28L30 32L38 22" stroke="#5b3df5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p>No account or username required — just paste and download.</p>
            </div>
            <div className="tt-icon-card">
              <div className="tt-icon-svg">
                <svg viewBox="0 0 64 64" fill="none"><path d="M32 14V36M22 26L32 36L42 26" stroke="#5b3df5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 46H50" stroke="#5b3df5" strokeWidth="3" strokeLinecap="round"/></svg>
              </div>
              <p>High-speed TikTok Story download in HD quality.</p>
            </div>
            <div className="tt-icon-card">
              <div className="tt-icon-svg">
                <svg viewBox="0 0 64 64" fill="none"><path d="M40 20H46V38" stroke="#5b3df5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M24 28H40V44C40 45.1 39.1 46 38 46H26C24.9 46 24 45.1 24 44V28Z" stroke="#5b3df5" strokeWidth="3"/><circle cx="34" cy="44" r="3" stroke="#5b3df5" strokeWidth="3"/><circle cx="46" cy="40" r="3" stroke="#5b3df5" strokeWidth="3"/></svg>
              </div>
              <p>Save TikTok Stories as MP4 video or MP3 audio.</p>
            </div>
            <div className="tt-icon-card">
              <div className="tt-icon-svg">
                <svg viewBox="0 0 64 64" fill="none"><rect x="10" y="16" width="44" height="28" rx="3" stroke="#5b3df5" strokeWidth="3"/><path d="M20 44H44M32 44V50M25 50H39" stroke="#5b3df5" strokeWidth="3" strokeLinecap="round"/></svg>
              </div>
              <p>Works on any browser — Chrome, Safari, Firefox, Edge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="tt-faq-section">
        <div className="tt-container">
          <h2 className="tt-faq-title">Frequently Asked Questions</h2>
          <div className="tt-faq-list">
            {FAQS.map((faq, i) => (
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

      {/* SEO */}
      <section className="tt-seo-section">
        <div className="tt-container">
          <h2>Download TikTok Stories Without Watermark — Free Online Tool</h2>
          <p>Our <strong>TikTok Stories downloader</strong> lets you save any Story in HD before it disappears. TikTok Stories are only available for 24 hours — our tool helps you keep them forever.</p>
          <p>Simply copy the TikTok Story link, paste it above, and click Download. Get the video in <strong>HD without watermark</strong>, with watermark, or audio-only MP3.</p>
          <p>No app installation needed. Works on Android, iPhone, Windows, and Mac. Free forever, no sign-up required.</p>
        </div>
      </section>
    </>
  );
}
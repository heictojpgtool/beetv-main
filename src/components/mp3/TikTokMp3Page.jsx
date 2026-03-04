"use client";

import { useState } from "react";
import "../downloader/downloader.css";

const FAQS = [
  {
    q: "How do I download TikTok audio as MP3?",
    a: "Copy the link of any TikTok video, paste it in the input field above, click Download, then select the 'Audio Only' button to save the MP3 file to your device."
  },
  {
    q: "Is the TikTok MP3 downloader free?",
    a: "Yes, completely free. No account, no payment, no limits. Convert and download as many TikTok videos to MP3 as you want."
  },
  {
    q: "What quality is the TikTok MP3 download?",
    a: "We provide the highest available audio quality from the original TikTok video. The audio is extracted directly from the source file."
  },
  {
    q: "Can I download TikTok MP3 on iPhone?",
    a: "Yes! Open Safari on your iPhone, paste the TikTok link above, click Download, then tap 'Audio Only'. The MP3 will save to your Files app."
  },
  {
    q: "How do I get the TikTok video link?",
    a: "Open TikTok, find the video, tap the Share button (arrow icon), then select 'Copy Link'. Now paste it in the field above."
  },
  {
    q: "Can I download audio from TikTok Live?",
    a: "TikTok Lives cannot be downloaded as they are streamed in real-time. Only recorded TikTok videos support audio/MP3 download."
  },
];

export default function TikTokMp3Page() {
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
    if (!trimmed) { setError("Please enter a TikTok video link."); return; }
    if (!trimmed.includes("tiktok.com")) { setError("Please enter a valid TikTok link."); return; }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const apiUrl = `https://www.tikwm.com/api/?url=${encodeURIComponent(trimmed)}&hd=1`;
      const res = await fetch(apiUrl);
      const json = await res.json();

      if (!json || json.code !== 0 || !json.data) {
        throw new Error(json?.msg || "Audio not found. Please check the link and try again.");
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
      <section className="tt-hero">
        <h1 className="tt-title">TikTok MP3 Downloader</h1>

        <div className="tt-box">
          <input
            type="text"
            placeholder="Insert a TikTok link to extract MP3"
            value={url}
            onChange={(e) => { setUrl(e.target.value); setError(""); setResult(null); }}
            onKeyDown={(e) => e.key === "Enter" && handleDownload()}
            className="tt-input"
          />
          <button className="tt-paste" onClick={handlePaste}>📋 Paste</button>
          <button className="tt-download" onClick={handleDownload} disabled={loading}>
            {loading ? "Loading..." : "Get MP3"}
          </button>
        </div>

        {error && <p className="tt-error">⚠ {error}</p>}
        {loading && <p className="tt-loading">⏳ Extracting audio...</p>}

        {result && (
          <div className="tt-result-card">
            <div className="tt-result-inner">
              {result.cover && (
                <div className="tt-thumb-wrap">
                  <img src={result.cover} alt="Video thumbnail" className="tt-thumb" />
                  <span className="tt-play-badge">🎵</span>
                </div>
              )}
              <div className="tt-result-meta">
                {result.author && <p className="tt-author">@{result.author}</p>}
                {result.title && <p className="tt-video-title">{result.title}</p>}
                <p className="tt-ready-text">✅ Audio ready! Click below to download MP3:</p>
              </div>
            </div>
            <div className="tt-links">
              {result.music && (
                <a href={result.music} target="_blank" rel="noopener noreferrer" className="tt-btn tt-btn--hd" download>
                  🎵 Download MP3
                </a>
              )}
              {result.hdVideo && (
                <a href={result.hdVideo} target="_blank" rel="noopener noreferrer" className="tt-btn tt-btn--wm" download>
                  ⬇ Download MP4 (No WM)
                </a>
              )}
            </div>
          </div>
        )}

        <div className="tt-quick-feats">
          <div className="tt-qfeat">
            <strong>TikTok to MP3</strong>
            <span>Extract and save audio from any TikTok video in seconds.</span>
          </div>
          <div className="tt-qfeat">
            <strong>High Quality Audio</strong>
            <span>Get the best available audio quality from the original source.</span>
          </div>
          <div className="tt-qfeat">
            <strong>Free & Unlimited</strong>
            <span>Convert as many TikTok videos to MP3 as you want — always free.</span>
          </div>
        </div>
      </section>

      <section className="tt-how-section">
        <div className="tt-container">
          <h2 className="tt-how-title">Download TikTok Audio as MP3 Online</h2>
          <p className="tt-how-desc">
            Our free TikTok MP3 downloader lets you extract and save audio from any TikTok video. Convert TikTok to MP3 in high quality — no app install, no account, completely free. Works on all devices.
          </p>

          <p className="tt-italic-label">Here's how it's done:</p>
          <div className="tt-arrow">↓</div>

          <div className="tt-steps-card">
            <h3>How to convert TikTok to MP3?</h3>
            <div className="tt-step-item">
              <span className="tt-step-big-num">1</span>
              <div>
                <strong>Find a TikTok Video</strong>
                <p>Open TikTok and find the video whose audio or music you want to save as MP3.</p>
              </div>
            </div>
            <div className="tt-step-item">
              <span className="tt-step-big-num">2</span>
              <div>
                <strong>Copy the Link</strong>
                <p>Tap the Share button and select "Copy link." The video URL will be copied to your clipboard.</p>
              </div>
            </div>
            <div className="tt-step-item">
              <span className="tt-step-big-num">3</span>
              <div>
                <strong>Download MP3</strong>
                <p>Paste the link above and click "Get MP3." Then tap the "Download MP3" button — the audio file will save instantly to your device.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tt-icon-feats">
        <div className="tt-container">
          <div className="tt-icon-grid">
            <div className="tt-icon-card">
              <div className="tt-icon-svg">
                <svg viewBox="0 0 64 64" fill="none"><path d="M40 20H46V38" stroke="#5b3df5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M24 28H40V44C40 45.1 39.1 46 38 46H26C24.9 46 24 45.1 24 44V28Z" stroke="#5b3df5" strokeWidth="3"/><circle cx="34" cy="44" r="3" stroke="#5b3df5" strokeWidth="3"/><circle cx="46" cy="40" r="3" stroke="#5b3df5" strokeWidth="3"/></svg>
              </div>
              <p>Convert any TikTok video to MP3 audio instantly.</p>
            </div>
            <div className="tt-icon-card">
              <div className="tt-icon-svg">
                <svg viewBox="0 0 64 64" fill="none"><rect x="14" y="14" width="36" height="36" rx="4" stroke="#5b3df5" strokeWidth="3"/><path d="M40 20L44 24L36 32" stroke="#5b3df5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p>Download TikTok audio for free, no limits.</p>
            </div>
            <div className="tt-icon-card">
              <div className="tt-icon-svg">
                <svg viewBox="0 0 64 64" fill="none"><rect x="10" y="12" width="44" height="32" rx="3" stroke="#5b3df5" strokeWidth="3"/><path d="M26 28L30 32L38 22" stroke="#5b3df5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p>No login required. Just paste the link and download.</p>
            </div>
            <div className="tt-icon-card">
              <div className="tt-icon-svg">
                <svg viewBox="0 0 64 64" fill="none"><path d="M32 14V36M22 26L32 36L42 26" stroke="#5b3df5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 46H50" stroke="#5b3df5" strokeWidth="3" strokeLinecap="round"/></svg>
              </div>
              <p>High-speed TikTok to MP3 conversion in seconds.</p>
            </div>
            <div className="tt-icon-card">
              <div className="tt-icon-svg">
                <svg viewBox="0 0 64 64" fill="none"><path d="M20 32C20 25.4 25.4 20 32 20C38.6 20 44 25.4 44 32C44 38.6 38.6 44 32 44" stroke="#5b3df5" strokeWidth="3" strokeLinecap="round"/><circle cx="14" cy="46" r="3" stroke="#5b3df5" strokeWidth="3"/><circle cx="32" cy="20" r="3" stroke="#5b3df5" strokeWidth="3"/></svg>
              </div>
              <p>Best audio quality extracted from original TikTok source.</p>
            </div>
            <div className="tt-icon-card">
              <div className="tt-icon-svg">
                <svg viewBox="0 0 64 64" fill="none"><rect x="10" y="16" width="44" height="28" rx="3" stroke="#5b3df5" strokeWidth="3"/><path d="M20 44H44M32 44V50M25 50H39" stroke="#5b3df5" strokeWidth="3" strokeLinecap="round"/></svg>
              </div>
              <p>Works on Android, iPhone, Windows, Mac — any browser.</p>
            </div>
          </div>
        </div>
      </section>

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

      <section className="tt-seo-section">
        <div className="tt-container">
          <h2>TikTok MP3 Downloader — Free TikTok to Audio Converter</h2>
          <p>Our <strong>TikTok MP3 downloader</strong> lets you extract and save audio from any TikTok video for free. Whether it's a trending sound, original music, or a voice clip — convert TikTok to MP3 in seconds.</p>
          <p>Just copy the TikTok video URL, paste it above, and click "Get MP3." No app installation, no account, no payment. Works on all devices and browsers.</p>
          <p>You can also download the full <strong>TikTok video in HD without watermark</strong> from the same page — making this the most complete TikTok downloader tool available.</p>
        </div>
      </section>
    </>
  );
}
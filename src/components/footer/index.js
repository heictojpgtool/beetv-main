"use client";

import "./footer.css";

export default function Footer({ lang = "en" }) {
  const base = lang === "en" ? "" : `/${lang}`;

  return (
    <footer className="ft-footer">

      <div className="ft-links-row">
        <a href={`${base}/contact`} className="ft-link">Contacts</a>
        <a href={lang === "en" ? "/" : `/${lang}`} className="ft-link">TikTok Viewer</a>
      </div>

      <div className="ft-links-row">
        <a href="https://twittervideodownload.com.in/" target="_blank" rel="noopener noreferrer" className="ft-link">
          Twitter Video Downloader
        </a>
      </div>

      <div className="ft-disclaimer">
        <p>We are not affiliated with TikTok, Douyin or Bytedance.</p>
        <p>Created by our team — video downloading experts since 2018.</p>
      </div>

      <div className="ft-legal-row">
        <span className="ft-legal-label">Legal</span>
        <span className="ft-legal-sep">|</span>
        <a href={`${base}/privacy-policy`} className="ft-legal-link">Privacy Policy</a>
        <a href={`${base}/terms`} className="ft-legal-link">Terms of Use</a>
        <a href={`${base}/disclaimer`} className="ft-legal-link">Disclaimer</a>
        <a href={`${base}/contact`} className="ft-legal-link">Contact Us</a>
        <a href={`${base}/dmca`} className="ft-legal-link">DMCA</a>
      </div>

      <div className="ft-copy">
        Copyright 2018–{new Date().getFullYear()}
      </div>

    </footer>
  );
}
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./footer.module.css";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className={styles.footer}>

        {/* TOP GRID */}
        <div className={styles.footerTop}>

          {/* BRAND */}
          <div className={styles.footerBrand}>
            <div className={styles.logo}>🐝</div>
            <h3>BeeTV — Free Streaming App</h3>
            <p>
              BeeTV is the #1 free streaming app for Android and FireStick.
              Watch HD movies, TV shows, and live channels — no subscription,
              no registration, completely free.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className={styles.footerLinks}>
            <h4>Quick Links</h4>
            <Link href="#download">Download APK</Link>
            <Link href="#about">About BeeTV</Link>
            <Link href="#install">Install Guide</Link>
            <Link href="#devices">Supported Devices</Link>
            <Link href="#faq">FAQ</Link>
          </div>

          {/* LEGAL LINKS */}
          <div className={styles.footerLinks}>
            <h4>Legal</h4>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/dmca">DMCA</Link>
          </div>

          {/* SUPPORTED PLATFORMS */}
          <div className={styles.footerPlatforms}>
            <h4>Supported Platforms</h4>
            <div className={styles.platformTags}>
              <span>📱 Android</span>
              <span>🔥 FireStick</span>
              <span>📺 Fire TV</span>
              <span>🖥️ Android TV</span>
              <span>📟 Tablet</span>
              <span>🎮 Nvidia Shield</span>
            </div>
          </div>

        </div>

        {/* DISCLAIMER */}
        <div className={styles.footerDisclaimer}>
          <strong>⚠ Disclaimer:</strong> BeeTV is an independent third-party application
          and is not affiliated with, endorsed by, or connected to any official streaming
          service, broadcaster, or content provider. beetv.click provides the APK purely
          for informational and accessibility purposes. Users are solely responsible for
          ensuring their use of the application complies with the laws and regulations
          applicable in their respective countries or regions.
        </div>

        {/* BOTTOM BAR */}
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} <strong>beetv.click</strong> — All Rights Reserved</p>
          <p className={styles.made}>
            Made with <span>♥</span> for cord-cutters worldwide
          </p>
        </div>

      </footer>

      {/* SCROLL TO TOP */}
      {showScroll && (
        <button
          className={styles.scrollTop}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
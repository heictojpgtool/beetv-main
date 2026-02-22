"use client";

import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* LEFT — LOGO */}
        <Link href="/" className={styles.brand}>
          <div className={styles.logo}>
            <span>🐝</span>
            <i className={styles.downloadIcon}>⬇</i>
          </div>
          <div className={styles.brandText}>
            <h1>BeeTV <span>APK</span></h1>
            <p>Free Movies &amp; TV Shows App</p>
          </div>
        </Link>

        {/* RIGHT — NAV LINKS */}
        <nav className={styles.nav}>
          <Link href="#about" className={styles.navLink}>About</Link>
          <Link href="#install" className={styles.navLink}>Install Guide</Link>
          <Link href="#devices" className={styles.navLink}>Devices</Link>
          <Link href="#faq" className={styles.navLink}>FAQ</Link>
          <Link href="#download" className={styles.navCta}>⬇ Download APK</Link>
        </nav>

      </div>
    </header>
  );
}
import Link from "next/link";
import styles from "../legal.module.css";

export const metadata = {
  title: "DMCA Policy — TikTok Video Downloader | tiktokvideodownload.com.pk",
  description: "DMCA takedown policy for tiktokvideodownload.com.pk. Learn how to submit a copyright infringement notice regarding our TikTok downloader service.",
};

export default function DMCA() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <Link href="/" className={styles.backLink}>← Back to Home</Link>

        <div className={styles.hero}>
          <div className={styles.badge}>🛡 Copyright</div>
          <h1 className={styles.title}>DMCA <span>Policy</span></h1>
          <p className={styles.meta}>Last updated: January 1, 2025 &nbsp;·&nbsp; tiktokvideodownload.com.pk</p>
        </div>

        <div className={styles.box}>
          <strong>Important:</strong> tiktokvideodownload.com.pk does not host or store any TikTok
          videos on our servers. We only provide a tool that fetches publicly available video links
          directly from TikTok's servers. If you have a copyright concern about a specific TikTok
          video, please contact TikTok directly.
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Our DMCA Commitment</h2>
          <p className={styles.text}>
            tiktokvideodownload.com.pk respects intellectual property rights and complies with the
            Digital Millennium Copyright Act (DMCA). We respond promptly to valid takedown notices
            submitted in accordance with DMCA requirements.
          </p>
          <p className={styles.text}>
            If you believe that any content published on our website — including text, images, or
            guides — infringes upon your copyright, please submit a notice using the process below.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. What We Can and Cannot Remove</h2>
          <p className={styles.text}>We can take action on:</p>
          <ul className={styles.list}>
            <li>Original written content on tiktokvideodownload.com.pk that infringes your copyright</li>
            <li>Images or graphics on our website that you own the copyright to</li>
          </ul>
          <p className={styles.text}>We <strong>cannot</strong> remove:</p>
          <ul className={styles.list}>
            <li>TikTok videos — these are hosted on TikTok's own servers, not ours</li>
            <li>Content from third-party CDNs or servers we do not own</li>
            <li>Search engine results (contact Google, Bing, etc. directly)</li>
          </ul>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. How to Submit a DMCA Notice</h2>
          <p className={styles.text}>
            Your DMCA notice must include all of the following per 17 U.S.C. § 512(c)(3):
          </p>
          <ul className={styles.list}>
            <li>Your full legal name and contact information (address, phone, email)</li>
            <li>A description of the copyrighted work you claim has been infringed</li>
            <li>The specific URL(s) on tiktokvideodownload.com.pk where the content is located</li>
            <li>A good faith statement that the use is not authorized by the copyright owner</li>
            <li>A statement under penalty of perjury that the information is accurate</li>
            <li>Your physical or electronic signature</li>
          </ul>
          <p className={styles.text}>
            Send your DMCA notice via our <Link href="/contact">Contact page</Link> with the
            subject "DMCA Takedown Request". We aim to respond within 5 business days.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Counter-Notice Procedure</h2>
          <p className={styles.text}>
            If you believe content was wrongly removed, you may submit a counter-notice including:
          </p>
          <ul className={styles.list}>
            <li>Your name, address, phone number, and email</li>
            <li>Identification of the removed material and its previous location</li>
            <li>A good faith belief statement that the removal was a mistake</li>
            <li>Consent to jurisdiction of the relevant Federal District Court</li>
            <li>Your physical or electronic signature</li>
          </ul>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Contact for DMCA Notices</h2>
          <p className={styles.text}>
            All DMCA communications must be submitted through our{" "}
            <Link href="/contact">Contact page</Link> using "DMCA Takedown Request" as the subject.
          </p>
        </div>

      </div>
    </div>
  );
}
import Link from "next/link";
import styles from "../legal.module.css";

export const metadata = {
  title: "Terms of Use — TikTok Video Downloader | tiktokvideodownload.com.pk",
  description: "Read the Terms of Use for tiktokvideodownload.com.pk. Understand the rules and conditions for using our free TikTok video downloader tool.",
};

export default function TermsOfUse() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <Link href="/" className={styles.backLink}>← Back to Home</Link>

        <div className={styles.hero}>
          <div className={styles.badge}>📋 Legal</div>
          <h1 className={styles.title}>Terms of <span>Use</span></h1>
          <p className={styles.meta}>Last updated: January 1, 2025 &nbsp;·&nbsp; tiktokvideodownload.com.pk</p>
        </div>

        <div className={styles.box}>
          <strong>Please read carefully:</strong> By accessing tiktokvideodownload.com.pk or using
          our TikTok video downloader tool, you agree to be bound by the terms below.
          If you do not agree, please discontinue use immediately.
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
          <p className={styles.text}>
            These Terms govern your access to and use of tiktokvideodownload.com.pk.
            By using this website, you confirm that you are at least 13 years of age and agree to these terms.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Nature of the Service</h2>
          <p className={styles.text}>
            tiktokvideodownload.com.pk is a free online tool that helps users download publicly
            available TikTok videos in MP4 and MP3 format without watermark. We are an independent
            third party — we do not host, store, or own any TikTok video content.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Permitted Use</h2>
          <ul className={styles.list}>
            <li>Downloading publicly available TikTok videos for personal, offline use</li>
            <li>Converting TikTok videos to MP3 for personal listening</li>
            <li>Reading informational content about TikTok downloading</li>
          </ul>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Prohibited Activities</h2>
          <ul className={styles.list}>
            <li>Redistributing downloaded TikTok videos commercially without creator's permission</li>
            <li>Using our tool to download private or restricted TikTok content</li>
            <li>Using automated bots or scrapers to mass-use our service</li>
            <li>Attempting to hack or reverse-engineer any part of our website</li>
            <li>Using downloaded content in violation of TikTok's Terms or copyright law</li>
          </ul>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Copyright Responsibility</h2>
          <p className={styles.text}>
            All TikTok videos belong to their respective creators. Our tool is for personal use only.
            Redistributing or monetizing downloaded content without permission is prohibited.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Disclaimer of Warranties</h2>
          <p className={styles.text}>
            tiktokvideodownload.com.pk is provided <strong>"as is"</strong> without warranties.
            Video availability depends on TikTok's servers and may change without notice.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Limitation of Liability</h2>
          <p className={styles.text}>
            To the fullest extent permitted by law, we shall not be liable for any damages arising
            from your use of this service or how you use downloaded content.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Changes to Terms</h2>
          <p className={styles.text}>
            We may modify these Terms at any time. Changes will be posted with an updated date.
            Continued use constitutes acceptance of updated terms.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Contact</h2>
          <p className={styles.text}>
            For questions, please visit our <Link href="/contact">Contact page</Link>.
          </p>
        </div>

      </div>
    </div>
  );
}
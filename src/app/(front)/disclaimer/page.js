import Link from "next/link";
import styles from "../legal.module.css";

export const metadata = {
  title: "Disclaimer — TikTok Video Downloader | tiktokvideodownload.com.pk",
  description: "Read the full disclaimer for tiktokvideodownload.com.pk. We are an independent TikTok downloader tool and not affiliated with TikTok, Douyin, or Bytedance.",
};

export default function Disclaimer() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <Link href="/" className={styles.backLink}>← Back to Home</Link>

        <div className={styles.hero}>
          <div className={styles.badge}>⚠ Legal</div>
          <h1 className={styles.title}>Dis<span>claimer</span></h1>
          <p className={styles.meta}>Last updated: January 1, 2025 &nbsp;·&nbsp; tiktokvideodownload.com.pk</p>
        </div>

        <div className={styles.box}>
          <strong>Important Notice:</strong> tiktokvideodownload.com.pk is an independent, unofficial
          website. We are not affiliated with, endorsed by, or in any way connected to TikTok,
          Douyin, Bytedance, or any of their subsidiaries or partners.
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Website Purpose</h2>
          <p className={styles.text}>
            tiktokvideodownload.com.pk is a free online tool that allows users to download publicly
            available TikTok videos without watermark. Our service helps users save TikTok content
            in MP4 and MP3 formats for personal, offline use. We do not develop, maintain, or own
            TikTok or any related application.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. No Affiliation with TikTok</h2>
          <p className={styles.text}>
            tiktokvideodownload.com.pk has absolutely no affiliation with:
          </p>
          <ul className={styles.list}>
            <li>TikTok, Douyin, or Bytedance Ltd.</li>
            <li>Any official TikTok apps, services, or platforms</li>
            <li>Any social media company or content distribution platform</li>
            <li>Any government body or regulatory authority related to TikTok</li>
          </ul>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. User Responsibility</h2>
          <p className={styles.text}>
            Our tool only accesses publicly available TikTok videos. Users are solely responsible
            for ensuring that their use of downloaded content complies with TikTok's Terms of Service,
            copyright law, and all applicable local laws and regulations.
          </p>
          <p className={styles.text}>
            Downloading TikTok videos for personal offline use is generally accepted, but redistributing,
            republishing, or using downloaded content for commercial purposes without the creator's
            permission may violate copyright law. Always respect content creators' rights.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Accuracy of Information</h2>
          <p className={styles.text}>
            While we make every effort to ensure our tool works correctly, we make no warranties
            regarding the completeness, accuracy, or reliability of our service. Video availability
            depends on TikTok's servers and may change without notice.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Contact</h2>
          <p className={styles.text}>
            If you have concerns or questions about this disclaimer, please use our{" "}
            <Link href="/contact">Contact page</Link> to get in touch with us.
          </p>
        </div>

      </div>
    </div>
  );
}
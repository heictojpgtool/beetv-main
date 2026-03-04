import Link from "next/link";
import styles from "../legal.module.css";

export const metadata = {
  title: "Privacy Policy — TikTok Video Downloader | tiktokvideodownload.com.pk",
  description: "Read the Privacy Policy for tiktokvideodownload.com.pk. Learn how we handle your data when you use our free TikTok video downloader tool.",
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <Link href="/" className={styles.backLink}>← Back to Home</Link>

        <div className={styles.hero}>
          <div className={styles.badge}>📄 Legal</div>
          <h1 className={styles.title}>Privacy <span>Policy</span></h1>
          <p className={styles.meta}>Last updated: January 1, 2025 &nbsp;·&nbsp; tiktokvideodownload.com.pk</p>
        </div>

        <div className={styles.box}>
          <strong>Summary:</strong> tiktokvideodownload.com.pk does not collect personal data,
          does not require registration, and does not sell any user information to third parties.
          This policy explains exactly what we do and do not collect when you use our tool.
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Who We Are</h2>
          <p className={styles.text}>
            tiktokvideodownload.com.pk is a free online tool that allows users to download TikTok
            videos without watermark. We are an independent third-party service and are not affiliated
            with TikTok, Douyin, or Bytedance. When we say "we", "us", or "our", we refer to the
            operators of tiktokvideodownload.com.pk.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
          <p className={styles.text}>
            We do not require users to create accounts or submit personal information to use our
            TikTok downloader. However, our server and third-party analytics may automatically
            collect the following non-personal data:
          </p>
          <ul className={styles.list}>
            <li>Your device's IP address (anonymized)</li>
            <li>Browser type and version</li>
            <li>Operating system information</li>
            <li>Pages visited and time spent on the site</li>
            <li>Referring URL (the page that brought you here)</li>
            <li>TikTok URLs submitted for download (processed in real-time, not stored)</li>
          </ul>
          <p className={styles.text}>
            TikTok video URLs you submit are used only to fetch the download link in real-time
            and are not stored on our servers permanently.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Cookies and Tracking</h2>
          <p className={styles.text}>
            tiktokvideodownload.com.pk may use cookies to enhance user experience and collect
            analytical data:
          </p>
          <ul className={styles.list}>
            <li><strong>Essential Cookies:</strong> Required for the website to function correctly.</li>
            <li><strong>Analytics Cookies:</strong> Used by Google Analytics to understand visitor behavior in aggregate.</li>
            <li><strong>Preference Cookies:</strong> Remember your language preference.</li>
          </ul>
          <p className={styles.text}>
            You can disable non-essential cookies at any time through your browser settings.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. How We Use Your Information</h2>
          <p className={styles.text}>
            The limited, anonymized data we collect is used solely for:
          </p>
          <ul className={styles.list}>
            <li>Processing your TikTok video download requests in real-time</li>
            <li>Monitoring and improving website performance</li>
            <li>Understanding which features are most useful to visitors</li>
            <li>Detecting and preventing spam or malicious traffic</li>
          </ul>
          <p className={styles.text}>
            We do <strong>not</strong> use your data for targeted advertising, profiling, or any
            commercial purpose beyond operating this free tool.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Third-Party Services</h2>
          <p className={styles.text}>
            Our website may use the following third-party services:
          </p>
          <ul className={styles.list}>
            <li><strong>Google Analytics:</strong> For website traffic analysis. Data is anonymized.</li>
            <li><strong>Cloudflare:</strong> For website security, performance, and DDoS protection.</li>
            <li><strong>TikWM API:</strong> Used to fetch TikTok video download links. No personal data is shared.</li>
          </ul>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Children's Privacy</h2>
          <p className={styles.text}>
            tiktokvideodownload.com.pk is not directed at children under the age of 13. We do not
            knowingly collect any personal information from children.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Data Security</h2>
          <p className={styles.text}>
            Our site is served over HTTPS with SSL encryption. TikTok URLs submitted for download
            are processed in real-time and are not permanently stored on our servers.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Contact Us</h2>
          <p className={styles.text}>
            If you have any questions about this Privacy Policy, please reach out via our{" "}
            <Link href="/contact">Contact page</Link>.
          </p>
        </div>

      </div>
    </div>
  );
}
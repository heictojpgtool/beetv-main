import Link from "next/link";
import styles from "../legal.module.css";

export const metadata = {
  title: "Privacy Policy — BeeTV APK | beetv.click",
  description: "Read BeeTV's Privacy Policy to understand how we collect, use, and protect your data when you visit beetv.click or download our APK.",
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <Link href="/" className={styles.backLink}>← Back to Home</Link>

        <div className={styles.hero}>
          <div className={styles.badge}>📄 Legal</div>
          <h1 className={styles.title}>Privacy <span>Policy</span></h1>
          <p className={styles.meta}>Last updated: January 1, 2025 &nbsp;·&nbsp; beetv.click</p>
        </div>

        <div className={styles.box}>
          <strong>Summary:</strong> beetv.click does not collect personal data, does not require registration,
          and does not sell any user information to third parties. This policy explains exactly what we do
          and do not collect when you use our website.
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Who We Are</h2>
          <p className={styles.text}>
            beetv.click is a website that provides information about the BeeTV application and offers
            a direct APK download link. We are an independent third-party site and are not affiliated
            with any official streaming service or app store. When we say "we", "us", or "our", we are
            referring to the operators of beetv.click.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
          <p className={styles.text}>
            We do not require users to create accounts or submit any personal information to access
            our website or download the APK. However, like virtually all websites, our server and
            third-party analytics tools may automatically collect the following non-personal data:
          </p>
          <ul className={styles.list}>
            <li>Your device's IP address (anonymized)</li>
            <li>Browser type and version</li>
            <li>Operating system information</li>
            <li>Pages visited and time spent on the site</li>
            <li>Referring URL (the page that brought you here)</li>
            <li>Download events (APK file download count)</li>
          </ul>
          <p className={styles.text}>
            This data is collected in aggregate form only and cannot be used to personally identify you.
            It helps us understand how users interact with our site so we can improve the experience.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Cookies and Tracking</h2>
          <p className={styles.text}>
            beetv.click may use cookies and similar tracking technologies to enhance user experience
            and collect analytical data. The types of cookies we use include:
          </p>
          <ul className={styles.list}>
            <li><strong>Essential Cookies:</strong> Required for the website to function correctly. These cannot be disabled.</li>
            <li><strong>Analytics Cookies:</strong> Used by tools like Google Analytics to understand visitor behavior in aggregate.</li>
            <li><strong>Preference Cookies:</strong> Remember your settings such as language preference.</li>
          </ul>
          <p className={styles.text}>
            You can disable non-essential cookies at any time through your browser settings. Please note
            that disabling cookies may affect some functionality of the website.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. How We Use Your Information</h2>
          <p className={styles.text}>
            The limited, anonymized data we collect is used solely for the following purposes:
          </p>
          <ul className={styles.list}>
            <li>To monitor and improve website performance and uptime</li>
            <li>To understand which content is most useful to our visitors</li>
            <li>To detect and prevent spam, abuse, or malicious traffic</li>
            <li>To generate aggregate usage statistics (e.g., total download counts)</li>
          </ul>
          <p className={styles.text}>
            We do <strong>not</strong> use your data for targeted advertising, profiling, or any
            commercial purpose beyond operating and improving this website.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Third-Party Services</h2>
          <p className={styles.text}>
            Our website may use the following third-party services which have their own privacy policies:
          </p>
          <ul className={styles.list}>
            <li><strong>Google Analytics:</strong> For website traffic analysis. Data is anonymized.</li>
            <li><strong>Cloudflare:</strong> For website security, performance, and DDoS protection.</li>
            <li><strong>Google AdSense (if applicable):</strong> May serve contextual advertisements based on page content.</li>
          </ul>
          <p className={styles.text}>
            We encourage you to review the privacy policies of these third-party providers to understand
            how they handle data.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Children's Privacy</h2>
          <p className={styles.text}>
            beetv.click is not directed at children under the age of 13. We do not knowingly collect
            any personal information from children. If you believe a child has provided us with personal
            information, please contact us and we will promptly delete it.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Data Security</h2>
          <p className={styles.text}>
            We implement industry-standard security measures to protect the integrity of our website
            and any data that passes through it. Our site is served over HTTPS with SSL encryption.
            However, no method of internet transmission is 100% secure and we cannot guarantee
            absolute security.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Changes to This Policy</h2>
          <p className={styles.text}>
            We may update this Privacy Policy from time to time. Any changes will be reflected on this
            page with an updated "Last updated" date. We encourage you to review this policy periodically.
            Continued use of the website after changes are posted constitutes your acceptance of the
            updated policy.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Contact Us</h2>
          <p className={styles.text}>
            If you have any questions or concerns about this Privacy Policy, please reach out to us
            through our <Link href="/contact">Contact page</Link>.
          </p>
        </div>

      </div>
    </div>
  );
}
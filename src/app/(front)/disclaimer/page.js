import Link from "next/link";
import styles from "../legal.module.css";

export const metadata = {
  title: "Disclaimer — BeeTV APK | beetv.click",
  description: "Read the full disclaimer for beetv.click. We are an independent third-party site and not affiliated with any official streaming platform or content provider.",
};

export default function Disclaimer() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <Link href="/" className={styles.backLink}>← Back to Home</Link>

        <div className={styles.hero}>
          <div className={styles.badge}>⚠ Legal</div>
          <h1 className={styles.title}>Dis<span>claimer</span></h1>
          <p className={styles.meta}>Last updated: January 1, 2025 &nbsp;·&nbsp; beetv.click</p>
        </div>

        <div className={styles.box}>
          <strong>Important Notice:</strong> beetv.click is an independent, unofficial website.
          We are not affiliated with, endorsed by, or in any way connected to the BeeTV development
          team, Amazon, Google, Netflix, or any other official streaming service or content provider.
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Website Purpose</h2>
          <p className={styles.text}>
            beetv.click exists solely to provide users with information about the BeeTV application
            and to offer a convenient, safe download link for the BeeTV APK file. Our website is
            informational in nature. We do not develop, maintain, or own the BeeTV application —
            we simply host a copy of the publicly available APK for user convenience.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. No Affiliation with Official Services</h2>
          <p className={styles.text}>
            BeeTV is a third-party application that aggregates streaming links from publicly
            accessible online sources. beetv.click has absolutely no affiliation with:
          </p>
          <ul className={styles.list}>
            <li>Netflix, Disney+, HBO Max, Amazon Prime Video, or any other paid streaming service</li>
            <li>Amazon, Google, or Apple and their respective app distribution platforms</li>
            <li>Any television network, film studio, or content production company</li>
            <li>The original BeeTV development team or any official BeeTV entity</li>
          </ul>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Content Responsibility</h2>
          <p className={styles.text}>
            beetv.click does not host, upload, distribute, or control any video, audio, or media
            content accessible through the BeeTV application. All streaming content available within
            BeeTV is sourced from third-party servers that are entirely outside our control.
          </p>
          <p className={styles.text}>
            We bear no responsibility for the nature, legality, accuracy, or availability of any
            content accessed through the BeeTV app. Users access all streaming content entirely
            at their own discretion and risk.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Legal Compliance — User Responsibility</h2>
          <p className={styles.text}>
            The legality of streaming certain content varies by country and jurisdiction. It is the
            sole responsibility of each user to ensure that their use of the BeeTV application
            complies with all applicable local, national, and international laws and regulations.
          </p>
          <p className={styles.text}>
            We strongly recommend using a reputable VPN service to protect your privacy while
            streaming and to comply with the digital media laws of your region. beetv.click
            accepts no liability for any legal consequences arising from a user's streaming activity.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. APK File Disclaimer</h2>
          <p className={styles.text}>
            The BeeTV APK file offered for download on beetv.click is scanned and verified to be
            free of malware and harmful code at the time of publication. However, we cannot
            guarantee the complete safety of any software for all devices and configurations.
            Users download and install the APK entirely at their own risk.
          </p>
          <p className={styles.text}>
            We always recommend installing from our official link only, keeping your device's security
            software active, and re-disabling "Unknown Sources" on your device after installation.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Accuracy of Information</h2>
          <p className={styles.text}>
            While we make every effort to ensure the information on beetv.click is accurate and
            up to date, we make no warranties — express or implied — regarding the completeness,
            accuracy, reliability, or suitability of any information published on this website.
            App features, version numbers, and compatibility details may change at any time without notice.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Contact</h2>
          <p className={styles.text}>
            If you have concerns or questions about this disclaimer, please use our{" "}
            <Link href="/contact">Contact page</Link> to get in touch with us.
          </p>
        </div>

      </div>
    </div>
  );
}
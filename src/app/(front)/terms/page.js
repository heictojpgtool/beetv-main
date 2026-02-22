import Link from "next/link";
import styles from "../legal.module.css";

export const metadata = {
  title: "Terms of Use — BeeTV APK | beetv.click",
  description: "Read the Terms of Use for beetv.click. Understand the rules, limitations, and conditions for using our website and downloading the BeeTV APK.",
};

export default function TermsOfUse() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <Link href="/" className={styles.backLink}>← Back to Home</Link>

        <div className={styles.hero}>
          <div className={styles.badge}>📋 Legal</div>
          <h1 className={styles.title}>Terms of <span>Use</span></h1>
          <p className={styles.meta}>Last updated: January 1, 2025 &nbsp;·&nbsp; beetv.click</p>
        </div>

        <div className={styles.box}>
          <strong>Please read carefully:</strong> By accessing beetv.click or downloading the BeeTV APK
          from our website, you agree to be bound by the terms and conditions outlined on this page.
          If you do not agree, please discontinue use of this website immediately.
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
          <p className={styles.text}>
            These Terms of Use govern your access to and use of the beetv.click website, including
            any content, functionality, and services offered on or through the site. By using this
            website, you confirm that you are at least 18 years of age, or that you are accessing
            the site under the supervision of a parent or legal guardian who agrees to these terms.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Nature of the Website</h2>
          <p className={styles.text}>
            beetv.click is an informational website that provides a download link for the BeeTV
            application APK file and educational content about how the app works. We are an
            independent third party. We do not host, own, or control any streaming content
            accessible through the BeeTV application itself.
          </p>
          <p className={styles.text}>
            The BeeTV app aggregates links from publicly accessible online sources. beetv.click
            has no control over the availability, quality, or legality of content streamed through
            the BeeTV application on any given source.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Permitted Use</h2>
          <p className={styles.text}>You are permitted to use beetv.click for the following purposes:</p>
          <ul className={styles.list}>
            <li>Downloading the BeeTV APK file for personal, non-commercial use</li>
            <li>Reading informational content about the BeeTV application</li>
            <li>Accessing installation guides and FAQ content for your own reference</li>
          </ul>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Prohibited Activities</h2>
          <p className={styles.text}>You agree not to engage in any of the following activities:</p>
          <ul className={styles.list}>
            <li>Redistributing the APK file hosted on our server for commercial gain</li>
            <li>Using our website to distribute malware, spam, or harmful content</li>
            <li>Attempting to hack, scrape, or reverse-engineer any part of our website</li>
            <li>Misrepresenting our website as an official affiliate of any streaming service</li>
            <li>Using automated bots or scrapers to mass-download content from our servers</li>
          </ul>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Disclaimer of Warranties</h2>
          <p className={styles.text}>
            beetv.click and the BeeTV APK file are provided on an <strong>"as is" and "as available"
            basis</strong> without warranties of any kind, either express or implied. We do not warrant
            that the website will be uninterrupted, error-free, or free of viruses. You download
            and install the APK at your own risk.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Limitation of Liability</h2>
          <p className={styles.text}>
            To the fullest extent permitted by applicable law, beetv.click and its operators shall
            not be liable for any indirect, incidental, special, consequential, or punitive damages
            arising out of your use of or inability to use the website or the BeeTV application,
            including but not limited to loss of data, device damage, or legal consequences
            resulting from the streaming of content in jurisdictions where it may be restricted.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Intellectual Property</h2>
          <p className={styles.text}>
            All original content on beetv.click — including text, graphics, logos, and layout — is
            the property of beetv.click and is protected by applicable intellectual property laws.
            The BeeTV application itself belongs to its respective developers and we make no
            claim of ownership over it.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Changes to Terms</h2>
          <p className={styles.text}>
            We reserve the right to modify these Terms of Use at any time. Changes will be posted
            on this page with an updated date. Your continued use of the website following any
            changes constitutes acceptance of the new terms.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Contact</h2>
          <p className={styles.text}>
            For questions about these Terms, please visit our <Link href="/contact">Contact page</Link>.
          </p>
        </div>

      </div>
    </div>
  );
}
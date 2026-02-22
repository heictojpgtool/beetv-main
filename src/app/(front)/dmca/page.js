import Link from "next/link";
import styles from "../legal.module.css";

export const metadata = {
  title: "DMCA Policy — BeeTV APK | beetv.click",
  description: "DMCA takedown policy for beetv.click. Learn how to submit a copyright infringement notice and how we handle DMCA requests.",
};

export default function DMCA() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <Link href="/" className={styles.backLink}>← Back to Home</Link>

        <div className={styles.hero}>
          <div className={styles.badge}>🛡 Copyright</div>
          <h1 className={styles.title}>DMCA <span>Policy</span></h1>
          <p className={styles.meta}>Last updated: January 1, 2025 &nbsp;·&nbsp; beetv.click</p>
        </div>

        <div className={styles.box}>
          <strong>Important:</strong> beetv.click does not host, store, or distribute any copyrighted
          video or audio content. We only host the BeeTV APK file. If you have a copyright concern
          regarding content accessible through the BeeTV app itself, you must contact the respective
          streaming sources directly.
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Our DMCA Commitment</h2>
          <p className={styles.text}>
            beetv.click respects the intellectual property rights of others and complies with the
            Digital Millennium Copyright Act (DMCA) and other applicable copyright laws. We take
            copyright infringement seriously and respond promptly to valid takedown notices submitted
            in accordance with the DMCA.
          </p>
          <p className={styles.text}>
            If you believe that any content published on beetv.click — including text, images,
            guides, or the APK file — infringes upon your copyright, please submit a notice to us
            using the process described below.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. What We Can and Cannot Remove</h2>
          <p className={styles.text}>
            beetv.click can take action on the following types of content upon receiving a valid
            DMCA notice:
          </p>
          <ul className={styles.list}>
            <li>Original written content on beetv.click that infringes your copyright</li>
            <li>Images or graphics on beetv.click that you own the copyright to</li>
            <li>The APK file, if you are the legitimate copyright holder of the BeeTV application</li>
          </ul>
          <p className={styles.text}>
            beetv.click <strong>cannot</strong> remove the following, as they are outside our control:
          </p>
          <ul className={styles.list}>
            <li>Streaming content accessible through the BeeTV application (contact those source servers directly)</li>
            <li>Content hosted on third-party CDNs or servers we do not own or operate</li>
            <li>Links or search results on Google, Bing, or other search engines</li>
          </ul>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. How to Submit a DMCA Takedown Notice</h2>
          <p className={styles.text}>
            To submit a valid DMCA takedown notice, your request must include all of the following
            information as required by 17 U.S.C. § 512(c)(3):
          </p>
          <ul className={styles.list}>
            <li>Your full legal name and contact information (address, phone number, email)</li>
            <li>A description of the copyrighted work you claim has been infringed</li>
            <li>The specific URL(s) on beetv.click where the allegedly infringing content is located</li>
            <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner, its agent, or the law</li>
            <li>A statement made under penalty of perjury that the information in your notice is accurate and that you are the copyright owner or authorized to act on their behalf</li>
            <li>Your physical or electronic signature</li>
          </ul>
          <p className={styles.text}>
            Notices that are incomplete or do not meet these requirements will not be processed.
            Please send your DMCA notice via our <Link href="/contact">Contact page</Link> with the
            subject "DMCA Takedown Request".
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Counter-Notice Procedure</h2>
          <p className={styles.text}>
            If you believe that content we removed in response to a DMCA notice was not infringing,
            or that you have the right to use that content, you may submit a counter-notice. A valid
            counter-notice must include:
          </p>
          <ul className={styles.list}>
            <li>Your name, address, phone number, and email address</li>
            <li>Identification of the material that was removed and the location where it appeared before removal</li>
            <li>A statement under penalty of perjury that you have a good faith belief the material was removed or disabled as a result of mistake or misidentification</li>
            <li>A statement consenting to the jurisdiction of the Federal District Court for the judicial district in which your address is located</li>
            <li>Your physical or electronic signature</li>
          </ul>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Repeat Infringers</h2>
          <p className={styles.text}>
            It is our policy to terminate, in appropriate circumstances, the access of users who are
            repeat infringers of intellectual property rights. We reserve the right to block access
            to any user or IP address that repeatedly submits content that infringes copyright.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Good Faith &amp; Abuse</h2>
          <p className={styles.text}>
            Please be aware that under Section 512(f) of the DMCA, any person who knowingly
            misrepresents that material is infringing may be subject to liability for damages.
            We reserve the right to seek damages from parties who submit fraudulent or bad-faith
            DMCA notices.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Contact for DMCA Notices</h2>
          <p className={styles.text}>
            All DMCA-related communications must be submitted through our{" "}
            <Link href="/contact">Contact page</Link>. Please use "DMCA Takedown Request" as your
            subject line to ensure your notice is routed to the correct team member for review.
            We aim to respond to all valid notices within 5 business days.
          </p>
        </div>

      </div>
    </div>
  );
}
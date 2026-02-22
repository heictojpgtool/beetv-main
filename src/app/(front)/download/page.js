import Link from "next/link";
import styles from "./download.module.css";

export const metadata = {
  title: "Download BeeTV APK Download Latest Version 2026  ",
  description: "Download BeeTV APK latest version for Android and FireStick. Free, safe, no registration. Get the official BeeTV APK 2025 with HD streaming support.",
};

export default function DownloadPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <div className={styles.hero}>
          <div className={styles.badge}>🐝 Official Download</div>
          <h1 className={styles.title}>
            Download <span>BeeTV APK</span>
          </h1>
          <p className={styles.subtitle}>
            Latest version — Free, safe, and verified. No registration required.
          </p>
        </div>

        <div className={styles.tableWrap}>
          <h2 className={styles.tableTitle}>📋 App Information</h2>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.tdLabel}>App Name</td>
                <td className={styles.tdValue}>BeeTV</td>
              </tr>
              <tr>
                <td className={styles.tdLabel}>Version</td>
                <td className={styles.tdValue}>
                  <span className={styles.versionBadge}>v3.3.2 (Latest)</span>
                </td>
              </tr>
              <tr>
                <td className={styles.tdLabel}>File Size</td>
                <td className={styles.tdValue}>18.4 MB</td>
              </tr>
              <tr>
                <td className={styles.tdLabel}>File Format</td>
                <td className={styles.tdValue}>APK (Android Package)</td>
              </tr>
              <tr>
                <td className={styles.tdLabel}>Requires Android</td>
                <td className={styles.tdValue}>5.0 and above</td>
              </tr>
              <tr>
                <td className={styles.tdLabel}>Compatible Devices</td>
                <td className={styles.tdValue}>Android, FireStick, Fire TV, Android TV</td>
              </tr>
              <tr>
                <td className={styles.tdLabel}>Category</td>
                <td className={styles.tdValue}>Entertainment / Streaming</td>
              </tr>
              <tr>
                <td className={styles.tdLabel}>Price</td>
                <td className={styles.tdValue}>
                  <span className={styles.freeBadge}>FREE</span>
                </td>
              </tr>
              <tr>
                <td className={styles.tdLabel}>Last Updated</td>
                <td className={styles.tdValue}>January 2025</td>
              </tr>
              <tr>
                <td className={styles.tdLabel}>Developer</td>
                <td className={styles.tdValue}>BeeTV Team</td>
              </tr>
              <tr>
                <td className={styles.tdLabel}>Virus Scan</td>
                <td className={styles.tdValue}>
                  <span className={styles.safeBadge}>✔ Verified Safe</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.downloadWrap}>
          <a href="/beetv.apk" className={styles.downloadBtn} download>
            <span className={styles.downloadIcon}>⬇</span>
            <div className={styles.downloadText}>
              <span className={styles.downloadMain}>Download BeeTV APK</span>
              <span className={styles.downloadSub}>v3.3.2 • 18.4 MB • Free</span>
            </div>
          </a>
          <p className={styles.downloadNote}>
            🔒 Safe &amp; verified &nbsp;·&nbsp; No account needed &nbsp;·&nbsp; Direct APK download
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.stepsSection}>
          <div className={styles.stepsHeader}>
            <span className={styles.badge}>📖 Guide</span>
            <h2 className={styles.stepsTitle}>
              How to Install <span>BeeTV APK</span>
            </h2>
            <p className={styles.stepsSub}>
              Follow these simple steps to install BeeTV on your Android device or FireStick.
            </p>
          </div>

          <div className={styles.deviceBlock}>
            <h3 className={styles.deviceTitle}>
              <span className={styles.deviceIcon}>📱</span> For Android Phones &amp; Tablets
            </h3>
            <div className={styles.stepsList}>
              {[
                {
                  num: "01",
                  icon: "⚙️",
                  title: "Enable Unknown Sources",
                  desc: 'Open your device Settings, go to Security (or Privacy on newer Android), and toggle on "Install Unknown Apps" or "Unknown Sources". This allows you to install APK files from outside the Play Store.',
                },
                {
                  num: "02",
                  icon: "⬇",
                  title: "Download the APK",
                  desc: "Tap the yellow Download button above to download the BeeTV APK file directly to your device. The file will be saved in your Downloads folder automatically.",
                },
                {
                  num: "03",
                  icon: "📂",
                  title: "Open File Manager",
                  desc: "Open your phone's File Manager app and navigate to the Downloads folder. You will see the BeeTV APK file listed there.",
                },
                {
                  num: "04",
                  icon: "📲",
                  title: "Tap to Install",
                  desc: 'Tap on the BeeTV APK file. A prompt will appear asking to confirm installation. Tap "Install" and wait a few seconds for the installation to complete.',
                },
                {
                  num: "05",
                  icon: "🎬",
                  title: "Open BeeTV & Enjoy",
                  desc: "Once installed, tap Open or find BeeTV in your app drawer. Start browsing movies and TV shows — no sign-up or subscription required!",
                },
              ].map((s) => (
                <div className={styles.stepCard} key={s.num}>
                  <div className={styles.stepLeft}>
                    <div className={styles.stepNum}>{s.num}</div>
                    <div className={styles.stepLine} />
                  </div>
                  <div className={styles.stepBody}>
                    <div className={styles.stepIconWrap}>{s.icon}</div>
                    <div className={styles.stepContent}>
                      <h4 className={styles.stepTitle}>{s.title}</h4>
                      <p className={styles.stepDesc}>{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.deviceBlock}>
            <h3 className={styles.deviceTitle}>
              <span className={styles.deviceIcon}>🔥</span> For Amazon FireStick &amp; Fire TV
            </h3>
            <div className={styles.stepsList}>
              {[
                {
                  num: "01",
                  icon: "⚙️",
                  title: "Enable Apps from Unknown Sources",
                  desc: 'On your FireStick, go to Settings → My Fire TV → Developer Options and turn on "Apps from Unknown Sources". This is required to sideload any APK on Amazon devices.',
                },
                {
                  num: "02",
                  icon: "📥",
                  title: "Install the Downloader App",
                  desc: 'Search for "Downloader" in the Amazon Appstore and install it. Downloader is a free, official app that lets you download APK files directly onto your FireStick.',
                },
                {
                  num: "03",
                  icon: "🔗",
                  title: "Enter the Download URL",
                  desc: "Open Downloader and type the BeeTV APK download URL: beetv.click/beetv.apk — then tap Go. The APK file will download directly to your FireStick.",
                },
                {
                  num: "04",
                  icon: "✅",
                  title: "Install the APK",
                  desc: 'Once the download completes, Downloader will automatically prompt you to install the file. Click "Install" and wait for the process to finish.',
                },
                {
                  num: "05",
                  icon: "📺",
                  title: "Launch BeeTV on Your TV",
                  desc: 'After installation, click "Open" or find BeeTV in your Apps & Channels section. Navigate with your Fire TV remote and start streaming HD movies and shows on your big screen!',
                },
              ].map((s) => (
                <div className={styles.stepCard} key={s.num}>
                  <div className={styles.stepLeft}>
                    <div className={styles.stepNum}>{s.num}</div>
                    <div className={styles.stepLine} />
                  </div>
                  <div className={styles.stepBody}>
                    <div className={styles.stepIconWrap}>{s.icon}</div>
                    <div className={styles.stepContent}>
                      <h4 className={styles.stepTitle}>{s.title}</h4>
                      <p className={styles.stepDesc}>{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.tipsBox}>
          <h3 className={styles.tipsTitle}>💡 Pro Tips for Best Experience</h3>
          <ul className={styles.tipsList}>
            <li>Use <strong>Real-Debrid</strong> inside BeeTV settings for faster, higher-quality streams</li>
            <li>Connect a <strong>VPN</strong> before streaming to protect your privacy</li>
            <li>After installing, re-disable "Unknown Sources" on your device for security</li>
            <li>Link your <strong>Trakt.tv</strong> account to sync your watchlist across devices</li>
            <li>Having issues? Try clearing the app cache from Settings → Apps → BeeTV → Clear Cache</li>
          </ul>
        </div>

        <div className={styles.backWrap}>
          <Link href="/" className={styles.backLink}>← Back to Home</Link>
          <Link href="/faq" className={styles.backLink}>Got questions? View FAQ →</Link>
        </div>

      </div>
    </div>
  );
}
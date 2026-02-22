"use client";

import { useState } from "react";
import "./home.css";

export default function Page() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const faqs = [
    {
      q: "Is BeeTV APK completely free?",
      a: "Yes, BeeTV is 100% free to download and use. There are no subscriptions, hidden fees, or in-app purchases required.",
    },
    {
      q: "How do I install BeeTV on Android?",
      a: 'Go to Settings > Security and enable "Unknown Sources" or "Install Unknown Apps", then download the APK and tap to install.',
    },
    {
      q: "Does BeeTV work on Fire TV Stick?",
      a: "Yes! BeeTV is fully compatible with all generations of Fire TV Stick, Fire TV Cube, and Fire TV Edition smart TVs.",
    },
    {
      q: "Does BeeTV have ads?",
      a: "BeeTV has minimal ads to keep the service free. Many content sources within the app are completely ad-free.",
    },
    {
      q: "Is BeeTV safe to download?",
      a: "Absolutely. The APK file available on beetv.click is verified, malware-free, and safe to install on your device.",
    },
    {
      q: "What is the latest version of BeeTV?",
      a: "We always host the latest official BeeTV version on our site and update it regularly whenever a new release is available.",
    },
    {
      q: "Can I use BeeTV without creating an account?",
      a: "Yes, BeeTV requires zero registration. Simply download the APK, install it, and start watching instantly — no email or account needed.",
    },
    {
      q: "Does BeeTV support subtitles?",
      a: "Yes, BeeTV supports multiple subtitle languages. You can enable subtitles directly from the video player settings inside the app.",
    },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">🐝 #1 Free Streaming App</div>
          <h1>
            Free Movies &amp;
            <span>TV Shows App</span>
          </h1>
          <p className="hero-desc">
            BeeTV is the ultimate free streaming app for Android and FireStick.
            Watch thousands of movies, TV shows and live channels in HD — no subscription needed.
          </p>
          <div className="hero-buttons">
            <a href="#download" className="btn-primary">📥 Download BeeTV APK</a>
            <a href="#install" className="btn-secondary">📖 How to Install</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">10M+</div>
              <div className="stat-label">Downloads</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">4.8★</div>
              <div className="stat-label">Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">Free</div>
              <div className="stat-label">Forever</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="phone-screen-inner">
                <div className="phone-top-bar">
                  <div className="phone-logo-sm">
                    <div className="dot">🐝</div>
                    <span>BeeTV</span>
                  </div>
                  <span style={{ fontSize: "10px", color: "#FFD000" }}>HD</span>
                </div>
                <div className="phone-search">🔍 Search movies, shows...</div>
                <div className="movie-card-sm">
                  <div className="movie-thumb thumb-1">🎬</div>
                  <div className="movie-info-sm">
                    <div className="movie-title-sm">Action Blockbuster HD</div>
                    <div className="movie-meta-sm">2024 • HD • Free</div>
                  </div>
                </div>
                <div className="movie-card-sm">
                  <div className="movie-thumb thumb-2">📺</div>
                  <div className="movie-info-sm">
                    <div className="movie-title-sm">Popular TV Series</div>
                    <div className="movie-meta-sm">Season 3 • HD</div>
                  </div>
                </div>
                <div className="movie-card-sm">
                  <div className="movie-thumb thumb-3">🎭</div>
                  <div className="movie-info-sm">
                    <div className="movie-title-sm">Top Drama Collection</div>
                    <div className="movie-meta-sm">2024 • Full HD</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="phone-glow" />
          </div>
        </div>
      </section>

      <div className="features-strip">
        <div className="strip-item"><span className="icon">📺</span>HD Quality</div>
        <div className="strip-item"><span className="icon">🆓</span>100% Free</div>
        <div className="strip-item"><span className="icon">🔒</span>No Registration</div>
        <div className="strip-item"><span className="icon">📡</span>1000+ Channels</div>
        <div className="strip-item"><span className="icon">⚡</span>Fast Streaming</div>
        <div className="strip-item"><span className="icon">📱</span>Multi Device</div>
      </div>

      <section className="section" id="about">
        <div className="about-grid">
          <div className="about-img-wrap">
            <div className="about-phone">
              <div className="about-phone-inner">
                <div className="about-phone-heading">🐝 BeeTV — Now Streaming</div>
                <div className="stream-row">
                  <div className="stream-card sc-1">
                    <span className="stream-card-label">Action</span>
                    <span className="hd-tag">HD</span>
                  </div>
                  <div className="stream-card sc-2">
                    <span className="stream-card-label">Drama</span>
                    <span className="hd-tag">4K</span>
                  </div>
                </div>
                <div className="stream-row">
                  <div className="stream-card sc-3">
                    <span className="stream-card-label">Comedy</span>
                    <span className="hd-tag">HD</span>
                  </div>
                  <div className="stream-card sc-4">
                    <span className="stream-card-label">Thriller</span>
                    <span className="hd-tag">FHD</span>
                  </div>
                </div>
                <div className="now-playing-box">
                  <div className="now-playing-label">▶ Currently Playing</div>
                  <div className="now-playing-inner">
                    <div className="now-playing-thumb">🎬</div>
                    <div>
                      <div className="now-playing-title">Latest Blockbuster</div>
                      <div className="now-playing-meta">HD • 2024 • Free</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-accent" />
          </div>

          <div className="about-text">
            <div className="section-label">About BeeTV</div>
            <h2 className="section-title">Your Ultimate <span>Free Streaming</span> Partner</h2>
            <p className="section-sub">
              BeeTV is a powerful streaming application that gives you access to the latest movies,
              TV shows, web series and live TV channels in HD quality — completely free of charge.
            </p>
            <div className="feature-list">
              {[
                { icon: "🎬", title: "Hollywood & Worldwide Content", desc: "Thousands of movies and shows updated daily with the latest releases." },
                { icon: "📺", title: "Live TV Channels", desc: "Stream 500+ live channels directly from within the app." },
                { icon: "⬇", title: "Offline Downloads", desc: "Download videos and watch them later without an internet connection." },
                { icon: "🌐", title: "Multi Language Support", desc: "Content available in English, Hindi, Spanish, and 20+ more languages." },
              ].map((f, i) => (
                <div className="feature-item" key={i}>
                  <div className="feature-icon">{f.icon}</div>
                  <div className="feature-text">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section install-section" id="install">
        <div className="section-label">Installation Guide</div>
        <h2 className="section-title">How to <span>Install BeeTV</span></h2>
        <p className="section-sub">Get BeeTV up and running on your device in just 4 simple steps.</p>
        <div className="steps-grid">
          {[
            { icon: "⚙️", title: "Enable Unknown Sources", desc: 'Go to Settings > Security and enable "Unknown Sources" or "Install Unknown Apps" on your device.' },
            { icon: "⬇", title: "Download the APK", desc: "Click the download button below to get the latest BeeTV APK file directly to your device." },
            { icon: "📂", title: "Find the File", desc: "Open your File Manager and navigate to the Downloads folder to locate the BeeTV APK." },
            { icon: "✅", title: "Install & Enjoy", desc: "Tap the APK file, hit Install, and open BeeTV to start streaming movies and shows for free!" },
          ].map((s, i) => (
            <div className="step-card" key={i}>
              <div className="step-num">{i + 1}</div>
              <div className="step-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="why">
        <div className="section-label">Why Choose Us</div>
        <h2 className="section-title">Why BeeTV is <span>The Best?</span></h2>
        <p className="section-sub">Millions of users trust BeeTV for their daily entertainment needs. Here is why.</p>
        <div className="why-grid">
          {[
            { icon: "🆓", title: "100% Free", desc: "No subscription or payment required. Free forever." },
            { icon: "📺", title: "HD Quality", desc: "Watch in HD, Full HD and 4K quality streaming." },
            { icon: "⚡", title: "Fast Loading", desc: "Buffering-free, ultra-fast streaming experience." },
            { icon: "🔄", title: "Daily Updates", desc: "New movies and shows are added every single day." },
            { icon: "🌍", title: "Multi Language", desc: "Content available in 20+ languages worldwide." },
            { icon: "📱", title: "Multi Device", desc: "Works on Android phones, tablets, and FireStick." },
            { icon: "🔒", title: "Safe & Secure", desc: "Verified, malware-free APK file." },
            { icon: "⬇", title: "Offline Mode", desc: "Download content and watch without internet." },
            { icon: "🌙", title: "Dark Mode", desc: "Eye-friendly dark mode interface built-in." },
          ].map((w, i) => (
            <div className="why-card" key={i}>
              <span className="why-icon">{w.icon}</span>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section devices-section" id="devices">
        <div className="section-label">Compatible Devices</div>
        <h2 className="section-title">Works on <span>Every Device</span></h2>
        <p className="section-sub">BeeTV runs seamlessly across all these platforms and devices.</p>
        <div className="devices-grid">
          {[
            { icon: "📱", name: "Android Phone", desc: "Android 5.0+" },
            { icon: "📟", name: "Android Tablet", desc: "All screen sizes" },
            { icon: "🔥", name: "Fire TV Stick", desc: "All generations" },
            { icon: "📺", name: "Fire TV Cube", desc: "All models" },
            { icon: "🖥️", name: "Android Smart TV", desc: "Android TV OS" },
            { icon: "🎮", name: "Nvidia Shield", desc: "TV & Pro models" },
          ].map((d, i) => (
            <div className="device-card" key={i}>
              <span className="device-emoji">{d.icon}</span>
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="download-cta" id="download">
        <div className="cta-box">
          <div className="section-label cta-label">Download Now</div>
          <h2>BeeTV APK <span>Free Download</span></h2>
          <p>
            Download the latest version now and enjoy unlimited entertainment.
            No ads, no subscription, no registration required.
          </p>
          <a href="/download" className="btn-primary cta-btn">
            📥 Download BeeTV APK (Free)
          </a>
          <div className="cta-badges">
            <div className="cta-badge"><span className="check">✔</span> Latest Version</div>
            <div className="cta-badge"><span className="check">✔</span> Virus Free</div>
            <div className="cta-badge"><span className="check">✔</span> No Registration</div>
            <div className="cta-badge"><span className="check">✔</span> 100% Free</div>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="faq-header">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
              <button className="faq-question" onClick={() => toggleFaq(i)}>
                {f.q}
                <span className="faq-chevron">▾</span>
              </button>
              {openFaq === i && <div className="faq-answer">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="article-section">
        <div className="article-wrap">

          <h2 className="article-main-title">
            BeeTV APK — The Complete Guide to Free Movie &amp; TV Streaming on Android and FireStick
          </h2>
          <p className="article-intro">
            If you are searching for a reliable, completely free way to watch movies and TV shows on your Android device
            or Amazon Fire TV Stick, <strong>BeeTV APK</strong> is hands-down one of the best options available today.
            Unlike paid platforms that lock content behind expensive monthly subscriptions, BeeTV gives you instant
            access to a massive library of entertainment without spending a single dollar. In this detailed guide, we
            cover everything — what BeeTV is, how it works, how to install it safely, which devices support it, and
            why millions of users across the world trust it for daily streaming.
          </p>

          <div className="article-divider" />

          <h3 className="article-h3">What is BeeTV APK?</h3>
          <p>
            <strong>BeeTV</strong> is a third-party Android streaming application that aggregates content from multiple
            free online sources and presents it inside a clean, easy-to-navigate interface. The app is not available on
            the Google Play Store or the Amazon Appstore — instead, it is distributed as an <strong>APK (Android
            Package Kit)</strong> file that users sideload onto their devices. This is a completely normal and widely
            used method of installing apps that are outside official app stores, and BeeTV has been designed with this
            process in mind.
          </p>
          <p>
            The app focuses entirely on giving users a straightforward streaming experience. You open the app, search
            for what you want to watch, choose a streaming source, and hit play — that is genuinely all it takes. There
            are no lengthy sign-up forms, no credit card requirements, and no trial periods that quietly convert into
            paid subscriptions. BeeTV is <strong>free streaming, done right</strong>.
          </p>

          <div className="article-divider" />

          <h3 className="article-h3">Key Features of BeeTV App</h3>

          <h4 className="article-h4">1. Massive Content Library</h4>
          <p>
            BeeTV pulls content from a wide range of publicly accessible online sources, which means the library is
            constantly refreshed. You will find everything from the latest Hollywood blockbusters and popular Netflix
            originals (via mirror sources) to classic films, international cinema, and binge-worthy TV series. The
            content catalog spans virtually every genre — action, thriller, romance, horror, sci-fi, documentary,
            animation, and more. Unlike a single-source streaming service, BeeTV gives you multiple link options for
            each title, so if one source is slow or unavailable, you can switch to another instantly.
          </p>

          <h4 className="article-h4">2. HD and 4K Video Quality</h4>
          <p>
            One of the biggest selling points of BeeTV is its video quality. The app supports streams in SD, HD,
            Full HD (1080p), and even <strong>4K resolution</strong> depending on the available sources. For users
            with a high-speed internet connection, the difference between BeeTV and a paid streaming platform becomes
            almost invisible in terms of picture clarity. The built-in video player handles multiple codecs and
            adaptive bitrates, automatically adjusting quality based on your connection speed to prevent buffering.
          </p>

          <h4 className="article-h4">3. Real-Debrid and Trakt Integration</h4>
          <p>
            BeeTV supports integration with <strong>Real-Debrid</strong>, a premium link resolver service that
            unlocks faster, higher-quality streams from premium file hosts. Users who subscribe to Real-Debrid (which
            is separate and optional) get dramatically improved streaming performance within BeeTV. The app also
            supports <strong>Trakt.tv</strong> integration, which allows you to track what you have watched, sync
            your watchlist across devices, and pick up exactly where you left off — even across reinstalls.
          </p>

          <h4 className="article-h4">4. Built-In Subtitle Support</h4>
          <p>
            BeeTV includes robust subtitle support through integration with <strong>OpenSubtitles</strong> and other
            subtitle databases. You can enable subtitles in dozens of languages directly from the player, adjust font
            size, and customize the subtitle style. This makes BeeTV an excellent choice for non-native English
            speakers or anyone watching foreign-language content who needs accurate captions.
          </p>

          <h4 className="article-h4">5. Completely Ad-Free Experience (with Settings)</h4>
          <p>
            While some streaming sources within BeeTV may display brief ads, the app itself does not show intrusive
            pop-ups or pre-roll ads in the traditional sense. With the right source selection and optionally pairing
            with a trusted <strong>VPN and ad-blocker</strong>, many users report a completely smooth, ad-free viewing
            experience. This is a stark contrast to free ad-supported platforms that interrupt every 10 minutes.
          </p>

          <h4 className="article-h4">6. Offline Download Support</h4>
          <p>
            BeeTV allows you to download movies and TV episodes directly to your device storage. This is perfect for
            travelers, commuters, or anyone in an area with unreliable internet. Downloaded content plays back in full
            quality without any streaming dependency, making BeeTV one of the rare free apps that genuinely supports
            <strong> offline viewing</strong>.
          </p>

          <div className="article-divider" />

          <h3 className="article-h3">BeeTV for FireStick — The Best Free Streaming App for Amazon Devices</h3>
          <p>
            Among the many use cases for BeeTV, its performance on <strong>Amazon Fire TV Stick</strong> stands out
            as particularly impressive. The app's interface has been specifically optimized for remote control
            navigation, making it feel native to the Fire TV ecosystem even though it is a sideloaded application.
          </p>
          <p>
            To install BeeTV on FireStick, you will first need to enable apps from unknown sources. Navigate to
            <em> Settings &gt; My Fire TV &gt; Developer Options</em> and toggle on <strong>Apps from Unknown
            Sources</strong>. From there, you can use the built-in Downloader app (or similar tools) to download
            the BeeTV APK directly from beetv.click and install it. The entire process takes under five minutes and
            requires no technical expertise.
          </p>
          <p>
            Once installed, BeeTV on FireStick gives you access to the same massive content library as the Android
            version, with the added benefit of watching everything on your big-screen TV. Combined with a
            Real-Debrid subscription, BeeTV on FireStick can genuinely compete with premium services like Netflix
            and Disney+ in terms of content availability and quality — at zero monthly cost.
          </p>

          <div className="article-divider" />

          <h3 className="article-h3">Is BeeTV Safe? Understanding the Security</h3>
          <p>
            A common concern among new users is whether downloading and installing a third-party APK is safe. This is
            a legitimate question and the answer depends entirely on <em>where</em> you download it from. The BeeTV
            APK hosted on <strong>beetv.click</strong> is the official, verified version of the application. We scan
            every release for malware, adware, and spyware before making it available for download.
          </p>
          <p>
            That said, here are a few best practices to keep your device secure when using BeeTV or any sideloaded app:
          </p>
          <ul className="article-list">
            <li>Always download BeeTV APK exclusively from trusted sources like beetv.click — never from random links shared on social media or forums.</li>
            <li>Use a reputable <strong>VPN</strong> while streaming to protect your IP address and browsing activity from third-party monitoring.</li>
            <li>After installing BeeTV, consider re-disabling the "Unknown Sources" setting on your device to prevent accidental installation of other sideloaded apps.</li>
            <li>Keep the app updated — newer versions often include security patches alongside feature improvements.</li>
          </ul>

          <div className="article-divider" />

          <h3 className="article-h3">BeeTV vs Other Free Streaming Apps</h3>
          <p>
            The free streaming app landscape is crowded, with competitors like Cinema HD, Titanium TV, Stremio, Kodi,
            and Tubi all vying for users' attention. So what makes BeeTV stand out from the pack?
          </p>
          <p>
            Unlike <strong>Kodi</strong>, which requires you to manually install and configure addons, BeeTV works
            out of the box — no addons, no configuration, no learning curve. Unlike <strong>Tubi</strong> and other
            legal AVOD (ad-supported video on demand) platforms, BeeTV is not limited to a licensed catalog and
            regularly carries the latest releases. Compared to <strong>Cinema HD</strong>, BeeTV tends to have a
            cleaner, more polished interface and more consistent source reliability.
          </p>
          <p>
            The combination of a beautiful UI, Real-Debrid support, subtitle integration, offline downloads, and
            zero-cost access makes BeeTV one of the most well-rounded free streaming applications currently available
            for Android and FireStick.
          </p>

          <div className="article-divider" />

          <h3 className="article-h3">How to Get the Best Streaming Experience with BeeTV</h3>
          <p>
            To squeeze every bit of performance out of BeeTV, follow these expert tips:
          </p>
          <ul className="article-list">
            <li><strong>Use Real-Debrid:</strong> Pairing BeeTV with a Real-Debrid account is the single biggest upgrade you can make. It unlocks premium, cached links that stream faster and in higher quality than free sources.</li>
            <li><strong>Install a VPN:</strong> A VPN like ExpressVPN, NordVPN, or Surfshark protects your privacy, bypasses geographic restrictions, and can even improve speeds by avoiding ISP throttling on streaming traffic.</li>
            <li><strong>Connect via Ethernet:</strong> If you are using BeeTV on a FireStick or Android TV box, a wired ethernet connection (via a USB-to-ethernet adapter) will always outperform Wi-Fi for 4K streaming.</li>
            <li><strong>Sort by Quality:</strong> BeeTV lets you sort available streaming links by quality. Always start with the highest-bitrate option and only fall back to lower quality if buffering occurs.</li>
            <li><strong>Clear Cache Regularly:</strong> Like all streaming apps, BeeTV accumulates cache over time. Going to Settings and clearing the app cache every few weeks keeps the app running snappily.</li>
          </ul>

          <div className="article-divider" />

          <h3 className="article-h3">BeeTV APK Latest Version — What's New?</h3>
          <p>
            The development team behind BeeTV regularly pushes updates that improve source scraping speed, fix
            playback bugs, add new integrations, and refine the user interface. The <strong>latest BeeTV APK
            version</strong> available on beetv.click always reflects the most recent stable release. We recommend
            updating whenever a new version is available, as older versions may experience degraded source
            availability as content providers update their hosting infrastructure.
          </p>
          <p>
            To update BeeTV, simply download the latest APK from our site and install it over the existing version —
            your settings, Trakt sync, and preferences will all be preserved during the update process.
          </p>

          <div className="article-divider" />

          <h3 className="article-h3">Final Verdict — Should You Download BeeTV?</h3>
          <p>
            If you are looking for a <strong>free movie and TV streaming app for Android or FireStick</strong> that
            is genuinely feature-rich, regularly updated, easy to use, and does not require any account creation, then
            BeeTV is an outstanding choice. It delivers a premium-feeling experience without the premium price tag,
            and with Real-Debrid integration, it can legitimately match or exceed what paid services offer in terms
            of content selection and streaming quality.
          </p>
          <p>
            The app has earned its reputation among cord-cutters, streaming enthusiasts, and budget-conscious viewers
            as one of the most dependable free entertainment solutions available. Download BeeTV APK today from
            beetv.click and discover why over 10 million users have already made it their go-to streaming companion.
          </p>

        </div>
      </section>

    </>
  );
}
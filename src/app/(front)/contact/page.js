"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../legal.module.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your actual form submission logic (e.g. Formspree, EmailJS)
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <Link href="/" className={styles.backLink}>← Back to Home</Link>

        <div className={styles.hero}>
          <div className={styles.badge}>📬 Get in Touch</div>
          <h1 className={styles.title}>Contact <span>Us</span></h1>
          <p className={styles.meta}>We typically respond within 24–48 hours &nbsp;·&nbsp; beetv.click</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>How Can We Help?</h2>
          <p className={styles.text}>
            Have a question about BeeTV, need help with installation, found a broken download link,
            or want to submit a DMCA notice? Use the form below to get in touch with our team and
            we will get back to you as quickly as possible.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Common Topics</h2>
          <ul className={styles.list}>
            <li><strong>APK Download Issues:</strong> Report a broken or outdated download link</li>
            <li><strong>Installation Help:</strong> Get guidance on sideloading BeeTV on your device</li>
            <li><strong>Copyright / DMCA:</strong> Submit a takedown request or copyright concern</li>
            <li><strong>General Inquiry:</strong> Any other question about beetv.click</li>
            <li><strong>Partnership / Advertising:</strong> Business or collaboration enquiries</li>
          </ul>
        </div>

        <div className={styles.divider} />

        {submitted ? (
          <div className={styles.box}>
            <strong>✅ Message Sent!</strong> Thank you for reaching out. We have received your message
            and will respond to your email within 24–48 hours.
          </div>
        ) : (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Send Us a Message</h2>
            <form className={styles.form} onSubmit={handleSubmit}>

              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a topic...</option>
                  <option value="download">APK Download Issue</option>
                  <option value="install">Installation Help</option>
                  <option value="dmca">Copyright / DMCA</option>
                  <option value="partnership">Partnership / Advertising</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Describe your question or issue in detail..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                📨 Send Message
              </button>

            </form>
          </div>
        )}

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Other Ways to Reach Us</h2>
          <p className={styles.text}>
            For urgent DMCA or copyright matters, please also visit our dedicated{" "}
            <Link href="/dmca">DMCA page</Link> for faster processing.
            For legal matters, please refer to our <Link href="/disclaimer">Disclaimer</Link> and{" "}
            <Link href="/terms">Terms of Use</Link> before reaching out.
          </p>
        </div>

      </div>
    </div>
  );
}
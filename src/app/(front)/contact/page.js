// src/app/(front)/contact/page.js
// metadata aur "use client" saath nahi chal sakte
// Solution: metadata alag layout ya page-level export se hata do

import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us — TikTok Video Downloader | tiktokvideodownload.com.pk",
  description: "Contact tiktokvideodownload.com.pk for support, DMCA requests, or general inquiries. We respond within 24-48 hours.",
};

export default function ContactPage() {
  return <ContactForm />;
}
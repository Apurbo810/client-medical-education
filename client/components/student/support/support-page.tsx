"use client";

import type { FAQ } from "@/types/faq";

import { SupportRequestForm } from "./support-request-form";
import { SupportFAQ } from "./support-faq";

interface SupportPageProps {
  faqs: FAQ[];
}

export function SupportPage({
  faqs,
}: SupportPageProps) {
  function handleSubmitRequest(data: {
    issueType: string;
    title: string;
    description: string;
    image: File | null;
  }) {
    console.log("Support request:", data);

    /*
     * TODO:
     * Connect your backend API here.
     *
     * Example:
     *
     * const formData = new FormData();
     *
     * formData.append(
     *   "issueType",
     *   data.issueType,
     * );
     *
     * formData.append(
     *   "title",
     *   data.title,
     * );
     *
     * formData.append(
     *   "description",
     *   data.description,
     * );
     *
     * if (data.image) {
     *   formData.append(
     *     "image",
     *     data.image,
     *   );
     * }
     *
     * await fetch("/api/support", {
     *   method: "POST",
     *   body: formData,
     * });
     */
  }

  return (
    <main className="support-page">
      <div className="support-container">
        {/* =====================================================
            PAGE HEADER
        ===================================================== */}

        <header className="support-header">
          <div>
            <h1 className="support-title">
              Support & Help
            </h1>

            <p className="support-description">
              Tell us what&apos;s the issue and our team
              will get back to you soon.
            </p>
          </div>
        </header>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="support-layout">
          {/* LEFT — SUPPORT REQUEST */}

          <SupportRequestForm
            onSubmit={handleSubmitRequest}
          />

          {/* RIGHT — FAQ */}

          <SupportFAQ faqs={faqs} />
        </div>
      </div>
    </main>
  );
}
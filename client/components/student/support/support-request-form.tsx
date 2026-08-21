"use client";

import { useState } from "react";
import {
  ImagePlus,
  Send,
  X,
} from "lucide-react";

interface SupportRequestFormProps {
  onSubmit?: (data: {
    issueType: string;
    title: string;
    description: string;
    image: File | null;
  }) => void;
}

const issueTypes = [
  "Course & Lessons",
  "Practice Questions",
  "Mock Exams",
  "CAT Exams",
  "Payment & Subscription",
  "Technical Issue",
  "Account & Profile",
  "Other",
];

export function SupportRequestForm({
  onSubmit,
}: SupportRequestFormProps) {
  const [issueType, setIssueType] =
    useState("");

  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [image, setImage] =
    useState<File | null>(null);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (
      !issueType ||
      !title.trim() ||
      !description.trim()
    ) {
      return;
    }

    onSubmit?.({
      issueType,
      title: title.trim(),
      description: description.trim(),
      image,
    });
  }

  function handleImageChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const file =
      event.target.files?.[0] ?? null;

    if (!file) {
      return;
    }

    // Frontend validation
    if (!file.type.startsWith("image/")) {
      event.target.value = "";
      return;
    }

    // 5 MB
    if (file.size > 5 * 1024 * 1024) {
      event.target.value = "";
      return;
    }

    setImage(file);
  }

  function removeImage() {
    setImage(null);
  }

  return (
    <section className="support-request-card">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="support-request-header">
        <div>
          <h2 className="support-card-title">
            Need Help?
          </h2>

          <p className="support-card-description">
            Tell us what&apos;s wrong and our support team
            will help you as soon as possible.
          </p>
        </div>
      </div>

      {/* =====================================================
          FORM
      ===================================================== */}

      <form
        onSubmit={handleSubmit}
        className="support-request-form"
      >
        {/* =====================================================
            ISSUE TYPE
        ===================================================== */}

        <div className="contact-form-field">
          <label
            htmlFor="issue-type"
            className="contact-form-label"
          >
            Type of Problem
          </label>

          <select
            id="issue-type"
            value={issueType}
            onChange={(event) =>
              setIssueType(event.target.value)
            }
            className="contact-form-select"
            required
          >
            <option value="">
              Select the type of problem
            </option>

            {issueTypes.map((type) => (
              <option
                key={type}
                value={type}
              >
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* =====================================================
            TITLE
        ===================================================== */}

        <div className="contact-form-field">
          <label
            htmlFor="support-title"
            className="contact-form-label"
          >
            Title
          </label>

          <input
            id="support-title"
            type="text"
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
            placeholder="What is the issue?"
            maxLength={120}
            className="contact-form-input"
            required
          />
        </div>

        {/* =====================================================
            DESCRIPTION
        ===================================================== */}

        <div className="contact-form-field">
          <div className="flex items-center justify-between gap-3">
            <label
              htmlFor="support-description"
              className="contact-form-label"
            >
              Short Description
            </label>

            <span className="text-xs text-muted-foreground">
              {description.length}/500
            </span>
          </div>

          <textarea
            id="support-description"
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
            placeholder="Please describe the problem..."
            maxLength={500}
            rows={5}
            className="contact-form-textarea"
            required
          />
        </div>

        {/* =====================================================
            IMAGE
        ===================================================== */}

        <div className="contact-form-field">
          <label className="contact-form-label">
            Attach an Image{" "}
            <span className="font-normal text-muted-foreground">
              (Optional)
            </span>
          </label>

          {!image ? (
            <label
              htmlFor="support-image"
              className="support-upload"
            >
              <ImagePlus className="size-6 text-primary" />

              <span className="text-sm font-medium text-foreground">
                Click to upload an image
              </span>

              <span className="text-xs text-muted-foreground">
                PNG, JPG or JPEG up to 5MB
              </span>

              <input
                id="support-image"
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                className="sr-only"
                onChange={handleImageChange}
              />
            </label>
          ) : (
            <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-muted/40 px-4 py-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <ImagePlus className="size-4 text-primary" />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">
                    {image.name}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {(image.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={removeImage}
                className="flex size-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                aria-label="Remove image"
              >
                <X className="size-4" />
              </button>
            </div>
          )}
        </div>

        {/* =====================================================
            SUBMIT
        ===================================================== */}

        <button
          type="submit"
          className="support-submit"
        >
          <Send className="size-4" />
          Submit Request
        </button>
      </form>
    </section>
  );
}
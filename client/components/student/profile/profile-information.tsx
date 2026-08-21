"use client";

import { useState } from "react";
import type { StudentProfile } from "@/types/student/profile";

interface ProfileInformationProps {
  profile: StudentProfile;
}

export function ProfileInformation({
  profile,
}: ProfileInformationProps) {
  const [form, setForm] =
    useState<StudentProfile>(profile);

  const [isSaving, setIsSaving] =
    useState(false);

  function handleChange(
    field: keyof StudentProfile,
    value: string,
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setIsSaving(true);

    /*
     * TODO:
     * Replace this with your backend API.
     *
     * Example:
     *
     * await updateStudentProfile({
     *   firstName: form.firstName,
     *   lastName: form.lastName,
     *   phone: form.phone,
     *   dateOfBirth: form.dateOfBirth,
     *   bio: form.bio,
     * });
     */

    await new Promise((resolve) =>
      setTimeout(resolve, 500),
    );

    setIsSaving(false);
  }

  const initials =
    `${form.firstName.charAt(0)}${form.lastName.charAt(0)}`.toUpperCase();

  return (
    <section className="profile-card">
      {/* Header */}

      <div className="profile-card-header">
        <div>
          <h2 className="profile-card-title">
            Personal Information
          </h2>

          <p className="profile-card-description">
            Manage your personal information and profile.
          </p>
        </div>
      </div>

      {/* Identity */}

      <div className="profile-identity">
        <div className="profile-avatar">
          {form.avatarUrl ? (
            <img
              src={form.avatarUrl}
              alt={`${form.firstName} ${form.lastName}`}
              className="size-full rounded-full object-cover"
            />
          ) : (
            initials
          )}
        </div>

        <div className="profile-identity-info">
          <h3 className="profile-name">
            {form.firstName}{" "}
            {form.lastName}
          </h3>

          <p className="profile-email">
            {form.email}
          </p>

          <span className="profile-member-badge">
            Student
          </span>
        </div>
      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="profile-form"
      >
        <div className="profile-form-grid">
          {/* First Name */}

          <div className="profile-field">
            <label
              htmlFor="firstName"
              className="profile-label"
            >
              First Name
            </label>

            <input
              id="firstName"
              type="text"
              value={form.firstName}
              onChange={(event) =>
                handleChange(
                  "firstName",
                  event.target.value,
                )
              }
              className="profile-input"
              autoComplete="given-name"
            />
          </div>

          {/* Last Name */}

          <div className="profile-field">
            <label
              htmlFor="lastName"
              className="profile-label"
            >
              Last Name
            </label>

            <input
              id="lastName"
              type="text"
              value={form.lastName}
              onChange={(event) =>
                handleChange(
                  "lastName",
                  event.target.value,
                )
              }
              className="profile-input"
              autoComplete="family-name"
            />
          </div>
        </div>

        {/* Email */}

        <div className="profile-field">
          <label
            htmlFor="email"
            className="profile-label"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            value={form.email}
            disabled
            className="profile-input profile-input-disabled"
            autoComplete="email"
          />

          <p className="text-xs text-muted-foreground">
            Contact support if you need to change your
            email address.
          </p>
        </div>

        {/* Phone */}

        <div className="profile-field">
          <label
            htmlFor="phone"
            className="profile-label"
          >
            Phone
          </label>

          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(event) =>
              handleChange(
                "phone",
                event.target.value,
              )
            }
            className="profile-input"
            autoComplete="tel"
          />
        </div>

        {/* Date of Birth */}

        <div className="profile-field">
          <label
            htmlFor="dateOfBirth"
            className="profile-label"
          >
            Date of Birth
          </label>

          <input
            id="dateOfBirth"
            type="date"
            value={form.dateOfBirth}
            onChange={(event) =>
              handleChange(
                "dateOfBirth",
                event.target.value,
              )
            }
            className="profile-input"
            autoComplete="bday"
          />
        </div>

        {/* Bio */}

        <div className="profile-field">
          <label
            htmlFor="bio"
            className="profile-label"
          >
            Bio
          </label>

          <textarea
            id="bio"
            value={form.bio}
            onChange={(event) =>
              handleChange(
                "bio",
                event.target.value,
              )
            }
            className="profile-textarea"
            placeholder="Tell us a little about yourself..."
            maxLength={500}
          />

          <p className="text-right text-xs text-muted-foreground">
            {form.bio.length}/500
          </p>
        </div>

        {/* Save */}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSaving}
            className="profile-save disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSaving
              ? "Saving..."
              : "Save Changes"}
          </button>
        </div>
      </form>
    </section>
  );
}
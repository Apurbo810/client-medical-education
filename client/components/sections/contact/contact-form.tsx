"use client";

import { type FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FieldError } from "@/components/ui/field-error";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "@/lib/validations/contact";

export function ContactForm() {
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFieldErrors({});
    setSubmitted(false);

    const formData = new FormData(event.currentTarget);
    const parsed = contactSchema.safeParse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    if (!parsed.success) {
      const errors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        errors[String(issue.path[0])] = issue.message;
      });
      setFieldErrors(errors);
      return;
    }

    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <div className="contact-form-card">
      <div className="contact-form-intro">
        <h2 className="contact-form-intro-title">Send us a message</h2>
        <p className="contact-form-intro-description">
          Tell us what you need, and we&apos;ll connect you with the right person.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form-row">
          <div className="contact-form-field">
            <Label htmlFor="firstName" className="contact-form-label">First Name</Label>
            <Input id="firstName" name="firstName" placeholder="Sarah" autoComplete="given-name" aria-invalid={!!fieldErrors.firstName} className="contact-form-input" />
            <FieldError message={fieldErrors.firstName} />
          </div>

          <div className="contact-form-field">
            <Label htmlFor="lastName" className="contact-form-label">Last Name</Label>
            <Input id="lastName" name="lastName" placeholder="Mitchell" autoComplete="family-name" aria-invalid={!!fieldErrors.lastName} className="contact-form-input" />
            <FieldError message={fieldErrors.lastName} />
          </div>
        </div>

        <div className="contact-form-field">
          <Label htmlFor="email" className="contact-form-label">Email</Label>
          <Input id="email" type="email" name="email" placeholder="you@email.com" autoComplete="email" aria-invalid={!!fieldErrors.email} className="contact-form-input" />
          <FieldError message={fieldErrors.email} />
        </div>

        <div className="contact-form-field">
          <Label htmlFor="subject" className="contact-form-label">Subject</Label>
          <select id="subject" name="subject" defaultValue="general" aria-invalid={!!fieldErrors.subject} className="contact-form-select">
            <option value="general">General Inquiry</option>
            <option value="courses">Course Question</option>
            <option value="account">Account Support</option>
            <option value="billing">Billing</option>
            <option value="technical">Technical Support</option>
          </select>
          <FieldError message={fieldErrors.subject} />
        </div>

        <div className="contact-form-field">
          <Label htmlFor="message" className="contact-form-label">Message</Label>
          <Textarea id="message" name="message" placeholder="How can we help?" aria-invalid={!!fieldErrors.message} className="contact-form-textarea" />
          <FieldError message={fieldErrors.message} />
        </div>

        <Button type="submit" className="contact-form-button">
          <Send className="size-4" />
          Send Message
        </Button>

        {submitted && (
          <p className="contact-form-success" role="status">
            <CheckCircle2 className="size-4" />
            Your message is complete and ready to send to our support team.
          </p>
        )}
      </form>
    </div>
  );
}

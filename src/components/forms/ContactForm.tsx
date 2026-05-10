"use client";

import { useState } from "react";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { contact } from "@/content/contact";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="p-8 md:p-10 rounded-xl bg-white border border-line shadow-card text-center">
        <span className="grid place-items-center w-14 h-14 rounded-full bg-green/10 text-green mx-auto">
          <CheckCircle2 className="w-7 h-7" aria-hidden />
        </span>
        <h3 className="mt-5 text-2xl font-extrabold text-navy">
          {contact.form.successHeading}
        </h3>
        <p className="mt-3 text-base text-steel leading-relaxed max-w-md mx-auto">
          {contact.form.successBody}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-secondary mt-6"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="p-6 md:p-8 rounded-xl bg-white border border-line shadow-card"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Your name" name="name" type="text" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field
          label="Email"
          name="email"
          type="email"
          className="sm:col-span-2"
          required
        />
        <Field
          label="Organisation"
          name="organisation"
          type="text"
          className="sm:col-span-2"
        />
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">
            Subject
          </label>
          <select
            name="subject"
            required
            defaultValue=""
            className="w-full px-4 py-3 bg-cloud border border-line rounded-md text-sm text-navy focus:outline-none focus:ring-2 focus:ring-amber/60"
          >
            <option value="" disabled>
              Choose a subject
            </option>
            {contact.form.subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="A few lines about the project, tender reference, or installation."
            className="w-full px-4 py-3 bg-cloud border border-line rounded-md text-sm text-navy focus:outline-none focus:ring-2 focus:ring-amber/60 resize-y"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-700 bg-red-50 border border-red-200 px-3 py-2 rounded">
          We couldn't send the message: {errorMessage ?? "please try again"}.
        </p>
      )}

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            <>
              Send enquiry
              <Send className="w-4 h-4" aria-hidden />
            </>
          )}
        </button>
        <p className="text-xs text-steel">
          We'll reply within one working day. No spam — ever.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  className,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className ?? ""}>
      <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">
        {label} {required && <span className="text-amber">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3 bg-cloud border border-line rounded-md text-sm text-navy focus:outline-none focus:ring-2 focus:ring-amber/60"
      />
    </div>
  );
}

"use client";

import { FormEvent, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const captchaRef = useRef<HCaptcha>(null);
  const [captchaToken, setCaptchaToken] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!captchaToken) {
      setStatus("error");
      setMessage("Please complete the captcha before sending your message.");
      return;
    }

    formData.append("h-captcha-response", captchaToken);

    setStatus("submitting");
    setMessage("");

    try {
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setMessage(
          "Thanks! Your message has been sent. I’ll get back to you soon.",
        );

        form.reset();

        captchaRef.current?.resetCaptcha();
        setCaptchaToken("");
      } else {
        setStatus("error");
        setMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);

      setStatus("error");
      setMessage(
        "Something went wrong while sending your message. Please try again.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="hidden"
        name="access_key"
        value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}
      />

      <input type="hidden" name="subject" value="New Portfolio Inquiry" />

      <input type="hidden" name="from_name" value="Portfolio Website" />

      {/* Honeypot spam protection */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
      />

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-3 outline-none transition focus:border-black dark:border-white/20 dark:focus:border-white"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-3 outline-none transition focus:border-black dark:border-white/20 dark:focus:border-white"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell me a little about your project or opportunity..."
          className="w-full resize-none rounded-xl border border-black/10 bg-transparent px-4 py-3 outline-none transition focus:border-black dark:border-white/20 dark:focus:border-white"
        />
      </div>
      <HCaptcha
        sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
        reCaptchaCompat={false}
        ref={captchaRef}
        onVerify={(token) => setCaptchaToken(token)}
        onExpire={() => setCaptchaToken("")}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>

      <div aria-live="polite" className="min-h-6 text-sm">
        {message && (
          <p role={status === "error" ? "alert" : undefined}>{message}</p>
        )}
      </div>
    </form>
  );
}

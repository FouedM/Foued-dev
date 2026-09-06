"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL } from "../data/constant";

type Status = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full py-16">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-primary">
        Contact
      </h2>
      <p className="mb-10 text-sm text-neutral-500 dark:text-neutral-400">
        Open to new opportunities, collaborations, or just a good conversation.
      </p>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Left: contact info */}
        <div className="flex flex-col gap-6">
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            The best way to reach me is by email. You can also find me on
            LinkedIn or GitHub.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="mailto:fouedmelki@gmail.com"
              className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300 transition-colors hover:text-primary"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700">
                <Mail size={15} />
              </div>
              fouedmelki@gmail.com
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300 transition-colors hover:text-primary"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700">
                <svg
                  viewBox="0 0 24 24"
                  width={15}
                  height={15}
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              linkedin.com/in/fouedmelki
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300 transition-colors hover:text-primary"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700">
                <svg
                  viewBox="0 0 24 24"
                  width={15}
                  height={15}
                  fill="currentColor"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
              github.com/fouedm
            </a>
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="text-xs font-medium text-neutral-600 dark:text-neutral-300"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-xs font-medium text-neutral-600 dark:text-neutral-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-xs font-medium text-neutral-600 dark:text-neutral-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              className="resize-none rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
            />
          </div>

          {status === "success" && (
            <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2.5 text-sm text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
              <CheckCircle size={15} />
              Message sent, I'll get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2.5 text-sm text-red-600 dark:bg-red-950 dark:text-red-400">
              <AlertCircle size={15} />
              Something went wrong. Please try again.
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            <Send size={14} />
            {status === "loading" ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

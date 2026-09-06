"use client";

import { useTranslation } from "react-i18next";
import { Mail, ArrowDown } from "lucide-react";
import TypewriterTitle from "../components/TypewriterTitle";
import { GITHUB_URL, LINKEDIN_URL } from "../data/constant";

const Intro = () => {
  const { t } = useTranslation();

  return (
    <section id="intro" className="flex min-h-screen w-full items-center">
      <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
        {/* Left: text content */}

        <div className="flex flex-col gap-6">
          {/* Availability badge */}
          <div className="flex items-center gap-2 w-fit rounded-full border border-emerald/30 bg-emerald/5 px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            <span className="text-xs font-medium text-emerald">
              {t("open_to_opportunities")}
            </span>
          </div>

          {/* Greeting + name */}
          <div>
            <p className="text-lg text-neutral-500 dark:text-neutral-400">
              {t("intro")}
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
              {t("full_name")}
            </h1>
          </div>

          {/* Animated title */}
          <p className="text-xl min-h-[2rem]">
            <TypewriterTitle />
          </p>

          {/* Bio */}
          <div className="flex flex-col gap-2 text-neutral-600 leading-relaxed dark:text-neutral-300">
            <p>{t("intro_desc_1")}</p>
            <p>{t("intro_desc_2")}</p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-md"
            >
              {t("view_my_work")}
              <ArrowDown size={15} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-lg border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
            >
              {t("contact_me")}
              <Mail size={15} />
            </a>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-6 md:grid md:grid-cols-[1fr_auto] md:items-start md:gap-8">
          {/* Avatar */}
          <div className="h-64 w-full sm:h-72 md:h-96">
            <img
              src="/avatar.png"
              alt="Foued Melki"
              className="h-full w-full rounded-xl object-cover object-top"
            />
          </div>

          <div className="flex flex-row items-center justify-center gap-4 md:flex-col md:justify-start">
            {/* Social links */}
            <div className="flex flex-row gap-3 md:flex-col md:gap-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary text-primary transition-all hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary text-primary transition-all hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:contact@fouedmelki.dev"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary text-primary transition-all hover:bg-primary hover:text-white"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

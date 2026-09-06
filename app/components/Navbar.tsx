"use client";

import { useEffect, useRef, useState } from "react";
import { Sun, Moon, Globe, Download } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import i18n from "@/i18n";

const LINKS = [
  { label: "Home", href: "#intro" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
  { code: "de", label: "Deutsch" },
];

const Navbar = () => {
  const [active, setActive] = useState("intro");
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const { dark, toggle } = useTheme();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    LINKS.forEach(({ href }) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (code: string) => {
    setCurrentLang(code);
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
        {/* Logo */}
        <a href="#intro" className="text-sm font-bold text-primary">
          fouedmelki.dev
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-6 sm:flex">
          {LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={href}
                href={href}
                className={`text-sm transition-colors ${
                  isActive
                    ? "font-semibold text-primary"
                    : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Resume download */}
          <a
            href="/resume_foued_melki.pdf"
            download
            className="hidden items-center gap-1.5 rounded-lg border border-primary px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white sm:flex"
          >
            <Download size={13} />
            Resume
          </a>

          {/* Language selector */}
          {/* <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen((o) => !o)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
              aria-label="Select language"
            >
              <Globe size={16} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-10 z-50 w-36 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-900">
                {LANGUAGES.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => changeLanguage(code)}
                    className={`flex w-full items-center justify-between px-3 py-2 text-sm transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800 ${
                      currentLang === code
                        ? "font-semibold text-primary"
                        : "text-neutral-600 dark:text-neutral-300"
                    }`}
                  >
                    {label}
                    <span className="text-xs uppercase text-neutral-400">{code}</span>
                  </button>
                ))}
              </div>
            )}
          </div> */}

          {/* Dark mode toggle */}
          {/* <button
            onClick={toggle}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button> */}

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-1.5 sm:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-5 bg-neutral-700 transition-transform dark:bg-neutral-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-neutral-700 transition-opacity dark:bg-neutral-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-neutral-700 transition-transform dark:bg-neutral-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="flex flex-col border-t border-neutral-100 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950 sm:hidden">
          {LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`py-2 text-sm transition-colors ${
                  isActive
                    ? "font-semibold text-primary"
                    : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Navbar;

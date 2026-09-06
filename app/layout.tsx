import type { Metadata } from "next";
import { Anta } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import I18nProvider from "./components/i18nProvider";
import Navbar from "./components/Navbar";

const anta = Anta({
  weight: "400",
  variable: "--font-anta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foued Melki",
  description: "Foued Melki, Senior Full stack web develop",
  icons: {
    icon: "/cmake.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var s = localStorage.getItem('theme');
            var p = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (s === 'dark' || (!s && p)) document.documentElement.classList.add('dark');
          })();
        ` }} />
      </head>
      <body className={`${anta.variable} bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100`} style={{ fontFamily: "var(--font-anta), sans-serif" }}>
        <Navbar />
        <I18nProvider>{children}</I18nProvider>
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src="https://cloud.umami.is/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}

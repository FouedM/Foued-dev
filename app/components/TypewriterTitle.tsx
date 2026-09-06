"use client";

import { useEffect, useState } from "react";

const TITLES = [
  "Senior Fullstack Developer",
  "Clean Architecture Advocate",
  "Open to New Projects",
];

const TypewriterTitle = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];

    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        60,
      );
      return () => clearTimeout(t);
    }

    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % TITLES.length);
    }
  }, [displayed, deleting, titleIndex]);

  return (
    <span className="font-medium">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterTitle;

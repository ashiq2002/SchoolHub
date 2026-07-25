"use client";

import { MoonStars, Sun } from "@phosphor-icons/react";
import { useSyncExternalStore } from "react";
import { IconButton } from "@/components/ui/icon-button";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    (onChange) => {
      const observer = new MutationObserver(onChange);
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
      window.addEventListener("storage", onChange);
      return () => { observer.disconnect(); window.removeEventListener("storage", onChange); };
    },
    () => document.documentElement.dataset.theme === "dark" ? "dark" : "light",
    () => "light",
  );
  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("schoolhub-theme", next);
  };
  return <IconButton label={theme === "dark" ? "Use light theme" : "Use dark theme"} onClick={toggle}>{theme === "dark" ? <Sun size={20} /> : <MoonStars size={20} />}</IconButton>;
}

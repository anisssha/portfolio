import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeToggleButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted && resolvedTheme === "dark";

  const handleToggle = () => {
    const nextTheme = isDarkMode ? "light" : "dark";
    const toggle = document.querySelector(".mode-toggle-label");

    if (toggle) {
      const { left, top, width, height } = toggle.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--theme-toggle-x",
        `${left + width / 2}px`
      );
      document.documentElement.style.setProperty(
        "--theme-toggle-y",
        `${top + height / 2}px`
      );
    }

    if (document.startViewTransition) {
      document.startViewTransition(() => setTheme(nextTheme));
      return;
    }

    setTheme(nextTheme);
  };

  return (
    <div className="theme-toggle">
      <input
        id="theme-toggle"
        type="checkbox"
        className="mode-toggle"
        aria-label="Toggle dark mode"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <label className="mode-toggle-label" htmlFor="theme-toggle">
        <svg
          width="50"
          height="30"
          viewBox="0 0 300 180"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="theme-toggle-background">
              <stop className="bg-stop-start" offset="0%" />
              <stop className="bg-stop-end" offset="100%" />
            </linearGradient>
            <filter id="theme-toggle-glow">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="8"
                floodColor="#ffffff"
                floodOpacity="0.75"
              />
            </filter>
            <filter id="theme-toggle-glow-mini">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="0.5"
                floodColor="#ffffff"
                floodOpacity="0.5"
              />
            </filter>
          </defs>
          <rect
            className="bg"
            width="300"
            height="180"
            rx="90"
            ry="90"
            fill="url(#theme-toggle-background)"
          />
          <circle
            className="source"
            cx="0"
            cy="0"
            r="70"
            fill="#ffffff"
            style={{ filter: "url(#theme-toggle-glow)" }}
          />
          <g className="stars">
            <circle
              className="star-1"
              cx="190"
              cy="50"
              r="4"
              fill="#ffffff"
              style={{ filter: "url(#theme-toggle-glow-mini)" }}
            />
            <circle
              className="star-2"
              cx="250"
              cy="70"
              r="4"
              fill="#ffffff"
              style={{ filter: "url(#theme-toggle-glow-mini)" }}
            />
            <circle
              className="star-3"
              cx="220"
              cy="130"
              r="6"
              fill="#ffffff"
              style={{ filter: "url(#theme-toggle-glow-mini)" }}
            />
          </g>
        </svg>
      </label>
    </div>
  );
};

export default ThemeToggleButton;

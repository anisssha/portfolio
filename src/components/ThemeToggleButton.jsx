import { useEffect, useRef, useState } from "react";
//import styled from "@emotion/styled"; // Or use CSS modules if preferred

const ThemeToggleButton = () => {
  const buttonRef = useRef(null);
  const [theme, setTheme] = useState("light");

  // Load theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const isDarkMode = theme === "dark";

  const handleToggle = () => {
    const nextTheme = isDarkMode ? "light" : "dark";

    if (buttonRef.current) {
      const { top, left, width, height } =
        buttonRef.current.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      document.documentElement.style.setProperty("--bubble-x", `${x}px`);
      document.documentElement.style.setProperty("--bubble-y", `${y}px`);
    }

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme(nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
      });
    } else {
      setTheme(nextTheme);
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("theme", nextTheme);
    }
  };

  return (
    <StyledToggle onClick={handleToggle} ref={buttonRef}>
      <input
        type="checkbox"
        className="mode-toggle"
        id="checkbox"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <label className="mode-toggle-label" htmlFor="checkbox">
        <svg
          width="50"
          height="30"
          viewBox="0 0 300 180"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Theme toggle button icon</title>
          <defs>
            <linearGradient id="bg-night">
              <stop className="bg-stop-start" offset="0%" />
              <stop className="bg-stop-end" offset="100%" />
            </linearGradient>
            <filter id="glow">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="8"
                floodColor="#ffffff"
                floodOpacity="0.75"
              />
            </filter>
            <filter id="glow-mini">
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
            fill="url(#bg-night)"
          />
          <circle
            className="source"
            cx="0"
            cy="0"
            r="70"
            fill="#ffffff"
            style={{ filter: "url(#glow)" }}
          />
          <g className="stars">
            <circle
              className="star-1"
              cx="190"
              cy="50"
              r="4"
              fill="#ffffff"
              style={{ filter: "url(#glow-mini)" }}
            />
            <circle
              className="star-2"
              cx="250"
              cy="70"
              r="4"
              fill="#ffffff"
              style={{ filter: "url(#glow-mini)" }}
            />
            <circle
              className="star-3"
              cx="220"
              cy="130"
              r="6"
              fill="#ffffff"
              style={{ filter: "url(#glow-mini)" }}
            />
          </g>
        </svg>
      </label>
    </StyledToggle>
  );
};

export default ThemeToggleButton;

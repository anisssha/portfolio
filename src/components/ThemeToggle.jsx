import { useEffect, useRef, useState } from "react";
import Icon from "supercons"; // Make sure supercons is installed

const ThemeToggle = () => {
  const buttonRef = useRef(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // On load, check localStorage or system preference
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
    <button
      onClick={handleToggle}
      ref={buttonRef}
      type="button"
      className="flex w-full items-center gap-2 px-3 py-2 text-neutral-700 hover:text-neutral-900 lg:transition-all lg:duration-300 lg:hover:scale-105 lg:hover:rounded-lg lg:hover:bg-gray-200 dark:text-neutral-400 dark:hover:text-neutral-300 lg:dark:hover:bg-zinc-800"
    >
      <Icon glyph={isDarkMode ? "sun-fill" : "moon-fill"} size={22} />
      {/* <div className="flex">{isDarkMode ? "Light Mode" : "Dark Mode"}</div> */}
    </button>
  );
};

export default ThemeToggle;

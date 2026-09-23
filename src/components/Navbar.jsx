import logo from "../assets/profileLogo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  return (
    <nav className="mb-12 flex items-center justify-between py-5 sm:mb-20 sm:py-6">
      <div className="flex flex-shrink-0 h-4 items-center">
        <img src={logo} alt="logo" className="w-10" />
      </div>

      <div className="ml-4 flex items-center justify-center gap-3 text-xl sm:ml-8 sm:gap-4 sm:text-2xl">
        <a
          href="https://www.linkedin.com/in/anisha-shrestha-32281125b/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[var(--secondary)]"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/anisssha"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[var(--secondary)]"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/stha_anissha"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[var(--secondary)]"
        >
          <FaInstagram />
        </a>
        <ThemeToggleButton />
      </div>
    </nav>
  );
};

export default Navbar;

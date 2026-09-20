import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiMail, FiSend } from "react-icons/fi";
import { CONTACT } from "../constants";

const fieldAnimation = (delay) => ({
  initial: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const Contact = () => {
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    form.append("_subject", `Portfolio contact from ${form.get("name")}`);
    form.append("_replyto", form.get("email"));
    form.append("_captcha", "false");
    setSubmitted("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });

      if (!response.ok) {
        throw new Error("Message delivery failed");
      }

      setSubmitted("success");
      formElement.reset();
    } catch {
      setSubmitted("error");
    }
  };

  return (
    <section
      className="contact-section section-border border-b py-16 sm:py-24"
      id="contact"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          className="contact-heading mb-8 text-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="accent-text py-2 text-3xl font-semibold tracking-tight sm:text-5xl">
            Stay Connected
          </p>
          <p className="muted-text text-base opacity-80 sm:text-lg">
            Submit the form below to get in touch
          </p>
        </motion.div>

        <div className="contact-card mx-auto flex min-w-0 max-w-5xl flex-col gap-8 rounded-md border p-5 shadow-md sm:p-8 md:flex-row md:gap-12">
          <motion.div
            className="contact-visual flex w-full items-center justify-center md:w-[40%]"
            initial={{ opacity: 0, scale: 0.75, x: -60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="contact-illustration" aria-hidden="true">
              <motion.div
                className="contact-orbit contact-orbit-one"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="contact-orbit contact-orbit-two"
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="contact-mail-card"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="contact-mail-card-top">
                  <span className="contact-window-dot" />
                  <span className="contact-window-dot" />
                  <span className="contact-window-dot" />
                </div>
                <div className="contact-mail-icon">
                  <FiMail />
                </div>
                <span className="contact-mail-line contact-mail-line-long" />
                <span className="contact-mail-line contact-mail-line-short" />
                <div className="contact-mail-footer">
                  <span>Message ready</span>
                  <FiCheck />
                </div>
              </motion.div>
              <motion.div
                className="contact-float-bubble contact-float-bubble-top"
                animate={{ y: [0, -12, 0], rotate: [6, 10, 6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FiMail />
              </motion.div>
              <motion.div
                className="contact-float-bubble contact-float-bubble-bottom"
                animate={{ y: [0, 10, 0], rotate: [-8, -4, -8] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <FiSend />
              </motion.div>
            </div>
          </motion.div>

          <form
            className="w-full min-w-0 self-center px-0 py-2 md:w-[60%] md:px-2 md:py-4"
            onSubmit={handleSubmit}
          >
            <motion.input
              {...fieldAnimation(0)}
              className="contact-line-field"
              name="name"
              type="text"
              placeholder="Your Name"
              maxLength="25"
              autoComplete="name"
              required
            />
            <motion.input
              {...fieldAnimation(0.12)}
              className="contact-line-field"
              name="email"
              type="email"
              placeholder="Your Email"
              maxLength="50"
              autoComplete="email"
              required
            />
            <motion.textarea
              {...fieldAnimation(0.24)}
              className="contact-line-field h-40 resize-none"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            />
            <motion.div
              {...fieldAnimation(0.36)}
              className="flex min-w-0 flex-wrap items-center gap-3"
            >
              <button
                className="contact-submit contact-submit-reference mt-6"
                type="submit"
                disabled={submitted === "sending"}
              >
                Let&apos;s Talk
              </button>
              {submitted === "sending" && (
                <span className="muted-text mt-6 text-xs" aria-live="polite">
                  Sending your message...
                </span>
              )}
              {submitted === "success" && (
                <span className="contact-form-success mt-6 text-xs" aria-live="polite">
                  Message sent successfully.
                </span>
              )}
              {submitted === "error" && (
                <span className="contact-form-error mt-6 text-xs" aria-live="polite">
                  Something went wrong. Please try again.
                </span>
              )}
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
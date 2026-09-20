import { useState } from "react";
import { motion } from "framer-motion";
import contactPhoto from "../assets/anishaProfiles.jpg";
import { CONTACT } from "../constants";

const fieldAnimation = (delay) => ({
  initial: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio contact from ${form.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`
    );

    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section
      className="contact-section section-border border-b py-16 sm:py-24"
      id="contact"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          className="mb-6 text-center"
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

        <div className="contact-card mx-auto flex min-w-0 max-w-4xl flex-col gap-6 rounded-md border-t-2 p-4 shadow-md sm:p-6 md:flex-row md:gap-10">
          <motion.div
            className="flex w-full items-center justify-center md:w-[40%]"
            initial={{ opacity: 0, scale: 0.75, x: -60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={contactPhoto}
              alt="Anisha Shrestha"
              className="contact-photo h-44 w-44 rounded-full object-cover sm:h-52 sm:w-52 md:h-64 md:w-64"
              loading="lazy"
            />
          </motion.div>

          <form
            className="w-full min-w-0 px-0 py-2 md:w-[60%] md:px-2 md:py-4"
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
              <button className="contact-submit contact-submit-reference mt-6" type="submit">
                Let&apos;s Talk
              </button>
              {submitted && (
                <span className="muted-text mt-6 text-xs">
                  Opening your email app...
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
import React from "react";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-60">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Stay Connected
      </motion.h1>
      <motion.iframe
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="my-4 w-[95%] h-[44vw] "
        src="https://forms.visme.co/formsPlayer/epq1v6nx-responsive-contact-form"
        frameborder="0"
      ></motion.iframe>
    </div>
  );
};

export default Contact;

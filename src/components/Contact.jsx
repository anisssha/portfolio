import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className=" ">
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
        className="my-4 h-[min(44vw,32rem)] w-full"
        loading="lazy"
        frameBorder="0"
      ></motion.iframe>
    </div>
  );
};

export default Contact;

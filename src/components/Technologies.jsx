import { motion } from "framer-motion";
import {
  RiReactjsLine,
  // RiJavascriptLine,
  // RiGitBranchLine,
} from "react-icons/ri";
import { TbBrandNextjs, TbBrandDocker } from "react-icons/tb";
import {
  // SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const techStack = [
  // {
  //   icon: <RiJavascriptLine className="text-7xl text-yellow-400" />,
  //   duration: 2,
  // },
  { icon: <SiTypescript className="text-7xl text-blue-500" />, duration: 2.5 },
  { icon: <SiTailwindcss className="text-7xl text-cyan-400" />, duration: 3 },
  { icon: <RiReactjsLine className="text-7xl text-cyan-300" />, duration: 2.5 },

  { icon: <FaNodeJs className="text-7xl text-green-500" />, duration: 2 },
  {
    icon: <SiExpress className="text-7xl text-white bg-black p-1 rounded-md" />,
    duration: 2,
  },
  // { icon: <SiMongodb className="text-7xl text-green-600" />, duration: 3 },
  { icon: <TbBrandNextjs className="text-7xl" />, duration: 2.5 },
  // {
  //   icon: <RiGitBranchLine className="text-7xl text-orange-500" />,
  //   duration: 3,
  // },

  { icon: <TbBrandDocker className="text-7xl text-blue-400" />, duration: 3 },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-3xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6 p-6 pt-2"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-3"
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;

// import { HERO_CONTENT } from "../constants";
// import profilePic from "../assets/anishaProfiles.jpg";
// import { motion } from "framer-motion";

// const container = (delay) => ({
//   hidden: { x: -100, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.5, delay: delay },
//   },
// });

// const Hero = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//       <div className="flex flex-wrap lg:flex-nowrap">
//         {/* Text Section */}
//         <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
//           <motion.h1
//             variants={container(0)}
//             initial="hidden"
//             animate="visible"
//             className="pb-14 text-6xl font-thin tracking-tight lg:mt-13 lg:text-5xl"
//           >
//             Anisha Kumari Shrestha
//           </motion.h1>
//           <motion.span
//             variants={container(0.5)}
//             initial="hidden"
//             animate="visible"
//             dragConstraints={{ left: -100, right: 100 }}
//             className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
//           >
//             Full Stack Developer
//           </motion.span>
//           <motion.p
//             variants={container(1)}
//             initial="hidden"
//             animate="visible"
//             className="my-2 max-w-xl py-6 font-light tracking-tighter"
//           >
//             {HERO_CONTENT}
//           </motion.p>
//         </div>

//         {/* Image Section */}
//         <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center lg:p-8">
//           <div className="max-w-sm lg:max-w-md mt-[-20px]">
//             <motion.img
//               initial={{ x: 100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1, delay: 1.2 }}
//               src={profilePic}
//               alt="Anisha Shrestha"
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/anishaProfiles.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 lg:mb-24">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-6 text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
          >
            Anisha Kumari Shrestha
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-3xl font-medium text-transparent"
          >
            Full Stack Developer
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-4 max-w-xl px-4 lg:px-0 font-light text-base tracking-tight text-neutral-300"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg"
          >
            <img
              src={profilePic}
              alt="Anisha Shrestha"
              className="w-full h-full object-cover mix-blend-lighten brightness-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

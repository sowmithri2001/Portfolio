import { motion } from "framer-motion";
import Typed from "react-typed";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  const floatVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: [0, -10, 0],
      opacity: 1,
      transition: {
        y: {
          duration: 1.8,
          yoyo: Infinity,
          ease: "easeInOut",
        },
        opacity: { duration: 1.5 },
      },
    },
  };

  const typedOptions = {
    strings: ["Software Engineer.", "Developer.", "Artist.", "Leader."],
    typeSpeed: 100,
    startDelay: 2,
    backSpeed: 100,
  };

  return (
    <section className={`relative w-full h-screen mx-auto z-10`}>
      <div
        className={`absolute inset-0 top-[150px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ff0132]" />
          <div className="w-1 sm:h-80 h-90 bg-gradient-to-b from-red-500 to-red-800" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#ff0132]">Sowmithri</span>
          </h1>
          <motion.p
            className={`${styles.sectionHeadText} mt-2 text-white-100`}
            variants={floatVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            whileInView="visible"
          >
            a <Typed {...typedOptions} loop className="text-[#ff0132]" />
            <br className="sm:block hidden" />
          </motion.p>
          <div className="mt-4 text-secondary text-[17px] max-w-xl leading-[30px]">
            Exploring the binary world with zeal, I'm a Front-End React
            Developer and Software Engineer fluent in the React js and the
            precision of DSA with C++. My passion lies in crafting intuitive
            digital experiences through the art and science of coding, bridging
            user needs with innovative technical solutions.
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "");

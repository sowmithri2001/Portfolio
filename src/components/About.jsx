import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { me } from "../assets";
import "./About.css";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div
        className="sm:px-16 px-6 sm:py-16 py-20"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "150px",
        }}
      >
        <div>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-xl leading-[30px]"
          >
            Driven ReactJS Developer and Software Engineer with 1 year of
            hands-on experience in building scalable, performant web
            applications. Proficient in leveraging ReactJS and a solid
            understanding of data structures and algorithms, I excel in
            developing sophisticated solutions that precisely address client
            needs. Eager to innovate and apply cutting-edge practices, I am
            dedicated to contributing to projects that push technological
            boundaries and deliver exceptional user experiences.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-xl leading-[30px]"
          >
            Proficient with modern technologies like ReactJS, Redux,
            TailwindCSS, and Material UI, I focus on crafting clean,
            well-documented, and maintainable code. My approach ensures
            applications are scalable and easily understood by others, fostering
            effective teamwork and future enhancements.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-xl leading-[30px]"
          >
            Seeking a passionate ReactJS Developer and Software Engineer
            committed to building outstanding web applications in a lively,
            fast-paced setting? I'm your ideal candidate. Let's get in touch!
          </motion.p>
        </div>
        <img src={me} alt="Workflow" className="about-me-img" />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

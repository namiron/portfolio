import React from "react";
import aboutStyles from "./styles/about.module.scss";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import inarmy from "../image/i_in_army.jpg";
import in_freelance from "../image/code2.webp";

const About = ({ theme }) => {
  //------------------------------------

  const [hasAnimated, setHasAnimated] = React.useState(false);

  const about = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        delay: custom * 0.3,
        duration: custom * 0.3,
      },
    }),
  };

  const handleAnimationComplete = () => {
    setHasAnimated(true);
  };

  const aboutStyle =
    theme === "light"
      ? {
          background: "rgb(48, 46, 46)",
          color: "#d9d9d9",
        }
      : {
          background: "#d9d9d9",
          color: "rgb(48, 46, 46)",
        };

  //------------------------------------

  return (
    <motion.div
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      whileInView={!hasAnimated ? "visible" : undefined}
      onAnimationComplete={handleAnimationComplete}
      custom={1}
      variants={about}
      className={aboutStyles.aboutWrapper}
    >
      <Element name="about" className={aboutStyles.about} style={aboutStyle}>
        <div className={aboutStyles.blockFirst}>
          <p className={aboutStyles.textFirst}>
            Hi! I am a front-end developer specializing in building web
            applications and websites using React.js. Out of all the subjects I
            studied at university, web development was my favorite, so I decided
            to continue studying this field.
          </p>
          <div className={aboutStyles.imgFirst}>
            <img src={inarmy} alt="inarmy" />
          </div>
        </div>

        <div className={aboutStyles.blockSecond}>
          <div className={aboutStyles.imgSecond}>
            <img src={in_freelance} alt="in_freelance" />
          </div>
          <p className={aboutStyles.secondText}>
            Since then, I have gained a lot of experience. I have collaborated
            with different teams and used different technologies to achieve the
            project goals. However, I continue to strive to grow by regularly
            upgrading my skills through courses and ongoing training.
          </p>
        </div>
      </Element>
    </motion.div>
  );
};

export default About;

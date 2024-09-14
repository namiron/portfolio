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
            Hi! I am a Full Stack Developer specializing in building web
            applications and websites using React.js. I moved to Israel in 2016,
            where I learned Hebrew. I started learning web development in 2021
            and quickly discovered my passion for it. I paid attention to
            development even while in the army.
          </p>
          <div className={aboutStyles.imgFirst}>
            <img src={inarmy} alt="inarmy" />
          </div>
        </div>

<<<<<<< HEAD
        <div className={aboutStyles.blockSecond}>
          <div className={aboutStyles.imgSecond}>
            <img src={in_freelance} alt="in_freelance" />
          </div>
          <p className={aboutStyles.secondText}>
            I have three years of freelancing experience. I have collaborated
            with friends and freelancers around the world, including in Israel,
            on projects using a variety of technologies. I am driven by a
            constant desire for self-improvement and growth.
          </p>
        </div>
      </Element>
    </motion.div>
  );
=======
    //------------------------------------

    return (
        <motion.div
            initial='hidden'
            animate={hasAnimated ? 'visible' : 'hidden'}
            whileInView={!hasAnimated ? 'visible' : undefined}
            onAnimationComplete={handleAnimationComplete}
            custom={1}
            variants={about}
            className={aboutStyles.aboutWrapper}
        >
            <Element name='about' className={aboutStyles.about} style={aboutStyle}>
                <div className={aboutStyles.blockFirst}>
                    <p className={aboutStyles.textFirst}>
Hi! I am a front-end developer specializing in building web 
                        applications and websites using React.js.
                        I started learning web development at university.
                        Out of all the subjects I studied, web development was my favorite,
                        so I decided to continue learning this field.

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
Since graduating, I have gained extensive experience, including working as a freelancer.
                        I have collaborated with various teams and utilized different technologies to achieve project goals. 
                        Although my formal education was completed some time ago,
                        I continue to strive for growth by regularly upgrading my skills through courses and ongoing learning.
                    </p>
                </div>

            </Element>
        </motion.div>
    );
>>>>>>> e1501b818265472d22765c7302cdec1eb6569a85
};

export default About;

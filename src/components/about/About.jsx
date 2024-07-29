import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { DiNpm } from "react-icons/di";
import aboutStyles from './styles/about.module.scss'
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

const About = () => {
    //------------------------------------
    const [hasAnimated, setHasAnimated] = React.useState(false);

    const about = {
        hidden: {
            opacity: 0,
        },
        visible: custom => ({
            opacity: 1,
            transition: {
                delay: custom * 0.3,
                duration: custom * 0.3
            }
        }),

    }
    const handleAnimationComplete = () => {
        setHasAnimated(true);
    };
    //------------------------------------

    return (
        <motion.div
            initial='hidden'
            animate={hasAnimated ? 'visible' : undefined}
            whileInView={!hasAnimated ? 'visible' : undefined}
            onAnimationComplete={handleAnimationComplete}
            custom={1}
            duration={1}
            variants={about}
            delay={2}
            className={aboutStyles.about}>

            <Element
                name='about'
                className={aboutStyles.aboutText}

            >
                Specializes in <FaReact className={aboutStyles.image} /> demonstrating skills in creating efficient and scalable web applications.
                <br />
                Continuously improves in development by learning to work with new modules<DiNpm className={aboutStyles.image} />
                in conjunction with <FaReact className={aboutStyles.image} />
                <br />
                I consider my desire for <FaCode className={aboutStyles.image} /> self-improvement to be one of my strengths,
                always ready for new challenges and opportunities for professional growth.
            </Element>
        </motion.div>


    )
}

export default About;
import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { DiNpm } from "react-icons/di";
import photoThree from '../image/npm.png'
import aboutStyles from './styles/about.module.scss'
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

const About = () => {

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
    return (
        <motion.div initial='hidden'
            whileInView='visible'
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
                Continuously improves in development by learning to work with new modules and technologies <DiNpm className={aboutStyles.image} />
                in conjunction with <FaReact className={aboutStyles.image} />

                I consider my desire for <FaCode className={aboutStyles.image} /> self-improvement to be one of my strengths,
                always ready for new challenges and opportunities for professional growth.
            </Element>
        </motion.div>


    )
}

export default About;
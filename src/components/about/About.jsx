import React from 'react'
import aboutStyles from './styles/about.module.scss'
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import inarmy from '../image/i_in_army.jpg'
import in_freelance from '../image/code2.webp'

const About = ({ theme }) => {
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
                duration: custom * 0.3,
            },
        }),
    };

    const handleAnimationComplete = () => {
        setHasAnimated(true);
    };

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
            <Element name='about' className={aboutStyles.about} style={theme === 'light' ? {
                background: 'rgb(48, 46, 46)',
                color: '#d9d9d9'
            } : {
                background: '#d9d9d9',
                color: 'rgb(48, 46, 46)'
            }}>
                <div className={aboutStyles.blockFirst}>
                    <p className={aboutStyles.textFirst}>
                        Hi!I am a Full Stack developer specializing in
                        building web applications and websites using React.js.
                        I moved to Israel in 2016, where I learned Hebrew.
                        I started learning web development in 2019 and quickly discovered my passion for it.
                        I paid attention to development even while in the army.
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
                        For the past five years, I've immersed myself in this field, including three years of freelance experience.
                        I've collaborated with friends and freelancers globally, including in Israel, working on projects using Figma and GitHub.
                        What drives me is a constant pursuit of self-improvement and growth.
                    </p>
                </div>

            </Element>
        </motion.div>
    );
};

export default About;
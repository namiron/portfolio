import React from 'react';
import titleStyles from './styles/title.module.scss';
import Contents from '../contacts/Contents';
import { motion } from 'framer-motion';
import { SUB_TITLE, TITLE } from '../common/constants';

const Titles = () => {
    //-------------------------------------
    const [hasAnimated, setHasAnimated] = React.useState(false);

    const titleAnimation = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.3,
                duration: custom * 0.3
            }
        }),
    };

    const handleAnimationComplete = () => {
        setHasAnimated(true);
    };
    //-------------------------------------

    return (
        <>
            <Contents />
            <motion.article
                initial='hidden'
                animate={hasAnimated ? 'visible' : undefined}
                whileInView={!hasAnimated ? 'visible' : undefined}
                onAnimationComplete={handleAnimationComplete}
                className={titleStyles.heading}
            >
                <motion.h1 custom={1} variants={titleAnimation} className={titleStyles.title}>
                    {TITLE}
                </motion.h1>
                <motion.h2 custom={2} variants={titleAnimation} className={titleStyles.subTitle}>
                    {SUB_TITLE}
                </motion.h2>
            </motion.article>
        </>
    );
};

export default Titles;

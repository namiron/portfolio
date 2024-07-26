import React from 'react'
import footerStyles from './styles/footer.module.scss'
import { Element } from 'react-scroll';
import { motion } from 'framer-motion'
import { BIG_TITLE, DESINER, GITHUB, GMAIL, LINKEDIN, MY_KISKA } from '../common/constants';
import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
    //----------------------------------
    const titleFooter = {
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

    }

    //----------------------------------

    return (
        <motion.footer
            initial='hidden'
            whileInView='visible'
            className={footerStyles.footer}>
            <div className={footerStyles.container}>
                <Element name="contacts" className={footerStyles.heading}>
                    <motion.h2 custom={1} duration={1} variants={titleFooter} className={footerStyles.bigText}>{BIG_TITLE}</motion.h2>
                </Element>
                <div className={footerStyles.links}>
                    <div className={footerStyles.linksSocial}>
                        <a href="https://github.com/namiron?tab=repositories"
                            target='blank' className={footerStyles.github}> <MdOutlineArrowOutward style={{ fontSize: '25px' }} /> {GITHUB}</a>

                        <a href="https://www.linkedin.com/in/alexander-samsonov-60239a235/"
                            target='blank' className={footerStyles.linkedin}><MdOutlineArrowOutward style={{ fontSize: '25px' }} /> {LINKEDIN}</a>
                    </div>
                </div>
                <motion.div custom={1} duration={1} variants={titleFooter} className={footerStyles.mail}>
                    <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=alexandersam.dev@gmail.com"
                        target='blank' className={footerStyles.gmail}>{GMAIL}</a>
                </motion.div>
            </div>

        </motion.footer>
    )
}

export default Footer
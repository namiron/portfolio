
import React from 'react'
import cubStyles from './styles/cub.module.scss'
import safari from '../../image/safari.png'
import sueno from '../../image/sueno.png'
import timer from '../../image/timer.png'
import chat from '../../image/chat.png'
import quiz from '../../image/quiz.png'
import { motion } from 'framer-motion'
import cloud_store from '../../image/cloud-storage.jpg'

const Cube = ({ rotateX, rotateY }) => {


    return (
        <motion.div
            initial='start'
            whileInView='end'
            className={cubStyles.boxAndContent}>

            <div
                className={cubStyles.cubeBox}
                style={{
                    transition: `transform 0.3s ease 0s`,
                    transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
                }}
            >
                <a href='https://namiron.github.io/Sueno/' target="_blank" rel="noopener noreferrer" className={`${cubStyles.side} ${cubStyles.top}`}><img className={cubStyles.image} src={sueno} alt="" /></a>
                <a href='https://safari-phi.vercel.app/' target="_blank" rel="noopener noreferrer" className={`${cubStyles.side} ${cubStyles.button} `}><img className={cubStyles.image} src={safari} alt="" /></a>
                <a href='https://timer-lyart-seven.vercel.app/' target="_blank" rel="noopener noreferrer" className={`${cubStyles.side} ${cubStyles.front} `}><img className={cubStyles.image} src={timer} alt="" /></a>
                <a href='https://github.com/namiron/cloudStore_client' target="_blank" rel="noopener noreferrer" className={`${cubStyles.side} ${cubStyles.left}`}><img className={cubStyles.image} src={cloud_store} alt="" /></a>
                <a href='https://client-chat-seven.vercel.app/' target="_blank" rel="noopener noreferrer" className={`${cubStyles.side} ${cubStyles.right}`}><img className={cubStyles.image} src={chat} alt="" /></a>
                <a href='https://quiz-type-script-green.vercel.app/' target="_blank" rel="noopener noreferrer" className={`${cubStyles.side} ${cubStyles.back}`}><img className={cubStyles.image} src={quiz} alt="" /></a>
            </div>
        </motion.div>
    );
};

export default Cube;

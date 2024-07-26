import React from 'react'
import safari from '../../image/safari.png'
import sueno from '../../image/sueno.png'
import timer from '../../image/timer.png'
import chat from '../../image/chat.png'
import listStyles from './styles/list.module.scss'


const List = () => {
    return (
        <ul className={listStyles.list} >

            <li className={listStyles.items}>
                <a href='https://namiron.github.io/Sueno/' target="_blank" className={listStyles.curtain}>Sueno</a>
                <div><img className={listStyles.image} src={sueno} alt="" /></div>
            </li>
            <li className={listStyles.items}>
                <a href='https://timer-lyart-seven.vercel.app/' target="_blank" className={listStyles.curtain}></a>
                <div><img className={listStyles.image} src={timer} alt="" /></div>
            </li>
            <li className={listStyles.items}>
                <a href='https://safari-theta.vercel.app/' target="_blank" className={listStyles.curtain}></a>
                <div><img className={listStyles.image} src={safari} alt="" /></div>
            </li>
            <li className={listStyles.comingSoon}>
                <a href='https://github.com/namiron/cloudStore_client' target="_blank" className={listStyles.coming}>coming soon</a>
            </li>
            <li className={listStyles.items}>
                <a href='https://client-chat-seven.vercel.app/' target="_blank" className={listStyles.curtain}></a>
                <div><img className={listStyles.image} src={chat} alt="" /></div>
            </li>
            <li className={listStyles.comingSoon}>
                <a href='https://namiron.github.io/Sueno/' target="_blank" className={listStyles.coming}>linksSlice</a>
            </li>
        </ul>
    )
}

export default List
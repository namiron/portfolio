import React from 'react'
import Theme from '../themes/Theme'
import styleContents from './styles/contents.module.scss'
import { Link as ScrollLink } from 'react-scroll';
import Audio from '../Audio/Audio';



const Contents = () => {
    //---------------------------

    //---------------------------

    return (
        <div className={styleContents.contacts}>
            <div className={styleContents.container}>
                <ul className={styleContents.list}>
                    <ScrollLink activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500} className={styleContents.link}>about</ScrollLink>
                    <ScrollLink to="works"
                        spy={true}
                        smooth={true}
                        duration={500} className={styleContents.link}>works</ScrollLink>
                    <ScrollLink to="contacts"
                        spy={true}
                        smooth={true}
                        duration={500} className={styleContents.link}>contacts</ScrollLink>
                    <div className={styleContents.naw}>
                        <Theme />
                        <Audio />
                    </div>

                </ul>
            </div>
        </div>
    )
}

export default Contents
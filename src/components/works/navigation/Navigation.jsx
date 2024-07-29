import React from 'react'
import navStyle from './styles/navigation.module.scss'


const Navigation = ({ setRotateY, setRotateX }) => {
    //-----------------------------
    const changeRotate = (x = 10, y = 10) => {
        setRotateX(x);
        setRotateY(y);
    };
    //-----------------------------

    return (
        <nav className={navStyle.menu}>
            <h3 className={navStyle.title}>my works</h3>
            <ul className={navStyle.list}>
                <li className={navStyle.item} onClick={() => changeRotate(85, 10)}>safari </li>
                <li className={navStyle.item} onClick={() => changeRotate(-100, 20)}>sueno</li>
                <li className={navStyle.item} onClick={() => changeRotate(-10, -70)}>onlineChat</li>
                <li className={navStyle.item} onClick={() => changeRotate(-5, 100)}>cloudStore</li>
                <li className={navStyle.item} onClick={() => changeRotate(-5, 10)}>timer</li>
                <li className={navStyle.item} onClick={() => changeRotate(170, 20)}>quiz</li>
            </ul>
        </nav>
    );
};

export default Navigation;
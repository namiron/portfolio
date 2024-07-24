
import React from 'react'
import worksStyle from './styles/works.module.scss'
import Cube from './cub/Cube';
import Navigation from './navigation/Navigation';
import Content from '../content/Content';



const Works = () => {
    //-----------------------------------
    const [rotateX, setRotateX] = React.useState(-5)
    const [rotateY, setRotateY] = React.useState(10)

    //-----------------------------------

    return (
        <div className={worksStyle.works}>
            <div className={worksStyle.wrapper}>
                <div className={worksStyle.container}>
                    <Cube rotateX={rotateX} rotateY={rotateY} />
                    <Navigation setRotateY={setRotateY} setRotateX={setRotateX} />
                </div>
                <Content rotateX={rotateX} rotateY={rotateY} />
            </div>

        </div>
    )
}

export default Works
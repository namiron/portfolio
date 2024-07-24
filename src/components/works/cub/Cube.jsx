
import React from 'react'
import cubStyles from './styles/cub.module.scss'

const Cube = ({ rotateX, rotateY }) => {
    return (
        <div className={cubStyles.boxAndContent}>
            <div
                className={cubStyles.cubeBox}
                style={{
                    transition: `transform 0.3s ease 0s`,
                    transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
                }}
            >
                <a href='https://google.com' target="_blank" rel="noopener noreferrer" className={`${cubStyles.side} ${cubStyles.top}`}>sueno</a>
                <a href='https://google.com' target="_blank" rel="noopener noreferrer" className={`${cubStyles.side} ${cubStyles.front}`}>timer</a>
                <a href='https://google.com' target="_blank" rel="noopener noreferrer" className={`${cubStyles.side} ${cubStyles.button}`}>safari</a>
                <a href='https://google.com' target="_blank" rel="noopener noreferrer" className={`${cubStyles.side} ${cubStyles.left}`}>cloudStore</a>
                <a href='https://google.com' target="_blank" rel="noopener noreferrer" className={`${cubStyles.side} ${cubStyles.right}`}>onlineChat</a>
                <a href='https://google.com' target="_blank" rel="noopener noreferrer" className={`${cubStyles.side} ${cubStyles.back}`}>todoList</a>
            </div>
        </div>
    );
};

export default Cube;
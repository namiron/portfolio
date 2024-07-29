import React from 'react'
import itemStyle from './styles/item.module.scss'


const Item = ({ link, image, title, description }) => {
    return (
        <li className={itemStyle.items}>
            <a href={link} target="_blank" rel="noopener noreferrer" className={itemStyle.imageBox}>
                <img src={image} alt={title} />
            </a>
            <div className={itemStyle.content}>
                <div className={itemStyle.heading}>
                    <h2 className={itemStyle.title}>{title}</h2>
                </div>
                <div className={itemStyle.descrItem}>
                    <p className={itemStyle.info} dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>
        </li>
    );
}

export default Item;

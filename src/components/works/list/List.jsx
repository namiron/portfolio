import React from 'react'
import listStyles from './styles/list.module.scss'
import { LINKS, IMAGE_ITEM, NAME_ITEM, dataForMyWork } from '../../common/constants'
import Item from './item/Item'




const List = () => {

    //-----------------------------
    const projects = Object.entries(dataForMyWork);
    //-----------------------------

    return (
        <ul className={listStyles.list}>
            {projects.map(([key, value], i) => (
                <Item
                    key={key}
                    link={LINKS[i]}
                    image={IMAGE_ITEM[i]}
                    title={NAME_ITEM[i]}
                    description={value}
                />
            ))}
        </ul>
    )
}

export default List
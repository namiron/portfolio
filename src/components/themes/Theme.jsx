import React from 'react'
import { FaMoon } from "react-icons/fa";
import { CgSun } from "react-icons/cg";


const Theme = ({ toggleSetTheme, theme }) => {
    //---------------------------


    React.useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])
    //---------------------------

    return (
        <div onClick={toggleSetTheme} >
            {
                theme === 'light' ?
                    <FaMoon />
                    :
                    <CgSun />
            }

        </div>
    )
}

export default Theme
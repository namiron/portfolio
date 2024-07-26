import React from 'react'
import { FaMoon } from "react-icons/fa";
import { CgSun } from "react-icons/cg";

const Theme = () => {
    //---------------------------

    const [theme, setTheme] = React.useState('dark')

    const toggleSetTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

    React.useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])
    //---------------------------

    return (
        <div className='themeWrapper' onClick={toggleSetTheme} >
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
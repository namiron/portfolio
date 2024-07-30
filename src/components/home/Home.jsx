import React from 'react'
import homeStyle from './styles/home.module.scss'
import Works from '../works/Works'
import Titles from '../title/Titles'
import Photo from '../photo/Photo'
import About from '../about/About'
import Footer from '../footer/Footer'
import Contents from '../contacts/Contents'



const Home = () => {
    //--------------------------------------------------
    const [theme, setTheme] = React.useState('dark')

    const toggleSetTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

    React.useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])
    //--------------------------------------------------

    return (
        <div className={homeStyle.home}>
            <header className={homeStyle.header}>
                <Contents theme={theme} toggleSetTheme={toggleSetTheme} />
            </header>
            <main className={homeStyle.main}>
                <div className={homeStyle.firstScreen}>
                    <Titles />
                    <Photo />
                </div>
                <div className={homeStyle.aboutScreen}>
                    <About theme={theme} />
                </div>
                <div className={homeStyle.worksScreen}>
                    <Works />
                </div>
            </main>
            <footer className={homeStyle.footerScreen}>
                <Footer />
            </footer>
        </div>
    )
}

export default Home;
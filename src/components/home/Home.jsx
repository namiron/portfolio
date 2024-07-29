import React from 'react'
import homeStyle from './styles/home.module.scss'
import Works from '../works/Works'
import Titles from '../title/Titles'
import Photo from '../photo/Photo'
import About from '../about/About'
import Footer from '../footer/Footer'



const Home = () => {

    return (
        <div className={homeStyle.home}>
            <main className={homeStyle.main}>
                <div className={homeStyle.firstScreen}>
                    <Titles />
                    <Photo />
                </div>
                <div className={homeStyle.aboutScreen}>
                    <About />
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
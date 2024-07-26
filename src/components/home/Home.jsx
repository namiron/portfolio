import React from 'react'
import homeStyle from './styles/home.module.scss'
import Works from '../works/Works'
import Titles from '../title/Titles'
import Photo from '../photo/Photo'
import About from '../about/About'
import Footer from '../footer/Footer'



const Home = () => {

    return (
        <main className={homeStyle.home}>
            <div className={homeStyle.container}>
                <div className={homeStyle.firstScreen}>
                    <Titles />
                    <Photo />
                </div>
                <About />
                <Works />
                <Footer />
            </div>

        </main>
    )
}

export default Home;
import React from 'react'
import Footer from '../components/Footer'
import HelpBox from '../components/HelpBox'
import HomepageBody from '../components/HomepageBody'
import Navbar from '../components/Navbar'
import SearchPart from '../components/SearchPart'

const HomePage = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column",overflowX:"hidden" }}>
            <Navbar />
            <SearchPart />
            <HomepageBody />
            <Footer />
            <HelpBox />
        </div>
    )
}

export default HomePage
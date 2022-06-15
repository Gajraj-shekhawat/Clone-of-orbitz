import React from 'react'
import Footer from '../components/Footer'
import HomepageBody from '../components/HomepageBody'
import Navbar from '../components/Navbar'
import SearchPart from '../components/SearchPart'

const HomePage = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Navbar />
            <SearchPart />
            <HomepageBody />
            <Footer />
        </div>
    )
}

export default HomePage
import React from 'react'
import HomepageBody from '../components/HomepageBody'
import Navbar from '../components/Navbar'
import SearchPart from '../components/SearchPart'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <SearchPart />
            <HomepageBody />
        </div>
    )
}

export default HomePage
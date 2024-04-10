import React from 'react'
import Home from './Home/Home'
import Footer from './Portfolio/Footer/Footer'
import axios from 'axios'
axios.defaults.withCredentials = true
const Landing = () => {
    return (
        <div className='w-100'>
            <Home />
            <Footer />
        </div>
    )
}

export default Landing
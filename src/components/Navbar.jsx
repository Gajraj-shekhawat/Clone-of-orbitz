import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './styles/navbar.module.css'

const Navbar = () => {
    const [showSignIn,setShowSignIn] =useState(false)
    return (
        <div className={styles.navbar_container}>
            
                <div className={styles.navbar_logo_div}>
                    <Link to='/'>
                        <img src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2" alt="Brand logo" />
                    </Link>
                    <div>
                        <p>More travel</p>
                    </div>
                </div>
                <div className={styles.navbar_right_options_div}>
                    <nav >

                    <NavLink style={(isActive) => ({ color: isActive ?"#007e8f":"white"})} to='/'>Español</NavLink>
                        <NavLink to='/'>List your property</NavLink>
                        <NavLink to='/'>Support</NavLink>
                        <NavLink to='/'>Trips</NavLink>
                    </nav>
                <p className={styles.signin} onClick={() => { setShowSignIn(!showSignIn)}}>Sign in</p>
                
            </div>
            {showSignIn && <div className={styles.signin_popup}>
                <h5>Members can access discounts, points and special features</h5>
                <div className={styles.signin_btn} ><Link to="/">Sign in</Link></div>
                <h4>
                    <Link className={styles.signup_btn} to="/">Create a free accaunt</Link>
                </h4>

                <ul style={{ listStyleType: "none", listStylePosition: "outside" }}>
                    <li><Link to='/'>List of favorites</Link></li>
                    <li ><Link to='/'>loyality program</Link></li>
                    <hr />
                    <li><Link to='/'>feedback</Link></li>
                </ul>
            </div>}
            
        </div>
    )
}

export default Navbar
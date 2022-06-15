import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/signin.module.css'

const SignIn = () => {
  return (
    <div className={styles.signin_container}>
      <div className={styles.logo_back}>
        <Link to="/">
          <img
            className={styles.logo}
            src="https://www.orbitz.com/_dms/interstitial/logo.svg?locale=en_US&siteid=70201"
            alt=""
          />
        </Link>
        <hr />
      </div>
      <div className={styles.signin_div}>
        <h1>Sign in</h1>
        <input type="email" name="email" placeholder='Email address' />
        <input type="password" name="password" placeholder="Password" />
      <div>
        <input
          className={styles.checkbox}
          type="checkbox"
          />
        Keep me signed in
      </div>
      <p className={styles.term_conditions}>
        By creating an account, I agree to the Orbitz{' '}
        <span>Terms and Conditions</span>,
        <span>Privacy Statement</span> and{' '}
        <span> Orbitz Rewards Terms and Conditions</span>.
      </p>
          </div>
      <div className={styles.end_div}>
        <button disabled className={styles.button} type="submit">Continue</button>

        <Link to=''>Forgot Password</Link>
        <p >
          Don't have an account? <Link to='/signup'>Create one</Link>
        </p>
        <p>or continue with</p>
        <div className={styles.social_media}>
          <img
            src="https://a.travel-assets.com/egds/marks/apple.svg"
            alt=""
          />
          <img
            src="https://a.travel-assets.com/egds/marks/facebook.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default SignIn
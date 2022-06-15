import React from 'react';
import styles from './styles/signup.module.css';
import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
    <div className={styles.signUp_container}>
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

      <form>
        <div className={styles.signin_div}>
          <h1>Create an account</h1>
          <input type="email" name="email" placeholder="Email address" required />

          <input type="text" name="name" placeholder="Full name" required />

          <input type="text" name="username" placeholder="Enter unique user name" required />

          <input type="password" id="password" placeholder="Password" required />
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
          <input className={styles.button} type="submit" value={"Continue"} />
         

          <p >
            Already have an account? <Link to='/signin'>Sign in</Link>
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
      </form>
    </div>
  );
};

export default SignUp;

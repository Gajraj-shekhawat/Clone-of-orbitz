import React, { useState } from 'react';
import styles from './styles/signup.module.css';
import { Link, useNavigate, } from 'react-router-dom';
import { signup_attemp } from '../redux/auth/action';
const SignUp = () => {
  const initialState = {};
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    signup_attemp(form, navigate);
  };

  return (
    <div className={styles.signUp_container}>
      {/* {true && (
        <div
          style={{
            background: "#2d3748",
            height: '180px',
            width: '400px',
            borderRadius: '7px',
            position: 'fixed',
            left: '37%',
            right: '40%',
            bottom: '50%',
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            color: 'white',
            zIndex:"01010"
          }}
        >
          <h3>Successfull Sign Up </h3>
          <Link to="/signin">
            <div style={{
              width: '70%', margin: 'auto',
              background: "#90cdf4",
              color: 'black',
              height: "30%",
              borderRadius: "10px",
              display: 'flex',
              alignItems:"center"
            }}>
              <h2 > Click here to login</h2>

            </div>
          </Link>
        </div>
      )} */}
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

      <form onSubmit={handleSubmit}>
        <div className={styles.signin_div}>
          <h1>Create an account</h1>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />

          <input
            type="text"
            name="name"
            placeholder="Full name"
            required
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />

          <input
            type="text"
            name="username"
            placeholder="Enter unique user name"
            required
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          <div>
            <input className={styles.checkbox} type="checkbox" />
            Keep me signed in
          </div>

          <p className={styles.term_conditions}>
            By creating an account, I agree to the Orbitz
            <span>Terms and Conditions</span>,<span>Privacy Statement</span> and
            <span> Orbitz Rewards Terms and Conditions</span>.
          </p>
        </div>

        <div className={styles.end_div}>
          <button
            disabled={
              form.name && form.email && form.username && form.password
                ? false
                : true
            }
            className={styles.button}
            type={'submit'}
          >
            Continue
          </button>

          <p>
            Already have an account? <Link to="/signin">Sign in</Link>
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

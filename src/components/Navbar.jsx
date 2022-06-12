import React, { forwardRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './styles/navbar.module.css';
import { RiHotelFill } from 'react-icons/ri';
import { RiCarFill, RiSuitcase2Fill, RiShipFill } from 'react-icons/ri';
import { MdOutlineFlight } from 'react-icons/md';
import { BsFillInboxesFill } from 'react-icons/bs';

import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import withClickOutside from '../util/withClickOutside';

const Navbar = forwardRef(
  ({ showMoreTravel, setShowMoreTravel, setShowSignIn, showSignIn }, ref) => {
    return (
      <div className={styles.navbar_container}>
        <div className={styles.navbar_logo_div}>
          <Link to="/">
            <img
              src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2"
              alt="Brand logo"
            />
          </Link>
          {/* <section ref={ref}> */}
            <div
              className={styles.more_travel_parent_div}
              onClick={() => {
                setShowMoreTravel(!showMoreTravel);
                setShowSignIn(false);
              }}
            >
              <div
                style={showMoreTravel ? { color: '#00a4bb' } : null}
                className={styles.more_travel_btn}
              >
                <p>More travel</p>

                {showMoreTravel ? (
                  <BiChevronUp fontSize={'1.3rem'} />
                ) : (
                  <BiChevronDown fontSize={'1.3rem'} />
                )}
              </div>

              {showMoreTravel && (
                <div className={styles.more_travel_dropdown}>
                  <div>
                    {' '}
                    <RiHotelFill fontSize={'1.3rem'} />
                    <p> Stays</p>
                  </div>
                  <div>
                    <MdOutlineFlight fontSize={'1.3rem'} />
                    <p>Flights</p>
                  </div>
                  <div>
                    <RiSuitcase2Fill fontSize={'1.3rem'} />
                    <p>Packages</p>
                  </div>
                  <div>
                    <RiCarFill fontSize={'1.3rem'} /> <p>Car</p>
                  </div>
                  <div>
                    <RiShipFill fontSize={'1.3rem'} />
                    <p>Cruises</p>
                  </div>
                  <div>
                    <BsFillInboxesFill fontSize={'1.3rem'} />
                    <p>Things to do</p>
                  </div>
                  <p>Deals</p>
                  <p>Group & meetings</p>
                  <p>Travel Blog</p>
                </div>
              )}
            </div>
          {/* </section> */}
        </div>
        <div className={styles.navbar_right_options_div}>
          <nav>
            <NavLink to="#">Español</NavLink>
            <NavLink to="#">List your property</NavLink>
            <NavLink to="#">Support</NavLink>
            <NavLink to="#">Trips</NavLink>
          </nav>
          <section ref={ref}>
            <div
              className={styles.signin}
              onClick={() => {
                setShowSignIn(!showSignIn);
                setShowMoreTravel(false);
              }}
              style={showSignIn ? { color: '#00a4bb' } : null}
            >
              Sign in
              {showSignIn && (
                <div className={styles.signin_popup}>
                  <h4>
                    Members can access discounts, points and special features
                  </h4>
                  <div className={styles.signin_btn}>
                    <Link to="#">Sign in</Link>
                  </div>
                  <h4>
                    <Link className={styles.signup_btn} to="#">
                      Create a free accaunt
                    </Link>
                  </h4>
                  <div className={styles.otherLinks}>
                    <p>
                      <Link to="#">List of favorites</Link>
                    </p>
                    <p>
                      <Link to="#">loyality program</Link>
                    </p>
                    <hr />
                    <p>
                      <Link to="#">feedback</Link>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
      // </section>
    );
  }
);

export default withClickOutside(Navbar);
import React, { useEffect, useState } from 'react';
import styles from './styles/searchPart.module.css';
import { BsFillPersonFill } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'

const initialState = {
    stays: false,
    flights: false,
    cars: false,
    package: false,
    things_to_do: false,
    cruises: false
}
const tabActive = {
    borderBottom: "3px solid #00a4bb",
    color: "#00a4bb"
}

const SearchPart = () => {

    const [showtab, setShowTab] = useState(initialState)

    useEffect(() => {
        setShowTab({ ...showtab, stays: true })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className={styles.img_container}>
            <div className={styles.search_inner_part}>
                <div className={styles.search_heading}>
                    <div style={showtab.stays ? tabActive : null}
                        onClick={() => {
                            setShowTab({ ...initialState, stays: true })
                        }}>Stays</div>
                    <div style={showtab.flights ? tabActive : null}
                        onClick={() => {
                            setShowTab({ ...initialState, flights: true })
                        }}
                    >Flights</div>
                    <div
                        style={showtab.cars ? tabActive : null}
                        onClick={() => {
                            setShowTab({ ...initialState, cars: true })
                        }}>Cars</div>
                    <div style={showtab.package ? tabActive : null}
                        onClick={() => {
                            setShowTab({ ...initialState, package: true })
                        }}
                    >Packages</div>
                    <div style={showtab.things_to_do ? tabActive : null}
                        onClick={() => {
                            setShowTab({ ...initialState, things_to_do: true })
                        }}
                    >Things to do</div>
                    <div style={showtab.cruises ? tabActive : null}
                        onClick={() => {
                            setShowTab({ ...initialState, cruises: true })
                        }}
                    >Cruises</div>
                </div>
                <div style={{ height: "1px", background: "#c5d3d8" }}></div>
                <br />
                {showtab.stays && <div>
                    <div className={styles.input_stays}>

                        <div><MdLocationOn fontSize={'1.4rem'} />
                            <input type="text" placeholder='Going to' /></div>


                        <div className={styles.checkin_div}>
                            <p>check-in</p>
                            <input type="date" style={{ border: 'none', fontSize: '1.1rem' }} />
                        </div>

                        <div className={styles.checkout_div}>
                            <p>check-in</p>
                            <input type="date" style={{ border: 'none', fontSize: '1.1rem' }} />
                        </div>
                        <div className={styles.room_details}>
                            <div><BsFillPersonFill fontSize={'1.3rem'} /></div>
                            <div>
                                <div>Travelers</div>
                                <div>{1} room, {2} traverls</div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className={styles.stays_checkbox}>
                        <div>

                            <input type="checkbox" />
                            <label > Add a flight</label>
                        </div>
                        <div>

                            <input type="checkbox" />
                            <label >Add a car</label>
                        </div>
                    </div>
                    <br />
                    <div className={styles.stays_saerch}>

                        <button>Search</button>
                    </div>
                </div>}
                {showtab.flights &&
                    <div>
                        <div className={styles.flight_first_box}>
                            <div className={styles.booking_types}>
                                <p>Roundtrip</p>
                                <p>One-way</p>
                                <p>Multicity</p>
                            </div>
                            <div className={styles.booking_types}>
                                <select className={styles.travelingPerson}>
                                    <option>1 traveler</option>
                                </select>
                                <select className={styles.travelingPerson}>
                                    <option>Economy</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.input_panels}>
                            <div className={styles.leaving_from}>
                                <MdLocationOn fontSize={'1.4rem'} />
                                <input type="text" placeholder='Leaving from' />
                            </div>
                            <div className={styles.flight_going_to}>
                                <MdLocationOn fontSize={'1.4rem'} />
                                <input type="text" placeholder='Going to' />
                            </div>
                            <div className={styles.checkin}>
                                <p>Departing</p>
                                <input type="date" className={styles.checkin_input} />
                            </div>
                            <div className={styles.checkout} id="return">
                                <p>Returning</p>
                                <input type="date" className={styles.checkout_input} />
                            </div>
                        </div>

                        <div className={styles.checkboxes}>
                            <input type="checkbox" className={styles.addflight} /> Add a place to stay
                            <input type="checkbox" className={styles.addcar} /> Add a car
                        </div>
                        <div className={styles.stays_saerch}>

                            <button>Search</button>
                        </div>
                    </div>}
                {showtab.cars &&
                    <div>
                        <div className={styles.flight_first_box}>
                            <div className={styles.booking_types}>
                                <p>Rental cars</p>
                                <p>Airport tranportation</p>
                            </div>
                        </div>

                        <div className={styles.cars_input_panels}>
                            <div class="leaving_from">
                                <span class="material-symbols-outlined"> pin_drop </span>Pick-up
                            </div>
                            <div class="flight_going_to">
                                <span class="material-symbols-outlined"> pin_drop </span>
                                Same as pick-up
                            </div>
                            <div class="checkin">
                                <p>Pick-up date</p>
                                <input type="date" class="checkin_input" />
                            </div>
                            <div class="checkout" id="return">
                                <p>Drop-of date</p>
                                <input type="date" class="checkout_input" />
                            </div>
                            <div class="checkin">
                                <p>Pick-up time</p>
                                <input type="time" class="checkin_input" />
                            </div>
                            <div class="checkout" id="return">
                                <p>Drop-of time</p>
                                <input type="time" class="checkout_input" />
                            </div>
                        </div>

                        <div class="checkboxes">
                            <input type="checkbox" class="addflight" /> Include AARP member
                            rates
                        </div>
                        <button class="submit">Search</button>
                </div>
                }
            </div>
        </div>
    );
};

export default SearchPart;

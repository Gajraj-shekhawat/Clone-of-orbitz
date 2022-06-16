import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import styles from './styles/hotel.module.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import FilteredPage from '../components/FilteredPage';
import AllHotels from '../components/AllHotels';
import BelowPart from '../components/BelowPart'

const Hotel = () => {
    const { id } = useParams();

    const [data, setData] = useState([])
    
    useEffect(() => {
        
    },[])

    return (
        <div>
            <Navbar />
            <div style={{ height: "40px", background: "#f5f5f5" }}></div>
            <div>
                <div className={styles.hotel_container}>
                    <div className={styles.upper_div1}>
                        <div>
                            <MdLocationOn fontSize={'28px'} />
                            <input type="text" defaultValue={id} />
                        </div>
                        <div>
                            <div>
                                <div>check in</div>
                                <input type="date" name="" id="" defaultValue="2018-07-22" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>check-out</div>
                                <input type="date" name="" id="" defaultValue="2018-07-23" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <BsFillPersonFill fontSize={'28px'} />
                            </div>
                            <div>
                                <div>Travelers</div>
                                <div>
                                    {1} room, {2} traverls
                                </div>
                            </div>
                        </div>
                        <div className={styles.stays_saerch}>
                            <button>Search</button>
                        </div>
                    </div>
                    <div className={styles.bodypart}>
                        <div>
                            <FilteredPage hotel={ id} />
                        </div>
                        <div>
                            <AllHotels hotel={id} />
                        </div>
                    </div>
                </div>
            </div>
            <BelowPart/>
        </div>
    );
};

export default Hotel;

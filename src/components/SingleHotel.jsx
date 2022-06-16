import React from 'react'
import styles from './styles/singlehotel.module.css';
import { AiOutlineWifi } from "react-icons/ai"
import { MdOutlineHotTub } from "react-icons/md"

const SingleHotel = ({ avatar, name, city, wifi, air_conditioned, hot_tub, refund, rating, review, price, total_price, reserve_with_pay_later }) => {
    return (
        <div className={styles.mainBox}>
            <div className={styles.hotel_pic}>
                <img src={avatar} alt="Hotel pic" />
            </div>
            <div className={styles.deatails_div}>
                <h4>{ name}</h4>
                <p>{ city}</p>
                <div className={styles.middle_feature}>
                    {wifi && <div>
                        <AiOutlineWifi/>
                        Wifi</div> 
                    
                    }
                    {hot_tub && <div> <MdOutlineHotTub /> Hot tub </div> }
                    <p>{air_conditioned ?"Air conditioned":null}</p>
                </div>
                <p>{refund ? "Fully refundable" : null}</p>
                <p>{reserve_with_pay_later?"Reserve now,pay later":null}</p>
                <p>Earn $2.79 Orbucks</p>
                <div className={styles.price_div}>
                    <div>{rating}{review }</div>
                    <div>
                        <p>${price}</p>
                        <p>${total_price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleHotel
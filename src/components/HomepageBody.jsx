import React from 'react'
import styles from './styles/homepageBody.module.css'

const HomepageBody = () => {
    return (
        <div className={styles.mainBox}>
            <div className={styles.threedivs}>
                <div className={styles.lgbtq}>
                    <img
                        src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_TravelAsYouAre_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
                        alt="" />
                    <div class="shadow"></div>
                </div>
                <div class="lgbtq">
                    <img
                        src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_Rewards_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
                        alt="" />
                    <div class="shadow"></div>
                </div>
                <div class="lgbtq">
                    <img
                        src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_InsiderPrices_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
                        alt="" />
                    <div class="shadow"></div>
                </div>
            </div>
        </div>
    )
}

export default HomepageBody
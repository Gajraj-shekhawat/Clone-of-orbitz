import React from 'react'
import SingleHotel from './styles/SingleHotel'

const AllHotels = () => {
    return (
        <div>
            <div>
                <div>
                    <p>count of hotel</p>
                    <b>See how we pick our recommended properties</b>

                </div>
                <div>
                    <select name="" id="">
                        <option value="">Recommended</option>
                        <option value="">Price</option>
                        <option value="">star rating</option>
                    </select>
                </div>

            </div>
            <div>
                <SingleHotel/>
            </div>
        </div>
    )
}

export default AllHotels
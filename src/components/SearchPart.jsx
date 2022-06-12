import React from 'react';
import styles from './styles/searchPart.module.css';
import background from '../images/background.webp'

const SearchPart = () => {
    
    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                height: '500px',
                backgroundSize: 'cover',
                backgroundPosition: '0%',
            }}
        >
            
            <div
                style={{
                    border: '1px solid teal',
                    position: 'absolute',
                    top: '50px',
                    background: 'white',
                }}
            >
                <div style={{ border: '1px solid red' }}></div>
                <hr />
                <div>
                    <div>
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPart;

import React from 'react'
import { MdForum } from 'react-icons/md'
import styles from './styles/helpBox.module.css'

const HelpBox = () => {
    return (
        <button className={styles.help_button}>
            <MdForum fontSize={ "1.1rem"} />
            <p>Help</p>
        </button>
    )
}

export default HelpBox
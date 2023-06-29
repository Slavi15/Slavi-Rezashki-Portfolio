'use client';

import Link from 'next/link';
import { BsCircleHalf } from 'react-icons/bs';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.portfolio}>Portfolio © 2023</div>
            <div className={styles.menuContainer}>
                <div id="darkModeToggle" className={styles.darkModeToggle}><BsCircleHalf /></div>
                <Link href="/documents/Slavi_Rezashki_Resume.pdf"
                    download="Slavi_Rezashki_Resume">
                    <button className={styles.resumeButton}>Resume</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
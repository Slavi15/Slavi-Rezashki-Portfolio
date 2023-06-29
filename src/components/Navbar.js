'use client';

// import { useEffect } from 'react';
import { BsCircleHalf } from 'react-icons/bs';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
    // function englishOnClick() {
    //     const toggle = document.getElementById('toggle');

    //     toggle.style.boxPack = 'start';
    //     toggle.style.justifyContent = 'flex-start';
    // };

    // function spanishOnClick() {
    //     const toggle = document.getElementById('toggle');

    //     toggle.style.boxPack = 'end';
    //     toggle.style.justifyContent = 'flex-end';
    // };

    // useEffect(() => {
    //     const toggle = document.getElementById('toggle');
    //     const toggleFront = document.getElementById('front');

    //     document.getElementById('spanish').addEventListener('mouseenter', function() {
    //         if (window.getComputedStyle(toggle).justifyContent === 'flex-start') {
    //             toggleFront.style.transform = 'translate3d(105%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
    //             toggleFront.style.transformStyle = 'preserve-3d';
    //         };
    //     });

    //     document.getElementById('english').addEventListener('mouseenter', function() {
    //         if (window.getComputedStyle(toggle).justifyContent === 'flex-end') {
    //             toggleFront.style.transform = 'translate3d(-105%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
    //             toggleFront.style.transformStyle = 'preserve-3d';
    //         };
    //     });
    // }, []);

    // function onMouseLeave() {
    //     const toggleFront = document.getElementById('front');

    //     toggleFront.style.transform = 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
    //     toggleFront.style.transformStyle = 'preserve-3d';
    // };

    return (
        <div className={styles.navbar}>
            <div className={styles.portfolio}>Portfolio © 2023</div>
            <div className={styles.menuContainer}>
                <div id="darkModeToggle" className={styles.darkModeToggle}><BsCircleHalf /></div>
                <button className={styles.resumeButton}>Resume</button>
            </div>
            {/* <div className={styles.menuContainer}>
                <div id="darkModeToggle" className={styles.darkModeToggle}><BsCircleHalf /></div>
                <div className={styles.langToggle}>
                    <div 
                        onMouseLeave={() => { onMouseLeave() }} 
                        onClick={() => { englishOnClick() }}
                        id="english"
                        className={styles.lang}>EN</div>
                    <div id="toggle" className={styles.toggle}>
                        <div className={styles.toggleBack}></div>
                        <div id="front" className={styles.toggleFront}></div>
                    </div>
                    <div 
                        onMouseLeave={() => { onMouseLeave() }} 
                        onClick={() => { spanishOnClick() }} 
                        id="spanish" 
                        className={styles.lang}>ES</div>
                </div>
            </div> */}
        </div>
    );
};

export default Navbar;
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BsLinkedin, BsGithub, BsGoogle } from 'react-icons/bs';
import { Typewriter } from 'nextjs-simple-typewriter';
import profileImage from '../images/slavi_profile.png';
import styles from '../styles/Home.module.scss';

const Home = () => {
    // useEffect(() => {
    //     const image = document.getElementById('image');

    //     let imgBoundingRect = image.getBoundingClientRect();
    //     const constraint = 50;

    //     image.addEventListener('mousemove', function(e) {
    //         let rotateX = - (e.pageY - imgBoundingRect.y - (imgBoundingRect.height / 2)) / constraint;
    //         let rotateY = (e.pageX - imgBoundingRect.x - (imgBoundingRect.width / 2)) / constraint;

    //         e.target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    //     });
    // }, []);

    return (
        <div className={styles.container}>
            <div className={styles.bioInfo}>
                <div className={styles.greeting}>Hello, It's me</div>
                <div className={styles.name}>
                    <Typewriter
                        words={['Slavi Rezashki']}
                        typeSpeed={100} />
                </div>
                <div className={styles.position}>BSc Software Engineering</div>
                <div className={styles.description}>
                    I am deeply passionate about developing successful software 
                    projects while continuously improving my skills in 
                    Mathematics to enhance my problem-solving abilities!
                </div>
                <div className={styles.socialMedia}>
                    <div className={styles.icon}>
                        <Link className={styles.link} href="https://www.linkedin.com/in/slavirezashki" target="_blank">
                            <BsLinkedin />
                        </Link>
                    </div>
                    <div className={styles.icon}>
                        <Link className={styles.link} href="https://github.com/Slavi15" target="_blank">
                            <BsGithub />
                        </Link>
                    </div>
                    <div className={styles.icon}><BsGoogle /></div>
                </div>
            </div>
            <Image
                id="image"
                className={styles.profileImage}
                src={profileImage}
                priority={true}
                height={450}
                width={450}
                alt="Slavi Rezashki" />
        </div>
    );
};

export default Home;
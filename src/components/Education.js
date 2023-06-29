import Link from 'next/link';
import styles from '../styles/Education.module.scss';

const Education = () => {
    return (
        <div className={styles.educationContainer}>
            <div className={styles.line}></div>
            <div className={styles.title}>Education</div>
            <div className={styles.education}>
                <div className={styles.educationCard}>
                    <div className={styles.info}>
                        <Link className={styles.link} href="https://www.uni-sofia.bg/index.php/bul" target="_blank">
                            <div className={styles.institutionTitle}>Sofia University "St. Kliment Ohridski"</div>
                        </Link>
                        <div className={styles.materialTitle}>BSc Software Engineering | Faculty of Mathematics and Informatics</div>
                    </div>
                    <div className={styles.period}>October 2023 - Present</div>
                </div>
                <div className={styles.educationCard}>
                    <div className={styles.info}>
                        <Link className={styles.link} href="https://ivanvazov.com/" target="_blank">
                            <div className={styles.institutionTitle}>31 High School "Ivan Vazov"</div>
                        </Link>
                        <div className={styles.materialTitle}>Mathematics & Physics</div>
                    </div>
                    <div className={styles.period}>2018 - 2023</div>
                </div>
            </div>
        </div>
    );
};

export default Education;
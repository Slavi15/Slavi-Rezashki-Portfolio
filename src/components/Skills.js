import { SiJavascript, SiNodedotjs, SiReact, SiVuedotjs, SiCplusplus, SiPython, SiNextdotjs, SiGit } from 'react-icons/si';
import styles from '../styles/Skills.module.scss';

const Skills = () => {
    return (
        <div className={styles.skillsContainer}>
            <div className={styles.line}></div>
            <div className={styles.title}>Skillset</div>
            <div className={styles.pitch}>
                With a diverse skillset ranging from Algorithms and Data
                Structures in Software Development to Marketing and real-world
                project realization, I possess rich understanding in
                multifarious fields of study. I am fueled by an unwavering
                dedication to constant improvement, always seeking new challenges
                and opportunities to enhance my skills. Setting ambitious goals
                and pushing myself beyond boundaries, I strive to achieve
                excellence in every endeavour, never settling for anything less.
                My passion for programming, coupled with my commitment to
                growth, propels me forward, ready to conquer new frontiers and
                make a lasting impact in the world of technology and science.
            </div>
            <div className={styles.skillsCards}>
                <SiJavascript
                    className={styles.card}
                    style={{
                        fontSize: '5rem'
                    }} />
                <SiReact
                    className={styles.card}
                    style={{
                        fontSize: '5rem'
                    }} />
                <SiVuedotjs
                    className={styles.card}
                    style={{
                        fontSize: '5rem'
                    }} />
                <SiNodedotjs
                    className={styles.card}
                    style={{
                        fontSize: '5rem'
                    }} />
                <SiCplusplus
                    className={styles.card}
                    style={{
                        fontSize: '5rem'
                    }} />
                <SiNextdotjs
                    className={styles.card}
                    style={{
                        fontSize: '5rem'
                    }} />
                <SiPython
                    className={styles.card}
                    style={{
                        fontSize: '5rem'
                    }} />
                <SiGit
                    className={styles.card}
                    style={{
                        fontSize: '5rem'
                    }} />
            </div>
        </div>
    );
};

export default Skills;
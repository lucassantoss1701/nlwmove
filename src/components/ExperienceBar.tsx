import styles from '../styles/components/ExperienceBar.module.css';


export function ExperienceBar(){
    return(
        <header className={styles.experienceBar}>
            <span>0xp</span>
            <div>
                <div style={{width: '60%'}}/>
                <span className={styles.currentExperience} style={{left: '50%'}}>350</span>
            </div>
            <span>600px</span>
        </header>
    );
}
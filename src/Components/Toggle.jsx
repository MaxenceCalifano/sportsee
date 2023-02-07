import styles from '../styles/toggle.module.css'

function Toggle() {
    return (
        <label className={styles.switch}>
            <input type='checkbox'>
            </input>
            <span className={styles.sliderRound}></span>
        </label>
    );
}

export default Toggle;
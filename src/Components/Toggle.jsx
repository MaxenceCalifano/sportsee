import styles from '../styles/toggle.module.css'

function Toggle({ toggle }) {
    return (
        <label className={styles.switch}>
            <input type='checkbox'>
            </input>
            <span onClick={toggle} className={styles.sliderRound}></span>
        </label>
    );
}

export default Toggle;
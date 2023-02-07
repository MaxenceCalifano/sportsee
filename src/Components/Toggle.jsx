import styles from '../styles/toggle.module.css'

function Toggle(props) {
    return (
        <label className={styles.switch}>
            <input type='checkbox'>
            </input>
            <span onClick={props.toggle} className={styles.sliderRound}></span>
        </label>
    );
}

export default Toggle;
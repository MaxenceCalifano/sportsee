import styles from '../styles/toggle.module.css'
import PropTypes from 'prop-types';


function Toggle(props) {
    return (
        <label className={styles.switch}>
            <input type='checkbox'>
            </input>
            <span onClick={props.toggle} className={styles.sliderRound}></span>
        </label>
    );
}


Toggle.propTypes = {
    props: PropTypes.object
}
export default Toggle;
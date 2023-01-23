import styles from '../styles/sportLogo.module.css';

function SportType({ sport, logo }) {
    return (
        <div className={styles.sportLogo}>
            <img src={logo} alt={`logo de la discipline ${sport}`} />
        </div>
    );
}

export default SportType;
//import styles from '../styles/sportLogo.module.css';

function SportType({ sport, logo }) {
    const styles = {
        sportLogo: {
            width: '64px',
            height: '64px',
            background: 'white',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
    return (
        <div style={styles.sportLogo}>
            <img src={logo} alt={`logo de la discipline ${sport}`} />
        </div>
    );
}

export default SportType;
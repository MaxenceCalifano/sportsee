import PropTypes from 'prop-types';


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

SportType.propTypes = {
    sport: PropTypes.string,
    logo: PropTypes.string
}

export default SportType;
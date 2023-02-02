function KeyData({ data, logo, children, color }) {

    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            background: '#FBFBFB',
            padding: '10px 20px',
            gap: '20px',
            borderRadius: '10px',
        },
        imgContainer: {
            width: '60px',
            height: '60px',
            background: color,
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        quantity: {
            fontWeight: 600,
        },
        units: {
            color: '#74798C'
        }
    }
    return (
        <div style={styles.container}>
            <div style={styles.imgContainer}>
                <img src={logo} alt={`logo des statistiques`} />
            </div>
            <div>
                <p style={styles.quantity}>{data}</p>
                <p style={styles.units}>{children}</p>
            </div>
        </div>
    );
}

export default KeyData;
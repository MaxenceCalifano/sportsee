function KeyData({ data, logo, children, color }) {

    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
        },
        imgContainer: {
            width: '60px',
            height: '60px',
            background: color,
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
    return (
        <div style={styles.container}>
            <div style={styles.imgContainer}>
                <img src={logo} alt={`logo des statistiques`} />
            </div>
            <div>
                <p>{data}</p>
                <p>{children}</p>
            </div>
        </div>
    );
}

export default KeyData;
import { RadialBarChart, RadialBar } from 'recharts';
import PropTypes from 'prop-types';


import styles from '../styles/objectifRadialChart.module.css'

function Objectif({ data }) {

    return (
        <div className={styles.container}>
            <p className={styles.score}>Score</p>
            <p className={styles.data}>
                <span style={{ fontSize: '1.8rem', fontWeight: 600 }}>{data * 100}%</span><br />
                <span style={{ color: '#74798C' }}>de votre objectif</span>
            </p>
            <RadialBarChart
                width={260}
                height={200}
                startAngle={0}
                endAngle={360}
                cx="50%"
                cy="50%"
                innerRadius="40%"
                outerRadius="80%"
                barSize={10}
                data={[{ score: 100, fill: "#FBFBFB" }, { score: data * 100, fill: '#FF0000' }]}
                style={{ background: "#FBFBFB" }}
            >
                <RadialBar
                    background
                    dataKey="score"
                    cornerRadius={20}
                    clockWise={false}
                />
            </RadialBarChart>
        </div >

    );
}

Objectif.propTypes = {
    data: PropTypes.number
}

export default Objectif;
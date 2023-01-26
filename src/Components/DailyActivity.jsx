import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { useEffect, useState } from "react";

import styles from '../styles/dailyActivity.module.css';


function DailyActivity({ userID }) {

    const [sessions, setSessions] = useState();

    useEffect(() => {
        fetch(`http://localhost:3000/user/${userID}/activity`)
            .then(response => response.json())
            .then(res => setSessions(res.data.sessions))
            .catch(err => console.log(err))
    }, [userID])


    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.tooltip}>
                    <p>{`${payload[0].value}kg`}</p>
                    <p>{`${payload[1].value}Kcal`}</p>
                </div>
            );
        }
        return null;
    };

    const renderLegend = (props) => {
        return (
            <div className={styles.legendWrapper}>
                <p>Activité quotidienne</p>
                <ul className={styles.legend}>
                    <li className={styles.legendItem}>Poids (kg)</li>
                    <li className={styles.secondLegendItem}>Calories brûlées (kCal)</li>
                </ul>
            </div>
        );
    }

    return (
        <>
            {
                sessions ?
                    <ResponsiveContainer height={300}>
                        <BarChart
                            width={500}
                            height={'100%'}
                            data={sessions}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid vertical={false} strokeDasharray="3 3" />
                            <Legend
                                verticalAlign="top"
                                align="right"
                                iconType="circle"
                                wrapperStyle={{ top: 0, right: 40 }}
                                content={renderLegend}
                            />
                            <XAxis />
                            <YAxis yAxisId="right" orientation="right" />
                            <YAxis hide={true} yAxisId="left" orientation="left" />
                            <Tooltip
                                content={<CustomTooltip />}
                                wrapperStyle={{ outline: 'none', color: '#74798C' }}
                            />
                            <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} barSize={10} />
                            <Bar yAxisId='left' dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} barSize={10} />
                        </BarChart>
                    </ResponsiveContainer>
                    : <></>
            }
        </>
    );
}

export default DailyActivity;
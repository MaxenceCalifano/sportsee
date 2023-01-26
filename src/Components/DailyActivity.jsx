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

    return (
        <>
            {
                sessions ?
                    <ResponsiveContainer height={200}>
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
                            <Legend />
                            <XAxis />
                            <YAxis dataKey={"kilogram"} orientation="right" domain={[0, 'dataMax + 450']} />
                            <Tooltip
                                content={<CustomTooltip />}
                                wrapperStyle={{ outline: 'none' }}
                            />
                            <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} barSize={10} />
                            <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} barSize={10} />
                        </BarChart>
                    </ResponsiveContainer>
                    : <></>
            }
        </>
    );
}

export default DailyActivity;
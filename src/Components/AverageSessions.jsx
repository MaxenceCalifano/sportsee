import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceDot } from 'recharts';
import { useState, useEffect } from 'react';

function AverageSessions({ data }) {

    const [formattedSessions, setFormattedSessions] = useState()


    useEffect(() => {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
        if (data) {
            const sessions = [...data]

            sessions.forEach(session => {
                const index = session.day
                session.day = days[index - 1]
            })
            setFormattedSessions(sessions)
        }

    }, [data])

    const renderLegend = () => {
        return (
            <div style={{ color: 'white', fontWeight: 500, fontSize: '1rem' }}>
                <p>Durée moyenne des sessions</p>
            </div>
        );
    }

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{ background: 'white', fontWeight: 500, padding: '10px 15px' }}>
                    <p>{`${payload[0].payload.sessionLength} min`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        < LineChart
            width={260}
            height={200}
            data={formattedSessions}
            style={{ background: '#FF0000', borderRadius: '5px' }
            }
            margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
        >
            <XAxis dataKey={'day'} tick={{ fill: "#ffffff" }} axisLine={false} tickLine={false} />
            <YAxis hide={true} domain={['dataMin-10', 'dataMax + 10']} />
            <ReferenceDot fill='red' />
            <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: 'none' }} cursor={false} />
            <Legend verticalAlign="top" align="left" content={renderLegend} margin={{ top: 10, left: 0, right: 0, bottom: 10 }} />
            <Line dot={false} type="natural" dataKey="sessionLength" stroke="#ffffff" strokeWidth={3} activeDot={{ stroke: 'rgba(255,255,255,0.3)', strokeWidth: 17, r: 7 }} />
        </LineChart >
    );
}

export default AverageSessions;
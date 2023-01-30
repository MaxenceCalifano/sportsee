import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

function Performance({ data }) {
    const [performance, setPerformance] = useState()

    useEffect(() => {
        if (data) {
            const perf = { ...data };
            perf.data.forEach(element => {
                const kindIndex = element.kind
                element.kind = perf.kind[kindIndex]
            });
            setPerformance(perf)
        }

    }, [data])

    console.log(performance)
    if (performance) {
        return (
            <ResponsiveContainer width="100%" height={300}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performance.data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        );
    }

}

export default Performance;
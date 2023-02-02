import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

function Performance({ data }) {
    const [performance, setPerformance] = useState()

    useEffect(() => {
        if (data) {
            const perf = { ...data };
            perf.data.forEach(element => {
                element.kind = perf.kind[element.kind]
            });
            setPerformance(perf)
        }

    }, [data])

    if (performance) {
        return (
            <ResponsiveContainer width="30%" height={300}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performance.data} style={{ background: "#282D30" }}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" tick={{ fill: "#ffffff" }} />
                    <PolarRadiusAxis tickLine={false} axisLine={false} />
                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        );
    }

}

export default Performance;
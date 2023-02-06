import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
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
            <RadarChart width={260} height={200} cx="50%" cy="50%" outerRadius="70%" data={performance.data} style={{ background: "#282D30", borderRadius: '5px' }}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dataKey="kind" style={{ fontSize: '12px' }} tick={{ fill: "#ffffff" }} />
                <PolarRadiusAxis style={{ fontSize: '0px' }} tickLine={false} axisLine={false} />
                <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
        );
    }

}

export default Performance;
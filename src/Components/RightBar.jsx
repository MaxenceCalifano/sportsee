import KeyData from "./KeyData";

import caloriesLogo from '../assets/calories.png';
import glucidesLogo from '../assets/glucides.png';
import proteinesLogo from '../assets/proteines.png';
import lipidesLogo from '../assets/lipides.png';

function RightBar({ data }) {
    return (
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <KeyData data={data.calorieCount} logo={caloriesLogo} color={'rgba(255, 0, 0, 0.06)'}>Calories</KeyData>
            <KeyData data={data.proteinCount} logo={proteinesLogo} color={'rgba(74, 184, 255, 0.06)'}>Proteines</KeyData>
            <KeyData data={data.glucideCount} logo={glucidesLogo} color={'rgba(253, 204, 12, 0.06)'}>Glucides</KeyData>
            <KeyData data={data.lipideCount} logo={lipidesLogo} color={'rgba(253, 81, 129, 0.06)'}>Lipides</KeyData>
        </section>
    );
}

export default RightBar;
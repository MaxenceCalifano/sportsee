import styles from '../styles/leftNav.module.css';
import SportType from './SportType';

import YogaLogo from '../assets/yoga.png';
import SwimmingLogo from '../assets/swimming.png';
import WeightLogo from '../assets/weight.png';
import BikeLogo from '../assets/bike.png';

function LeftNav() {
    return (
        <nav className={styles.leftNav}>
            <div className={styles.logos}>
                <SportType sport={'yoga'} logo={YogaLogo} />
                <SportType sport={'swimming'} logo={SwimmingLogo} />
                <SportType sport={'weightlifting'} logo={WeightLogo} />
                <SportType sport={'biking'} logo={BikeLogo} />
            </div>

            <span>Copyright, SportSee 2020</span>
        </nav>
    );
}

export default LeftNav;
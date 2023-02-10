import Header from "../Components/Header";
import LeftNav from "../Components/LeftNav";
import DailyActivity from "../Components/DailyActivity";
import AverageSessions from "../Components/AverageSessions";
import Performance from "../Components/Performance";
import Objectif from "../Components/Objectif";
import RightBar from "../Components/RightBar";
import Toggle from "../Components/Toggle";

import styles from '../styles/profile.module.css';

import { useEffect, useState } from "react";
import { serviceAPI, serviceAPIMock } from "../servicesAPI";

function Profile() {

    const [user, setUser] = useState();
    const [sessions, setSessions] = useState();
    const [performance, setPerformance] = useState();
    const [activity, setActivity] = useState();
    const [mockedAPI, setMockedAPI] = useState(false);
    const [userID, setUserID] = useState(18);

    //Change state to switch between mocked and real API
    const toggleAPI = () => {
        setMockedAPI(!mockedAPI)
    }

    //Switch between the two existing users
    const toggleUser = () => {
        userID === 18 ? setUserID(12) : setUserID(18)
    }

    useEffect(() => {
        const serviceApi = mockedAPI ? new serviceAPIMock(userID) : new serviceAPI(userID)

        serviceApi.getUser()
            .then(res => setUser(res.data))
            .catch(err => console.error(err))

        serviceApi.getUserActivity()
            .then(res => setActivity(res.data.sessions))
            .catch(err => console.error(err))

        serviceApi.getUserSessions()
            .then(res => setSessions(res.data.sessions))
            .catch(err => console.error(err))

        serviceApi.getUserPerformance()
            .then(res => setPerformance(res.data))
            .catch(err => console.error(err))
    }, [userID, mockedAPI])
    console.log(activity)
    // Don't show UI until user data are loaded
    if (!user) return null
    return (
        <>
            <Header />
            <main>
                <LeftNav />
                <section className={styles.content}>
                    <Toggle toggle={toggleAPI} />
                    <Toggle toggle={toggleUser} />
                    <p className={styles.greetings}>Bonjour <span>{user.userInfos.firstName}</span></p>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    <div className={styles.datas}>
                        <div className={styles.chartsContainer}>
                            <DailyActivity data={activity} />
                            <div className={styles.charts}>
                                <AverageSessions data={sessions} />
                                <Performance data={performance} />
                                <Objectif data={user.score} />
                            </div>
                        </div>
                        <RightBar data={user.keyData} />
                    </div>
                </section>
            </main>
        </>
    );
}

export default Profile;
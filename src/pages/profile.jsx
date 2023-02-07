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
import { getUser, getUserActivity, getUserPerformance, getUserSessions } from "../servicesAPI";

function Profile() {

    const [user, setUser] = useState();
    const [sessions, setSessions] = useState();
    const [performance, setPerformance] = useState();
    const [activity, setActivity] = useState();
    const [mockedAPI, setMockedAPI] = useState(false);
    const [userID, setUserID] = useState(18);

    const toggleAPI = () => {
        setMockedAPI(!mockedAPI)
    }
    const toggleUser = () => {
        userID === 18 ? setUserID(12) : setUserID(18)
    }

    useEffect(() => {
        getUser(userID)
            .then(res => setUser(res.data))
            .catch(err => console.error(err))
    }, [userID])

    useEffect(() => {
        getUserActivity(userID)
            .then(res => setActivity(res.data.sessions))
            .catch(err => console.error(err))
    }, [userID])

    useEffect(() => {
        getUserSessions(userID)
            .then(res => setSessions(res.data.sessions))
            .catch(err => console.error(err))
    }, [userID])
    useEffect(() => {
        getUserPerformance(userID)
            .then(res => setPerformance(res.data))
            .catch(err => console.error(err))
    }, [userID])


    if (!user) return null // Retourner un loader
    return (
        <>
            <Header />
            <main>
                <LeftNav />
                <section className={styles.content}>

                    <p className={styles.greetings}>Bonjour <span>{user.userInfos.firstName}</span></p>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    <div className={styles.datas}>
                        <div className={styles.chartsContainer}>
                            <DailyActivity data={activity} />
                            <div className={styles.charts}>
                                <AverageSessions data={sessions} />
                                <Performance data={performance} />
                                <Objectif data={user.score} />
                            </div>  <Toggle toggle={toggleAPI} />
                            <Toggle toggle={toggleUser} />
                        </div>
                        <RightBar data={user.keyData} />
                    </div>
                </section>
            </main>
        </>
    );
}

export default Profile;
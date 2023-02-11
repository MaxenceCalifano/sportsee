import Header from "../Components/Header";
import LeftNav from "../Components/LeftNav";
import DailyActivity from "../Components/DailyActivity";
import AverageSessions from "../Components/AverageSessions";
import Performance from "../Components/Performance";
import Objectif from "../Components/Objectif";
import RightBar from "../Components/RightBar";
import Toggle from "../Components/Toggle";

import styles from '../styles/profile.module.css';

import { useEffect, useState, useContext } from "react";
import { serviceAPI, serviceAPIMock } from "../servicesAPI";

import { ApiContext } from "../App";

function Profile(props) {

    const [user, setUser] = useState();
    const [sessions, setSessions] = useState();
    const [performance, setPerformance] = useState();
    const [activity, setActivity] = useState();
    const [userID, setUserID] = useState(18);

    // Get boolean from context to determine either the API or the mockedAPI will be used
    const API = useContext(ApiContext)

    //Switch between the two existing users
    const toggleUser = () => {
        userID === 18 ? setUserID(12) : setUserID(18)
    }

    useEffect(() => {
        const serviceApi = API ? new serviceAPI(userID) : new serviceAPIMock(userID)

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
    }, [userID, API])
    // Don't show UI until user data are loaded
    if (!user) return null
    return (
        <>
            <Header />
            <main>
                <LeftNav />
                <section className={styles.content}>
                    <Toggle toggle={() => props.setApi(API ? false : true)} />
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
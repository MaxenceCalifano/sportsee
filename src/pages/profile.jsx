import Header from "../Components/Header";
import LeftNav from "../Components/LeftNav";
import DailyActivity from "../Components/DailyActivity";
import AverageSessions from "../Components/AverageSessions";
import Performance from "../Components/Performance";
import Objectif from "../Components/Objectif";
import RightBar from "../Components/RightBar";

import styles from '../styles/profile.module.css';

import { useEffect, useState } from "react";

function Profile() {

    const [user, setUser] = useState();
    const [sessions, setSessions] = useState();
    const [performance, setPerformance] = useState();

    useEffect(() => {
        fetch("http://localhost:3000/user/18")
            .then(response => response.json())
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/user/18/average-sessions")
            .then(response => response.json())
            .then(res => setSessions(res.data.sessions))
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        fetch("http://localhost:3000/user/18/performance")
            .then(response => response.json())
            .then(res => setPerformance(res.data))
            .catch(err => console.log(err))
    }, [])


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
                            <DailyActivity userID={user.id} />
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
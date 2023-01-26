import Header from "../Components/Header";
import LeftNav from "../Components/LeftNav";
import DailyActivity from "../Components/DailyActivity";

import styles from '../styles/profile.module.css';

import { useEffect, useState } from "react";

function Profile() {

    const [user, setUser] = useState();

    useEffect(() => {
        fetch("http://localhost:3000/user/18")
            .then(response => response.json())
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(user)
    if (!user) return null // Retourner un loader
    return (
        <>
            <Header />
            <main>
                <LeftNav />
                <section className={styles.content}>
                    <p className={styles.greetings}>Bonjour <span>{user.userInfos.firstName}</span></p>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    <DailyActivity userID={user.id} />
                </section>
            </main>
        </>
    );
}

export default Profile;
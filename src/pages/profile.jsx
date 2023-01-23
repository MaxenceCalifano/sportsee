import Header from "../Components/Header";
import LeftNav from "../Components/LeftNav";

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

    return (
        <>
            <Header />
            <main>
                <LeftNav />
                {user ?
                    <section className={styles.content}>
                        <p className={styles.greetings}>Bonjour <span>{user.userInfos.firstName}</span></p>
                        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    </section>
                    : <>{/* TODO METTRE UN LOADER*/}</>
                }

            </main>
        </>
    );
}

export default Profile;
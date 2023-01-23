import Logo from '../assets/logo.png'
import styles from '../styles/header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <span className={styles.logo}>
                <img src={Logo} alt="logo de SportSee" />
                <span className={styles.sportsee}>SportSee</span>
            </span>

            <a href="/">Accueil</a>
            <a href="/">Profil</a>
            <a href="/">Réglage</a>
            <a href="/">Communauté</a>

        </header>
    );
}

export default Header;
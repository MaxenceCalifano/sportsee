import Logo from '../assets/logo.png'
import styles from '../styles/header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <span><img src={Logo} alt="logo de SportSee" />SportSee</span>
                <a href="/">Accueil</a>
                <a href="/">Profil</a>
                <a href="/">Réglage</a>
                <a href="/">Communauté</a>
            </nav>


        </header>
    );
}

export default Header;
import iconLogo from '../assets/svg/logo.svg'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.container}>
            <img src={iconLogo} alt="Todo's logo" />
        </header>
    )
}
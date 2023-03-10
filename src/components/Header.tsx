import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.HeaderContainer}>
            <div>
                <h1>IFORMULAS</h1>
            </div>
            <nav className={styles.NavContainer}>
                <Link to={'/'}>Home</Link>
                <li>Sobre</li>
                <li>Contatos</li>
            </nav>
        </header>
    )
}
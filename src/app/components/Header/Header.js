import styles from './Header.module.css';
import { delius } from '../../fonts';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={`${styles.title} ${delius.className}`}>WhiskerWisdom</h1>
        </header>
    )
}
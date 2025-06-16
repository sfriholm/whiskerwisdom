import styles from './Footer.module.css';
import { delius } from '../../fonts';

export default function Footer() {
    return (
        <footer className={`${styles.footer} ${delius.className}`}>
            <p>2025 WhiskerWisdom. All cats loved equally.</p>
        </footer>
    );
}
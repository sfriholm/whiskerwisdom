import styles from './styles.module.css';

export default function Main({ children }) {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}
'use client';
import styles from './Button.module.css'

export default function Button({ onClick, children, disabled }) {
    return (
        <button 
        onClick={onClick}
        disabled={disabled}
        type="button"
        className={styles.button}
        >
            {children}
        </button>
    );
}
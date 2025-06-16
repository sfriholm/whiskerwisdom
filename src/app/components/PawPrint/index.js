'use client';
import Image from 'next/image';
import styles from './styles.module.css';

export default function PawPrint({ x = 0, y = 0, size = 30}) {
    return (
        <div
        className={`${styles.paw} paw`}
        style={{
            left: `${x}px`, // Horizontal position
            top: `${y}px`, // Vertical position
        }}
        >
            <div 
            className={styles.pawSize} 
            style={{ width: `${size}px`, height: `${size}px` }}> 
                <Image 
                src="/images/paw.png"
                alt="Paw print"
                fill // Makes image fill the parent div
                style={{ objectFit: "contain" }}
                priority
                />
            </div>
        </div>
    );
}
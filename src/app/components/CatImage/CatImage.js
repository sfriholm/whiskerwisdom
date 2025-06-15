'use client';
import { useEffect, useRef } from 'react';
import styles from './CatImage.module.css';
import anime from 'animejs';

export default function CatImage({ imageUrl }) {
    
    const imgRef = useRef(null);
    
    useEffect(() => {
        if (imgRef.current) {
            anime({
                targets: imgRef.current,
                opacity: [0, 1],
                scale: [0.8, 1],
                rotate: "1turn",
                duration: 800,
                easing: "easeOutElastic(1, .8)",
            });
        }
    }, [imageUrl]);

    return (
        <img
        className={styles.img}
        ref={imgRef}
        src={imageUrl}
        alt="Cat"
        >
        </img>
    );
}
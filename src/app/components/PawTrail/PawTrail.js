'use client';
import { useEffect, useRef } from 'react';
import anime from 'animejs';
import PawPrint from '../PawPrint/PawPrint';
import styles from './PawTrail.module.css';

export default function PawTrail() {
    const trailRef = useRef(null); // Reference to the continer that holds all paw prints

    // Generate 10 paw steps in a zig-zag pattern going upwards
    const pawSteps = Array.from({ length: 10}, (_, i) => ({
        x: i % 2 === 0 ? 40 : 80, // Alternate between left and right
        y: 700 - i * 70, // Move up by 70px per step
    }));

    useEffect(() => {
        const pawElements = trailRef.current.querySelectorAll(".paw");

        anime.timeline({
            targets: pawElements,
            easing: "easeOutQuad", // Default easing for the timeline
        }).add({
            // Fade in, sclae up and bounce into place
            targets: pawElements,
            opacity: [0, 1],
            scale: [0.5, 1],
            translateX: [
                { value: (_, i) => (i % 2 === 0 ? -15 : 15), duration: 0 }, // Offset left/right before animating
                { value: 0, duration: 300 }, // Move to center
            ],
            translateY: [30, -30], // Move slightly upwards
            duration: 500,
            delay: anime.stagger(250),
        }).add({
            // Fade out after short delay
            opacity: [1, 0],
            duration: 800,
            easing: "easeOutQuad",
            delay: anime.stagger(250),
        }, "+=1000"); // Wait one second after the first animation before starting this
    }, []);

    return (
        <div
        ref={trailRef}
        className={styles.trail}
        >
            {pawSteps.map((step, i ) => (<PawPrint key={i} x={step.x} y={step.y} size={30}/>))}
        </div>
    )
}
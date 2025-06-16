'use client';
import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import PawPrint from '../PawPrint';
import styles from './PawTrail.module.css';

export default function PawTrail() {
    const trailRef = useRef(null); // Reference to the continer that holds all paw prints
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        setScreenWidth(window.innerWidth);
    }, []);
        
        const isMobile = screenWidth <= 500;
        const isTablet = screenWidth > 500 && screenWidth <= 900;

        const size = isMobile ? 20 : isTablet ? 25 : 30;
        const startY = isMobile ? 620 : isTablet ? 650 : 800;
        const stepY = isMobile ? 50 : isTablet ? 60 : 70;
        const xLeft = isMobile ? 20 : 40;
        const xRight = isMobile ? 50 : 80;
        const baseOpacity = isMobile ? 0.5 : 1;

        // Generate 10 paw steps in a zig-zag pattern going upwards
        const pawSteps = Array.from({ length: 10}, (_, i) => ({
            x: i % 2 === 0 ? xLeft : xRight, // Alternate between left and right
            y: startY - i * stepY, // Each step gets a longer y-value than the last
        }));        
        
    

    useEffect(() => {
        const pawElements = trailRef.current.querySelectorAll(".paw");
        
        anime.timeline({
            targets: pawElements,
            easing: "easeOutQuad", // Default easing for the timeline
        }).add({
            // Fade in, sclae up and bounce into place
            opacity: [0, baseOpacity],
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
            opacity: [baseOpacity, 0],
            duration: 800,
            easing: "easeOutQuad",
            delay: anime.stagger(250),
        }, "+=1000"); // Wait one second after the first animation before starting this
    }, [screenWidth]);

    return (
        <div
        ref={trailRef}
        className={styles.trail}
        >
            {pawSteps.map((step, i ) => (<PawPrint key={i} x={step.x} y={step.y} size={size}/>))}
        </div>
    )
}
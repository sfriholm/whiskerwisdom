'use client';
import { useState, useEffect, useRef } from 'react';
import { getRandomCatFact } from '../../services/catFacts';
import Button from '../Button/Button';
import styles from './CatFact.module.css';
import CatImage from '../CatImage/CatImage';
import { getRandomCatImage } from '../../services/catImage';
import anime from 'animejs';

export default function CatFact() {
    const [catFact, setCatFact] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const factRef = useRef(null);

    async function fetchFact() {
        setLoading(true);
        const [newFact, newImage] = await Promise.all([
            getRandomCatFact(),
            getRandomCatImage()
        ]);
        console.log("fact:", newFact);
        console.log("img", newImage);
        setCatFact(newFact);
        setImageUrl(newImage);
        setLoading(false);
    }

    useEffect(() => {
        if (!catFact || !factRef.current) return; // Exit if there is no cat fact or ref is not set

        const element = factRef.current; // Get reference to the paragraph element where the fact will be displayed
        
        // Replace text with individual <span>-elements around each letter
        // Allows to animate each letter separately
        element.innerHTML = catFact.split("").map((letter) => `<span class="letter">${letter}</span>`).join("");

        // Animate the letters with fade-in and slide-up effect
        anime.timeline().add({
            targets: ".letter", // Select all the <span class="letter">
            opacity: [0, 1], // Fade in from transparent
            translateY: [10, 0], // SLide up from 10px below
            easing: "easeOutExpo",
            duration: 100,
            delay: anime.stagger(20), // Delay between letters
        });
    }, [catFact]); // Run this when the catFact changes

    return (
        <article className={styles.article}>
            <Button 
            onClick={fetchFact} 
            disabled={loading}
            >
                {catFact ? "Get another cat fact" : "Generate a cat fact"}
            </Button>
            {loading && <p>Loading...</p>}
            {!loading && imageUrl && ( <CatImage imageUrl={imageUrl}></CatImage>)}
            {!loading && catFact && ( <p ref={factRef} className={styles.fact}>{catFact}</p>)}
        </article>
    );
}
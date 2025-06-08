'use client';
import styles from "./page.module.css";
import { useEffect, useRef } from 'react';
import { getRandomCatFact } from './services/catFacts';
import CatFact from './components/CatFact/CatFact';
import anime from 'animejs';

export default function Home() {

	const titleRef = useRef(null); // Create reference to the title
	const subtitleRef = useRef(null); // Create reference to the subtitle

	useEffect(() => {
		async function fetchFact() {
			const fact = await getRandomCatFact();
			console.log(fact);
		}
		fetchFact();

		// Animate the title - fade in and slide up
		anime({
			targets: titleRef.current, 
			translateY: [-30, 0], // Slide down fom 30px above into position
			opacity: [0, 1], // Fade in from 0 to 1
			duration: 800, // Animation duration (ms)
			easing: "easeOutQuad", // Easing function for smooth motion
		});

		// Animate the subtitle: fade in and slide down with delay
		anime({
			targets: subtitleRef.current,
			translateY: [30, 0], // SLide up from 30px below to position
			opacity: [0, 1], 
			duration: 800,
			delay: 170, // Wait 150 ms before starting
			easing: "easeOutQuad",
		});
	}, []);
	
	return (
		<section className={styles.home}>
			<h2 ref={titleRef} className={styles.title}>Welcome to WhiskerWisdom!</h2>
			<p ref={subtitleRef} className={styles.subtitle}>Click below to discover fascinating cat facts</p>
			<CatFact></CatFact>
		</section>
		
	);
}


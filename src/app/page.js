'use client';
import styles from "./page.module.css";
import { useEffect } from 'react';
import { getRandomCatFact } from './services/catFacts';
import CatFact from './components/CatFact/CatFact';

export default function Home() {
	useEffect(() => {
		async function fetchFact() {
			const fact = await getRandomCatFact();
			console.log(fact);
		}
		fetchFact();
	}, []);
	
	return (
		<section className={styles.home}>
			<h2 className={styles.title}>Welcome to WhiskerWisdom!</h2>
			<p className={styles.subtitle}>Click below to discover fascinating cat facts</p>
			<CatFact></CatFact>
		</section>
		
	);
}


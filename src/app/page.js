import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<section className={styles.home}>
			<h2 className={styles.title}>Welcome to WhiskerWisdom!</h2>
			<p className={styles.subtitle}>Click below to discover fascinating cat facts</p>
		</section>
	);
}


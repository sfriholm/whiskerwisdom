'use client';
import styles from './Button.module.css'
import anime from 'animejs';

export default function Button({ onClick, children, disabled, className = "", ...props }) {

    function handleClick(e) {
        anime({
            targets: e.currentTarget,
            scale: [1, 1.5], // Scale up 50%
            boxShadow: ["0 0 0px transparent", "0 0 20px #9cbd8f"], // Green glow around the button on click
            duration: 300,
            easing: "easeInOutQuad",
            direction: "alternate", // Goes back to original
        });

        if (onClick) onClick();
    }
    return (
        <button 
        onClick={handleClick}
        disabled={disabled}
        type="button"
        className={`${styles.button} ${className}`} {...props}
        >
            {children}
        </button>
    );
}
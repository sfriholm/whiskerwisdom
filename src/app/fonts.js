import { Delius_Swash_Caps } from 'next/font/google';
import { Cutive_Mono } from 'next/font/google';
import { Quicksand } from 'next/font/google';

export const delius = Delius_Swash_Caps({
    subsets: ["latin"],
    weight: "400",
});

export const cutive = Cutive_Mono({
    subsets: ["latin"],
    weight: "400",
});

export const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["400", "600"],
});

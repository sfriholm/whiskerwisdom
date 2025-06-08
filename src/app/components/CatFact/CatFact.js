'use client';
import { useState, useEffect } from 'react';
import { getRandomCatFact } from '../../services/catFacts';
import Button from '../Button/Button';

export default function CatFact() {
    const [catFact, setCatFact] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchFact() {
        setLoading(true);
        const newFact = await getRandomCatFact();
        setCatFact(newFact);
        setLoading(false);
    }

    return (
        <article>
            <Button 
            onClick={fetchFact} 
            disabled={loading}
            >
                {catFact ? "Get another cat fact" : "Generate a cat fact"}
            </Button>
            {loading && <p>Loading...</p>}
            {!loading && catFact && ( <p>{catFact}</p>)}
        </article>
    )
}
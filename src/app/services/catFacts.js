import axios from 'axios';

export async function getRandomCatFact() {
    try {
        const response = await axios.get("https://catfact.ninja/fact");
        return response.data.fact;
    } catch (error) {
        console.error("Could not retrieve cat facts: ", error);
        throw error;
    }
}
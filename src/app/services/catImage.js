import axios from 'axios';

export async function getRandomCatImage() {
    try {
        const response = await axios.get("/api/cat-image"); 
        return response.data.url;
    } catch (error) {
        throw error;
    }
}
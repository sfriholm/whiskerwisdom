import axios from 'axios';

export async function GET() {
    try {
        const response = await axios.get("https://api.thecatapi.com/v1/images/search", {
            headers: {
                "x-api-key": process.env.NEXT_PUBLIC_KEY,
            },
        });

        const data = response.data[0];

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {

        return new Response(JSON.stringify({ error: "Failed to fetch cat image" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
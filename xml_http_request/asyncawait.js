const endpoint = "https://api.github.com/users";

async function apiRequest() {
    try {
        const request = await fetch(endpoint);
        const data = await request.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

apiRequest();
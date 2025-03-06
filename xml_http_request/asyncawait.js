const endpoint = "https://api.github.com/users";
//This function make a api request the endpoint specifed and return the data
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
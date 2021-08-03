export default class APIController {

    constructor() {
        this.clientID = "";
        this.clientSecret = "shhh";
        this.token = ""
    }

    async getToken() {

        const result = await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(this.clientId + ':' + this.clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        this.token = data.access_token;
    }

    async getGenres() {
         const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + this.token}
        });

        const data = await result.json();
        return data.categories.items;       
    }

    toString() {
        console.log(`[This API is running with a secret of ${this.clientSecret}]`)
    }

}
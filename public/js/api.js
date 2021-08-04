export default class APIController {

    constructor() {
        this.clientId = "";
        this.clientSecret = "";
        this.token = "N/A";
    }

    async getToken() {
        const result = await fetch('https://accounts.spotify.com/api/token', {
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
        console.log(this.token);
        const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + this.token}
        });

        const data = await result.json();
        console.log(data);
        return data.categories.items;       
    }

    async getPlaylistByGenre(genreId) {
        console.log('here!')
        const limit = 5;

        const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + this.token}
        });

        const data = await result.json();
        return data.playlists.items;
    }

    toString() {
        console.log(`[This API is running with a secret of ${this.clientSecret}]`)
    }

}
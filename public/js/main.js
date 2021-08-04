// Handles interface interaction and connects to spotify module. 
//import APIController from "/js/api.js"

//const api = new APIController();

import('/js/api.js').then((Module) => {
    console.log(Module.APIController.clientSecret);
});
//api.getToken();

async function main() {
    let Module = await import('/js/api.js')
    //import('/js/api.js').then((Module) => {
    const api = Module.APIController
    if (typeof api.token != "string" ) {
        console.log('we are waiting!')
        setTimeout(main, 1000);
        return;
    } 
    const genreData = await api.getGenres();
    genreData.forEach(genre => displayGenreCard(genre));      
    //})
}
main();

function displayGenreCard(genre) {
    const gallery = document.querySelector("#genreGallery");
    gallery.innerHTML += `
        <div class="column is-one-fifth">
            <div class="card">
                <div class="card-image">
                    <p hidden>${genre.id}</p>
                    <figure class="image is-4by4">
                    <img src="${genre.icons[0].url}" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <button onclick="genreSelected(${genre.id})" id="${genre.id}">${genre.name}</button>
                </div>
            </div>
        </div>        
    `;
    //document.querySelector("#"+genre.id).addEventListener('click', genreSelected);
}


async function genreSelected(genreId) {
    console.log('testing');
    // const playlistData = await api.getPlaylistByGenre(genreId);
    // playlistData.forEach(playlist => console.log(playlist));
}



/**
 * Genre Card
                 <div class="column is-one-fifth">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by4">
                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" onclick="genreSelected()">
                            </figure>
                        </div>
                    </div>
                </div>
 */
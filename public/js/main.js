// Handles interface interaction and connects to spotify module. 
import APIController from "/js/api.js"

const api = new APIController();
api.getToken();

async function main() {
    if (api.token === "N/A") {
        setTimeout(main, 1000);
        return;
    } 
    const genreData = await api.getGenres();
    genreData.forEach(genre => displayGenreCard(genre));
    genreSelected("pop");
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
                    <button id="${genre.id}">${genre.name}</button>
                </div>
            </div>
        </div>        
    `;
    document.querySelector("#"+genre.id).addEventListener('click', function() {
        console.log('1')
        genreSelected(genre.id);
    });
}


async function genreSelected(genreId) {
    const playlistData = await api.getPlaylistByGenre(genreId);
    playlistData.forEach(playlist => console.log(playlist));
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
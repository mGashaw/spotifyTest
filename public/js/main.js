// Handles interface interaction and connects to spotify module. 
import APIController from "/js/api.js"

const api = new APIController();

window.onload = (e) => {
    console.log('windowLoading...')
}

function displayGenre() {

}

function genreSelected() {

}

// Now finish getGenre function and then display given genre's to the website page. 
// Set a button clicker with each gallery card, if clicked print all playlists and we be gucci!

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
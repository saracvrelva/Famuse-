import * as randomizer from "/views/song-kamasutra-view.js";
import { getSongs, getRandomSong } from "/services/songs-service.js";
import { genreToShare, start as startGenreController} from "/controllers/genre-controller.js";


function start(genre) {
    if(genre === undefined){
        let songs =  getSongs(genreToShare);
        let randomSong =  getRandomSong(songs);
        randomizer.render(randomSong);
    } else {
    console.log(genre)
    let songs =  getSongs(genre);
    let randomSong =  getRandomSong(songs);
    randomizer.render(randomSong);
    }

    randomizer.bind("backToGenre",buttonHandler)
    randomizer.createBackButton();

}

function buttonHandler() {
    console.log("entrei no botao")
    startGenreController();
}

export { start };

import {start as genreController} from "/controllers/genre-controller.js";
import {start as randomController} from "/controllers/random-controller.js";
import {start as frontPageController} from "/controllers/frontPage-controller.js";
import {start as coupleController} from "/controllers/couple-type-controller.js"



function start(){
    frontPageController();
    

}

function couplePage(){
    coupleController();

}

function genrePage(genrePage){
    console.log("genre Page")
    genreController(genrePage);
    

}

function lastPage(genre){
    randomController(genre);
}


export { start,genrePage,lastPage,couplePage };

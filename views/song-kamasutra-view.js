import { elementsGender } from "/views/genre-view.js";
import { start } from "/controllers/random-controller.js";
import { coupleType } from "/controllers/couple-type-controller.js";
import { imagesCouple,imagesLesbian,imagesGay } from "/images_app/images.js";

const elements = {};
const handlers = {};

function render(newSong) {

        createSong(newSong);
    
}

function createSong(newSong) {

    if (elementsGender.selector) {
        $(elements.song).remove();
        $(elementsGender.selector).remove();

        for(let i = 1; i < 10 ; i ++){
            $(elementsGender.button + i).remove();
        }

    }

    const kamasutraPath = getRandomHeteroKamasutra();
    
    const song = $(
        `<div id="songInfoDiv">

        <h1 id = "title" > ${newSong.name} </h1>
            
            <div id = "kamasutraDiv">
                <img id = "kamasutraImg" src='${kamasutraPath}'></img>
            </div>
            
            <div id = "songDataView">
                    
                    <audio id ="songAudio" controls autoplay>
                        <source src='${newSong.track}'type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                    <br>
                
            </div>
        </div>`
    );
    
    elements.song = song;
    
 
    $("#app").append(song);

    const songController = document.querySelector('#songAudio');

    songController.onended = (event) => {
        clickButton();
    }
    
}

function clickButton() {
    start();
            
    }
    


const getRandomHeteroKamasutra = () => {
    console.log(coupleType)
    if(coupleType === "imagesLesbian"){
    const randomIndex = Math.floor(Math.random() * imagesLesbian.length);
    const randomKamasutra = imagesLesbian[randomIndex];
    return randomKamasutra.path;
    }else if(coupleType === "imagesGay"){
    const randomIndex = Math.floor(Math.random() * imagesGay.length);
    const randomKamasutra = imagesGay[randomIndex];
    return randomKamasutra.path;
    }else {
    const randomIndex = Math.floor(Math.random() * imagesCouple.length);
    const randomKamasutra = imagesCouple[randomIndex];
    return randomKamasutra.path;
    }

}

function createBackButton() {
  
   
    const app = $("#app");
    const button = $(
        `<footer>
        <div id="backButtonDiv">
        <button id='backToGenre' type="button">
        <img id ='backImage' src = "/images_app/backToGenre.png"
            </button>
           
        </div>

        </footer>`
    );

    elements.backToGenre = button;
    app.append(elements.backToGenre);
    $("#backToGenre").click(handlers.backToGenre);
    
}

function bind(element, handler) {
    handlers[element] = handler;
}



export { render,createBackButton,bind , elements};

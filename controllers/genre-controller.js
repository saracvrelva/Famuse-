
import { createSelector } from "/views/genre-view.js";
import { createButton, bind, visible} from "/views/genre-view.js";
import * as router from "/router.js"


let genreToShare = "";

async function start(){

    console.log("estou no genre controller")

    await createSelector();
    
    await bind("button1", buttonHandler1);
    await bind("button2", buttonHandler2);
    await bind("button3", buttonHandler3);
    await bind("button4", buttonHandler4);
    await bind("button5", buttonHandler5);
    await bind("button6", buttonHandler6);
    await bind("button7", buttonHandler7);
    await bind("button8", buttonHandler8);
    await bind("button9", buttonHandler9);
    visible();
    createButton();
   
   
   
}

function buttonHandler1() {
    const genre = "António Variações";
    genreToShare = genre;
    router.lastPage(genre);
}

function buttonHandler2() {
    const genre = "Dirty RnB";
    genreToShare = genre;
    router.lastPage(genre);
}

function buttonHandler3() {
    const genre = "Hardcore RnB";
    genreToShare = genre;
    router.lastPage(genre);
}

function buttonHandler4() {
    const genre = "Casual";
    genreToShare = genre;
    router.lastPage(genre);
}

function buttonHandler5() {
    const genre = "Erotic";
    genreToShare = genre;
    router.lastPage(genre);
}
function buttonHandler6() {
    const genre = "Pimba";
    genreToShare = genre;
    router.lastPage(genre);
}
function buttonHandler7() {
    const genre = "Funk";
    genreToShare = genre;
    router.lastPage(genre);
}
function buttonHandler8() {
    const genre = "Soul";
    genreToShare = genre;
    router.lastPage(genre);
}
function buttonHandler9() {
    const genre = "Soft RnB";
    genreToShare = genre;
    router.lastPage(genre);
}


export {start, genreToShare};
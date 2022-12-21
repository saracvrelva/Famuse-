import {createCouplePage, createButton, bind} from "/views/couple-type-view.js"
import * as router from "/router.js";

let coupleType = "";
function start(){

    createCouplePage();
    bind("button1", buttonHandler1);
    bind("button2", buttonHandler2);
    bind("button3", buttonHandler3);
    createButton();
    
}


async function buttonHandler1() {
    coupleType = "imagesLesbian";
    router.genrePage();
    
}

async function buttonHandler2() {
    coupleType = "imagesGay";
    router.genrePage();
    
}


async function buttonHandler3() {
    coupleType = "imagesCouple";
    router.genrePage();
    
}





export {start,coupleType};
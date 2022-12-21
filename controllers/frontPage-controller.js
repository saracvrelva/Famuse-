
import {createFrontPage, bind, createPlugButton} from "/views/frontPage-view.js";
import * as router from "/router.js";

function start(){

    createFrontPage();
    bind("button", buttonHandler);
    createPlugButton();
    
}


async function buttonHandler() {
    
    router.couplePage();
    
}


export {start};

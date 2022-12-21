import {elements} from "/views/frontPage-view.js";

const elementsCouple = {};
const handlers = {};

function createCouplePage() {

    if (elements.frontPage) {
        $(elements.frontPage).remove();
    
    }

   
    const app = $("#app");
    const coupleSelector = $(
        `
    <div class="images">
        <div>
            <img id="lesbian" class = "photo" src="/images_app/couplesType/lesb.png" alt="">
            
        </div>
        <div>
            <img id="gay" class="photo" src="/images_app/couplesType/gay.png" alt="">
        </div>
        <div>
            <img id="hetero" class="photo" src="/images_app/couplesType/hetro.png" alt="">
            
        </div>`)
    
        elementsCouple.coupleSelector = coupleSelector;

        app.append(elementsCouple.coupleSelector);
    
}

function createButton() {

    if (elementsCouple.button1) {
        return;
    }
  
    const button1 = $("#lesbian");
    const button2 = $("#gay");
    const button3 = $("#hetero");
  

    elementsCouple.button1 = button1;
    elementsCouple.button2 = button2;
    elementsCouple.button3 = button3;
    

    $("#lesbian").click(handlers.button1);
    $("#gay").click(handlers.button2);
    $("#hetero").click(handlers.button3);
    
}

function bind(element, handler) {
    handlers[element] = handler;
}
export {createCouplePage, createButton, bind, elementsCouple};
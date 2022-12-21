import { handlers } from "/views/frontPage-view.js";
import { elementsCouple } from "/views/couple-type-view.js";
import { elements } from "/views/song-kamasutra-view.js";

const elementsGender = {}



function createSelector() {

    if(elementsCouple.coupleSelector){
        elementsCouple.coupleSelector.remove();
    }

    if(elementsGender.selector){
        elementsGender.selector.remove();
        elements.song.remove();
        elements.backToGenre.remove();
    }

    const app = $("#app");
    const selector = $(
        ` <header id="head">
        <h1 id="header"><strong>Pick Your Genre</strong></h1>
    </header>
    <div class="images">
        <div>
            <img id="photo1" class="photo" src="/images_app/temas/avariacoes.png" alt="">
            <h3 class="genre" id="genre1">Variações</h3>
        </div>
        <div>
            <img id="photo2" class="photo" src="/images_app/temas/bdsm.png" alt="">
            <h3 class="genre" id="genre2" >Dirty</h3>
        </div>
        <div>
            <img id="photo3" class="photo" src="/images_app/temas/bdsm1.png" alt="">
            <h3 class="genre" id="genre3">Hardcore</h3>
        </div>
        <div>
            <img id="photo4" class="photo" src="/images_app/temas/kiss.png" alt="">
            <h3 class="genre" id="genre4">Vanilla</h3>
        </div>
        <div>
            <img id="photo5" class="photo" src="/images_app/temas/langer.png" alt="">
            <h3 class="genre" id="genre5">Luxury</h3>
        </div>
        <div>
            <img id="photo6" class="photo" src="/images_app/temas/toy.png" alt="">
            <h3 class="genre" id="genre6">Pimba</h3>
        </div>
        <div>
            <img id="photo7" class="photo" src="/images_app/temas/rabo.png" alt="">
            <h3 class="genre" id="genre7">Funky</h3>
        </div>
        <div>
            <img id="photo8" class="photo" src="/images_app/temas/boobs.png" alt="">
            <h3 class="genre" id="genre8">Soul</h3>
        </div>
        <div>
            <img id="photo9" class="photo" src="/images_app/temas/lesbians.png" alt="">
            <h3 class="genre" id="genre9">Smooth</h3>
        </div>
    </div>`
    );

    elementsGender.selector = selector;

    app.append(elementsGender.selector);


};

function visible(){
    $('#photo1').mouseover(() => {
        $('#genre1').get(0).style.cssText = "visibility: visible;"
    });

    $('#photo1').mouseleave(() => {
        $('#genre1').get(0).style.cssText = "visibility: hidden;"
    })

    $('#photo2').mouseover(() => {
        $('#genre2').get(0).style.cssText = "visibility: visible;"
    });

    $('#photo2').mouseleave(() => {
        $('#genre2').get(0).style.cssText = "visibility: hidden;"
    })

    $('#photo3').mouseover(() => {
        $('#genre3').get(0).style.cssText = "visibility: visible;"
    });

    $('#photo3').mouseleave(() => {
        $('#genre3').get(0).style.cssText = "visibility: hidden;"
    })

    $('#photo4').mouseover(() => {
        $('#genre4').get(0).style.cssText = "visibility: visible;"
    });

    $('#photo4').mouseleave(() => {
        $('#genre4').get(0).style.cssText = "visibility: hidden;"
    })

    $('#photo5').mouseover(() => {
        $('#genre5').get(0).style.cssText = "visibility: visible;"
    });

    $('#photo5').mouseleave(() => {
        $('#genre5').get(0).style.cssText = "visibility: hidden;"
    })

    $('#photo6').mouseover(() => {
        $('#genre6').get(0).style.cssText = "visibility: visible;"
    });

    $('#photo6').mouseleave(() => {
        $('#genre6').get(0).style.cssText = "visibility: hidden;"
    })

    $('#photo7').mouseover(() => {
        $('#genre7').get(0).style.cssText = "visibility: visible;"
    });

    $('#photo7').mouseleave(() => {
        $('#genre7').get(0).style.cssText = "visibility: hidden;"
    })


    $('#photo8').mouseover(() => {
        $('#genre8').get(0).style.cssText = "visibility: visible;"
    });

    $('#photo8').mouseleave(() => {
        $('#genre8').get(0).style.cssText = "visibility: hidden;"
    })


    $('#photo9').mouseover(() => {
        $('#genre9').get(0).style.cssText = "visibility: visible;"
    });

    $('#photo9').mouseleave(() => {
        $('#genre9').get(0).style.cssText = "visibility: hidden;"
    })
}

function createButton() {

    if (elementsGender.button1) {
        elementsGender.button1.remove();
        elementsGender.button2.remove();
        elementsGender.button3.remove();
        elementsGender.button4.remove();
        elementsGender.button5.remove();
        elementsGender.button6.remove();
        elementsGender.button7.remove();
        elementsGender.button8.remove();
        elementsGender.button9.remove();
    }
  
    const button1 = $("#photo1");
    const button2 = $("#photo2");
    const button3 = $("#photo3");
    const button4 = $("#photo4");
    const button5 = $("#photo5");
    const button6 = $("#photo6");
    const button7 = $("#photo7");
    const button8 = $("#photo8");
    const button9 = $("#photo9");

    elementsGender.button1 = button1;
    elementsGender.button2 = button2;
    elementsGender.button3 = button3;
    elementsGender.button4 = button4;
    elementsGender.button5 = button5;
    elementsGender.button6 = button6;
    elementsGender.button7 = button7;
    elementsGender.button8 = button8;
    elementsGender.button9 = button9;
    

    $("#photo1").click(handlers.button1);
    $("#photo2").click(handlers.button2);
    $("#photo3").click(handlers.button3);
    $("#photo4").click(handlers.button4);
    $("#photo5").click(handlers.button5);
    $("#photo6").click(handlers.button6);
    $("#photo7").click(handlers.button7);
    $("#photo8").click(handlers.button8);
    $("#photo9").click(handlers.button9);
}

function bind(element, handler) {
    handlers[element] = handler;
}

function cleanElements(){
    elementsGender.selector = null;
    elementsGender.albumButton = null;
}


export { createSelector, createButton , bind, elementsGender,cleanElements,visible };
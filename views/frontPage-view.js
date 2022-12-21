const elements = {};
const handlers = {};

const createFrontPage = () => {

    if(elements.frontPage){
        return;
    }

    const app = $("#app");
    const frontPage = $(
        ` <embed src="/songs/variacoes/y2mate.com-Cançãodeengate.mp3" loop="true" autostart="true" width="0" height="0">
        <div class='logo'>
        <h1 id='frontlogo'>FAMUSE</h1>
        <h3 id='frontDescription'> Feel The Music</h3>
    </div>
    <div class="button">
        <img src="/images_app/masturbator.png" id="plug">
    </div>
    <div class="plugit">
        <h3 id="plugtext">Plug it!</h3>
    </div>`
    );

    elements.frontPage = frontPage;

    app.append(elements.frontPage);


}

function createPlugButton() {
    if (elements.button) {
        return;
    }
    

    $("#plug").click(handlers.button);
    
}

function bind(element, handler) {
    handlers[element] = handler;
}



export {createFrontPage, createPlugButton ,bind, elements,handlers};
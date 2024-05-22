// Vi definerer variablerne
const raekke1 = document.getElementsByClassName("event_boks_mobil1");
const raekke2 = document.getElementsByClassName("event_boks_mobil2");
const raekke3 = document.getElementsByClassName("event_boks_mobil3");
const raekke4 = document.getElementsByClassName("event_boks_mobil4");

// Eventlistener: Når man scroller kaldes der på funktionen fadeInd
window.onscroll = fadeInd;

// Her definerer vi de elementer funktionen skal bruge
function fadeInd(){
    fadeInEventBoks(raekke2);
    fadeInEventBoks(raekke3);
    fadeInEventBoks(raekke4);
}

// 
function fadeInEventBoks(elements) {
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let element_info = element.getBoundingClientRect(); // for hvert plads i for-loopet får elementet placering ift. viewport

        // Hvis topplaceringen er mindre end vinduets højde minus 250 (for at kunne se rækkerne fade ind, skal opacity sættes til 1)
        if (element_info.top < window.innerHeight - 250) {
            element.style.opacity = "1";
        }
    }
}








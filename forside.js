
/* Billede karrusel (slider) */

//Denne kode samt styling er taget og tilpasset fra https://www.codingnepalweb.com/responsive-image-slider-html-css-javascript/ 


// Karrusellen skal kunne navigeres vha. knapper og scroll. 
const karrusel = () => { 
    // Først definerer vi vores variabler 
    const karruselKnapper = document.querySelectorAll(".forside_karrusel_knap"); //Her henter vi alle (vores to) navigationsknapper
    const karruselIndhold = document.querySelector(".forside_karrusel_indhold"); //Her henter vi det første billede i rækken

    //Ønsket var at karrusellen kun rykkede ét billede ad gangen. Dette er dog ikke lykkes med denne kode. Dertil ønskede vi, at karrusellen var uendelig (looped)
    karruselKnapper.forEach(knap => {
        knap.addEventListener("click", () => {
            const retning = knap.id === "forside_venstreknap" ? -1 : 1;
            const scrollMaengde = karruselIndhold.clientWidth * retning;
            karruselIndhold.scrollBy({ left: scrollMaengde, behavior: "smooth"});
        });
    });
}

window.addEventListener("load", karrusel); // Karrusellen starter, når siden loades


/* FAQ */
//Først definerer vi vores variabel
const sporgsmaalListe = document.querySelectorAll(".forside_faq_element")

sporgsmaalListe.forEach((sporgsmaal) => {
    sporgsmaal.addEventListener('click', () => { //Når der trykkes på et faq spørgsmål tilføjes classen 'aktiv', der er stylet med display: 'block'
        sporgsmaal.classList.toggle('aktiv');
    })
})

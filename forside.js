
/* Billede karrusel (slider) */

//Denne kode er taget og tilpasset fra https://www.codingnepalweb.com/responsive-image-slider-html-css-javascript/ 


// Karrusellen skal kunne navigeres vha. knapper og scroll. 
const karrusel = () => { 
    // Først definerer vi vores variabler 
    const karruselKnapper = document.querySelectorAll(".forside_karrusel_knap"); //Her henter vi alle (vores to) navigationsknapper
    const karruselIndhold = document.querySelector(".forside_karrusel_indhold"); //Her henter vi det første billede i rækken

    karruselKnapper.forEach(knap => {
        knap.addEventListener("click", () => {
            const retning = knap.id === "forside_venstreknap" ? -1 : 1;
            const scrollMaengde = karruselIndhold.clientWidth * retning;
            karruselIndhold.scrollBy({ left: scrollMaengde, behavior: "smooth"});
        });
    });
}

window.addEventListener("load", karrusel);

/* FAQ */

//Først definerer vi vores variabler
const faqs = document.querySelectorAll(".forside_faq_element")

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('aktiv');
    })
})

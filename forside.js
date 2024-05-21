
const karrusel = () => {
    const karruselKnapper = document.querySelectorAll(".forside_karrusel_knap");
    const karruselIndhold = document.querySelector(".forside_karrusel_indhold");

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

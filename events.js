/* ONSCROLL EFFEKT TIL EVENT-KODE */

// Koden kører, når hele siden er blevet indlæst
document.addEventListener('DOMContentLoaded', function () {

    // Vi vælger alle elementer med klassen 'event-kort' og gemmer dem i en const variabel kaldet 'kort'
    const kort = document.querySelectorAll('.event-kort');

    // Vi laver en funktion, der skal køre, når vi scroller på siden
    function onScroll() {

        // For hvert kort kigger vi på det ene ad gangen
        kort.forEach(function (etKort) {

            // Vi finder ud af, hvor hvert 'kort' som er placeret på skærmen, og hvor stort det er
            const rect = etKort.getBoundingClientRect();

            // Hvis toppen af kortet er inden for viewport, og bunden af kortet er over bunden på viewport:
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {

                // Vi tilføjer klassen 'visning' til kortet, så det bliver synligt
                etKort.classList.add('visning');
            } else {

                // Vi fjerner klassen 'visning' fra kortet, hvis det er uden for skærmen
                etKort.classList.remove('visning');
            }
        });
    }

    // Vi beder vinduet om at lytte efter, når vi scroller, og kalder 'onScroll' funktionen, når der bliver scrollet
    window.addEventListener('scroll', onScroll);

    // Vi kalder på 'onScroll' funktionen én gang ved indlæsning af siden for at sikre, at alle elementerne allerede er synlige
    onScroll();
});





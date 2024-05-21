
/* BURGERMENU */

// Definering af variabler
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const menupunkt = document.querySelectorAll('.menupunkt'); // Her henter vi alle de 'øverste' menupunkter
const submenu = document.querySelectorAll('.submenu'); // Her henter vi alle menupunkter, der har en dropdown

// Åbning af burgermenuen
burger.onclick = menuAktiv;
function menuAktiv () {
    burger.classList.toggle('aktiv'); // Når burgermenuen klikkes, skifter (toggler) den mellem at have classen 'aktiv' og ikke at have den
    menu.classList.toggle('aktiv'); // Det samme sker her.

    // Vi vil gerne være sikre på, at alle dropwdown-menuer er lukkede, når vi lukker vores menu
    if (!menu.classList.contains('aktiv')) {
        submenu.forEach(dropdown => { //Her går scriptet igennem hver submenu og finder ul-elementet med classen .dropdown og ændrer displayet til none
            dropdown.querySelector('.dropdown').style.display = 'none';
        });
    }
}
//Visning af dropdown-menuer (og efterfølgende luk)
/* menupunkt.forEach(menupunkt => { //Vi kalder parametert "menupunkt"i vores arrow funktion, så vi ved det er for hvert menupunkt 
    menupunkt.addEventListener('click', () => { // Vi sætter eventlistener på hvert menupunkt.
        const clickedSubmenu = menupunkt.querySelector('.dropdown'); //Her henter vi dropdown-menuerne og kalder dem "ClickedSubmenu"
        if (clickedSubmenu) {
            
            lukAndreSubmenuer(clickedSubmenu); // Her igangsættes lukAndreSubmenuer-funktionen med ClickedSubmenu som argument (altså en værdi, der spiller ind i eksekveringen)
            clickedSubmenu.style.display = (clickedSubmenu.style.display === 'block') ? 'none' : 'block'; // Hvis det er sandt, at, submenuen er synling (block), ændres værdien til 'none'; ellers ændres værdien til 'block' (Dette er en kort if/else statement)

            const ikon = menupunkt.querySelector('i');
            ikon.classList.toggle('fa-chevron-down');
            ikon.classList.toggle('fa-chevron-up');
        }
    });
}); */

menupunkt.forEach(menupunkt => {
    menupunkt.addEventListener('click', () => {
        const clickedSubmenu = menupunkt.querySelector('.dropdown');
        if (clickedSubmenu) {
            // Toggle submenu display
            const erAaben = clickedSubmenu.style.display === 'block';
            lukAndreSubmenuer(clickedSubmenu);
            clickedSubmenu.style.display = erAaben ? 'none' : 'block';
            
            // Toggle icon class
            const ikon = menupunkt.querySelector('i');
            if (erAaben) {
                ikon.classList.remove('fa-chevron-up');
                ikon.classList.add('fa-chevron-down');
            } else {
                ikon.classList.remove('fa-chevron-down');
                ikon.classList.add('fa-chevron-up');
            }
        }
    });
});

        // Function to close all submenus except the one passed as an argument
        function lukAndreSubmenuer(clickedSubmenu) { 
            const dropdown = document.querySelectorAll('.dropdown');
            dropdown.forEach(submenu => { 
                if (submenu !== clickedSubmenu) { // Her tjekker scriptet hvilken dropdownmenu vi klikker på - Scriptet går igennem alle dropdownmenuer. Dem, der ikke klikkes på ændres til display:none
                    submenu.style.display = 'none';
                    const ikon = submenu.closest('.menupunkt').querySelector('i');
                    if (ikon) {
                        ikon.classList.remove('fa-chevron-up');
                        ikon.classList.add('fa-chevron-down');
                    }
                }
            });
        }


/*ON SCROLL EFFEKT */

let elementsArray = document.querySelectorAll(".event-kort");
console.log(elementsArray);

window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 30;
        if (distInView < 0) {
            elem.classList.add("iVisning");
        } else {
            elem.classList.remove("iVisning");
        }
    }
}
fadeIn();
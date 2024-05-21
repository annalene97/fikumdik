
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

menupunkt.forEach(menupunkt => { //Vi kalder parametert "menupunkt"i vores arrow funktion, så vi ved det er for hvert menupunkt
    menupunkt.addEventListener('click', () => { // Vi sætter eventlistener på hvert menupunkt.
        const clickedSubmenu = menupunkt.querySelector('.dropdown'); //Her henter vi dropdown-menuerne og kalder dem "ClickedSubmenu"
        if (clickedSubmenu) {
            // Toggle submenu display
            const erAaben = clickedSubmenu.style.display === 'block';
            lukAndreSubmenuer(clickedSubmenu);
            clickedSubmenu.style.display = erAaben ? 'none' : 'block'; // Hvis det er sandt, at, submenuen er synling (block), ændres værdien til 'none'; ellers ændres værdien til 'block' (Dette er en kort if/else statement)
            
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
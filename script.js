/* BURGERMENU */

// Definering af variabler
const burger = document.getElementById('burger'); //Her tager vi fat i vores burger (ikon)
const menu = document.getElementById('menu'); //Her tager vi fat i vores menu
const menupunktListe = document.querySelectorAll('.menupunkt'); // Her henter vi alle de 'øverste' menupunkter
const submenuListe = document.querySelectorAll('.submenu'); // Her henter tager vi kun fat i menupunkter, der har en dropdown

// Åbning af burgermenuen
burger.onclick = menuAktiv; //Når burgeren klikkes starter funktionen menuAktiv
function menuAktiv () {
    burger.classList.toggle('aktiv'); // Når burgermenuen klikkes, skifter (toggler) den mellem at have classen 'aktiv' og ikke at have den
    menu.classList.toggle('aktiv'); // Det samme sker her.

    // Vi vil gerne være sikre på, at alle dropwdown-menuer er lukkede, når vi lukker vores menu
    if (menu.classList.contains('aktiv') === false) { 
        submenuListe.forEach(submenu => { 
            submenu.querySelector('.dropdown').style.display = 'none';
        }); //Hvis menuen IKKE har classen 'aktiv, går scriptet igennem hver submenu og finder .dropdown og ændrer displayet til none
    }
}

// Visning af dropdown med hjælp fra chatGPT
menupunktListe.forEach(menupunkt => { 
    menupunkt.addEventListener('click', () => { // Vi sætter eventlistener på hvert menupunkt, der lytter efter klik
        const aktivDropdown = menupunkt.querySelector('.dropdown'); //Her henter vi dropdown-menuen under menupunktet og kalder den "aktivDropdown"
        if (aktivDropdown) { //Hvis menupunktet, der klikkes, indeholder classen .dropdown sker der følgende:
            const erAaben = aktivDropdown.style.display === 'block'; //Her tjekker scriptet, om aktivDropdown har display: 'block', og dermed er synlig/åben. Hvis det er tilfældet bliver erAabens værdi 'true'
            
            lukAndreSubmenuer(aktivDropdown); //lukAndreSubmenuer-funktionen igangsættes

            if (erAaben) {
                aktivDropdown.style.display ='none'
            } else {
                aktivDropdown.style.display = 'block'
            } // Hvis det er sandt, at, submenuen er synlig (block), ændres værdien til 'none'; ellers ændres værdien til 'block'
            
            // Her ændrer vi classen på pilene, der indikerer, hvorvidt dropdown-menuen er åben eller ej
            const ikon = menupunkt.querySelector('i'); //Her finder vi i-elementet nested i menupunktet
            if (erAaben) {
                ikon.classList.remove('fa-chevron-up'); //Hvis submenuen er åbnet, når der trykkes på menupunktet, ændres classen.
                ikon.classList.add('fa-chevron-down');
            } else {
                ikon.classList.remove('fa-chevron-down');
                ikon.classList.add('fa-chevron-up');
            }
        }
    });
});

            // Her sikrer vi os, at de andre submenu er lukkede, så snart én submenu åbnes - med hjælp fra chatGPT
            function lukAndreSubmenuer(aktivDropdown) { 
                const dropdowns = document.querySelectorAll('.dropdown');
                dropdowns.forEach(dropdown => { 
                    if (dropdown !== aktivDropdown) { // Her tjekker scriptet hvilken dropdownmenu vi klikker på - Scriptet går igennem alle dropdownmenuer. Dem, der ikke klikkes på ændres til display:none
                        dropdown.style.display = 'none';

                        //Her har vi promptet chatGPT til at ændre classen på pilene til at matche åbning og luk af dropdown
                        const ikon = dropdown.closest('.menupunkt').querySelector('i');
                        if (ikon) {
                            ikon.classList.remove('fa-chevron-up');
                            ikon.classList.add('fa-chevron-down');
                        }
                    }
                });
            }
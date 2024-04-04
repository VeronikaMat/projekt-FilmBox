//3 Načtení tlačítka hamburgeru
const menuTlacitko = document.querySelector('#menu-tlacitko')
// Načtení navigačního menu
const menuPolozky = document.querySelector('#menu-polozky')

// Přidání posluchače události kliknutí na tlačítko
menuTlacitko.addEventListener('click', () => {
    // Přepnutí třídy show pro zobrazení / skrytí navigačního menu
    menuPolozky.classList.toggle('show')

    // Změna ikony tlačítka na hamburgeru / křížek
    if (menuPolozky.classList.contains('show')) {
        // Pokud je menu zobrazené, změňte ikonu na křížek
        menuTlacitko.innerHTML = '<i class="fas fa-times"></i>'
    } else {
        // Pokud je menu skryté, změňte ikonu zpět na hamburger
        menuTlacitko.innerHTML = '<i class="fas fa-bars"></i>'
    }
})








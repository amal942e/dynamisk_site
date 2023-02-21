window.addEventListener("load", loadPage)

/* konstant "burger" er selectoren til klassen .burger - samme med nav */
const burger = document.querySelector(".burger");
const nav = document.querySelector(".body-nav");



const box = document.querySelector(".gridbox")
const boxlink = document.querySelector(".gridlink")

function loadPage() {
    burger.addEventListener("click", toggleMenu)

}

/* toggle giver nu klassen show, hvis den ikke er der, og fjerner den igen hvis den er */
function toggleMenu(){
    nav.classList.toggle("show")

    
    /* document.querySelector("main").classList.toggle("disapear") */
}






//Localizamos en el documento los elementos del menu, el header y el main.
const header    =document.querySelector(`.Header`)
const boton     =header.querySelector(`.Header-menu`)
const main      =document.querySelector(`.Main`)
const menu      =header.querySelector(`.Header-ul`)

//Al pùlsar el boton, hacemos toggle de la clase Activo en los tres elementos afectados.
boton.addEventListener(`click`, ()=>{
    boton.classList.toggle(`Activo`)
    main.classList.toggle(`Activo`)
    menu.classList.toggle(`Activo`)
})




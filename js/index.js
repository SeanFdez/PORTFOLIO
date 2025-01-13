const header    =document.querySelector(`.Header`)
const boton     =header.querySelector(`.Header-menu`)
const main      =document.querySelector(`.Main`)
const menu      =header.querySelector(`.Header-ul`)
console.log(boton)

boton.addEventListener(`click`, ()=>{
    boton.classList.toggle(`Activo`)
    main.classList.toggle(`Activo`)
    menu.classList.toggle(`Activo`)
})




console.log('inicio')


const btnInicio = document.getElementById('btn-inicio');
btnInicio.addEventListener('click', () => {
    console.log('flag')
    firebase.analytics().logEvent('click_en_el_modal', { boton: 'inicio'})
    console.log("flag2")
})

const btnGaleria = document.getElementById('btn-galeria');
btnGaleria.addEventListener('click', () => {
    console.log('flag')
    firebase.analytics().logEvent('click_en_el_modal', { boton: 'galeria'})
    console.log("flag2")
})

const btnCotiza = document.getElementById('btn-cotiza');
btnCotiza.addEventListener('click', () => {
    console.log('flag')
    firebase.analytics().logEvent('click_en_el_modal', { boton: 'cotiza'})
    console.log("flag2")
})

const btnPaquetes = document.getElementById('btn-paquetes');
btnPaquetes.addEventListener('click', () => {
    console.log('flag')
    firebase.analytics().logEvent('click_en_el_modal')
    console.log("flag2")
})
console.log('fin')

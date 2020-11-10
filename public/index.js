console.log('inicio')


const btnInicio = document.getElementById('btn-inicio');
btnInicio.addEventListener('click', () => {
    console.log('flag')
    firebase.analytics().logEvent('testabc', { name: 'tesabc'})
    // firebase.analytics().logEvent('Inicio', { name: 'click'});
    console.log("flag2")
})

console.log('fin')
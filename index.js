const btnPaquetes = document.getElementById('btn-paquetes');
btnPaquetes.addEventListener('click', () => {
    console.log('flag')
    firebase.analytics().logEvent('prueba', { name: 'testname'});
})

const btnInicio = document.getElementById('btn-inicio');
btnInicio.addEventListener('click', () => {
    console.log('flag')
    firebase.analytics().logEvent('Inicio', { name: 'click'});
})
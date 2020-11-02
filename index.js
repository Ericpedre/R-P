const btnPaquetes = document.getElementById('btn-paquetes');
btnPaquetes.addEventListener('click', () => {
    console.log('flag')
    firebase.analytics().logEvent('prueba', { name: 'testname'});
})
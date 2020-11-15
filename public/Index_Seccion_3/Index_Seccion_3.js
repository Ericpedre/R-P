
// -----Datos de USUARIO-----
var Cliente_Nombre = 'Raul';
var Cliente_Ubicacion = 'Chorrera';
var Cliente_Edad = '21';
var Cliente_Perfil = String(Cliente_Nombre+' '+Cliente_Edad+' Años '+' de '+Cliente_Ubicacion)
// -----btn de wasap----
var Whts_CodigoPostal = '507';
var Whts_Telefono = '63116918';
var Whts_SaludoInicial = 'Hola es un gusto mi nombre es ';
var Whts_EspaciosTxt = '%20';
var Whts_ContenidoTxt='';

function a1_c_2(){
  
  var Whts_ContenidoTxt =String(Whts_SaludoInicial+Cliente_Nombre+' Soy de '+Cliente_Ubicacion+
  ', Quiero contratar el servicio de '+ document.getElementById('1_h2_c_2').innerHTML+' Que incluye '+
  document.getElementById('1_p_c_2').innerHTML+' por '+document.getElementById('1_a_c_2').innerHTML+
  ' Gracias');

  Whts_ContenidoTxt = Whts_ContenidoTxt.replace(' ',Whts_EspaciosTxt);
  window.open(String('https://api.whatsapp.com/send?phone='+Whts_CodigoPostal+Whts_Telefono+'&text='+Whts_ContenidoTxt));
}
console.log(document.getElementById('1_h2_c_2').innerHTML);
GALERIA_Btn_Sesion = [];
GALERIA_Btn_Sesion = [
    [
      'https://drive.google.com/uc?export=view&id=1A3p8F-kjoeESETjV5j-eSbyCB2fC8znv_',
      'Sesion en Bodas',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, vitae!',
      '0_Premium',
      '20 Fotos 12x12 + 10 Fotos 10x10',
      '20$ Contratar',
      '0_Normal',
      '10 Fotos 12x12 + 10 Fotos 10x10',
      '15$ Contratar',
      '0_regular',
      '5 Fotos 12x12 + 5 Fotos 10x10',
      '10$ Contratar'
    ],
    [
      'https://drive.google.com/uc?export=view&id=17nhSwELfVBYzX3xqaO_N46V_AgFOctjQ_',
      'Primeros añitos',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, vitae!',
      '1_Premium',
      '20 Fotos 12x12 + 10 Fotos 10x10',
      '20$ Contratar',
      '1_Normal',
      '10 Fotos 12x12 + 10 Fotos 10x10',
      '15$ Contratar',
      '1_regular',
      '5 Fotos 12x12 + 5 Fotos 10x10',
      '10$ Contratar'
    ],
    [
      'https://drive.google.com/uc?export=view&id=1P72sd-Cj8t9tN9c9Fi1_3H19MV8w0Udn_',
      'Fotos en exteriores',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, vitae!',
      '2_Premium',
      '20 Fotos 12x12 + 10 Fotos 10x10',
      '20$ Contratar',
      '2_Normal',
      '10 Fotos 12x12 + 10 Fotos 10x10',
      '15$ Contratar',
      '2_regular',
      '5 Fotos 12x12 + 5 Fotos 10x10',
      '10$ Contratar'
    ], 
    [
      'https://drive.google.com/uc?export=view&id=1sfYaJ_giPcgCzUWXYqi_v4pSH8Jb4qZb_',
      'Graduandos',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, vitae!',
      '3_Premium',
      '20 Fotos 12x12 + 10 Fotos 10x10',
      '20$ Contratar',
      '3_Normal',
      '10 Fotos 12x12 + 10 Fotos 10x10',
      '15$ Contratar',
      '3_regular',
      '5 Fotos 12x12 + 5 Fotos 10x10',
      '10$ Contratar'
    ],
    [
      'https://drive.google.com/uc?export=view&id=1U9_-jUTnSOkoqRAUwXPOweaGHYAh7zxw_',
      'Para Parejas',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, vitae!',
      '4_Premium',
      '20 Fotos 12x12 + 10 Fotos 10x10',
      '20$ Contratar',
      '4_Normal',
      '10 Fotos 12x12 + 10 Fotos 10x10',
      '15$ Contratar',
      '4_regular',
      '5 Fotos 12x12 + 5 Fotos 10x10',
      '10$ Contratar'
    ],
    [
      'https://drive.google.com/uc?export=view&id=1bnxxrX8w3SuJEFaXQLP47X9n6eD7S892_',
      'Cultura y Tradiciones',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, vitae!',
      '4_Premium',
      '20 Fotos 12x12 + 10 Fotos 10x10',
      '20$ Contratar',
      '4_Normal',
      '10 Fotos 12x12 + 10 Fotos 10x10',
      '15$ Contratar',
      '4_regular',
      '5 Fotos 12x12 + 5 Fotos 10x10',
      '10$ Contratar'
    ]
];

for(i=0; GALERIA_Btn_Sesion.length>i; i++){
document.getElementById('Album_1').innerHTML +=`
    <div>
        <img src="${GALERIA_Btn_Sesion[i][0]}">
        <h1>${GALERIA_Btn_Sesion[i][1]}</h1>
        <p>${GALERIA_Btn_Sesion[i][2]}</p>
        <p><a  onclick="document.getElementById('Desc_h1').innerHTML='${GALERIA_Btn_Sesion[i][1]}';
          document.getElementById('Desc_p').innerHTML='${GALERIA_Btn_Sesion[i][2]}';

          document.getElementById('1_h2_c_2').innerHTML='${GALERIA_Btn_Sesion[i][3]}';
          document.getElementById('1_p_c_2').innerHTML='${GALERIA_Btn_Sesion[i][4]}';
          document.getElementById('1_a_c_2').innerHTML='${GALERIA_Btn_Sesion[i][5]}';

          document.getElementById('2_h2_c_2').innerHTML='${GALERIA_Btn_Sesion[i][6]}';
          document.getElementById('2_p_c_2').innerHTML='${GALERIA_Btn_Sesion[i][7]}';
          document.getElementById('2_a_c_2').innerHTML='${GALERIA_Btn_Sesion[i][8]}';

          document.getElementById('3_h2_c_2').innerHTML='${GALERIA_Btn_Sesion[i][9]}';
          document.getElementById('3_p_c_2').innerHTML='${GALERIA_Btn_Sesion[i][10]}';
          document.getElementById('3_a_c_2').innerHTML='${GALERIA_Btn_Sesion[i][11]}';
          
          "

          class="btn btn-secondary"  role="button">Cotizar</a></p>
    </div>
    `;
}

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
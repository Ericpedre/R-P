Index_Btn_Sesion = [];
Index_Btn_Sesion = [
    [
      'https://drive.google.com/uc?export=view&id=1A3p8F-kjoeESETjV5j-eSbyCB2fC8znv',
      'Fotos para Boda',
      'Mas que formar una pareja es unir dos partes de un solo alma.',
      'Premium',
      '20 Fotos 12x12 + 10 Fotos 10x10',
      '20$ Contratar',
      'Normal',
      '10 Fotos 12x12 + 10 Fotos 10x10',
      '15$ Contratar',
      'Regular',
      '5 Fotos 12x12 + 5 Fotos 10x10',
      '10$ Contratar'
    ],
    [
      'https://drive.google.com/uc?export=view&id=17nhSwELfVBYzX3xqaO_N46V_AgFOctjQ',
      'Primeros años',
      'Recordar nuesta infancia a travez de fotos nos forma como adultos',
      'Premium',
      '20 Fotos 12x12 + 10 Fotos 10x10',
      '20$ Contratar',
      'Normal',
      '10 Fotos 12x12 + 10 Fotos 10x10',
      '15$ Contratar',
      'Regular',
      '5 Fotos 12x12 + 5 Fotos 10x10',
      '10$ Contratar'
    ],
    [
      'https://drive.google.com/uc?export=view&id=1P72sd-Cj8t9tN9c9Fi1_3H19MV8w0Udn',
      'Fotos en exteriores',
      'Para recordar que nuestra libertad es muy valiosa',
      'Premium',
      '20 Fotos 12x12 + 10 Fotos 10x10',
      '20$ Contratar',
      'Normal',
      '10 Fotos 12x12 + 10 Fotos 10x10',
      '15$ Contratar',
      'Regular',
      '5 Fotos 12x12 + 5 Fotos 10x10',
      '10$ Contratar'
    ], 
    [
      'https://drive.google.com/uc?export=view&id=1sfYaJ_giPcgCzUWXYqi_v4pSH8Jb4qZb',
      'De graduandos',
      'Para tener presente que el camino es dificil pero no imposible',
      'Premium',
      '20 Fotos 12x12 + 10 Fotos 10x10',
      '20$ Contratar',
      'Normal',
      '10 Fotos 12x12 + 10 Fotos 10x10',
      '15$ Contratar',
      'Regular',
      '5 Fotos 12x12 + 5 Fotos 10x10',
      '10$ Contratar'
    ],
    [
      'https://drive.google.com/uc?export=view&id=1U9_-jUTnSOkoqRAUwXPOweaGHYAh7zxw',
      'Sesion en pareja',
      'Para contruir un linda y eterna historia juntos',
      'Premium',
      '20 Fotos 12x12 + 10 Fotos 10x10',
      '20$ Contratar',
      'Normal',
      '10 Fotos 12x12 + 10 Fotos 10x10',
      '15$ Contratar',
      'Regular',
      '5 Fotos 12x12 + 5 Fotos 10x10',
      '10$ Contratar'
    ],
    [
      'https://drive.google.com/uc?export=view&id=1bnxxrX8w3SuJEFaXQLP47X9n6eD7S892',
      'Cultura y Tradiciones',
      'Nuestra belleza cultural esta en cada tradicion',
      'Premium',
      '20 Fotos 12x12 + 10 Fotos 10x10',
      '20$ Contratar',
      'Normal',
      '10 Fotos 12x12 + 10 Fotos 10x10',
      '15$ Contratar',
      'Regular',
      '5 Fotos 12x12 + 5 Fotos 10x10',
      '10$ Contratar'
    ]
];

function shuffle(Index_Btn_Sesion) {
  var currentIndex = Index_Btn_Sesion.length, temporaryValue, randomIndex;

  // Mientras queden elementos a mezclar...
  while (0 !== currentIndex) {

    // Seleccionar un elemento sin mezclar...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // E intercambiarlo con el elemento actual
    temporaryValue = Index_Btn_Sesion[currentIndex];
    Index_Btn_Sesion[currentIndex] = Index_Btn_Sesion[randomIndex];
    Index_Btn_Sesion[randomIndex] = temporaryValue;
  }

  return Index_Btn_Sesion;
}

Index_Btn_Sesion = shuffle(Index_Btn_Sesion);

var CASd = Index_Btn_Sesion.length;

for(i=0; Index_Btn_Sesion.length>i; i++){
document.getElementById('Album_1').innerHTML +=`
    <div>
        <img  src="${Index_Btn_Sesion[i][0]}">
        <h1>${Index_Btn_Sesion[i][1]}</h1>
        <p>${Index_Btn_Sesion[i][2]}</p>
        <p class="btnP ">
          <a id="ASd${i}" onclick="

          document.getElementById('Desc_h1').innerHTML='${Index_Btn_Sesion[i][1]}';
          document.getElementById('Desc_p').innerHTML='${Index_Btn_Sesion[i][2]}';

          document.getElementById('1_h2_c_2').innerHTML='${Index_Btn_Sesion[i][3]}';
          document.getElementById('1_p_c_2').innerHTML='${Index_Btn_Sesion[i][4]}';
          document.getElementById('1_a_c_2').innerHTML='${Index_Btn_Sesion[i][5]}';

          document.getElementById('2_h2_c_2').innerHTML='${Index_Btn_Sesion[i][6]}';
          document.getElementById('2_p_c_2').innerHTML='${Index_Btn_Sesion[i][7]}';
          document.getElementById('2_a_c_2').innerHTML='${Index_Btn_Sesion[i][8]}';

          document.getElementById('3_h2_c_2').innerHTML='${Index_Btn_Sesion[i][9]}';
          document.getElementById('3_p_c_2').innerHTML='${Index_Btn_Sesion[i][10]}';
          document.getElementById('3_a_c_2').innerHTML='${Index_Btn_Sesion[i][11]}';
          document.getElementById('container_1').style.display='flex';
          "

          class="btn BTO ASd btn-secondary"  role="button">Cotizar</a></p>
    </div>
    `;
}
// ---------------------------------


Fotos_Todas = [
  ['https://cdn.pixabay.com/photo/2015/06/27/03/25/panama-canal-823221_960_720.jpg','XW'],
  ['https://cdn.pixabay.com/photo/2020/03/21/09/42/mammal-4953158_960_720.jpg','XW']
];
// Fotos_Todas = Fotos_Exteriores_H.concat(Fotos_Bebes_H,Fotos_Bodas_H, Fotos_Parejas_H,Fotos_Tradicionales_H, Fotos_Graduandos_H);

var random = Fotos_Todas[Math.floor(Math.random()*Fotos_Todas.length)]

document.getElementById("Index").style.backgroundImage="url("+random[0]+")";

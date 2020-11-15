Index_Btn_Sesion = [];
Index_Btn_Sesion = [
    [
      'https://drive.google.com/uc?export=view&id=1A3p8F-kjoeESETjV5j-eSbyCB2fC8znv',
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
      'https://drive.google.com/uc?export=view&id=17nhSwELfVBYzX3xqaO_N46V_AgFOctjQ',
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
      'https://drive.google.com/uc?export=view&id=1P72sd-Cj8t9tN9c9Fi1_3H19MV8w0Udn',
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
      'https://drive.google.com/uc?export=view&id=1sfYaJ_giPcgCzUWXYqi_v4pSH8Jb4qZb',
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
      'https://drive.google.com/uc?export=view&id=1U9_-jUTnSOkoqRAUwXPOweaGHYAh7zxw',
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
      'https://drive.google.com/uc?export=view&id=1bnxxrX8w3SuJEFaXQLP47X9n6eD7S892',
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


for(i=0; Index_Btn_Sesion.length>i; i++){
document.getElementById('Album_1').innerHTML +=`
    <div>
        <img id="ASd${i}" src="${Index_Btn_Sesion[i][0]}">
        <h1>${Index_Btn_Sesion[i][1]}</h1>
        <p>${Index_Btn_Sesion[i][2]}</p>
        <p><a  onclick="document.getElementById('Desc_h1').innerHTML='${Index_Btn_Sesion[i][1]}';
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

          class="btn btn-secondary"  role="button">Cotizar</a></p>
    </div>
    `;
}

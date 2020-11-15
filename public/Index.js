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
// ---------------------------------









Fotos_Exteriores_H =[
  ['https://drive.google.com/uc?export=view&id=1P72sd-Cj8t9tN9c9Fi1_3H19MV8w0Udn','AH'],
  ['https://drive.google.com/uc?export=view&id=1epXBY52TmdWiPEIwOCQOTmps_e69SyNz','AH'],
  ['https://drive.google.com/uc?export=view&id=1RVqHZyU_EITtaRhEh5g85NShVuwgID1m','AH']
];
Fotos_Exteriores_V =[
  ['https://drive.google.com/uc?export=view&id=1BapA2oIIzBoIRwdFvqBFFldksyARmELg','AV'],
  ['https://drive.google.com/uc?export=view&id=1U3u5EqcOCxcI8K1kToeziOI_7SOCJ2aP','AV'],
  ['https://drive.google.com/uc?export=view&id=1jNlPqThVDDi1hKmwQJ1funyZ9u1Cgm-e','AV'],
  ['https://drive.google.com/uc?export=view&id=1s3WOv3jsqTlk0qk5Fzx-bhv8zF1TKSVp','AV'],
  ['https://drive.google.com/uc?export=view&id=1nxzisWuOAbdRxa77wtyerMmIspCLPOQY','AV'],
  ['https://drive.google.com/uc?export=view&id=1Gf-v7o6AuzpU32LB2G9wmP5I70dg53Ee','AV'],
  ['https://drive.google.com/uc?export=view&id=1sGEDTyL5rAcsCLU8FxJcCKJbdojGX8UT','AV'],
  ['https://drive.google.com/uc?export=view&id=1AYRv4owd3fHmk0Vo5HjrBbmAHrCMyo_0','AV']
];
Fotos_Bodas_H =[
  ['https://drive.google.com/uc?export=view&id=1A3p8F-kjoeESETjV5j-eSbyCB2fC8znv','BH']
];    
Fotos_Bodas_V =[
  ['https://drive.google.com/uc?export=view&id=1MAVejWDxIxJ88B-tQ5zm9-EYunu5tl8O','BV'],
  ['https://drive.google.com/uc?export=view&id=1i3Bxlei2L8HGlUgHAYn91jjIz5vDWdRQ','BV'],
  ['https://drive.google.com/uc?export=view&id=16W9e3YTHmbd1_sOokIy7ITYZ_gQCQL0Z','BV'],
  ['https://drive.google.com/uc?export=view&id=1UPSuLR9SmB4e9TYNIq44_C129tnaR_Bj','BV'],
  ['https://drive.google.com/uc?export=view&id=1bQQ-u34MG3OhrCo0fhv-4tsYQXSFbVcH','BV'],
  ['https://drive.google.com/uc?export=view&id=1x23ZTp4ccgG9aHU3scH6L9Vf2h9nT7fb','BV'],
  ['https://drive.google.com/uc?export=view&id=1szN520eEx4ES-thcNp35uFkI39fwKSYF','BV'],
  ['https://drive.google.com/uc?export=view&id=1QRokgazCTuR5-mWYvWUvTZvdiemQdv-i','BV']
];
Fotos_Parejas_H =[
  ['https://drive.google.com/uc?export=view&id=1K8ZQve331vtdf7lcKAiet_8cBGliJEQB','BH'],
  ['https://drive.google.com/uc?export=view&id=1U9_-jUTnSOkoqRAUwXPOweaGHYAh7zxw','BH']
];    
Fotos_Parejas_V =[
  ['https://drive.google.com/uc?export=view&id=1J4hRAyD-trg_iNcnwkXg3gCItkLFkZv6','BV'],
  ['https://drive.google.com/uc?export=view&id=1LWfDGl0Vfhq7eOtwi58rJNGAGaBzZeva','BV'],
  ['https://drive.google.com/uc?export=view&id=1Mus4hTu-chO4RzXVXglqXTuID-lE3IAr','BV'],
  ['https://drive.google.com/uc?export=view&id=1vyMXxh_wNgPq2OUr-nHNYTpLO_9MubEw','BV'],
  ['https://drive.google.com/uc?export=view&id=19ewnqaTnpQmKq7sLSwgClaxiJDxralwG','BV']
];
Fotos_Tradicionales_H =[
  ['https://drive.google.com/uc?export=view&id=1tj87gYQSeYhcNPtTR_1Vu3xJH1i8Yp1w','CH'],
  ['https://drive.google.com/uc?export=view&id=1A7A0PPTIhPQzaf3p4RbCPq6G60ScZ8nr','CH'],
  ['https://drive.google.com/uc?export=view&id=1Vf5eO3zIXBf6Gs3fhJLopxTuGbrLZTm6','CH'],
  ['https://drive.google.com/uc?export=view&id=1bnxxrX8w3SuJEFaXQLP47X9n6eD7S892','CH']
];
Fotos_Tradicionales_v =[
  ['https://drive.google.com/uc?export=view&id=1GsfLXAGxSjeKJ_82Ywyd8OC2v1VPIsm2','CV'],
  ['https://drive.google.com/uc?export=view&id=15RZLUyO7jlsvv16uIsUYXluKkaB44tia','CV'],
  ['https://drive.google.com/uc?export=view&id=1YbgRKpRU2ZNYcjSyWO6G9oZ_u2DNd1Tg','CV']
];
Fotos_Graduandos_H =[
  ['https://drive.google.com/uc?export=view&id=1KkrFIleOXbJfK8VcOLUH7a23g7OXbd0s','DH'],
  ['https://drive.google.com/uc?export=view&id=1GZXJCk4aGRuGOg5A-YRcXxtehXVai0-T','DH'],
  ['https://drive.google.com/uc?export=view&id=1sfYaJ_giPcgCzUWXYqi_v4pSH8Jb4qZb','DH']
];
Fotos_Graduandos_v =[
  ['https://drive.google.com/uc?export=view&id=1UzeYa9W1eovGkPuWsZWcbZOxmmFktsWv','DV'],
  ['https://drive.google.com/uc?export=view&id=1o51MQq0rJGCj-2Wmu6F0rcU4Jmy4joZl','DV'],
  ['https://drive.google.com/uc?export=view&id=1vJjyD8Pnaf7KkBuzSFfpTrAakTjn5_0O','DV'],
  ['https://drive.google.com/uc?export=view&id=1ndJplTy_q2raOqfxZYDkzzkV5Bv03scr','DV'],
  ['https://drive.google.com/uc?export=view&id=19G94SOm9_pQIX4ik2pzob7VKd_vmoq7r','DV'],
  ['https://drive.google.com/uc?export=view&id=1J-tV8RVu8W9mRmAP10gyIqrIFGoOoWPO','DV'],
  ['https://drive.google.com/uc?export=view&id=1efRYrjJ_UNpe4g9n94K9ie5tso-IKybR','DV']
];
Fotos_Bebes_H =[
  ['https://drive.google.com/uc?export=view&id=17nhSwELfVBYzX3xqaO_N46V_AgFOctjQ','EH']
];
Fotos_Bebes_V =[
  ['https://drive.google.com/uc?export=view&id=1p8y4AuEMyT0YFrlGbmETBxllg_8_LVwV','EV']
];

Fotos_Todas = [];
Fotos_Todas = Fotos_Exteriores_H.concat(Fotos_Bebes_H,Fotos_Bodas_H, Fotos_Parejas_H,Fotos_Tradicionales_H, Fotos_Graduandos_H);

var random = Fotos_Todas[Math.floor(Math.random()*Fotos_Todas.length)]

document.getElementById("Index").style.backgroundImage="url("+random[0]+")";

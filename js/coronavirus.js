var header = "COVID-19";
var paragraph = "Koronavirusai yra virusai, kurie cirkuliuoja tarp gyvūnų, tačiau žinoma, kad kai kurie iš jų sukelia infekcijas žmonėms. Sukėlę infekciją žmonėms, jie toliau gali būti perduoti nuo žmogaus žmogui. Koronavirusų infekcijos šaltinis gali būti daugybė gyvūnų. Pavyzdžiui, Artimųjų Rytų respiracinio sindromo koronaviruso (MERS-CoV) šaltinis buvo kupranugariai, o sunkaus ūmaus respiracinio sindromo (SŪRS) - civetės katės.";

var models = new THREE.Object3D();
var modelName = "models/coronavirus/scene.gltf";


import { init, animate } from './script.js';
init(modelName, models, header, paragraph);
animate();
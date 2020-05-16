import { init, animateN, animateAN } from './script.js';

export const data = {

    // -------------------- biobrick --------------------
    biobrick: {
        meta: {
            nameLT: "BioBrick",
            infoLT: "",
            nameEN: "BioBrick",
            infoEN: "",
        },
        model: {
            path: "./models/lego.glb",
            pos: {x: -0.06, y: 0.38, z: 1.2},
            rot: {x: 0, y: -1.6, z: 0},
            animated: true,
            looponce: true,
            animationType: 'an',
        },
        displayFunction: ()=>{
            document.querySelector("body").style.backgroundImage = "url('images/bg/bg-dark.png')";
        },
    },
    
    // -------------------- bioethics --------------------
    bioethics: {
        meta: {
            nameLT: "Bioetika",
            infoLT: "",
            nameEN: "Bioethics",
            infoEN: "",
        },
        model: {
            path: "./models/rna/rna.gltf",
            pos: undefined,
            rot: undefined,
            animated: false,
            looponce: true,
            animationType: 'n',
        },
        displayFunction: undefined,
    },

    // -------------------- coronavirus --------------------
    coronavirus: {
        meta: {
            nameLT: "SARS-CoV-2",
            infoLT: "Koronavirusai yra virusai, kurie cirkuliuoja tarp gyvūnų, tačiau žinoma, kad kai kurie iš jų sukelia infekcijas žmonėms. Sukėlę infekciją žmonėms, jie toliau gali būti perduoti nuo žmogaus žmogui. Koronavirusų infekcijos šaltinis gali būti daugybė gyvūnų. Pavyzdžiui, Artimųjų Rytų respiracinio sindromo koronaviruso (MERS-CoV) šaltinis buvo kupranugariai, o sunkaus ūmaus respiracinio sindromo (SARS-CoV-1) – civetės katės.",
            nameEN: "SARS-CoV-2",
            infoEN: "...",
        },
        model: {
            path: "./models/coronavirus.glb",
            pos: {x: 0, y: 0, z: 0},
            rot: {x: 0, y: 0, z: 0},
            animated: false,
            looponce: true,
            animationType: 'n',

        },
        displayFunction: undefined,
    },

    /* !! WARNING !!: vietoj crispr-cas9 (minusiukas [-] pakeistas į pabraukiuką [_]): */
    // -------------------- crispr_cas9 --------------------
    crispr_cas9: {
        meta: {
            nameLT: "CRISPR-Cas9",
            infoLT: "",
            nameEN: "CRISPR-Cas9",
            infoEN: "",
        },
        model: {
            path: "./models/crisprcas9.glb",
            pos: {x: -0.2, y: 0.1, z: 1.79},
            rot: {x: 0.3, y: -1.85, z: 0.5},
            animated: true,
            looponce: false,
            animationType: 'an',

        },
        displayFunction: undefined,
    },

    // -------------------- dna --------------------
    dna: {
        meta: {
            nameLT: "Deoksiribonukleorūgštis (DNR)",
            infoLT: "Tekstas - tekstas",
            nameEN: "Deoxyribonucleic acid (DNA)",
            infoEN: "...",
        },
        model: {
            path: "./models/DNA.glb",
            pos: {x: 0, y: 0.35, z: 1},
            rot: {x: 0, y: 4.7, z: 0},
            animated: true,
            looponce: false,
            animationType: 'an',
        },
        displayFunction: undefined,
    },

    // -------------------- e621 --------------------
    e621: {
        meta: {
            nameLT: "Mononatrio glutamatas (E621)",
            infoLT: "Tekstas - tekstas",
            nameEN: "Monosodium glutamate (E621)",
            infoEN: "...",
        },
        model: {
            path: "./models/rna/rna.gltf",
            pos: {x: 0, y: 0, z: 0},
            rot: {x: 0, y: 0, z: 0},
            animated: false,
            looponce: true,
            animationType: 'n',
        },
    },

    // -------------------- ecoli --------------------
    ecoli: {
        meta: {
            nameLT: "Escherichia coli (E. coli)",
            infoLT: "Tekstas - tekstas",
            nameEN: "Escherichia coli (E. coli)",
            infoEN: "...",
        },
        model: {
            path: "./models/rna/rna.gltf",
            pos: {x: 0, y: 0, z: 0},
            rot: {x: 0, y: 0, z: 0},
            animated: false,
            looponce: false,
            animationType: 'n',
        },
        displayFunction: undefined,
    },

    // -------------------- fish --------------------
    fish: {
        meta: {
            nameLT: "Žuvis?",
            infoLT: "Tekstas - tekstas",
            nameEN: "Fish?",
            infoEN: "...",
        },
        model: {
            path: "./models/rna/rna.gltf",
            pos: {x: 0, y: 0, z: 0},
            rot: {x: 0, y: 0, z: 0},
            animated: false,
            looponce: false,
            animationType: 'n',
        },
        displayFunction: undefined,
    },

    // -------------------- gene --------------------
    gene: {
        meta: {
            nameLT: "Genas?",
            infoLT: "Tekstas - tekstas",
            nameEN: "Gene?",
            infoEN: "...",
        },
        model: {
            path: "./models/rna/rna.gltf",
            pos: {x: 0, y: 0, z: 0},
            rot: {x: 0, y: 0, z: 0},
            animated: false,
            looponce: false,
            animationType: 'n',
        },
        displayFunction: undefined
    },
    
    // -------------------- gfp --------------------
    gfp: {
        meta: {
            nameLT: "Žalias fluorescencinis baltymas (GFP)",
            infoLT: "Tekstas - tekstas",
            nameEN: "Green fluorescent protein (GFP)",
            infoEN: "...",
        },
        model: {
            path: "./models/gfp.glb",
            pos: {x: 0, y: 0.5, z: 0.5},
            rot: {x: 0, y: 0, z: 0},
            animated: true,
            looponce: false,
            animationType: 'an',
        },
        displayFunction: (models)=>{
            const TRAY = document.getElementById('tray-container');
            TRAY.style = "display: flex;";
            // const colors = ['03f4fc', '0303fc', 'fc03a1', 'f4fc03', '03fc4a', '6703fc', 'fc0303', ]; // old colors
            const colors = ['0CFC16', 'F2FC3B', 'FC8839', 'FC3D3D', '4040FC', '35A0FC', '3AEBFC', ];
            
            const setMaterial = (parent, type, mtl)=>{
                parent.traverse((o) => {
                    if (o.isMesh && o.nameID != null) {
                        if (o.nameID == type) {
                            o.material = mtl;
                        }
                    }
                });
            }

            const selectSwatch = (e)=>{
                let color = colors[parseInt(e.target.dataset.key)];
                let new_mtl = new THREE.MeshPhongMaterial({
                    color: parseInt('0x' + color),
                    shininess: 10
                });
            
                console.log("click " + color); // TODO: remove
                setMaterial(models, 'GFP', new_mtl);
            }
            

            const buildColors = (colors)=>{
                for (let [i, color] of colors.entries()) {
                    let swatch = document.createElement('div');
                    swatch.classList.add('tray-swatch');
                    swatch.style.background = "#" + color;
                    swatch.setAttribute('data-key', i);
                    swatch.addEventListener('click', selectSwatch);
                    TRAY.append(swatch);
                }
            }

            document.querySelector("body").style.backgroundImage = "url('images/bg/bg-dark.png')";
            buildColors(colors);
        }
    },
    
    // -------------------- gmo --------------------
    gmo: {
        meta: {
            nameLT: "Genetiškai modifikuoti organizmai",
            infoLT: "Tekstas - tekstas",
            nameEN: "Genetically modified organisms",
            infoEN: "...",
        },
        model: {
            path: "./models/rna/rna.gltf",
            pos: {x: 0, y: 0, z: 0},
            rot: {x: 0, y: 0, z: 0},
            animated: false,
            looponce: false,
            animationType: 'n',
        },
        displayFunction: undefined
    },
    
    // -------------------- nano --------------------
    nano: {
        meta: {
            nameLT: "Bakteriofagas",
            infoLT: "Tekstas - tekstas",
            nameEN: "Bacteriophage",
            infoEN: "...",
        },
        model: {
            path: "./models/bacteriophage.glb",
            pos: {x: 0.05, y: 3, z: 0.05},
            rot: {x: 0, y: -1.6, z: 0},
            animated: true,
            looponce: true,
            animationType: 'an',
        },
        displayFunction: ()=>{
            document.querySelector("body").style.backgroundImage = "url('images/bg/bg-dark.png')";
        }
    },
    
    // -------------------- protein --------------------
    protein: {
        meta: {
            nameLT: "Baltymai",
            infoLT: "Tekstas - tekstas",
            nameEN: "Protein",
            infoEN: "...",
        },
        model: {
            path: "./models/rna/rna.gltf",
            pos: {x: 0, y: 0, z: 0},
            rot: {x: 0, y: 0, z: 0},
            animated: false,
            looponce: false,
            animationType: 'n',
        },
        displayFunction: undefined
    },
    
    // -------------------- rna --------------------
    rna: {
        meta: {
            nameLT: "Ribonukleino rūgštis (RNR)",
            infoLT: "Tekstas - tekstas",
            nameEN: "Ribonucleic acid (RNA)",
            infoEN: "...",
        },
        model: {
            path: "./models/rna/rna.gltf",
            pos: {x: 0, y: 0, z: 0},
            rot: {x: 0, y: 0, z: 0},
            animated: false,
            looponce: false,
            animationType: 'n',
        },
        displayFunction: undefined
    },
    
    // -------------------- sb --------------------
    sb: {
        meta: {
            nameLT: "SB??",
            infoLT: "Tekstas - tekstas",
            nameEN: "SB???",
            infoEN: "...",
        },
        model: {
            path: "./models/rna/rna.gltf",
            pos: {x: 0, y: 0, z: 0},
            rot: {x: 0, y: 0, z: 0},
            animated: false,
            looponce: false,
            animationType: 'n',
        },
        displayFunction: undefined,
    },
    
    // -------------------- sequencing --------------------
    sequencing: {
        meta: {
            nameLT: "DNR sekoskaita (DNR sekvenavimas)",
            infoLT: "Tekstas - tekstas",
            nameEN: "DNA sequencing",
            infoEN: "...",
        },
        model: {
            path: "./models/sekoskaita.glb",
            pos: {x: 0, y: 0.5, z: 1.5},
            rot: {x: 0, y: 0, z: 0},
            animated: true,
            looponce: false,
            animationType: 'an',
        },
        displayFunction: ()=>{
            document.querySelector("body").style.backgroundImage = "url('images/bg/bg-dark.png')";
        }
    },
    
    // -------------------- synbio --------------------
    synbio: {
        meta: {
            nameLT: "Sintetinė biologija",
            infoLT: "Tekstas - tekstas",
            nameEN: "Synthetic Biology",
            infoEN: "...",
        },
        model: {
            path: "./models/rna/rna.gltf",
            pos: {x: 0, y: 0, z: 0},
            rot: {x: 0, y: 0, z: 0},
            animated: false,
            looponce: false,
            animationType: 'n',
        },
        displayFunction: undefined
    },
};
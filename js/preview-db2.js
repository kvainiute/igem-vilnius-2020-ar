import {
    init
} from './script-old.js';
export const data = {
    // -------------------- biobrick --------------------
    biobrick: {
        meta: {
            nameLT: "BioBrick",
            infoLT: "",
            nameEN: "BioBrick",
            infoEN: "",
            audioRec: ""
        },
        model: {
            path: "./models/lego.glb",

            pattern: "lego",
            pos: {
                x: 0,
                y: 0.1,
                z: 0
            },
            rot: {
                x: 0,
                y: -1.6,
                z: 0
            },
            scale: 0.7,
            looponce: true
        }
    },

    // -------------------- gfp --------------------
    gfp: {
        meta: {
            nameLT: "Žalias fluorescencinis baltymas (GFP)",
            infoLT: "Tekstas - tekstas",
            nameEN: "Green fluorescent protein (GFP)",
            infoEN: "...",
            audioRec: ""
        },
        model: {
            path: "./models/gfp.glb",
            pattern: "gfp",
            pos: {
                x: 0,
                y: 0.75,
                z: 0
            },
            rot: {
                x: 0,
                y: 0,
                z: 0
            },
            scale: 0.9,
            looponce: false
        },
        onVisible: () => {
            tray.style = "display: flex;";
        },
        onHidden: () => {
            tray.style = "display: none;";
        }
    },
    // -------------------- crispr_cas9 --------------------
    crisprcas9: {
        meta: {
            nameLT: "CRISPR-Cas9",
            infoLT: "",
            nameEN: "CRISPR-Cas9",
            infoEN: "",
            audioRec: ""
        },
        model: {
            path: "./models/crisprcas9.glb",
            pattern: "crisprcas",
            pos: {
                x: 0.3,
                y: 0.6,
                z: -0.1
            },
            rot: {
                x: 0,
                y: 0,
                z: 0
            }
        }
    },
    // -------------------- bakteriofagai --------------------
    nano: {
        meta: {
            nameLT: "Bakteriofagai",
            infoLT: "Bakteriofagai - tai virusų rūšis, kuri puola tam tikras bakterijas, bet nedaro žalos žmogaus ląstelėms. Jų forma primena robotus: turi galvutę, kurioje saugo genetinę informaciją, uodegėlę ir kojytes, kuriomis tvirtinasi prie bakterijos. Prisikabinęs prie bakterijos bakteriofagas įleidžia savo genetinę informaciją, liepia kopijuoti naujas viruso dalis ir galiausiai sunaikina ląstelę. Didėjant bakterijų atsparumui antibiotikams, fagų terapija gali pakeisti tradicinius gydymo būdus. Todėl mokslininkai bando padaryti šią terapiją kuo saugesne ir prieinamesne visuomenei. Vienas tokių bandymų pavyzdžių: http://2018.igem.org/Team:Munich. ",
            nameEN: "Bacteriophages",
            infoEN: "...",
            audioRec: ""
        },
        model: {
            path: "./models/bacteriophage.glb",
            pattern: "bacteriophage",
            pos: {
                x: 0,
                y: 0.4,
                z: 0
            },
            rot: {
                x: 0,
                y: -1.5,
                z: 0
            },
            scale: 1
        }
    },
    // -------------------- dna --------------------
    dna: {
        meta: {
            nameLT: "Deoksiribonukleorūgštis (DNR)",
            infoLT: "Tekstas - tekstas",
            nameEN: "Deoxyribonucleic acid (DNA)",
            infoEN: "...",
            audioRec: ""
        },
        model: {
            path: "./models/DNA.glb",
            pattern: "dna",
            pos: {
                x: 0,
                y: 0,
                z: 0
            },
            rot: {
                x: 0,
                y: 3 * Math.PI / 2,
                z: 0
            },
            scale: 0.8,
            looponce: false
        },
    },
    // -------------------- rna --------------------
    rna: {
        meta: {
            nameLT: "Ribonukleino rūgštis (RNR)",
            infoLT: "Tekstas - tekstas",
            nameEN: "Ribonucleic acid (RNA)",
            infoEN: "...",
            audioRec: ""
        },
        model: {
            path: "./models/RNA.glb",
            pattern: "rna",
            pos: {
                x: 0,
                y: 0.45,
                z: 0
            },
            rot: {
                x: 0,
                y: 1.5,
                z: 0
            },
            scale: 0.1,
            looponce: false
        },
    },
    // -------------------- sars-cov-2 --------------------
    virus: {
        meta: {
            nameLT: "SARS-CoV-2",
            infoLT: "Koronavirusai yra virusai, kurie cirkuliuoja tarp gyvūnų, tačiau žinoma, kad kai kurie iš jų sukelia infekcijas žmonėms. Sukėlę infekciją žmonėms, jie toliau gali būti perduoti nuo žmogaus žmogui. Koronavirusų infekcijos šaltinis gali būti daugybė gyvūnų. Pavyzdžiui, Artimųjų Rytų respiracinio sindromo koronaviruso (MERS-CoV) šaltinis buvo kupranugariai, o sunkaus ūmaus respiracinio sindromo (SARS-CoV-1) – civetės katės.",
            nameEN: "SARS-CoV-2",
            infoEN: "...",
            audioRec: ""
        },
        model: {
            path: "./models/virus.glb",
            pattern: "virus",
            pos: {
                x: 0,
                y: 0,
                z: 0.5
            },
            rot: {
                x: 0,
                y: 1.5,
                z: 0
            },
            scale: 0.5
        }
    },
    // -------------------- model organisms --------------------
    ecoli: {
        meta: {
            nameLT: "Modeliniai organizmai",
            infoLT: "Tekstas - tekstas",
            nameEN: "Model organisms",
            infoEN: "...",
            audioRec: ""
        },
        model: {
            path: "./models/ecoli.glb",
            pattern: "ecoli",
            pos: {
                x: 0.3,
                y: -0.2,
                z: -0.2
            },
            rot: {
                x: 0,
                y: 0,
                z: 0
            },
            scale: 2
        }
    },
    // -------------------- genetic circuit --------------------
    /*circuit: {
        meta: {
            nameLT: "Genetinė grandinė",
            infoLT: "Tekstas - tekstas",
            nameEN: "Genetic circuit",
            infoEN: "...",
            audioRec: ""
        },
        model: {
            path: "./models/untitled.glb",
            pattern: "circuit",
            pos: {
                x: 0,
                y: 0,
                z: 0
            },
            rot: {
                x: 0,
                y: 1.5,
                z: 0
            },
            scale: 0.5
        }
    },*/
    // -------------------- sequencing --------------------
    sequencing: {
        meta: {
            nameLT: "DNR sekoskaita",
            infoLT: "Visa biologinė informacija apie tave slypi genome, sudarytame iš DNR grandinių. Šios grandinės sudarytos iš dalių, vadinamų nukleotidais. Iššifravus jų sekas grandinėje galima perskaityti, pavyzdžiui, kokiomis ligomis esi linkęs sirgti. Plika akimi genomo seka nėra matoma, todėl norint ją perskaityti, reikia DNR grandinę perstumti per mažą baltyminę skylutę dirbtinėje membranoje, vadinama nanopora. Pro nanoporą yra leidžiama vienkryptė elektrinė srovė, kurią fiksuoja jutiklis. Jei nanoporoje atsiranda pašalinių darinių, šie sutrikdo elektros srovės tekėjimą ir, priklausomai nuo objekto savybių, atitinkamai pakeičia fiksuojamo signalo stiprumą. Kadangi A, T, C ir G nukleotidai yra skirtingų dydžių ir savybių, eidami per nanoporą jie sukelia skirtingo stiprumo elektrinės srovės pokyčus. Taip gaunami unikalūs signalai, kuriuos užfiksavus nesunku atsekti nukleotidų seką grandinėje ir paversti lengviau suprantamomis raidėmis A, T, C bei G, ir iššifruoti gautą kodą. Tai vadinama DNR sekoskaita.",
            nameEN: "DNA sequencing",
            infoEN: "...",
            audioRec: ""
        },
        model: {
            path: "./models/sekoskaita.glb",
            pattern: "sequencing",
            pos: {
                x: 0,
                y: 1,
                z: 0
            },
            rot: {
                x: 0,
                y: 0,
                z: 0
            },
            scale: 0.2
        }
    },
    // -------------------- translation --------------------
    translation: {
        meta: {
            nameLT: "Baltymų transliacija",
            infoLT: "Tekstas - tekstas",
            nameEN: "Protein translation",
            infoEN: "...",
            audioRec: ""
        },
        model: {
            path: "./models/transliacija.glb",
            pattern: "translation",
            pos: {
                x: 0,
                y: 0,
                z: 0
            },
            rot: {
                x: 0,
                y: -1,
                z: 0
            },
            scale: 25
        }
    }
};

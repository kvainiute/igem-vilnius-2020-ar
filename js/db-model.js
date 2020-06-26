const data = {
    // -------------------- biobrick --------------------
    biobrick: {
        meta: {
            lt: {
                name: "BioBrick",
                desc: "BioBrick yra ...",
                audioRec: ""
            },
            en: {
                name: "BioBrick",
                desc: "BioBricks are ...",
            },
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
            lt: {
                name: "Žalias fluorescencinis baltymas (GFP)",
                desc: "Tekstas - tekstas",
                audioRec: ""
            },
            en: {
                name: "Green fluorescent protein (GFP)",
                desc: "The green fluorescent protein is a protein ...",
            },
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
            lt: {
                name: "CRISPR-Cas9",
                desc: "...",
                audioRec: ""
            },
            en: {
                name: "CRISPR-Cas9",
                desc: "Cas9 is a ...",
            },
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
            lt: {
                name: "Bakteriofagai",
                desc: "<b>Bakteriofagai</b> - tai virusų rūšis, kuri puola tam tikras bakterijas, bet nedaro žalos žmogaus ląstelėms. Jų forma primena robotus: turi galvutę, kurioje saugo genetinę informaciją, uodegėlę ir kojytes, kuriomis tvirtinasi prie bakterijos. Prisikabinęs prie bakterijos bakteriofagas įleidžia savo genetinę informaciją, liepia kopijuoti naujas viruso dalis ir galiausiai sunaikina ląstelę. Didėjant bakterijų atsparumui antibiotikams, fagų terapija gali pakeisti tradicinius gydymo būdus. Todėl mokslininkai bando padaryti šią terapiją kuo saugesne ir prieinamesne visuomenei. Vienas tokių bandymų pavyzdžių: http://2018.igem.org/Team:Munich.",
                audioRec: "./recordings/nano.mp3"
            },
            en: {
                name: "Bacteriophages",
                desc: "tekstas",
            },
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
            lt: {
                name: "Deoksiribonukleorūgštis (DNR)",
                desc: "tekstas",
                audioRec: ""
            },
            en: {
                name: "Deoxyribonucleic acid (DNA)",
                desc: "tekstas",
            },
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
            scale: 0.15,
        },
    },

    // -------------------- rna --------------------
    rna: {
        meta: {
            lt: {
                name: "Ribonukleino rūgštis (RNR)",
                desc: "tekstas",
                audioRec: ""
            },
            en: {
                name: "Ribonucleic acid (RNA)",
                desc: "tekstas",
            },
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
                y: Math.PI * 3 / 2,
                z: 0
            },
            scale: 0.3,
        },
    },

    // -------------------- sars-cov-2 --------------------
    virus: {
        meta: {
            lt: {
                name: "SARS-CoV-2",
                desc: "Koronavirusai yra virusai, kurie cirkuliuoja tarp gyvūnų, tačiau žinoma, kad kai kurie iš jų sukelia infekcijas žmonėms. Sukėlę infekciją žmonėms, jie toliau gali būti perduoti nuo žmogaus žmogui. Koronavirusų infekcijos šaltinis gali būti daugybė gyvūnų. Pavyzdžiui, Artimųjų Rytų respiracinio sindromo koronaviruso (MERS-CoV) šaltinis buvo kupranugariai, o sunkaus ūmaus respiracinio sindromo (SARS-CoV-1) – civetės katės.",
                audioRec: ""
            },
            en: {
                name: "SARS-CoV-2",
                desc: "tekstas",
            },
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
                y: 4.6,
                z: 0
            },
            scale: 0.5
        }
    },

    // -------------------- model organisms --------------------
    ecoli: {
        meta: {
            lt: {
                name: "Modeliniai organizmai",
                desc: "tekstas",
                audioRec: ""
            },
            en: {
                name: "Model organisms",
                desc: "tekstas",
            },
        },
        model: {
            path: "./models/ecoli.glb",
            pattern: "ecoli",
            pos: {
                x: -0.2,
                y: -0.2,
                z: -0.2
            },
            rot: {
                x: 0,
                y: 2.5,
                z: 0
            },
            scale: 2
        }
    },

    // -------------------- genetic circuit --------------------
    circuit: {
        meta: {
            lt: {
                name: "Genetinė grandinė",
                desc: "tekstas-tekstas",
                audioRec: ""
            },
            en: {
                name: "Genetic circuit",
                desc: "text",
            },
        },
        model: {
            path: "./models/circuit.glb",
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
    },

    // -------------------- sequencing --------------------
    sequencing: {
        meta: {
            lt: {
                name: "DNR sekoskaita",
                desc: "Visa biologinė informacija apie tave slypi genome, sudarytame iš DNR grandinių. Šios grandinės sudarytos iš dalių, vadinamų nukleotidais. Iššifravus jų sekas grandinėje galima perskaityti, pavyzdžiui, kokiomis ligomis esi linkęs sirgti. Plika akimi genomo seka nėra matoma, todėl norint ją perskaityti, reikia DNR grandinę perstumti per mažą baltyminę skylutę dirbtinėje membranoje, vadinama nanopora. Pro nanoporą yra leidžiama vienkryptė elektrinė srovė, kurią fiksuoja jutiklis. Jei nanoporoje atsiranda pašalinių darinių, šie sutrikdo elektros srovės tekėjimą ir, priklausomai nuo objekto savybių, atitinkamai pakeičia fiksuojamo signalo stiprumą. Kadangi A, T, C ir G nukleotidai yra skirtingų dydžių ir savybių, eidami per nanoporą jie sukelia skirtingo stiprumo elektrinės srovės pokyčus. Taip gaunami unikalūs signalai, kuriuos užfiksavus nesunku atsekti nukleotidų seką grandinėje ir paversti lengviau suprantamomis raidėmis A, T, C bei G, ir iššifruoti gautą kodą. Tai vadinama DNR sekoskaita.",
                audioRec: ""
            },
            en: {
                name: "DNA sequencing",
                desc: "tekstas",
            },
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
            lt: {
                name: "Baltymų transliacija",
                desc: "tekstas",
                audioRec: ""
            },
            en: {
                name: "Protein translation",
                desc: "tekstas",
            },
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
    },
    // -------------------- iGEM logo --------------------
    igem: {
        meta: {
            en: {
                name: "Vilnius iGEM",
                desc: "text",
            },
        },
        model: {
            path: "./models/igem-logo.glb",
            pattern: "igem-logo",
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

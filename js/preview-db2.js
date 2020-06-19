const data = [

    // -------------------- biobrick --------------------
    {
        meta: {
            nameLT: "BioBrick",
            infoLT: "",
            nameEN: "BioBrick",
            infoEN: "",
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
            looponce: true,
        }
    },

    // -------------------- gfp --------------------
    {
        meta: {
            nameLT: "Žalias fluorescencinis baltymas (GFP)",
            infoLT: "Tekstas - tekstas",
            nameEN: "Green fluorescent protein (GFP)",
            infoEN: "...",
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
            looponce: false,
        },
        onVisible: () => {
            tray.style = "display: flex;";
        },
        onHidden: () => {
            tray.style = "display: none;";
        }
    },

    // -------------------- crispr_cas9 --------------------
    {
        meta: {
            nameLT: "CRISPR-Cas9",
            infoLT: "",
            nameEN: "CRISPR-Cas9",
            infoEN: "",
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
            },
            scale: 0.03,
            looponce: false,
        }
    },

    // -------------------- bacteriophage --------------------
    {
        meta: {
            nameLT: "Bakteriofagas",
            infoLT: "Tekstas - tekstas",
            nameEN: "Bacteriophage",
            infoEN: "...",
        },
        model: {
            path: "./models/bacteriophage.glb",
            pattern: "bacteriophage",
            pos: {
                x: 0,
                y: 0.5,
                z: 0
            },
            rot: {
                x: 0,
                y: 3*Math.PI/2,
                z: 0
            },
            scale: 0.8,
            looponce: false,
        }
    },
    
    // -------------------- dna --------------------
    {
        meta: {
            nameLT: "Deoksiribonukleorūgštis (DNR)",
            infoLT: "Tekstas - tekstas",
            nameEN: "Deoxyribonucleic acid (DNA)",
            infoEN: "...",
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
                y: 0,
                z: 0
            },
            scale: 0.1,
            looponce: false,
        },
    },

    // -------------------- rna --------------------
    {
        meta: {
            nameLT: "Ribonukleino rūgštis (RNR)",
            infoLT: "Tekstas - tekstas",
            nameEN: "Ribonucleic acid (RNA)",
            infoEN: "...",
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
                y: 0,
                z: 0
            },
            scale: 0.24,
            looponce: false,
        },
    },

    // -------------------- coronavirus --------------------
    {
        meta: {
            nameLT: "SARS-CoV-2",
            infoLT: "Koronavirusai yra virusai, kurie cirkuliuoja tarp gyvūnų, tačiau žinoma, kad kai kurie iš jų sukelia infekcijas žmonėms. Sukėlę infekciją žmonėms, jie toliau gali būti perduoti nuo žmogaus žmogui. Koronavirusų infekcijos šaltinis gali būti daugybė gyvūnų. Pavyzdžiui, Artimųjų Rytų respiracinio sindromo koronaviruso (MERS-CoV) šaltinis buvo kupranugariai, o sunkaus ūmaus respiracinio sindromo (SARS-CoV-1) – civetės katės.",
            nameEN: "SARS-CoV-2",
            infoEN: "...",
        },
        model: {
            path: "./models/coronavirus.glb",
            pattern: "virus",
            pos: {
                x: 0,
                y: 0.3,
                z: 0
            },
            rot: {
                x: 0,
                y: 0,
                z: 0
            },
            scale: 1,
            looponce: true,
        }
    },
    
    // -------------------- ecoli --------------------
    {
        meta: {
            nameLT: "E-coli",
            infoLT: "Tekstas - tekstas",
            nameEN: "E-coli",
            infoEN: "...",
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
            scale: 2,
            looponce: false,
        },
    }
];

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
            pattern: "pattern-lego-02",
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
            animated: true,
            looponce: true,
            animationType: 'an',
        },
        onVisible: () => {
            document.querySelector("body").style.backgroundImage = "url('images/bg/bg-dark.png')";
        },
        onHidden: () => {

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
            scale: 1,
            animated: true,
            looponce: false,
            animationType: 'an',
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
                x: 0,
                y: 0.5,
                z: 0
            },
            rot: {
                x: 0.3,
                y: -1.85,
                z: 0.5
            },
            scale: 0.07,
            animated: true,
            looponce: false,
            animationType: 'an',

        },
        onVisible: () => {},
        onHidden: () => {},
    },
    {
        meta: {
            nameLT: "Žalias fluorescencinis baltymas (GFP)",
            infoLT: "Tekstas - tekstas",
            nameEN: "Green fluorescent protein (GFP)",
            infoEN: "...",
        },
        model: {
            path: "./models/bacteriophage.glb",
            pattern: "bacteriophage",
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
            scale: 1,
            animated: true,
            looponce: false,
            animationType: 'an',
        },
        onVisible: () => {},
        onHidden: () => {}
    },
    {
        meta: {
            nameLT: "Žalias fluorescencinis baltymas (GFP)",
            infoLT: "Tekstas - tekstas",
            nameEN: "Green fluorescent protein (GFP)",
            infoEN: "...",
        },
        model: {
            path: "./models/ecoli.glb",
            pattern: "ecoli",
            pos: {
                x: 0.3,
                y: 0,
                z: -0.2
            },
            rot: {
                x: 0,
                y: 0,
                z: 0
            },
            scale: 2,
            animated: true,
            looponce: false,
            animationType: 'an',
        },
        onVisible: () => {},
        onHidden: () => {}
    }

];

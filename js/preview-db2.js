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
            pattern: "kanji",
            pos: {x: 0, y: 0, z: 0},
            rot: {x: 0, y: -1.6, z: 0},
            animated: true,
            looponce: true,
            animationType: 'an',
        },
        onVisible: ()=>{
            document.querySelector("body").style.backgroundImage = "url('images/bg/bg-dark.png')";
        },
        onHidden: ()=>{
            
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
            pattern: "hiro",
            pos: {x: 0, y: 0, z: 0},
            rot: {x: 0, y: 0, z: 0},
            animated: true,
            looponce: false,
            animationType: 'an',
        },
        onVisible: ()=>{
            tray.style = "display: flex;";
        },
        onHidden: ()=>{
            tray.style = "display: none;";
        }
    },
];
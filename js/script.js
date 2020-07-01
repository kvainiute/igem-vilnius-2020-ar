var scene, camera, renderer, clock, deltaTime, totalTime, recording, rec, controls, background;

let modelLoaded = false;
let isAR = false;
let currentModel;
let language = "lt";

let loader = new THREE.GLTFLoader();
let dracoLoader = new THREE.DRACOLoader();
dracoLoader.setDecoderPath('./draco/');
loader.setDRACOLoader(dracoLoader);

var mixer;

const dataKeys = Object.keys(data); // get list of model ids

const tray = document.getElementById('tray-container');
const infoButton = document.getElementById("info-button");

var arToolkitSource, arToolkitContext;

const INITIAL_MTL = new THREE.MeshPhongMaterial({
    color: 0x03fc4a
});

function setTitle() {
    document.title = "Vilnius iGEM AR – " + data[currentModel].meta[language].name;
}

// functions to use in different versions
function loadAll() {
    initializeAR();
    load3Dmodels();
    animate();
}

function loadSingle(which) {
    if (data[which] == undefined) return;
    currentModel = which;
    initializeAR();
    load3Dmodel(data[which]);
    animate();
}

function loadSingleNoAR(which) {
    if (data[which] == undefined) return;
    currentModel = which;
    initialize3D();
    load3Dmodel(data[which], false);
    animate();
}


function onResize() {
    arToolkitSource.onResizeElement()
    arToolkitSource.copyElementSizeTo(renderer.domElement)
    if (arToolkitContext.arController !== null) {
        arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas)
    }
}

function initializeAR() {
    isAR = true;
    if (navigator.userAgent.indexOf("like Mac") != -1) {
        if (navigator.userAgent.indexOf("CriOS") != -1) {
            alert("iOS nepalaiko WebRTC naršyklėje Google Chrome. Siūlome naudoti Safari.");
        } else if (navigator.userAgent.indexOf("FxiOS") != -1) {
            alert("iOS nepalaiko WebRTC naršyklėje Mozilla Firefox. Siūlome naudoti Safari.");
        }
    }

    scene = new THREE.Scene();
    let light0 = new THREE.DirectionalLight(0xcccccc, 1);
    light0.position.set(0, 3, 0);
    scene.add(light0);
    let light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(1, 1, 1);
    scene.add(light1);
    let light2 = new THREE.DirectionalLight(0xffffff, 1);
    light2.position.set(-1, 1, -1);
    scene.add(light2);
    let light3 = new THREE.DirectionalLight(0xffffff, 1);
    light3.position.set(0, -1, 2);
    scene.add(light3);

    camera = new THREE.Camera();
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setClearColor(new THREE.Color('lightgrey'), 0)
    renderer.setSize(1280, 960);
    renderer.outputEncoding = THREE.sRGBEncoding;


    document.body.appendChild(renderer.domElement);

    clock = new THREE.Clock();
    deltaTime = 0;
    totalTime = 0;



    var switchAR = document.getElementById("ar-switch");
    var arContent;
    switchAR.addEventListener('load', function () {
        arContent = switchAR.contentDocument;
        arContent.addEventListener('click', toggleAR3D, false);
    })
    document.getElementById("close-button").addEventListener('click', function () {
        $('#model-info').css('display', 'none');
    }, false);

    var videoplay = document.getElementById("video-button");
    var videocontent;
    videoplay.addEventListener('load', function () {
        console.log("loaded")
        videocontent = videoplay.contentDocument;
        videocontent.addEventListener('click', function () {
            console.log("pushed")
            if (videocontent.getElementById("pause").style.display == "none") {
                videocontent.getElementById("play").style.display = "none";
                videocontent.getElementById("pause").style.display = "inline";
                if (modelLoaded) {
                    playPause(false)
                }
            } else {
                videocontent.getElementById("pause").style.display = "none";
                videocontent.getElementById("play").style.display = "inline";
                if (modelLoaded) {
                    playPause(true)
                }
            }
        })
    })

    function playPause(state) {
        for (let key of dataKeys) {
            let item = data[key];
            if (item.model.actions == undefined) continue;
            for (let action of item.model.actions) {
                action.paused = state;
                action.play();
            }

        }
    }


    ////////////////////////////////////////////////////////////
    // setup arToolkitSource
    ////////////////////////////////////////////////////////////

    arToolkitSource = new THREEx.ArToolkitSource({
        sourceType: 'webcam',
    });

    arToolkitSource.init(function onReady() {
        onResize()
    });

    // handle resize event
    window.addEventListener('resize', onResize);

    ////////////////////////////////////////////////////////////
    // setup arToolkitContext
    ////////////////////////////////////////////////////////////	

    // create atToolkitContext
    arToolkitContext = new THREEx.ArToolkitContext({
        cameraParametersUrl: 'data/camera_para.dat',
        detectionMode: 'mono'
    });

    // copy projection matrix to camera when initialization complete
    arToolkitContext.init(function onCompleted() {
        camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
    });

}

function toggleAR3D() {
    reset();
    $('#model-info').css('display', 'none');
    var arSwitch = document.getElementById("ar-switch").contentDocument;
    if (arSwitch.getElementById("no").style.display == "none") {
        arSwitch.getElementById("no").style.display = "block"
    } else {
        arSwitch.getElementById("no").style.display = "none"
    }
    isAR = !isAR;
    if (isAR) {
        loadSingle(currentModel);
    } else {
        loadSingleNoAR(currentModel);
    }
}

function onResizeNoAR() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function initialize3D() {
    isAR = false;
    if (navigator.userAgent.indexOf("like Mac") != -1) {
        if (navigator.userAgent.indexOf("CriOS") != -1) {
            alert("iOS nepalaiko WebRTC naršyklėje Google Chrome. Siūlome naudoti Safari.");
        } else if (navigator.userAgent.indexOf("FxiOS") != -1) {
            alert("iOS nepalaiko WebRTC naršyklėje Mozilla Firefox. Siūlome naudoti Safari.");
        }
    }

    clock = new THREE.Clock();
    deltaTime = 0;
    totalTime = 0;

    scene = new THREE.Scene();
    let spotLight = new THREE.SpotLight(0xffffff, 6);
    spotLight.position.set(1, 1, 1);
    scene.add(spotLight);

    let spotLight2 = new THREE.SpotLight(0xffffff, 2);
    spotLight2.position.set(-1, 1, -1);
    scene.add(spotLight2);

    background = new THREE.TextureLoader().load("../images/bg/bg-dark.png");
    background.wrapS = THREE.RepeatWrapping;
    background.wrapT = THREE.RepeatWrapping;
    background.repeat.set(4, 4);

    scene.background = background;

    //setting up the camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var canvas = document.getElementById('appCanvas');
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        preserveDrawingBuffer: true,
        alpha: true,
        canvas: canvas
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMappingExposure = 0.7;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.physicallyCorrectLights = true;
    document.body.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.zoomSpeed = 0.3;
    controls.rotateSpeed = 0.5;
    controls.panSpeed = 0.5;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    camera.position.z = 2;
    camera.position.y = 0.5;
    scene.position.y = -0.5;


    // TODO: fix rotations on models
    scene.add(camera);

    //setting up the renderer


    //setting the background as webcam stream
    video = document.createElement('video');
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');

    controls.update();

    window.addEventListener('resize', onResizeNoAR, false);
}

function disposeRecursive(thing) {
    if (thing.children != undefined) {
        for (let child of thing.children) {
            disposeRecursive(child);
        }
    }
    if (thing.geometry != undefined) thing.geometry.dispose();
    if (thing.material != undefined) thing.material.dispose();
}

function reset() {
    for (let key of dataKeys) {
        if (data[key].model.root == undefined) continue;
        data[key].model.root.parent.dispose()
        disposeRecursive(data[key].model.root);
    }

    // TODO: optimize switching between just 3D and AR:
    // https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects

    document.body.removeChild(renderer.domElement);
    renderer = undefined;
    scene.dispose();
    scene = undefined;
    camera = undefined;
    renderer = undefined;
    clock = undefined;
    deltaTime = undefined;
    totalTime = undefined;
    recording = undefined;
    if (controls != undefined) controls.dispose();
    controls = undefined;
    if (background != undefined) background.dispose();
    background = undefined;

    arToolkitSource = undefined;
    arToolkitContext = undefined;

    window.removeEventListener('resize', onResize);
    window.removeEventListener('resize', onResizeNoAR);

    tray.innerHTML = "";
}

function showModelInfo() {
    let info = data[currentModel].meta[language]

    document.getElementById("st-name").innerHTML = info.name;
    document.getElementById("text-info").innerHTML = info.desc;

    document.getElementById("model-info").style.display = 'flex';
}


function load3Dmodel(item, ar = true) {
    let modelData = item.model;
    let modelMeta = item.meta[language];

    if (typeof modelData.pattern === 'undefined') {
        return;
    }

    recording = modelMeta.audioRec;
    window.onload = () => {
        infoButton.contentDocument.addEventListener('click', showModelInfo, false);
    };
    var audioplay = document.getElementById("audio-button");
    var audiocontent;
    audioplay.addEventListener('load', function () {
        console.log("loaded");
        audiocontent = audioplay.contentDocument;
        audiocontent.addEventListener('click', function () {
            console.log("pushed");
            playAudio(recording);
        })
    })
    // interpolates from last position to create smoother transitions when moving.
    // parameter lerp values near 0 are slow, near 1 are fast (instantaneous).
    let root = new THREE.Group();
    scene.add(root);
    let smoothedControl;
    if (ar) {
        smoothedControl = new THREEx.ArSmoothedControls(root, {
            lerpPosition: 0.8,
            lerpQuaternion: 0.8,
            lerpScale: 1,
            // minVisibleDelay: 1,
            // minUnvisibleDelay: 1,
        });

        // build markerControls
        let markerControls = new THREEx.ArMarkerControls(
            arToolkitContext,
            root, {
                type: 'pattern',
                patternUrl: "data/" + modelData.pattern + ".patt",
            }
        );
    } else {

    }

    let modelPath = modelData.path;
    let pos = modelData.pos;
    let rot = modelData.rot;

    if (pos == undefined) pos = {
        z: 0,
        y: 0,
        x: 0
    };
    if (rot == undefined) rot = {
        z: 0,
        y: 0,
        x: 0
    };
    let meshItem;
    loader.load(modelPath, function (load_model) {
        meshItem = load_model.scene;
        let scale = modelData.scale * 0.25;
        meshItem.scale.set(scale, scale, scale);
        meshItem.position.x += pos.x;
        meshItem.position.y += pos.y;
        meshItem.position.z += pos.z;
        meshItem.rotation.x += rot.x;
        meshItem.rotation.y += rot.y;
        meshItem.rotation.z += rot.z;
        if (modelPath.includes("gfp")) {
            renderer.outputEncoding = THREE.LinearEncoding
            initColor(meshItem, "GFP", INITIAL_MTL);
        }

        modelData.actions = [];
        modelData.mixer = new THREE.AnimationMixer(meshItem);
        for (let i = 0; i < load_model.animations.length; i++) {
            let action = modelData.mixer.clipAction(load_model.animations[i]);
            if (modelData.looponce) {
                action.setLoop(THREE.LoopOnce);
                action.clampWhenFinished = true;
            }
            modelData.actions.push(action);
            if (!isAR && document.getElementById("video-button").contentDocument.getElementById("pause").style.display != "none") {
                action.play()
            }
        }

        root.add(meshItem);

    }, function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }, function (error) {
        console.error(error);
    });
    if (modelPath.includes("gfp")) {
        initGfpColors(meshItem);
    } //*/
    modelData.visible = false;
    modelData.root = root;
    if (ar) {
        modelData.control = smoothedControl;
    }

}

function load3Dmodels() {
    for (let key of dataKeys) {
        load3Dmodel(data[key]);
    }
}


function update() {

    // update artoolkit on every frame
    if (arToolkitSource != undefined && arToolkitSource.ready !== false)
        arToolkitContext.update(arToolkitSource.domElement);

    // additional code for smoothed controls
    for (let key of dataKeys) {
        let item = data[key];
        if (item.model.control === undefined) continue;
        item.model.control.update(item.model.root);
    }

    // start animation depending on model
    for (let key of dataKeys) {

        let item = data[key];
        if (item.model.root == undefined) continue;
        if (item.model.actions == undefined) continue;
        if (item.model.root.visible === item.model.visible) continue;
        item.model.visible = item.model.root.visible;
        var videoPlay = document.getElementById("video-button");
        var videocontent = videoPlay.contentDocument;
        if (item.model.visible || !isAR) {
            if (typeof item.onVisible === 'function') item.onVisible();
            for (let action of item.model.actions) {
                action.play();
                modelLoaded = true;
            }

        } else {
            if (typeof item.onHidden === 'function') item.onHidden();

        }
    }
}


function animate() {

    requestAnimationFrame(animate);
    deltaTime = clock.getDelta();
    totalTime += deltaTime;
    for (let key of dataKeys) {
        if (data[key].model.mixer != null) data[key].model.mixer.update(deltaTime);
    }
    if (controls != undefined) controls.update();
    update();
    renderer.render(scene, camera); // model update
}



function initColor(parent, type, mtl) {
    parent.traverse((o) => {
        if (o.isMesh) {
            if (o.name.includes(type)) {
                o.material = mtl;
                o.nameID = type; // Set a new property to identify this object
            }
        }
    });
}

function initGfpColors() {
    //tray.style = "display: flex;";
    // const colors = ['03f4fc', '0303fc', 'fc03a1', 'f4fc03', '03fc4a', '6703fc', 'fc0303', ]; // old colors
    const colors = ['0CFC16', 'F2FC3B', 'FC8839', 'FC3D3D', '4040FC', '35A0FC', '3AEBFC', ];

    const setMaterial = (parent, type, mtl) => {
        parent.traverse((o) => {
            if (o.isMesh && o.nameID != null) {
                if (o.nameID == type) {
                    o.material = mtl;
                }
            }
        });
    }

    const selectSwatch = (e) => {
        let color = colors[parseInt(e.target.dataset.key)];
        let new_mtl = new THREE.MeshPhongMaterial({
            color: parseInt('0x' + color),
            shininess: 10
        });

        setMaterial(data["gfp"].model.root.children[0], 'GFP', new_mtl);
    }


    const buildColors = (colors) => {
        for (let [i, color] of colors.entries()) {
            let swatch = document.createElement('div');
            swatch.classList.add('tray-swatch');
            swatch.style.background = "#" + color;
            swatch.setAttribute('data-key', i);
            swatch.addEventListener('click', selectSwatch);
            tray.append(swatch);
        }
    }

    buildColors(colors);
}

function playAudio(file) {
    var audioplay = document.getElementById("audio-button");
    var audiocontent = audioplay.contentDocument;
    if (typeof rec !== 'undefined') {
        if (!rec.paused) {
            rec.pause()
            audiocontent.getElementById("pause").style.display = "none";
            audiocontent.getElementById("play").style.display = "inline";
        } else if (rec.paused) {
            audiocontent.getElementById("play").style.display = "none";
            audiocontent.getElementById("pause").style.display = "inline";
            rec.play();
        }
    } else {
        rec = new Audio(file);
        audiocontent.getElementById("play").style.display = "none";
        audiocontent.getElementById("pause").style.display = "inline";
        rec.play();
    }
}

function playAnimation(actions, state) {
    var videoplay = document.getElementById("video-button");
    var videocontent = videoplay.contentDocument;

    for (let action of actions) {
        if (!action.paused) {
            return true
        } else {
            return false
        }
    }
}

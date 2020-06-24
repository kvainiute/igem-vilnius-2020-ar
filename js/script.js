var scene, camera, renderer, clock, deltaTime, totalTime, header, paragraph, recording;

var mixer;

const dataKeys = Object.keys(data); // get list of model ids

const tray = document.getElementById('tray-container');
const infoBox = document.getElementById("info-button");

var arToolkitSource, arToolkitContext;

var rootsAndControls = [];

const INITIAL_MTL = new THREE.MeshPhongMaterial({
    color: 0x03fc4a
});

// functions to use in different versions
function loadAll() {
    initialize();
    load3Dmodels();
    animate();
}

function loadSingle(which) {
    if (data[which] == undefined) return;
    initialize();
    load3Dmodel(data[which]);
    animate();
}

function loadSingleNoAR(which) {
    if (data[which] == undefined) return;
    initializeNoAR();
    load3Dmodel(data[which], false);
    animate();
}

function initialize() {
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

    function onResizeNoAR() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        positionInfoDiv();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onResizeNoAR, false);

    /*infoBox.addEventListener('click', showInfo(header, paragraph), false);*/


    document.getElementById("close-button").addEventListener('click', function () {
        $('#model-info').css('display', 'none');
    }, false);
    var audioButton = document.getElementById("audio-div");
    console.log(audioButton)
    audioButton.addEventListener('click', function () {
        console.log("test")
        //var audioContent = audioButton.contentDocument();
        //console.log(audioContent)
    });
    ////////////////////////////////////////////////////////////
    // setup arToolkitSource
    ////////////////////////////////////////////////////////////

    arToolkitSource = new THREEx.ArToolkitSource({
        sourceType: 'webcam',
    });

    function onResize() {
        arToolkitSource.onResizeElement()
        arToolkitSource.copyElementSizeTo(renderer.domElement)
        if (arToolkitContext.arController !== null) {
            arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas)
        }
        positionInfoDiv();
    }

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

function initializeNoAR(){
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

    //setting up the camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1.5;
    camera.position.y = 0.5;
    // TODO: fix rotations on models
    scene.add(camera);

    //setting up the renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        preserveDrawingBuffer: true,
        alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    //scene.background.encoding = THREE.LinearEncoding;
    renderer.toneMappingExposure = 0.7;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.physicallyCorrectLights = true;
    document.body.appendChild(renderer.domElement);

    //setting the background as webcam stream
    video = document.createElement('video');
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');

    scene.background = new THREE.Color(0xdccba0);

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.zoomSpeed = 0.3;
    controls.rotateSpeed = 0.5;
    controls.panSpeed = 0.5;
}

function load3Dmodel(item, ar = true) {
    let language = "lt"; // TODO: normal language
    let modelData = item.model;
    let modelMeta = item.meta[language];

    if (typeof modelData.pattern === 'undefined') {
        return;
    }


    header = modelMeta.name;
    paragraph = modelMeta.desc;
    recording = modelMeta.audioRec;
    infoBox.addEventListener('click', function () {
            $('#st-name').text(header);
            $('#text-info').text(paragraph);
            // toggle html element
            $('#model-info').css('display', 'block');
            positionInfoDiv();
        },
        false);
    // interpolates from last position to create smoother transitions when moving.
    // parameter lerp values near 0 are slow, near 1 are fast (instantaneous).
    let root = new THREE.Group();
    scene.add(root);
    let smoothedControl;
    if (ar){
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
    }else{

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
    let loader = new THREE.GLTFLoader();
    let dracoLoader = new THREE.DRACOLoader();
    dracoLoader.setDecoderPath('./draco/');
    loader.setDRACOLoader(dracoLoader);
    let meshItem;
    loader.load(modelPath, function (load_model) {
        meshItem = load_model.scene;
        //meshItem.material.side = THREE.DoubleSide;
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
            if (modelData.visible) {
                action.play();
            }
        }

        root.add(meshItem);
    }, function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }, function (error) {
        console.error('Error loading the model (load3Dmodel)\n');
        console.error(error);
    });
    if (modelPath.includes("gfp")) {
        initGfpColors(meshItem);
    } //*/
    modelData.visible = false;
    modelData.root = root;
    if (ar){
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
        if (item.model.visible) {
            if (typeof item.onVisible === 'function') item.onVisible();
            for (let action of item.model.actions) {
                action.play();
            }
        } else {
            if (typeof item.onHidden === 'function') item.onHidden();
            for (let action of item.model.actions) {
                action.stop();
            }
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

        console.log("click " + color); // TODO: remove
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

function showInfo(header, paragraph) {
    $('#st-name').text(header);
    $('#text-info').text(paragraph);
    // toggle html element
    $('#model-info').css('display', 'block');
    positionInfoDiv();
}
//positioning the Info Div in the middle
function positionInfoDiv() {

    var height = $("#model-info").height();
    var width = $("#model-info").width();
    if (width < $("#model-info h1").width()) {
        width = $("#model-info h1").width();
    }
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;

    $('#model-info').css({
        left: left,
        top: top
    });

}

function playAudio(file) {
    music.pause();
    music = new Audio(file);
    music.play();

}

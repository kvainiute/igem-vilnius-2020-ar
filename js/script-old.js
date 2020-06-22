var camera, light, scene, renderer, clock, video, update, model, raycaster, mouse, deltaTime, totalTime;

var mixer = null;

var arToolkitSource, arToolkitContext;
const tray = document.getElementById('tray-container');

let markerRoot;

export function init(modelData, metaData) {
    modelData.models = new THREE.Object3D();

    let header = metaData.nameLT;
    let paragraph = metaData.infoLT;

    if (navigator.userAgent.indexOf("like Mac") != -1) {
        if (navigator.userAgent.indexOf("CriOS") != -1) {
            alert("iOS nepalaiko WebRTC naršyklėje Google Chrome. Siūlome naudoti Safari.");
        } else if (navigator.userAgent.indexOf("FxiOS") != -1) {
            alert("iOS nepalaiko WebRTC naršyklėje Mozilla Firefox. Siūlome naudoti Safari.");
        }
    }

    //setting up the camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    //setting up the scene
    scene = new THREE.Scene();
    light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    //setting up the renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        preserveDrawingBuffer: true,
        alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    if (!modelData.path.includes("gfp")) {
        renderer.outputEncoding = THREE.sRGBEncoding;
    }
    renderer.toneMappingExposure = 0.7;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.physicallyCorrectLights = true;
    document.body.appendChild(renderer.domElement);

    clock = new THREE.Clock();
    deltaTime = 0;
    totalTime = 0;


    arToolkitSource = new THREEx.ArToolkitSource({
        sourceType: 'webcam',
    });

    arToolkitSource.init(function onReady() {
        onWindowResize()
    });
    arToolkitContext = new THREEx.ArToolkitContext({
        cameraParametersUrl: 'data/camera_para.dat',
        detectionMode: 'mono'
    });

    // copy projection matrix to camera when initialization complete
    arToolkitContext.init(function onCompleted() {
        camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
    });

    //choosing the 3D object
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2()

    //All the event listeners
    window.addEventListener('resize', onWindowResize, false);

    renderer.domElement.addEventListener('click', () => onClick(header, paragraph), false);

    document.getElementById("info-button").addEventListener('click', showInfo, false);

    document.getElementById("close-button").addEventListener('click', function () {
        $('#model-info').css('display', 'none');
    }, false);

    load3Dmodel(modelData);
    return modelData.models; // El randomo būdas į GFP perduoti models objektą, kad galėtų keisti spalvą
}
//loading the 3D model
function load3Dmodel(item) {
    let modelPath = item.path;
    let pos = item.pos;
    let rot = item.rot;
    let animated = item.animated;
    let looponce = item.looponce;

    if (typeof item.pattern === 'undefined') {
        return;
    }
    root = new THREE.Group();
    scene.add(markerRoot);
    let smoothedControl = new THREEx.ArSmoothedControls(root, {
        lerpPosition: 0.8,
        lerpQuaternion: 0.8,
        lerpScale: 1
    });

    // build markerControls
    let markerControls = new THREEx.ArMarkerControls(
        arToolkitContext,
        markerRoot, {
            type: 'pattern',
            patternUrl: "data/" + item.pattern + ".patt",
        }
    );
    console.log(markerControls)

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
    var loader = new THREE.GLTFLoader();
    var dracoLoader = new THREE.DRACOLoader();
    dracoLoader.setDecoderPath('./draco/');
    loader.setDRACOLoader(dracoLoader);
    let meshItem;
    loader.load(modelPath, function (load_model) {
        meshItem = load_model.scene;
        let scale = item.scale * 0.25;
        meshItem.scale.set(scale, scale, scale);
        meshItem.position.x += pos.x;
        meshItem.position.y += pos.y;
        meshItem.position.z += pos.z;
        meshItem.rotation.x += rot.x;
        meshItem.rotation.y += rot.y;
        meshItem.rotation.z += rot.z;
        const INITIAL_MTL = new THREE.MeshPhongMaterial({
            color: 0x03fc4a
        });

        if (modelPath.includes("gfp")) {
            initColor(model, "GFP", INITIAL_MTL);
        }

        item.actions = [];
        item.mixer = new THREE.AnimationMixer(meshItem);
        for (let i = 0; i < load_model.animations.length; i++) {
            let action = item.mixer.clipAction(load_model.animations[i]);
            if (looponce) {
                action.setLoop(THREE.LoopOnce);
                action.clampWhenFinished = true;
            }
            item.actions.push(action);
            if (item.visible) {
                action.play();
            }
        }

        markerRoot.add(meshItem);
    }, function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }, function (error) {
        console.log(error);
    });
    if (modelPath.includes("gfp")) {
        initGfpColors(meshItem);
    } //*/
    item.visible = false;
    item.root = markerRoot;
    item.control = smoothedControl;
}


//Called when clicking on the 3d model => info div pops up
function onClick(header, paragraph) {

    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        let selectedObject = intersects[0].object;
        showInfo(header, paragraph);

    }
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
//Window resizing
function onWindowResize() {
    arToolkitSource.onResizeElement()
    arToolkitSource.copyElementSizeTo(renderer.domElement)
    if (arToolkitContext.arController !== null) {
        arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas)
    }
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    positionInfoDiv();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

export function animate() {
    requestAnimationFrame(animate);
    deltaTime = clock.getDelta();
    totalTime += deltaTime;

    for (let item of data) {
        if (item.model.mixer != null) item.model.mixer.update(deltaTime);
    }
    update(); // AR update
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
        setMaterial(data[1].model.root.children[0], 'GFP', new_mtl);
        // TODO: don't use data[1], somehow find gfp yourself
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

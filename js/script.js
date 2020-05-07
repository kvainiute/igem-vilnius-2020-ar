var camera, light, scene, renderer, video, update, model, raycaster, mouse, selectedObject, constraints;

var strDownloadMime = "image/octet-stream";

var mixer = null;
var clock = new THREE.Clock();

var header, paragraph, models, modelName, animated, control_type;

var x_pos, y_pos, z_pos, x_rot, y_rot, z_rot;
var looponce = false;
const TRAY = document.getElementById('js-tray-slide');
const colors = [
    {
        color: '03f4fc'
},
    {
        color: '0303fc'
},
    {
        color: 'fc03a1'
},
    {
        color: 'f4fc03'
},
    {
        color: '03fc4a'
},
    {
        color: '6703fc'
},
    {
        color: 'fc0303'
    }
];


function init() {
    if (navigator.userAgent.indexOf("like Mac") != -1) {
        if (navigator.userAgent.indexOf("CriOS") != -1) {
            alert("iOS nepalaiko WebRTC naršyklėje Google Chrome. Siūlome naudoti Safari.");
        } else if (navigator.userAgent.indexOf("FxiOS") != -1) {
            alert("iOS nepalaiko WebRTC naršyklėje Mozilla Firefox. Siūlome naudoti Safari.");
        }
    }

    //setting up the camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1.5;

    //setting up the scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdccba0);
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 1);
    scene.add(light);
    //light = new THREE.AmbientLight(0xffffff, 6);
    light = new THREE.AmbientLight(0xffffff, 3);
    scene.add(light);

    //setting up the renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        preserveDrawingBuffer: true,
        alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    if (!modelName.includes("gfp")) {
        renderer.outputEncoding = THREE.sRGBEncoding;
    }
    renderer.toneMappingExposure = 0.7;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.physicallyCorrectLights = true;
    document.body.appendChild(renderer.domElement);
    var canvas = renderer.domElement;

    //setting the background as webcam stream
    video = document.createElement('video');
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    var facing = "environment";
    var defaultsOpts = {
        audio: false,
        video: {
            facingMode: facing
        }
    }
    var webcam_playable = true;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(defaultsOpts).then(function (stream) {
            video.srcObject = stream;
            video.play();
            setTimeout(function () {
                load3Dmodel();
            }, 2000);
        }).catch(function (error) {
            console.error('Unable to access the camera/webcam.', error);
            webcam_playable = false;
            load3Dmodel();
        });
    } else {
        console.error('MediaDevices interface not available.');
        webcam_playable = false;
        load3Dmodel();
    }
    if (webcam_playable) {
        document.body.appendChild(video);
        var webBackground = new THREE.VideoTexture(video);
        scene.background = webBackground;
    } else {
        scene.background = new THREE.Color(0xdccba0);
    }


    setControls();

    //choosing the 3D object
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2()

    //All the event listeners
    window.addEventListener('resize', onWindowResize, false);

    renderer.domElement.addEventListener('click', onClick, false);

    document.getElementById("photo-button").addEventListener('click', saveAsImage, false);

    document.getElementById("info-button").addEventListener('click', showInfo, false);

    document.getElementById("close-button").addEventListener('click', function () {
        $('#model-info').css('display', 'none');
    }, false);
    //Reversing the camera
    document.getElementById("reverse-button").addEventListener('click', function () {
        if (webcam_playable) {
            if (facing == "user") {
                facing = "environment";
            } else {
                facing = "user";
            }
            defaultsOpts = {
                audio: false,
                video: {
                    facingMode: facing
                }
            }
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia(defaultsOpts).then(function (stream) {
                    video.srcObject = stream;
                    video.play();
                    setTimeout(function () {
                        load3Dmodel();
                    }, 2000);
                }).catch(function (error) {
                    console.error('Unable to access the camera/webcam.', error);
                    load3Dmodel();
                });
            } else {
                console.error('MediaDevices interface not available.');
                load3Dmodel();
            }
            webBackground = new THREE.VideoTexture(video);
            scene.background = webBackground;
        }
    });

    // load3Dmodel();
    update = function () {
        models.rotation.y += 0.01;
        models.rotation.z += 0.01;
    }
}
//loading the 3D model
function load3Dmodel() {
    var loader;
    loader = new THREE.GLTFLoader();
    var dracoLoader = new THREE.DRACOLoader();
    dracoLoader.setDecoderPath('./draco/');
    loader.setDRACOLoader(dracoLoader);

    loader.load(modelName, function (load_model) {
        model = load_model.scene;

        //Putting the model in the center and scaling it
        var mroot = model;
        mroot.scale.set(0.3, 0.3, 0.3);
        var bbox = new THREE.Box3().setFromObject(mroot);
        var cent = bbox.getCenter(new THREE.Vector3());
        var size = bbox.getSize(new THREE.Vector3());
        const INITIAL_MTL = new THREE.MeshPhongMaterial({
            color: 0x03fc4a
        });

        if (modelName.includes("gfp")) {
            initColor(model, "GFP", INITIAL_MTL);
        }

        //Rescale the object to normalized space
        var maxAxis = Math.max(size.x, size.y, size.z);
        mroot.scale.multiplyScalar(1.0 / maxAxis);
        bbox.setFromObject(mroot);
        bbox.getCenter(cent);
        bbox.getSize(size);
        //Reposition to 0,halfY,0
        mroot.position.copy(cent).multiplyScalar(-1);
        mroot.position.y -= (size.y * 0.5);
        mroot.position.z += z_pos;
        mroot.position.y += y_pos;
        mroot.position.x += x_pos;
        mroot.rotation.z += z_rot;
        mroot.rotation.y += y_rot;
        mroot.rotation.x += x_rot;
        models.add(mroot);
        if (animated) {
            mixer = new THREE.AnimationMixer(model);
            for (var i = 0; i < load_model.animations.length; i++) {
                var action = mixer.clipAction(load_model.animations[i]);
                if (looponce) {
                    action.setLoop(THREE.LoopOnce);
                    action.clampWhenFinished = true;
                }
                action.play();
            }
        }
    }, function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }, function (error) {
        console.log('An error happened');
    });
    scene.add(models);
}

function setControls() {
    //camera controls
    if (control_type == "orbit") {
        console.log("orbit");
        var controls = new THREE.OrbitControls(camera, renderer.domElement);
    } else {
        return;
    }

}
//Called when clicking on the 3d model => info div pops up
function onClick() {

    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        selectedObject = intersects[0].object;
        showInfo();

    }
}

function showInfo() {
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

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    positionInfoDiv();
    renderer.setSize(window.innerWidth, window.innerHeight);

}
//Custom image file name 
function defaultFileName(ext) {
    const str = `${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}${ext}`;
    var name = str.replace(/\//g, '-');
    return name;
}
//Saving the image <- needs fixing
function saveAsImage() {
    var imgData, imgNode;
    try {
        var strMime = "image/jpeg";
        imgData = renderer.domElement.toDataURL(strMime);
        saveFile(imgData.replace(strMime, strDownloadMime), defaultFileName(".jpg"));
    } catch (e) {
        console.log(e);
        return;
    }
}
//Capturing the image
var saveFile = function (strData, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        document.body.appendChild(link); //Firefox requires the link to be in the body
        link.download = filename;
        link.href = strData;
        setTimeout(function () {
            link.click();
            document.body.removeChild(link); //remove the link when done
        }, 500);
    } else {
        location.replace(uri);
    }
}
//important
function animateN() {
    requestAnimationFrame(animateN);
    update();
    renderer.render(scene, camera);
}

function animateAN() {
    requestAnimationFrame(animateAN);
    var delta = clock.getDelta();
    if (mixer != null) {
        mixer.update(delta);
    };
    renderer.render(scene, camera);
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

function buildColors(colors) {
    for (let [i, color] of colors.entries()) {
        let swatch = document.createElement('div');
        swatch.classList.add('tray__swatch');

        swatch.style.background = "#" + color.color;

        swatch.setAttribute('data-key', i);
        TRAY.append(swatch);
    }
}

function selectSwatch(e) {
    let color = colors[parseInt(e.target.dataset.key)];
    let new_mtl;

    new_mtl = new THREE.MeshPhongMaterial({
        color: parseInt('0x' + color.color),
        shininess: color.shininess ? color.shininess : 10

    });

    console.log("click");
    setMaterial(models, 'GFP', new_mtl);
}

function setMaterial(parent, type, mtl) {
    parent.traverse((o) => {
        if (o.isMesh && o.nameID != null) {
            if (o.nameID == type) {
                o.material = mtl;
            }
        }
    });
}
export function bacteriophage() {
    header = "Bakteriofagas";
    paragraph = "tekstas tekstas";

    models = new THREE.Object3D();
    modelName = "./models/bacteriophage.glb";

    animated = true;
    control_type = "orbit";
    x_pos = 0.05;
    y_pos = 3;
    z_pos = 0.5;
    x_rot = 0;
    y_rot = -1.6;
    z_rot = 0;
    looponce = true;
    init();
    animateAN();
}
export function coronavirus() {
    header = "COVID-19";
    paragraph = "Koronavirusai yra virusai, kurie cirkuliuoja tarp gyvūnų, tačiau žinoma, kad kai kurie iš jų sukelia infekcijas žmonėms. Sukėlę infekciją žmonėms, jie toliau gali būti perduoti nuo žmogaus žmogui. Koronavirusų infekcijos šaltinis gali būti daugybė gyvūnų. Pavyzdžiui, Artimųjų Rytų respiracinio sindromo koronaviruso (MERS-CoV) šaltinis buvo kupranugariai, o sunkaus ūmaus respiracinio sindromo (SŪRS) - civetės katės.";

    models = new THREE.Object3D();
    modelName = "./models/coronavirus.glb";

    animated = false;
    control_type = "orbit";
    x_pos = 0;
    y_pos = 0;
    z_pos = 0;
    x_rot = 0;
    y_rot = 0;
    z_rot = 0;

    init();
    animateN();
}
export function dna() {
    header = "DNR";
    paragraph = "tekstas tekstas";

    models = new THREE.Object3D();
    modelName = "./models/DNA.glb";

    animated = true;
    control_type = "orbit";
    x_pos = 0;
    y_pos = 0.35;
    z_pos = 1;
    x_rot = 0;
    y_rot = 4.7;
    z_rot = 0;
    init();
    animateAN();
}
export function crispr() {
    header = "Crispr - Cas9";
    paragraph = "tekstas tekstas";

    models = new THREE.Object3D();
    modelName = "./models/crisprcas9.glb";

    animated = true;
    control_type = "orbit";
    x_pos = -0.2;
    y_pos = 0.1;
    z_pos = 1.79;
    x_rot = 0.3;
    y_rot = -1.85;
    z_rot = 0.5;
    init();
    animateAN();
}
export function lego() {
    header = "Bio Brick";
    paragraph = "tekstas tekstas";

    models = new THREE.Object3D();
    modelName = "./models/lego.glb";

    animated = true;
    control_type = "orbit";
    looponce = true;
    x_pos = -0.05;
    y_pos = 0.4;
    z_pos = 1.2;
    x_rot = 0;
    y_rot = -1.6;
    z_rot = 0;
    init();
    animateAN();
}
export function gfp() {
    buildColors(colors);
    const swatches = document.querySelectorAll(".tray__swatch");

    for (const swatch of swatches) {
        swatch.addEventListener('click', selectSwatch);
    }

    header = "GFP";
    paragraph = "tekstas tekstas";

    models = new THREE.Object3D();
    modelName = "./models/gfp.glb";

    animated = true;
    control_type = "orbit";
    x_pos = 0;
    y_pos = 0.5;
    z_pos = 0.5;
    x_rot = 0;
    y_rot = 0;
    z_rot = 0;
    init();
    animateAN();
}
export function sequencing() {
    header = "Sekvenavimas";
    paragraph = "tekstas tekstas";

    models = new THREE.Object3D();
    modelName = "./models/sekoskaita.glb";

    animated = true;
    control_type = "orbit";
    x_pos = -0.1;
    y_pos = 0.2;
    z_pos = 1.2;
    x_rot = 0;
    y_rot = -1.55;
    z_rot = 0;
    init();
    animateAN();
}
